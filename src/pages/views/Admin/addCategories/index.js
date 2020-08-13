import React, {Component } from 'react'
import callApi from './../../../../api/axiosApi';
import {createBrowserHistory} from "history";

class AddCategories extends Component {
    constructor(props){
        super(props);
        this.state = {
           id : '',
           name : ''
        };
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
    var {name} = this.state;
        callApi('categories', 'POST' ,{
            name : name
        }).then(res => {
        history.back();
        });
    }
render(){
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
                        {/* <div className="checkbox">
                            <label>
                            <input type="checkbox" name="status" onChange={this.onChange} value={status = false }/>
                            còn hàng
                            </label>
                        </div> */}
                        <button type="submit" className="btn btn-primary">submit</button>
                    </form>

                </div>



            </div>
        </div>
    )
}
}


export default AddCategories
