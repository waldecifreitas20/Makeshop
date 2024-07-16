import { Navbar } from "../../components/Navbar";

export function NotFoundPage() {
  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <div className="flex h-full justify-center items-center">
        <div className="text-center">
          <img className="mx-auto" src="https://cdn.pixabay.com/photo/2017/02/12/21/29/false-2061132_640.png" width={150} alt="" />
          <h2 className="text-4xl md:text-6xl font-bold tracking-tightest">Erro 404 - Not Found</h2>
          <p className="text-xl mb-8">A página que você procura não existe</p>
          <a className="block max-w-[300px] mx-auto mt-10 text-white bg-pink-500 hover:bg-pink-600 border-black px-3 py-2 rounded-full" href="/">Ir para Home</a>
        </div>
      </div>
    </div>
  );

}