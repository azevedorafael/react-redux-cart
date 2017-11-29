import React from 'react';
import { connect } from 'react-redux';
import { Modal, Panel, Col, Row, Well, Button, Label, ButtonGroup } from 'react-bootstrap';
import { bindActionCreators } from 'redux';
import { deleteCartItem, updateCart } from '../../actions/cartActions';

class Cart extends React.Component {

    onDelete(_id) {

        // Create temp copy of the array of products
        const currentProductToDelete = this.props.cart;
        // Find the product by the index
        const indexToDelete = currentProductToDelete.findIndex(
            function (cart) {
                return cart._id === _id;
            })
        // Delete the product from the array
        let cartAfterDelete = [...currentProductToDelete.slice(0, indexToDelete), ...currentProductToDelete.slice(indexToDelete + 1)]

        this.props.deleteCartItem(cartAfterDelete);
    }

    onIncrement(_id) {
        this.props.updateCart(_id, 1)
    }

    onDecrement(_id, quantity) {
        if (quantity > 1) {
            this.props.updateCart(_id, -1)
        }
    }

    constructor(){
        super();
        this.state = {
            showModal:false
        }
    }

    open(){
        this.setState({showModal : true})
    }
    close(){
        this.setState({showModal:false})
    }


    render() {
        if (this.props.cart[0]) {
            return this.renderCart();
        }
        else {
            return this.renderEmpty();
        }
    }
    renderEmpty() {
        return (<div></div>)
    }

    renderCart() {
        const cartItemsList = this.props.cart.map(function (arrayCart) {
            return (
                <Panel key={arrayCart._id}>
                    <Row>
                        <Col xs={12} sm={4}>
                            <h6>{arrayCart.title}{arrayCart.description}</h6><span></span>
                        </Col>
                        <Col xs={12} sm={2}>
                            <h6>{arrayCart.currencyFormat} {arrayCart.price}</h6><span></span>
                        </Col>
                        <Col xs={12} sm={2}>
                            <h6>Quantity  <Label bsStyle="success">{arrayCart.quantity}</Label></h6><span></span>
                        </Col>
                        <Col xs={6} sm={4}>
                            <ButtonGroup style={{ minWidth: '300px' }}>
                                <Button onClick={this.onDecrement.bind(this, arrayCart._id, arrayCart.quantity)} bsStyle="default" bsSize="small">-</Button>
                                <Button onClick={this.onIncrement.bind(this, arrayCart._id)} bsStyle="default" bsSize="small">+</Button>
                                <span>     </span>
                                <Button onClick={this.onDelete.bind(this, arrayCart._id)} bsStyle="danger" bsSize="small">DELETE</Button>
                            </ButtonGroup>
                        </Col>
                    </Row>
                    <Modal show={this.state.showModal} onHide={this.close.bind(this)}>
                        <Modal.Header closeButton>
                            <Modal.Title>Checking Out</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <h6>Thank you!</h6>
                            <p></p>
                        </Modal.Body>
                        <Modal.Footer>
                            <Col xs={6}>
                                <h6>Total: R$ {this.props.totalAmount} </h6>
                            </Col>
                            <Button onClick={this.close.bind(this)}>Close</Button>
                        </Modal.Footer>
                    </Modal>
                </Panel>
            )
        }, this)
        return (
            <Panel header="Cart" bsStyle="primary">
                {cartItemsList}
                <Row>
                    <Col xs={12}>
                        <h6>Total amount: {this.props.totalAmount}</h6>
                        <Button onClick={this.open.bind(this)} bsStyle="success" bsSize="small">
                            Checkout
                        </Button>
                    </Col>
                </Row>
            </Panel>
        )
    }
}

function mapStateToProps(state) {
    return {
        cart: state.cart.cart,
        totalAmount: state.cart.totalAmount
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        deleteCartItem: deleteCartItem,
        updateCart: updateCart
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);