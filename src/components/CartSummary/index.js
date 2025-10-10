// Write your code here
import CartContext from '../../context/CartContext'
import './index.css'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      let total = 0
      cartList.forEach(eachCartItem => {
        total += eachCartItem.price * eachCartItem.quantity
      })

      return (
        <>
          <div className="cart-summary-container">
            <div className="order-total-view">
              <h1>
                <span className="order-total-label">Order Total:</span> Rs
                {total}
              </h1>
              <p>{cartList.length} Items in cart</p>
              <button className="Checkout-btn d-sm-none" type="button">
                Checkout
              </button>
            </div>
            <button className="Checkout-btn d-lg-none" type="button">
              Checkout
            </button>
          </div>
        </>
      )
    }}
  </CartContext.Consumer>
)
export default CartSummary
