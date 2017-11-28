import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getProducts} from '../../actions/producstActions';
import {Grid ,Col, Row , Button} from  'react-bootstrap';

class ProductsList extends React.Component{
    componentDidMount(){
        //The API data request goes here by calling Actions
        this.props.getProducts();
    }

    render(){
        const productsList = this.props.products.map(function(arrayProducts){
            return(
                <div key={arrayProducts.id}>
                    <h2>{arrayProducts.title}</h2>
                    <h2>{arrayProducts.description}</h2>
                    <h2>{arrayProducts.price}</h2>
                    <Button bsStyle='primary'>Add to cart</Button>
                </div>
            )
            });
        return(
            <Grid>
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