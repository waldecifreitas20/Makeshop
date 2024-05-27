import { BackHomeButton } from "../../components/BackHomeButton";
import { InputBlock } from "../../components/InputBlock";;
import { ResponsibleButton } from "../../components/ResponsibleButton";
import { Row } from "./components/Row";
import { singUpMethods } from "./signUp.methods";


export function SingUpPage() {

  const onSubmit = async (event: React.MouseEvent) => {
    singUpMethods.singUp();
    event.preventDefault();
  }

  return <>
    <div className="px-8 py-10">
      <div className="mb-5">
        <BackHomeButton />
      </div>

      <form method="GET" action="/">
        <fieldset>
          <InputBlock label="Nome Completo" placeholder="Ex:José Ribamar da Silva" />
          <Row style="md:flex md:justify-between">
            <InputBlock label="CPF" placeholder="xxx.xxx.xxx-xx" />
            <InputBlock label="Data de Nascimento" placeholder="dd/mm/aa" type="date" />
          </Row>
        </fieldset>

        <fieldset className="my-8">
          <InputBlock label="CEP" placeholder="00000-000" />
          <Row style="md:flex">
            <InputBlock label="Estado" placeholder="00000-000" />
          </Row>
          <InputBlock label="Endereço" placeholder="Rua Castro 475 B" />
        </fieldset>

        <fieldset>
          <InputBlock label="Email" placeholder="joseribamar23@outlook.com" type="email" />
          <InputBlock label="Senha" placeholder="Minímo 8 caracteres" type="password" />

          <ul className="mx-2">
            <li className="text-green-500"><span>X</span> Contém simbolo</li>
            <li className="text-green-500"><span>X</span> Contém letras maiúsculas</li>
            <li className="text-red-500"><span>X</span> Contém letras minúsculas</li>
            <li className="text-red-500"><span>X</span> Contém no mínimo 8 caracteres</li>
          </ul>
        </fieldset>
        
        <ResponsibleButton style="lg:w-[400px]" type="submit" onClick={onSubmit}>Cadastrar</ResponsibleButton>
      </form>
    </div>
  </>;
}