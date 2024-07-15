import { useEffect, useState } from "react";
import { Navbar } from "../../components/Navbar";
import { paymentServices } from "../../services/payment.services";
import { ResponsibleButton } from "../../components/ResponsibleButton";
import { Toast } from "../../components/Toast";
import { toast } from "react-toastify";
import { PageRouter } from "../../routes/PageRouter";
import { routes } from "../../routes/routes";

export function PaymentPage() {
  const [qrCodeUrl, setQrCodeUrl] = useState("");

  useEffect(() => {
    paymentServices.generateQRCode().then((url) => {
      setQrCodeUrl(url);
    });
  }, []);

  return (
    <>
      <Navbar />

      <Toast />

      <main className="px-10 max-w-[500px] mx-auto">
        <h2 className="text-4xl">Quase lá!</h2>

        <section className="mt-7 text-center flex justify-start items-center flex-col">
          <h3 className="text-xl mb-4">Escaneie o QR Code</h3>
          <img className="block w-full max-w-[300px]" src={qrCodeUrl} alt="qr code" />

          <p>ou copie o codigo e cole no app do seu banco</p>

          <ResponsibleButton
            background="bg-green-300 hover:bg-green-500"
            textColor="text-black"
            onClick={() => {
              navigator.clipboard.writeText(qrCodeUrl);
              toast("código copiado!");
            }}>
            Copiar codigo
          </ResponsibleButton>

        </section>
      </main>

      <footer className="px-10 max-w-[500px] mx-auto">
        <ResponsibleButton
          background="bg-pink-400 hover:bg-pink-600"
          onClick={() => {
            PageRouter.goTo(routes.home);
          }}
        >Voltar às compras</ResponsibleButton>
      </footer>
    </>
  );
}