import { BackHomeButton } from "../../components/BackHomeButton";
import { InputBlock } from "../../components/InputBlock";
import { Row } from "./components/Row";


export function SingUpPage() {
  return <>
    <div className="px-8 pt-10">
      <BackHomeButton />

      <form method="GET" action="localhost:5173/">
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

          <ul>
            <li><span></span>Contém simbolo</li>
            <li><span></span>Contém letras maiúsculas</li>
            <li><span></span>Contém letras minúsculas</li>
            <li><span></span>Contém no mínimo 8 caracteres</li>
          </ul>
        </fieldset>

        <button type="submit">Cadastrar</button>
      </form>
    </div>
  </>;
}