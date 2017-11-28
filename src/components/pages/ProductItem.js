import React from 'react';
import {Row ,Col ,Well ,Button} from 'react-bootstrap';

class ProductItem extends React.Component{
    render(){
        return(
            <Well>
                <Row>
                    <Col xs={12}>
                        <h4>{this.props.title} - {this.props.description}</h4>
                        <p>{this.props.style}</p>
                        <h5>{this.props.currencyFormat} {this.props.price}</h5>
                        <Button bsStyle='primary'>Add to Cart</Button>
                    </Col>
                </Row>
            </Well>
        )
    }
}

export default ProductItem;