import { Navbar } from "../../components/Navbar"

export function CartPage() {
  return (
    <>
      <Navbar />

      <div className="flex">
        <h2>Meu carrinho</h2>
        <button>Esvaziar carrinho</button>
      </div>
    </>
  );
}