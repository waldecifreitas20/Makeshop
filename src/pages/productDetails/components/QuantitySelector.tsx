import { useState } from "react";

export function ProductQtdSelector() {
  const [qtd, setQtd] = useState(0);

  function increment() {
    setQtd(qtd + 1);
  }

  function decrement() {
    if (qtd > 0) {
      setQtd(qtd - 1);
    }
  }

  const buttonSyle = `
    bg-black
    text-white
    rounded-md
    size-6
    text-2xl
    flex items-center justify-center
    m-0
    `;

  return (
    <>
      <div className="flex items-center">
        <span>Quantidade:</span>
        <div className="ml-3 h-full flex items-center">
          <button className={buttonSyle} onClick={() => decrement()}>-</button>
          <input className="w-10 border-0 block text-lg rounded-lg mx-1 text-center" type="text" disabled value={qtd} />
          <button className={buttonSyle} onClick={() => increment()}>+</button>
        </div>
      </div>
    </>
  );
}