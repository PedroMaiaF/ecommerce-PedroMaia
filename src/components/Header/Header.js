import { HeaderContainer } from "./Header.styled"
import productIcon from "../../assets/product.svg"
import cartIcon from "../../assets/cart.svg"
import homeIcon from "../../assets/home-button.svg"

function Header(props) {
    const {
        goToCartScreen,
        goToProductsScreen,
        itemsInCart,
        filterText,
        onChangeFilterText,
        order,
        setOrder,
        minPrice,
        setMinPrice,
        maxPrice,
        setMaxPrice,
        sortingParameter,
        setSortingParameter,
    } = props

    return (
        <HeaderContainer>
            <h1>
                Loja Sideral
            </h1>
            <div>
                <input
                    type="search"
                    placeholder="Escolha seu produto"
                    value={filterText}
                    onChange={onChangeFilterText}
                />
            </div>
            <div>
                <input
                type="number"
                    placeholder="Valor mínimo"
                    value={minPrice}
                    onChange={(e) => setMinPrice(e.target.value)}
                />
            
            </div>
            <div>
                <input
                   type="number"
                   placeholder="Valor máximo"
                   value={maxPrice}
                   onChange={(e) => setMaxPrice(e.target.value)}
                   />
            </div>

            <label for="sortingParameter" color="white">Ordenar por:</label>
            <select
                value={sortingParameter}
                onChange={(e) => setSortingParameter(e.target.value)}
            >
                <option value={"name"}>Nome</option>
                <option value={"price"}>Preço</option>
            </select>  
            <select
                value={order}
                onChange={(e) => setOrder(e.target.value)}
            >
                {/* <option value="">Ordenar</option> */}
                <option value="asc">Crescente</option>
                <option value="desc">Decrescente</option>
            </select>  

                          
            <div className="button-group">
                <button onClick={goToProductsScreen}>
                    <img src={productIcon} alt="Product icon" />
                </button>
                <button onClick={goToProductsScreen}>
                    <img src={homeIcon} alt="Home Icon" />
                </button>
                <button onClick={goToCartScreen} className="cart-btn">
                    <img src={cartIcon} alt="Cart icon" />
                    {
                        itemsInCart > 0
                        && <span className="cart-badge">{itemsInCart}</span>
                    }
                </button>
            </div>
        </HeaderContainer>
    )
}

export default Header
