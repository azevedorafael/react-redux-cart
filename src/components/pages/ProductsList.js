import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getProducts} from '../../actions/producstActions';
import {Grid ,Col, Row , Button} from  'react-bootstrap';

import ProductItem from './ProductItem';
import Cart from './Cart';

class ProductsList extends React.Component{
    componentDidMount(){
        //The API data request goes here by calling Actions
        this.props.getProducts();
    }

    render(){
        const productsList = this.props.products.map(function(arrayProducts){
            return(
                <Col xs={12} sm={6} md={4} key={arrayProducts._id}>
                    <ProductItem
                        _id= {arrayProducts._id}
                        title= {arrayProducts.title}
                        description={arrayProducts.description}
                        availableSizes={arrayProducts.availableSizes}
                        style = {arrayProducts.style}
                        currencyFormat = {arrayProducts.currencyFormat}
                        price = {arrayProducts.price}
                        isFreeShipping = {arrayProducts.isFreeShipping}
                    />
                </Col>
            )
            });
        return(
            <Grid>
                <Row>
                    <Cart />
                </Row>
                <Row style={{marginTop: '15px'}}>
                    {productsList}
                </Row>
            </Grid>
         )
    }
}
function mapStateToProps(state){
    return{
        products: state.products.products
    }
}

function mapsDispatchProps(dispatch){
    return bindActionCreators({getProducts: getProducts}, dispatch)
}

export default connect(mapStateToProps, mapsDispatchProps)(ProductsList);