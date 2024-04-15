import { Carousel } from "./components/Carousel"
import { Navbar } from "./components/Navbar"

export function App() {
  const carouselItems = [
    <img src="../../public/images/banner1.png" alt="" />,
    <img src="../../public/images/product2.png" alt="" />,
    <img src="../../public/images/product1.png" alt="" />,
    <img src="../../public/images/product3.png" alt="" />,
  ];

  return (
    <>
      <Navbar />
      <Carousel itemWidth={350} items={carouselItems} itemsCount={carouselItems.length}/>
      <Carousel itemWidth={350} items={carouselItems} itemsCount={carouselItems.length}/>
    </>
  )
}

export default App
