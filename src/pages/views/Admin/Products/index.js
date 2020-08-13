import React, { Component } from "react";
import { Link } from "react-router-dom";
import callApi from './../../../../api/axiosApi';


class ProductsManager extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            products: [],
            categories: [],
           id_cate: ''
        };
    }

    componentDidMount() {
        callApi('products','GET', null).then(res => {
            this.setState({
                products: res.data,
            });
        });
        callApi('categories','GET', null).then(res => {
            this.setState({
                categories: res.data,
            });
        });
    }

    
    onCate = (id_cate) =>{
        var {categories} = this.state;
        const newCate = categories.filter((categories)=>categories.id == id_cate);
        if(newCate!=0){
            const id_cate = newCate[0].name;
            return id_cate;
        }else{
            return ("No Cate");
        }
    }
   

    onDelete = (id) => {
        var { products } = this.state;
        if (confirm('Bận chắc chắn muốn xóa ?')) { //eslint-disable-line
            callApi(`products/${id}`, 'DELETE', null).then(res => {
                if (res.status === 200) { //OK
                    var index = this.findIndex(products, id);
                        products.splice(index, 1);
                        this.setState({
                            products: products 
                    });
                }
            });
        }
    }
    findIndex = (products, id) => {
        var result = -1;
        products.forEach((product, index ) => {
            if(product.id === id){
                result = index;
            }
        });
        return result;
    }

    render() {
       
        var { products } = this.state;
        return (
            <div>
                {/* DataTales Example */}
                <div className="card shadow mb-4">
                    <div className="card-header py-3">
                        <h6 className="m-0 font-weight-bold text-primary">Danh Sách Sản Phẩm</h6>
                        <br/>
                        <Link className="btn btn-primary" to="/admin/addProduct">Thêm Sản Phẩm</Link>
                    </div>
                    <div className="card-body">
                        <div className="table-responsive">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th scope="col">ID</th>
                                        <th scope="col">Name</th>
                                        <th scope="col">Image</th>
                                        <th scope="col">Price</th>
                                        <th scope="col">Trạng Thái</th>
                                        <th scope="col">ID Category</th>
                                        <th scope="col">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {products.map(({ id, name, image, price, status ,id_cate}, index) => (
                                        <tr key={index}>
                                            <th scope="row">{index + 1}</th>
                                            <td><Link to={"/Admin/DetailProduct/id/" + id}>{name}</Link></td>
                                            <td><img src={image} alt="" width="50" /></td>
                                            <td>{price}</td>
                                            <td>
                                                <span className={`label label-${status ? 'warning' : 'default'}`}>
                                                    {status ? 'Còn Hàng' : 'Hết Hàng'}

                                                </span>
                                            </td>
                                    <td>{this.onCate(id_cate)}</td>
                                            <td>
                                            <Link className="btn btn-primary" to={`/Admin/EditProduct/id/${id}`}>Sửa</Link>
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
export default ProductsManager
