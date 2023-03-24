import styled from "styled-components"

export const ProductCardContainer = styled.article`
display: flex;
flex-direction:column;
justify-content: center;
align-items: center;
padding: 16px;
min-width: 220px;
max-width: 300px;
min-height: 260px;
border-radius: 12px;
transition: all 1.5s;
border: 1px solid black;
marging: 8px;


    > div {
        padding: 8px;
    }

    .card-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .card-price-and-cart-action {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 8px;

        button {
            padding: 4px;
        }
    }

    .cart-card-delete-btn {
        position: relative;
        top: 0;
        right: 0;
        background-color: #ff5c5c;
        color: white;
    }
`

export const ProductPhoto = styled.img`
    max-width: 274.11px;
    height: 184.57px;
    background: #323232;
    border-radius: 4px;
    overflow: hidden;
`

export const ProductName = styled.span`
    display:flex;
    color:#323232;
    font-size: 16px;
    font-weight: 700;
    letter-spacing: 0em;
    padding-top: 8px;
    text-align: center;
    background-color: none;
`