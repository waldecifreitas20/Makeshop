export function Footer() {
    return <>
        <footer className="px-5 py-6">
            <div>
                <h4 className="text-xl mb-3 font-medium">Ajuda</h4>
                <ul>
                    <li><a className="capitalize" href="">atendimento ao cliente</a></li>
                    <li><a className="capitalize" href="">trocas e devoluções</a></li>
                    <li><a className="capitalize" href="">perguntas frequentes</a></li>
                </ul>
            </div>

            <div className="my-7">
                <h4 className="text-xl mb-3 font-medium">Institucional</h4>
                <ul>
                    <li><a className="capitalize" href="">atendimento ao cliente</a></li>
                    <li><a className="capitalize" href="">trocas e devoluções</a></li>
                    <li><a className="capitalize" href="">perguntas frequentes</a></li>
                </ul>
            </div>
            <div className="my-7">
                <h4 className="text-xl mb-3 font-medium">Redes Sociais</h4>
                <ul className="flex justify-between max-w-80">
                    <li><a className="h-8 block" href="">
                        <img className="block h-full" src="assets/images/logo-fb.png" alt="" />
                    </a></li>

                    <li><a className="h-8 block" href="">
                        <img className="block h-full" src="assets/images/logo-insta.png" alt="" />
                    </a></li>

                    <li><a className="h-8 block" href="">
                        <img className="block h-full" src="./assets/images/logo-ttk.png" alt="" />
                    </a></li>

                    <li><a className="h-8 block" href="">
                        <img className="block h-full" src="./assets/images/logo-x.png" alt="" />
                    </a></li>

                    <li><a className="h-8 block" href="">
                        <img className="block h-full" src="./assets/images/logo-yt.png" alt="" />
                    </a></li>
                </ul>
            </div>

            <div className="my-7">
                <h4 className="text-xl mb-3 font-medium">Formas de Pagamento</h4>
                <ul className="flex flex-wrap justify-left gap-4">

                    <li className=""><a className="h-8 block" href="">
                        <img className="block h-full" src="../public/assets/images/pg-mastercard.png" alt="" />
                    </a></li>

                    <li className=""><a className="h-8 block" href="">
                        <img className="block h-full" src="../public/assets/images/pg-visa.png" alt="" />
                    </a></li>

                    <li className=""><a className="h-8 block" href="">
                        <img className="block h-full" src="../public/assets/images/pg-amex.png" alt="" />
                    </a></li>

                    <li className=""><a className="h-8 block" href="">
                        <img className="block h-full" src="../public/assets/images/pg-elo.png" alt="" />
                    </a></li>

                    <li className=""><a className="h-8 block" href="">
                        <img className="block h-full" src="../public/assets/images/pg-pix.png" alt="" />
                    </a></li>

                    <li className=""><a className="h-8 block" href="">
                        <img className="block h-full" src="../public/assets/images/pg-paypal.png" alt="" />
                    </a></li>

                    <li className=""><a className="h-8 block" href="">
                        <img className="block h-full" src="../public/assets/images/pg-mpago.png" alt="" />
                    </a></li>

                </ul>
            </div>
        </footer>
    </>
}