import { Navbar } from "../../components/Navbar";
import { ResponsibleButton } from "../../components/ResponsibleButton";
import { ResponsibleSelect } from "../../components/ResponsibleSelect";
import { ResponsibleInput } from "../../components/ResponsibleInput";
import { PurchaseList } from "./components/PurchaseList";
import { cartServices } from "../../services/cart.services";
import { useState } from "react";
import { Row } from "../../components/Row";

export function PurchasePage() {
  let [shippingCost, setShippingcost] = useState(0);

  function calculateShipping() {
    setShippingcost(25);
  }

  function getTotalCost() {
    return cartServices.getTotalCost() + shippingCost;
  }

  return (
    <>
      <Navbar />

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
                onChange={() => {
                  calculateShipping();
                }}
              />
              <ResponsibleButton
                disableAutoMargin
                style="md:max-w-[200px]"
              >
                Calcular Frete
              </ResponsibleButton>
            </Row>
          </fieldset>

          <fieldset className="lg:max-w-[50%]">
            <label htmlFor="payment-select">Selecione um método de pagamento</label>
            <ResponsibleSelect id="payment-select" style="bg-white">
              <option>Pix</option>
            </ResponsibleSelect>
          </fieldset>

        </form>

        <PurchaseList
          items={cartServices.getItems()}
          purchaseCost={getTotalCost()}
          shippingCost={shippingCost}
        />

        <ResponsibleButton
          background="bg-pink-500 hover:bg-pink-600"
          style="lg:max-w-[40%] ml-auto"
        >
          Finalizar Compra
        </ResponsibleButton>
      </main>
    </>
  );
}