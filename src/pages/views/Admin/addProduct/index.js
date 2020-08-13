import React, {Component } from 'react'
import callApi from './../../../../api/axiosApi';
import {createBrowserHistory} from "history";

class AddProduct extends Component {
    constructor(props){
        super(props);
        this.state = {
            categories : [],
           id : '',
           name : '',
           image : '',
           price : '',
           status : '',
           id_cate : ''
        };
    }

    componentDidMount() {
        callApi('categories', 'GET', null).then(res => {
            this.setState({
                categories: res.data,
            });
        });
    }

    onChange = (e) =>{
        var target = e.target;
        var name = target.name;
        var value = target.type === 'checkbox' ? target.checked : target.value;
        this.setState({
            [name]:value
        });
    }

    onSave = (e) =>{
        e.preventDefault();
    let history = createBrowserHistory();
    var {name, image, price, status, id_cate} = this.state;
        callApi('products', 'POST' ,{
            name : name,
            image : image,
            price : price,
            status : status,
            id_cate : id_cate
        }).then(res => {
        history.back();
        });
    }
render(){
    var {categories} = this.state;
    return (
        <div>
            <h1 className="h3 mb-2 text-gray-800">Add Product</h1>
            <div className="card shadow mb-4">
                <div className="card-body">
                    <form onSubmit={(this.onSave)}>
                        <div className="form-group">
                            <label htmlFor="">Name</label>
                            <input type="text" 
                                    name="name" 
                                    className="form-control" 
                                    onChange={this.onChange}
                                />
                        </div>
                        <div className="form-group">
                            <label htmlFor="">Image</label>
                            <input type="text" name="image" className="form-control" onChange={this.onChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="">Price</label>
                            <input type="text" name="price" className="form-control" onChange={this.onChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="">Category</label><br/>
                        <select className="form-control" name="id_cate" onChange={this.onChange}>
                            <option value={0}>Choose Category</option>
                            {categories.map(({ id, name }) => (
                            <option value={id}>{name}</option>
                        ))}
                        </select>
                            </div>
                        <div className="checkbox">
                            <label>
                            <input type="checkbox" name="status" onChange={this.onChange} />
                            còn hàng
                            </label>
                        </div>
                        <button type="submit" className="btn btn-primary">submit</button>
                    </form>

                </div>



            </div>
        </div>
    )
}
}


export default AddProduct
