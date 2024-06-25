import { Navbar } from "../../components/Navbar";
import { appColors } from "../../global/colors";

export function ProductDetailsPage() {

  return (
    <>
      <Navbar />

      <main>

        <div>
          <img src="" alt="produto" />


          <h2>Fabricante</h2>
          <p>Descrição</p>


          <div className="mt-4 md:m-0">
            {/* Old price */}
            <p className={`text-sm${appColors.texts.dimmed} text-line-through`}>{(() => {
              let oldPrice: number = 100 * 1.25;
              return <>{`R$ ${oldPrice.toFixed(2)}`}</>;
            })()}</p>

            {/* Current Price */}
            <p className={`text-lg font-bold`
            }>{`R$ 100,00`}</p>

            {/* With credit card */}
            <p className={`text-sm`}>{`ou 10x de R$ ${(100 / 10).toFixed(2)}`}</p>
          </div>

        </div>

      </main>
    </>
  );
}