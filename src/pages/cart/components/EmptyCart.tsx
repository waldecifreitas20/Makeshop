import { ResponsibleButton } from "../../../components/ResponsibleButton";
import { PageRouter } from "../../../routes/PageRouter";
import { routes } from "../../../routes/routes";

export function EmptyCartPageBody() {
  return (
    <>
      <div className="
        flex flex-col
        items-center
        justify-center
      
        h-full w-full max-w-[450px]
        mt-40 mx-auto
      ">
        <p className="text-neutral-500 text-center text-2xl mb-10">
          Você ainda não adicionou nenhum produto
        </p>

        <ResponsibleButton
          style="max-w-[300px]"
          onClick={() => PageRouter.goTo(routes.home)}
        >
          Voltar às compras
        </ResponsibleButton>
      </div>
    </>
  );
}