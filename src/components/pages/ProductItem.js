import React from 'react';
import {Row ,Col ,Well ,Button} from 'react-bootstrap';
import {connect} from 'react-redux';
import {bindACtionCreators, bindActionCreators} from 'redux';
import {addToCart,updateCart} from '../../actions/cartActions';

class ProductItem extends React.Component{

    handleCart(){
        const product = [...this.props.cart,{
            _id: this.props._id,
            title: this.props.title,
            description: this.props.description,
            availableSizes:this.props.availableSizes,
            style :this.props.style,
            currencyFormat :this.props.currencyFormat,
            price :this.props.price,
            isFreeShipping :this.props.isFreeShipping,
            quantity:1
        }]

        if(this.props.cart.length > 0){
            let _id = this.props._id;

            let cartIndex = this.props.cart.findIndex(function(cart){
                return cart._id === _id;
            })

            if(cartIndex === -1){
                this.props.addToCart(product);
            }
            else{
                this.props.updateCart(_id, 1)
            }
        }
        else{
            this.props.addToCart(product);           
        }
    }

    render(){
        return(
            <Well>
                <Row>
                    <Col xs={12}>
                        <h4>{this.props.title} - {this.props.description}</h4>
                        <p>{this.props.style}</p>
                        <p>{this.props.availableSizes}</p>
                        <h5>{this.props.currencyFormat} {this.props.price}</h5>
                        <Button onClick={this.handleCart.bind(this)} bsStyle='primary'>Add to Cart</Button>
                    </Col>
                </Row>
            </Well>
        )
    }
}

function mapStateToProps(state){
    return{
        cart: state.cart.cart
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({
        addToCart:addToCart,
        updateCart: updateCart
    },dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductItem);