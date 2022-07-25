import React, { Component } from 'react'

export default class GiohangModel extends Component {
  render() {
    let { id, image, name, price } = this.props.shoesdetail;
    return (
        <div>
        
        {/* Modal */}
        <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">×</span>
                        </button>
                    </div>
                    <div className="modal-body">
                
                        <img src={image} alt="" />
                        <p>{id}</p>     
                        <p>{name}</p>
                        <p>{Number(price).toLocaleString()}$</p>
                    </div>
              
                </div>
            </div>
        </div>
    </div>
    )
  }
}
