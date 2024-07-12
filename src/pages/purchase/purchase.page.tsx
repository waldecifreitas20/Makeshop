import { Navbar } from "../../components/Navbar";
import { ResponsibleButton } from "../../components/ResponsibleButton";
import { ResponsibleSelect } from "../../components/ResponsibleSelect";
import { ResponsibleInput } from "../../components/ResponsibleInput";
import { Tile } from "../../components/Tile";
import { Row } from "../../components/Row";

export function PurchasePage() {
  return (
    <>
      <Navbar />

      <main>
        <h2>Finalize sua compra</h2>

        <form id="purchase-form">

          <fieldset>
            <ResponsibleInput type="number" placeholder="Somente números" />
            <ResponsibleButton>Calcular</ResponsibleButton>
          </fieldset>

          <fieldset>
            <ResponsibleSelect>
              <option>--- Selecione um método ---</option>
              <option>Pix</option>
            </ResponsibleSelect>
          </fieldset>

        </form>


        <article>
          <Row style="w-full">
            <p>Lancome x1</p>
            <p>R$ 199,97</p>
          </Row>
        </article>

        <ResponsibleButton>Finalizar Compra</ResponsibleButton>
      </main>
    </>
  );
}