import React, { Component } from "react";
import { Link } from "react-router-dom";
import callApi from './../../../../api/axiosApi';


class CategoriesManager extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            categories: []
        };
    }

    componentDidMount() {
        
        callApi('categories', 'GET', null).then(res => {
            this.setState({
                categories: res.data
            });
        });
    }

    onDelete = (id) => {
        var { categories } = this.state;
        if (confirm('Bận chắc chắn muốn xóa ?')) { //eslint-disable-line
            callApi(`categories/${id}`, 'DELETE', null).then(res => {
                if (res.status === 200) { //OK
                    var index = this.findIndex(categories, id);
                        categories.splice(index, 1);
                        this.setState({
                            categories: categories 
                        });
                }
            });
        }
    }
    findIndex = (categories, id) => {
        var result = -1;
        categories.forEach((category, index ) => {
            if(category.id === id){
                result = index;
            }
        });
        return result;
    }

    render() {
        var { categories } = this.state;
        return (
            <div>
                {/* DataTales Example */}
                <div className="card shadow mb-4">
                    <div className="card-header py-3">
                        <h6 className="m-0 font-weight-bold text-primary">Danh Sách Danh Mục</h6>
                        <br/>
                        <Link className="btn btn-primary" to="/admin/addCategories">Thêm Danh Mục</Link>
                    </div>
                    <div className="card-body">
                        <div className="table-responsive">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th scope="col">STT</th>
                                        <th scope="col">ID</th>
                                        <th scope="col">Name</th>
                                        {/* <th scope="col">Trạng Thái</th> */}
                                        <th scope="col">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {categories.map(({ id, name}, index) => (
                                        
                                        <tr key={index}>
                                            <th scope="row">{index + 1}</th>
                                            <td>{id}</td>
                                            <td>{name}</td>
                                            {/* <td>
                                                <span className={`label label-${status ? 'warning' : 'default'}`}>
                                                    {status ? 'con hang' : 'het hang'}

                                                </span>
                                            </td> */}
                                            <td>
                                            <Link className="btn btn-primary" to={`/Admin/EditCategories/id/${id}`}>Sửa</Link>
                                                <button 
                                                    className="btn btn-danger"
                                                    onClick={() => this.onDelete(id)}>Xóa
                                                </button>
                                            </td>
                                        </tr>
                                    ))}

                                </tbody>
                            </table>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default CategoriesManager
