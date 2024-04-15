import { Carousel } from "./components/Carousel"
import { Navbar } from "./components/Navbar"

export function App() {
  
  return (
    <>
      <Navbar />
      <Carousel itemWidth={300}/>
    </>
  )
}

export default App
