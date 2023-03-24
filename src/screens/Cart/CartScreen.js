import ProductCard from "../../components/ProductCard/ProductCard"
import { priceFormatter } from "../../utils/priceFormatter"
import { Main } from "./CartScreen.styled"

function CartScreen(props) {
    const {
        cart,
        filterText,
        increaseQuantityInCart,
        decreaseQuantityInCart,
        deleteFromCart,
        order,
        minPrice,
        maxPrice,
        sortingParameter,
    } = props

    const total = cart.reduce(
        (acc, product) => product.price * product.quantity + acc,
        0
    )

    return (
        <Main>
            <section>
                <h1>Cart | total = {priceFormatter.format(total)}</h1>
                <hr />
                {cart
                    .filter((product) => product.price >= minPrice || minPrice === "")
                    .filter((product) => product.price <= maxPrice || maxPrice === "")
                    .sort((currentProduct, nextProduct) => {
                        switch (sortingParameter) {
                            case "price":
                                return currentProduct.price - nextProduct.price
                            default:
                                return currentProduct.name.localeCompare(nextProduct.name)
                        }
                    })
                    .sort(() => (order === "asc") ? 1 : -1)
                    .map((product) => (
                        <ProductCard
                            product={product}
                            key={product.id}
                            isOnCartScreen={true}
                            increaseQuantityInCart={increaseQuantityInCart}
                            decreaseQuantityInCart={decreaseQuantityInCart}
                            deleteFromCart={deleteFromCart}
                        />
                    ))}
            </section>
        </Main>
    )
}

export default CartScreen
