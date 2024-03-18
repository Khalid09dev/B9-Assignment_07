import './App.css'
import Banner from './Components/Banner/Banner'
import CartTitle from './Components/CartTitle/CartTitle'
import Navbar from './Components/Navbar/Navbar'
import RecipiesCart from './Components/RecipiesCart/RecipiesCart'
import CookingStatus from './Components/CookingStatus/CookingStatus'


function App() {

  return (
    <>
      <header>
        <Navbar></Navbar>
        <Banner></Banner>
        <CartTitle></CartTitle>
      </header>

      <main className='flex justify-center gap-6'>
        <RecipiesCart></RecipiesCart>
        <CookingStatus></CookingStatus>
      </main>

      <footer>

      </footer>
    </>
  )
}

export default App
