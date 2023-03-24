import products from "../../assets/products.json"
import ProductCard from "../../components/ProductCard/ProductCard"
import { Main } from "../Products/ProductsScreen.Styled"


function ProductsScreen(props) {

    const {
        addToCart,
        filterText,
        order,
        minPrice,
        maxPrice,
        sortingParameter,
    } = props

    return (
        <Main>
            <section>
                <h1>Produtos</h1>
                <hr />
                {products
                    .filter((product) => product.name.toLowerCase().includes(filterText.toLowerCase()))
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
                            addToCart={addToCart}
                            key={product.id}
                            isOnProductsScreen={true}
                        />
                    ))
                }
            </section>
        </Main>
    )
}

export default ProductsScreen
