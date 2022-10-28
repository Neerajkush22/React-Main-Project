import React from 'react'
import './Payment.css'

const Payment = ( { cartItem } ) => {
    const totalPrice = cartItem.reduce((price,item) => price + item.qty * item.price, 0)
    return (
        <>
            <div className="container">
                <div className="cart-total product">
                    <h2>Cart Summary</h2>
                    <div className="d_flex">
                        <h4>Total Price : </h4>
                        <h3>₹{totalPrice}.00</h3>
                        <p class="course">
                            Buy DSA Self-Paced Course Now !
                        </p>
                    </div>
                </div>
                <div class="last-content">
                    <button type="button" class="pay-now-btn">
                        Apply Coupons
                    </button>
                    <button type="button" class="pay-now-btn">
                        Pay with Netbanking
                    </button>
                </div>

                <div class="card-details">
                    <p>Pay using Credit or Debit card</p>

                    <div class="card-number">
                        <label> Card Number </label>
                        <input
                            type="text1"
                            class="card-number-field"
                            placeholder="###-###-###" />
                    </div>
                    <br />
                    <div class="date-number">
                        <label> Expiry Date </label>
                        <input type="text1" class="date-number-field"
                            placeholder="DD-MM-YY" />
                    </div>

                    <div class="cvv-number">
                        <label> CVV number </label>
                        <input type="text" class="cvv-number-field"
                            placeholder="xxx" />
                    </div>
                    <div class="nameholder-number">
                        <label> Card Holder name </label>
                        <input
                            type="text"
                            class="card-name-field"
                            placeholder="Enter your Name" />
                    </div>
                    <button type="submit"
                        class="submit-now-btn">
                        submit
                    </button>
                </div>
            </div>
        </>
    )
}

export default Payment