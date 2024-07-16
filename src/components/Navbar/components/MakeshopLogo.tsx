import { routes } from "../../../routes/routes";

export function MakeshopLogo() {
  return (
    <a href={routes.home}
      className="
        text-3xl 
        font-title 
        tracking-tightest 
        text-gray-650 

        lg:text-4xl md:text-2xl"
    >Makeshop</a>
  );
}