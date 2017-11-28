import React from 'react';
import {connect} from 'react-redux';

class ProductsList extends React.Component{
    render(){
        const productsList = this.props.products.map(function(arrayProducts){
            return(
                <div key={arrayProducts.id}>
                    <h2>{arrayProducts.title}</h2>
                    <h2>{arrayProducts.description}</h2>
                    <h2>{arrayProducts.price}</h2>
                </div>
            )
            });
        return(
            <div>
                <h1>List of Products for Sale</h1>
                {productsList}
            </div>
        )
    }
}
function mapStateToProps(state){
    return{
        products: state.products.products
    }
}
export default connect(mapStateToProps)(ProductsList);