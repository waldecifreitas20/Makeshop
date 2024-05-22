import { routes } from "../routes/routes";

export function BackHomeButton() {
  return <>
    <header>
      <div>
        <i className="fa-solid fa-chevron-left mr-2"></i>
        <a href={routes.home}>Voltar à Home</a>
      </div>
    </header>
  </>
}