const STYLES = {
    section: "my-7",
    title: "text-xl mb-2 font-medium text-zinc-800",
    text: "text-zinc-500 hover:text-black",
    contact: "text-3xl transition-all duration-300",
    socials: `block 
    shadow-none 
    rounded-full 
    border-2 border-transparent 
    hover:border-zinc-200 
    transition-all duration-300 
    p-3`,
}

export function Footer() {
    return <>
        <footer className="px-5 py-6 ">
            <section className={STYLES.section}>
                <h4 className={STYLES.title}>Ajuda</h4>
                <ul>
                    <li className={STYLES.text} ><a className="capitalize" href="">atendimento ao cliente</a></li>
                    <li className={STYLES.text} ><a className="capitalize" href="">trocas & devoluções</a></li>
                    <li className={STYLES.text} ><a className="capitalize" href="">perguntas frequentes</a></li>
                </ul>
            </section>

            <section className={STYLES.section}>
                <h4 className={STYLES.title}>Institucional</h4>
                <ul className={STYLES.text}>
                    <li className={STYLES.text}><a className="capitalize" href="">sobre a makeshop</a></li>
                    <li className={STYLES.text}><a className="capitalize" href="">avisos de privacidade</a></li>
                    <li className={STYLES.text}><a className="capitalize" href="">nossas lojas</a></li>
                </ul>
            </section>

            <section className={STYLES.section}>
                <h4 className={STYLES.title}>Redes Sociais</h4>
                <ul className="flex justify-between max-w-80 gap-2">
                    <li><a className={STYLES.socials} href="">
                        <img className="block h-full" src="images/logo-fb.png" alt="" />
                    </a></li>

                    <li><a className={STYLES.socials} href="">
                        <img className="block h-full" src="images/logo-insta.png" alt="" />
                    </a></li>

                    <li><a className={STYLES.socials} href="">
                        <img className="block h-full" src="./images/logo-ttk.png" alt="" />
                    </a></li>

                    <li><a className={STYLES.socials} href="">
                        <img className="block h-full" src="./images/logo-x.png" alt="" />
                    </a></li>

                    <li><a className={STYLES.socials} href="">
                        <img className="block h-full" src="./images/logo-yt.png" alt="" />
                    </a></li>
                </ul>
            </section>

            <section className={STYLES.section}>
                <h4 className={STYLES.title}>Formas de Pagamento</h4>
                <ul className="flex flex-wrap justify-left gap-4">

                    <li className="h-8 block">
                        <img className="block h-full" src="images/pg-mastercard.png" alt="" />
                    </li>

                    <li className="h-8 block">
                        <img className="block h-full" src="images/pg-visa.png" alt="" />
                    </li>

                    <li className="h-8 block">
                        <img className="block h-full" src="images/pg-amex.png" alt="" />
                    </li>

                    <li className="h-8 block">
                        <img className="block h-full" src="images/pg-elo.png" alt="" />
                    </li>

                    <li className="h-8 block">
                        <img className="block h-full" src="images/pg-pix.png" alt="" />
                    </li>

                    <li className="h-8 block">
                        <img className="block h-full" src="images/pg-paypal.png" alt="" />
                    </li>

                    <li className="h-8 block">
                        <img className="block h-full" src="images/pg-mpago.png" alt="" />
                    </li>

                </ul>
            </section>

            <section className="mt-24 text-center text-zinc-500">
                <p className="italic">
                    Site desenvolvido por <a className="font-semibold underline text-zinc-600 hover:text-indigo-400 transition-all duration-300" href="https://waldeci-freitas.fly.dev/">Waldeci Freitas</a>
                </p>
                <div className="flex gap-4 justify-center">

                    <a href="https://www.linkedin.com/in/waldeci-freitas21">
                        <i className={`fa-brands fa-linkedin hover:text-blue-600 ${STYLES.contact}`}></i>
                    </a>

                    <a className={STYLES.contact} href="https://github.com/waldecifreitas20">
                        <i className={`fa-brands fa-github  hover:text-purple-700 ${STYLES.contact}`}></i>
                    </a>


                </div>
            </section>
        </footer>
    </>
}