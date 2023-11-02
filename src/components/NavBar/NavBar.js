import CartWidget from "../CartWidget/CartWidget"

const NavBar = () => {
   return (
    <nav>
        <h2>SerYoga</h2>
        <div>
            <button>Remeras</button>
            <button>Buzos</button>
            <button>Mats</button>
        </div>
        <CartWidget />
    </nav>
   )

}

export default NavBar

