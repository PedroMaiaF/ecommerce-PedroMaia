import { priceFormatter } from "../../utils/priceFormatter"
import { ProductCardContainer, ProductPhoto, ProductName } from "./ProductCard.styled"
  
function ProductCard(props) {
    const {
        product,
        addToCart,
        isOnProductsScreen,
        isOnCartScreen,
        increaseQuantityInCart,
        decreaseQuantityInCart,
        deleteFromCart
    } = props

    return (
        <ProductCardContainer>
            <ProductPhoto src={product.imageUrl} alt={product.imageAlt} />

            <div>
                <div className="card-header">
                    <ProductName>{product.name}</ProductName>
                   
                </div>
                <div className="card-price-and-cart-action">
                    <span>{priceFormatter.format(product.price)}</span>
                    {
                        isOnCartScreen && product.quantity > 1
                        && <button
                                onClick={() => decreaseQuantityInCart(product)}
                        >
                            -
                        </button> 
                    }
                    {
                        isOnCartScreen
                        && <button
                            onClick={() => increaseQuantityInCart(product)}
                        >
                            +
                        </button> 
                    }

                    {
                        isOnProductsScreen
                        && <button onClick={() => addToCart(product)}>+ Add to cart</button>
                    }
                    {
                        isOnCartScreen
                        && <span>Qtd: {product.quantity}</span>
                    }
                    {
                        isOnCartScreen
                        && <button
                            className="cart-card-delete-btn"
                            onClick={() => deleteFromCart(product)}
                        >
                            x
                        </button>
                    }
                </div>
            </div>
        </ProductCardContainer>
    )
}

export default ProductCard