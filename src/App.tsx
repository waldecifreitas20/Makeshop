import { Navbar } from "./components/Navbar"

export function App() {
  const SHORTCUTS_OPTIONS = [
    <a className="border border-gray-200 bg-white rounded-full mx-1 px-3 py-1 text-sm text-nowrap" href="">Maquiagem</a>,
    <a className="border border-gray-200 bg-white rounded-full mx-1 px-3 py-1 text-sm text-nowrap" href="">Perfumes</a>,
    <a className="border border-gray-200 bg-white rounded-full mx-1 px-3 py-1 text-sm text-nowrap" href="">Cabelos</a>,
    <a className="border border-gray-200 bg-white rounded-full mx-1 px-3 py-1 text-sm text-nowrap" href="">Promoçao</a>,
    <a className="border border-gray-200 bg-white rounded-full mx-1 px-3 py-1 text-sm text-nowrap" href="">Frete Grátis</a>,
  ];


  let x: number = 0;
  let slideX = 50;

  function prev(event: any) {
    const slider = document.getElementById("slider") as HTMLElement;

    if (x - slideX > 0 - slideX) {

      x -= slideX;
      slider.style.left = `-${x}px`;
    }
  }


  function next(event: any) {
    const container = document.getElementById("container") as HTMLElement;
    const slider = document.getElementById("slider") as HTMLElement;

    let overflow = slider.offsetWidth - container.offsetWidth;

    if (x + slideX <= overflow + slideX) {

      x += slideX;
      slider.style.left = `-${x}px`;
    }
  }


  return (
    <>
      <Navbar />
      <div className="flex w-[90%] mx-auto mt-2">

        <button onClick={prev}>voltar</button>

        <div id="container" className="relative overflow-hidden w-full flex items-center mx-2">
          <div id="slider" className="flex relative flex-nowrap p-0 ">
            {SHORTCUTS_OPTIONS.map((option, i) => {
              return <>
                {option}
              </>;
            })}
          </div>
        </div>

        <button onClick={next} >prox</button>

      </div>
    </>
  );
}

export default App
