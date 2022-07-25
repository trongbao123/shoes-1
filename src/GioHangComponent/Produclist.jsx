import React, { Component } from 'react'
import ProductItem from './ProductItem';

export default class Produclist extends Component {

    rendershoes = () => {

        return this.props.ShoesArray.map((product) => {

            let { id, image, name, price } = product;
            return <div className="col-4 py-3" key={product.id}>
                <ProductItem renderview={this.props.renderview} product={product}></ProductItem>

            </div>
        })
    }









    render() {
        console.log(this.props, "clg");
        return (

            <div className="col-8">
                <h1>ShoesStore</h1>
                <div className="row">
                    {this.rendershoes()}
                </div>
            </div>

        )
    }
}
