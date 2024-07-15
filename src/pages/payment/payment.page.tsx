import { useEffect, useState } from "react";
import { Navbar } from "../../components/Navbar";
import { paymentServices } from "../../services/payment.services";
import { ResponsibleButton } from "../../components/ResponsibleButton";

export function PaymentPage() {
  const [qrCodeUrl, setQrCodeUrl] = useState("");

  useEffect(() => {
    paymentServices.generateQRCode().then((url) => {
      setQrCodeUrl(url);
    });
  });

  return (
    <>
      <Navbar />
      <main>
        <h2>Quase lá</h2>
        <section>
          <h3>Escaneie o QR Code</h3>
          <img src={qrCodeUrl} alt="" />

          <p>ou copie o codigo e cole no app do seu banco</p>
          <ResponsibleButton>Copiar codigo</ResponsibleButton>
        </section>
      </main>

      <footer>
        <ResponsibleButton>Voltar às compras</ResponsibleButton>
      </footer>
    </>
  );
}