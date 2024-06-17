import { Pill } from "./Pill";
import { Section } from "./Section";

export function Newsletter() {
  return <>
    <Section
      key={"newsletter"}
      title="Fique por dentro das novidades"
      description="Cadastre seu email e fique por dentro de promoções elançamentos em primeira mão"
      style="
        bg-gradient-to-br from-zinc-950 to-zinc-700 
        text-zinc-200 text-opacity-95 text-sm
        py-6 px-5
        mt-8

        lg:p-10
        lg:px-[100px]
        lg:text-lg
        "
    >
      <div className="lg:flex lg:items-center lg:h-12 lg:mt-10 lg:gap-5">
        <input
          type="email"
          placeholder="Digite seu email"
          className="
            w-full border-0 rounded-full px-5 py-2 mt-4 mb-3 text-black text-lg
            lg:h-full
            lg:py-0
            "
        />

        <Pill
          text="Cadastrar"
          style="
            border-0
            bg-zinc-600
            text-lg
            text-center 
            w-48 
            py-3
            ml-auto
            hover:bg-zinc-800
            transition-all
            duration-300

            lg:h-full
            lg:w-72
            lg:my-0
            lg:text-lg
                        "
        />
      </div>
    </Section>
  </>
}