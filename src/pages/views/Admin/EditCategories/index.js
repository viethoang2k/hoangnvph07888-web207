import React, {Component } from 'react'
import callApi from '../../../../api/axiosApi';
import {createBrowserHistory} from "history";


class EditCategories extends Component {

    constructor(props){
        super(props);
        this.state = {
           id : '',
           name : ''
        };
    }

    componentDidMount(){
        var {match} = this.props;
        if(match){
            var id = match.params.id;
            callApi(`categories/${id}` ,  'GET' , null).then(res => {
                var data = res.data;
                console.log(data);
                this.setState({
                    id : data.id,
                    name : data.name
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
    var { id ,name} = this.state;
        callApi(`categories/${id}`, 'PUT' ,{
            name : name
        }).then(res => {
        history.back();
        });
    }
    
render(){
    var {name} = this.state;
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
                                        <th scope="col">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                        <input type="text" name="name" className="form-control" onChange={this.onChange} value={name}/>
                                        </td>
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
export default EditCategories;
