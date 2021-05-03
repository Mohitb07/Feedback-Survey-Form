import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { connect } from 'react-redux'
import * as actions from '../actions'
class Payments extends React.Component {
    render(){
        return (
            <StripeCheckout
                name="Emaily"
                description="Rs 100 for 5 email credits"
                amount={10000}
                token={token=>this.props.handleStripeToken(token)}
                stripeKey={process.env.REACT_APP_STRIPE_KEY}
                currency="inr"
            >
                <button className="btn">
                    Add Credits
                </button>
            </StripeCheckout>
        )
    }
}
export default connect(null, actions)(Payments);