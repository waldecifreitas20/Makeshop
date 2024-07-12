import { Navbar } from "../../components/Navbar";
import { ResponsibleButton } from "../../components/ResponsibleButton";
import { ResponsibleSelect } from "../../components/ResponsibleSelect";
import { ResponsibleInput } from "../../components/ResponsibleInput";
import { Row } from "../../components/Row";

export function PurchasePage() {
  return (
    <>
      <Navbar />

      <main className="px-5">
        <h2 className="text-2xl">Finalize sua compra</h2>

        <form id="purchase-form" className="mt-3">

          <fieldset className="my-3">
            <label htmlFor="cep" className="text-sm">Digite seu CEP</label>
            <ResponsibleInput id="cep" type="number" placeholder="Somente números" style="border-neutral-200" />
            <ResponsibleButton>Calcular Frete</ResponsibleButton>
          </fieldset>

          <fieldset>
            <ResponsibleSelect style="bg-white">
              <option>--- Selecione um método ---</option>
              <option>Pix</option>
            </ResponsibleSelect>
          </fieldset>

        </form>


        <article className="
        mt-10 mb-5
        bg-white 
        border  
        rounded-lg 
        py-4 px-2
        min-h-40
        ">
          <Row style="w-full">
            <p>Lancome x1</p>
            <p>R$ 199,97</p>
          </Row>
        </article>

        <ResponsibleButton background="bg-pink-500 hover:bg-pink-600">Finalizar Compra</ResponsibleButton>
      </main>
    </>
  );
}