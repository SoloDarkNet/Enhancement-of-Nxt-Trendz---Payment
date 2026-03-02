// Write your code here
import {useState, useContext} from 'react'
import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'
import CartContext from '../../context/CartContext'

import './index.css'

const CartSummary = () => {
  const {cartList} = useContext(CartContext)

  const total = cartList.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  )

  const [paymentMethod, setPaymentMethod] = useState('')
  const [orderPlaced, setOrderPlaced] = useState(false)

  const isConfirmDisabled = paymentMethod !== 'COD'
  return (
    <>
      <div className="cart-summary-container">
        <div className="order-total-view">
          <h1>
            <span className="order-total-label">Order Total:</span> Rs
            {total}
          </h1>
          <p>{cartList.length} Items in cart</p>
          <Popup
            trigger={() => (
              <button className="button" type="button">
                Checkout
              </button>
            )}
            position="top left"
            closeOnDocumentClick
          >
            {close => (
              <div className="payment-popup">
                {!orderPlaced ? (
                  <>
                    <h2>Payment Method</h2>
                    <div>
                      <label>
                        <input
                          type="radio"
                          value="CARD"
                          name="payment"
                          onChange={e => setPaymentMethod(e.target.value)}
                        />
                        Card
                      </label>

                      <label>
                        <input
                          type="radio"
                          value="NET"
                          name="payment"
                          onChange={e => setPaymentMethod(e.target.value)}
                          disabled
                        />
                        Net Banking
                      </label>
                      <label>
                        <input
                          type="radio"
                          value="UPI"
                          name="payment"
                          onChange={e => setPaymentMethod(e.target.value)}
                        />
                        UPI
                      </label>
                      <label>
                        <input
                          type="radio"
                          value="WALLET"
                          name="payment"
                          onChange={e => setPaymentMethod(e.target.value)}
                        />
                        Wallet
                      </label>
                      <label>
                        <input
                          type="radio"
                          value="COD"
                          name="payment"
                          onChange={e => setPaymentMethod(e.target.value)}
                        />
                        Cash on Delivery
                      </label>
                    </div>
                    <hr />
                    <p>
                      Items: <b>{cartList.length}</b>
                    </p>
                    <p>
                      Total Amount:<b>Rs {total}</b>
                    </p>
                    <button
                      type="button"
                      disabled={isConfirmDisabled}
                      onClick={() => setOrderPlaced(true)}
                    >
                      Confirm Order
                    </button>
                    <button onClick={close} type="button">
                      Close
                    </button>
                  </>
                ) : (
                  <>
                    <h3>Your order has been placed successfully</h3>
                    <button type="button" onClick={close}>
                      Close
                    </button>
                  </>
                )}
              </div>
            )}
          </Popup>
        </div>
      </div>
    </>
  )
}

export default CartSummary
