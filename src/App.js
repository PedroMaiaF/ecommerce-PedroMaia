import { useState, useEffect } from "react"
import Header from "./components/Header/Header"
import CartScreen from "./screens/Cart/CartScreen"
import ProductsScreen from "./screens/Products/ProductsScreen"

function App() {

    const [activeScreen, setActiveScreen] = useState("ProductsScreen")
    const [cart, setCart] = useState([])
    const [filterText, setFilterText] = useState("")
    const [order, setOrder] = useState("")
    const [sortingParameter, setSortingParameter] = useState("")
    const [minPrice, setMinPrice] = useState(-Infinity)
    const [maxPrice, setMaxPrice] = useState(Infinity)

    const goToProductsScreen = () => {setActiveScreen("ProductsScreen")}
    const goToCartScreen = () => {setActiveScreen("CartScreen")}

    const addToCart = (productToAdd) => {
        const newCart = [...cart]

        const productFound = newCart.find(
            (productInCart) => productInCart.id === productToAdd.id
        )

        if (!productFound) {
            const newProduct = { ...productToAdd, quantity: 1 }
            newCart.push(newProduct)
        } else {
            productFound.quantity++
        }
        const cartStringify = JSON.stringify(newCart)
        window.localStorage.setItem("compras", cartStringify)
        setCart(newCart)
    }

    const increaseQuantityInCart = (productToIncrease) => {
        const newCart = [...cart]

        const productFound = newCart.find(
            (productInCart) => productInCart.id === productToIncrease.id
        )

        productFound.quantity++

        setCart(newCart)
    }

    const decreaseQuantityInCart = (productToDecrease) => {
        const newCart = [...cart]

        const productFound = newCart.find(
            (productInCart) => productInCart.id === productToDecrease.id
        )

        productFound.quantity--

        setCart(newCart)
    }

    const deleteFromCart = (productToDelete) => {
        const newCart = [...cart]

        const indexFound = newCart.findIndex(
            (productInCart) => productInCart.id === productToDelete.id)
        newCart.splice(indexFound, 1)
        const cartStringify = JSON.stringify(newCart)
        window.localStorage.setItem("compras", cartStringify)
        setCart(newCart)
    }

    const saveCart = () => {
        if(window.localStorage.getItem("compras")) {
        const getCart = window.localStorage.getItem("compras")
        const arrayCart = JSON.parse(getCart)
        setCart(arrayCart)
        }
      }
      
      useEffect(() => {
        saveCart()
      }, [])


    const onChangeFilterText = (e) => {setFilterText(e.target.value)}

    const renderScreen = () => {
        switch (activeScreen) {
            case "ProductsScreen":
                return <ProductsScreen
                    addToCart={addToCart}
                    filterText={filterText}
                    order={order}
                    setOrder={setOrder}
                    sortingParameter={sortingParameter}
                    setSortingParameter={setSortingParameter}
                    minPrice={minPrice}
                    setMinPrice={setMinPrice}
                    maxPrice={maxPrice}
                    setMaxPrice={setMaxPrice}
                />
            case "CartScreen":
                return <CartScreen
                    cart={cart}
                    increaseQuantityInCart={increaseQuantityInCart}
                    decreaseQuantityInCart={decreaseQuantityInCart}
                    deleteFromCart={deleteFromCart}
                    order={order}
                    setOrder={setOrder}
                    sortingParameter={sortingParameter}
                    setSortingParameter={setSortingParameter}
                    minPrice={minPrice}
                    setMinPrice={setMinPrice}
                    maxPrice={maxPrice}
                    setMaxPrice={setMaxPrice}
                />
            default:
                return <div>Tela não existe</div>
        }
    }

    
    return (
        <>
            <Header
                goToProductsScreen={goToProductsScreen}
                goToCartScreen={goToCartScreen}
                itemsInCart={cart.length}
                filterText={filterText}
                onChangeFilterText={onChangeFilterText}
                order={order}
                setOrder={setOrder}
                sortingParameter={sortingParameter}
                setSortingParameter={setSortingParameter}
                minPrice={minPrice}
                setMinPrice={setMinPrice}
                maxPrice={maxPrice}
                setMaxPrice={setMaxPrice}
            />
            {renderScreen()}
        </>
    )
}

export default App
