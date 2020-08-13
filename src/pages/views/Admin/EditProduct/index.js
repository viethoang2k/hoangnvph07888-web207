import React, {Component } from 'react'
import callApi from '../../../../api/axiosApi';
import {createBrowserHistory} from "history";


class EditProduct extends Component {

    constructor(props){
        super(props);
        this.state = {
            categories : [],
           id : '',
           name : '',
           image : '',
           price : '',
           status : '',
        };
    }

    componentDidMount(){
        var {match} = this.props;
        if(match){
            var id = match.params.id;
            callApi(`products/${id}` ,  'GET' , null).then(res => {
                var data = res.data;
                console.log(data);
                this.setState({
                    id : data.id,
                    name : data.name,
                    image : data.image,
                    price : data.price,
                    status : data.status
                });
            });
            callApi('categories', 'GET', null).then(res => {
                this.setState({
                    categories: res.data,
                });
            });
        }
    }
    onChange = (e) =>{
        var target = e.target;
        var name = target.name;
        var value = target.type === 'checkbox' ? target.checked : target.value;
        this.setState({
            [name]:value
        });
        console.log(value);
    }
    onSave = (e) =>{
        e.preventDefault();
    let history = createBrowserHistory();
    var { id ,name, image, price, status, id_cate} = this.state;
        callApi(`products/${id}`, 'PUT' ,{
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
    var {name, image, price, status} = this.state;
    var {categories} = this.state;
    return (
        <div>
            <div className="main-panel">
                <div className="card shadow ml-10">
                    <div className="card-body">
                        <div className="table-responsive">
                            <form onSubmit={this.onSave}>
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th scope="col">Name</th>
                                        <th scope="col">image</th>
                                        <th  scope="col">Price</th>
                                        <th  scope="col">Category</th>
                                        <th scope="col">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                        <input type="text" name="name" className="form-control" onChange={this.onChange} value={name}/>
                                        </td>
                                        <td>
                                            {/* <img src={product.image} width="100"></img> */}
                                            <input type="text" name="image" className="form-control" onChange={this.onChange} value={image}/>
                                        </td>
                                        <td>                            
                                            <input type="text" name="price" className="form-control" onChange={this.onChange} value={price}/>
                                        </td>
                                        <td>
                        <select className="form-control" name="id_cate" onChange={this.onChange}>
                            <option value={0}>Choose Category</option>
                            {categories.map(({ id, name }) => (
                            <option value={id}>{name}</option>
                        ))}
                        </select>
                                        </td>
                                        <div className="checkbox">
                                        <label>
                                        <input type="checkbox" name="status" onChange={this.onChange}/>
                                        còn hàng
                                        </label>
                                        </div>
                                        <td>
                                            <button className="btn btn-primary" >Update</button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        
        </div>
    )
}
}
export default EditProduct;
