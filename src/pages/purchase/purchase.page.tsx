import { useState } from "react";

import { toast } from "react-toastify";

import { Navbar } from "../../components/Navbar";
import { ResponsibleButton } from "../../components/ResponsibleButton";
import { ResponsibleSelect } from "../../components/ResponsibleSelect";
import { ResponsibleInput } from "../../components/ResponsibleInput";
import { PurchaseList } from "./components/PurchaseList";
import { cartServices } from "../../services/cart.services";
import { Row } from "../../components/Row";
import { Toast } from "../../components/Toast";
import { envs } from "../../global/dotenv";
import { PageRouter } from "../../routes/PageRouter";
import { routes } from "../../routes/routes";
import { paymentServices } from "../../services/payment.services";


export function PurchasePage() {
  let [shippingCost, setShippingcost] = useState(0);
  let [cep, setCep] = useState<undefined | number>();


  function calculateShipping() {
    const cartCost = cartServices.getTotalCost();
    const cost = cartCost * 0.12;
    setShippingcost(cost);
  }

  function isValidCep() {
    return cep != undefined && cep.toString().length === 8;
  }

  async function checkCep() {
    if (!isValidCep()) {
      toast("Digite um cep valido")
      return;
    }

    fetch(`${envs.API_CEP_URL}/${cep}`)
      .then(response => {
        if (response.status !== 200) {
          toast("O CEP informado não existe")
        } else {
          calculateShipping();
        }
      })
      .catch((err) => {
        console.error(err);
        toast("Verifique sua conexão com a internet")
      });
  }

  function getPurchaseCost() {
    return cartServices.getTotalCost() + shippingCost;
  }

  if (cartServices.getItems().length === 0) {
    PageRouter.goTo(routes.notfound);
  }

  return (
    <>
      <Navbar />

      <Toast />
      <main className="px-5 mt-4 sm:max-w-[750px] mx-auto">
        <h2 className="text-2xl">Finalize sua compra</h2>

        <form id="purchase-form" className="mt-5">

          <fieldset className="mb-4">
            <label htmlFor="cep" className="text-sm">Digite seu CEP</label>
            <Row style="flex-wrap">
              <ResponsibleInput
                id="cep"
                type="number"
                placeholder="Somente números"
                style="border-neutral-200 grow lg:max-w-[50%]"
                value={cep}
                onChange={(event) => {
                  const newCep = event.target.value;
                  if (newCep.toString().length <= 8) {
                    setCep(Number.parseInt(newCep))
                  }
                }}
              />
              <ResponsibleButton
                disableAutoMargin
                style="md:max-w-[200px]"
                onClick={(event) => {
                  event.preventDefault();
                  checkCep();
                }}
              >
                Calcular Frete
              </ResponsibleButton>
            </Row>
          </fieldset>

          <fieldset className="lg:max-w-[50%]">
            <label htmlFor="payment-select">Selecione um método de pagamento</label>
            <ResponsibleSelect id="payment-select" style="bg-white">
              <option className="h-52 block">Pix</option>
            </ResponsibleSelect>
          </fieldset>

        </form>

        <PurchaseList
          items={cartServices.getItems()}
          purchaseCost={getPurchaseCost()}
          shippingCost={shippingCost}
        />

        <ResponsibleButton
          background={`${shippingCost > 0 ? "bg-pink-500 hover:bg-pink-600" : "bg-pink-200"}`}
          style="lg:max-w-[40%] ml-auto"
          disabled={shippingCost === 0}
          onClick={() => {

            PageRouter.goTo(routes.payment);

          }}
        >
          Finalizar Compra
        </ResponsibleButton>
      </main>

    </>
  );
}