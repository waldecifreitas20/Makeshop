import { Carousel } from "./components/Carousel"
import { Navbar } from "./components/Navbar"

export function App() {
  const carouselItems = [
    <img src="../../public/images/banner1.png" alt="" />,
    <img src="../../public/images/product2.png" alt="" />,
    <img src="../../public/images/product1.png" alt="" />,
    <img src="../../public/images/product3.png" alt="" />,
  ];

  const carousel2 = [
    <li>a</li>,
    <li>b</li>,
    <li>a</li>,
    <li>a</li>,
  ]

  return (
    <>
      <Navbar />
      <Carousel itemWidth={350} items={carouselItems} itemsCount={carouselItems.length}/>
      <Carousel itemWidth={350} items={carousel2} itemsCount={carouselItems.length}/>
    </>
  )
}

export default App
