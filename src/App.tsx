import { HomePage } from "./pages/Home"
import { images } from "./assets"
import { PoweredBy } from "./components/poweredBy"

export const App = () => {
  return (
    <>
      <HomePage />
      <PoweredBy image={images.poweredByChombaBlack} />
    </>
  )
}