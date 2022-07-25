import React, { Component } from 'react'

export default class ProductItem extends Component {
    render() {
        let {image, name,id,price} = this.props.product
        return (
            <div className="card">
                <img src={image} className="card-img-top" alt="..." />
                <div className="card-body">
                    <p className="card-text">{id}</p>
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{Number(price).toLocaleString()}$</p>
                    <button onClick={() => {
                        // console.log(product);
                        // let newState = {
                        //     shoesdetail: product
                        // }
                        // this.props.setState(newState);
                        this.props.renderview(this.props.product)
                    }} className='btn btn-success' data-toggle="modal" data-target="#exampleModal">Xem</button>
                </div>
            </div>

        )
    }
}
