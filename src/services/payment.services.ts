interface PaymentPerson {
  name: string,
  bankId: number,
  bankName: string,
}
interface PaymentOptions {
  sender: PaymentPerson,
  receiver: PaymentPerson,
}
async function generateQRCode() {
  const date = Date.now();
  const message = `OBRIGADO POR USAR NOSSO APP! AINDA NÃO É POSSÍVEL REALIZAR UMA SIMULAÇÃO MAIS REALISTA DE PAGAMENTO, MAS CONTINUE ACOMPANHANDO ESTE PROJETO POIS EM BREVE ESTA FUNCIONALIDADE ESTARÁ DISPONÍVEL. DATA DA SUA SOLICITAÇÃO: ${date}. ID DA COMPRA: ${Math.random()}`;
  return `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${message}`;
}

export const paymentServices = {
  generateQRCode,
}