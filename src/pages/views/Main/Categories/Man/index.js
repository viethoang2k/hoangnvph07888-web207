import React, { Component } from "react";
import { Link } from "react-router-dom";
import callApi from './../../../../../api/axiosApi';


class Man extends Component {
  constructor(props) {
    super(props);
    this.state = {
        products: [],
        categories: [],
       id_cate: 2
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
render(){
  var { products } = this.state;
    return (
        <div>
<div>
  {/* products area start */}
  <div className="new-products-area">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="section-heading">
            <h2>Man</h2>
          </div>
        </div>
      </div>
      <div className="row" >
    {products.map(({ name, image, price , id_cate=2}, index) => (
        <div className="col-md-3" >
          {/*product list*/}
          <div className="product-list">
            <div className="product-img">
              <Link>
                <img width={300} height={250} src={image} alt="" />
              </Link>
            </div>
            <br />
            <div className="product-title">
              <h5>
            <a href={name} >{name}</a>
              </h5>
            </div>
            <div className="product-price">
              <del>2000đ</del> {price}
            </div>
            <div className="product-rating">
              <i className="fa fa-star-o" />
            </div>
            <div className="product-btn">
              <Link href="" className=" btn btn-extra-small btn-dark-border "><i className="fa fa-shopping-cart" /> Thêm Vào Giỏ</Link>
            </div>
          </div>
          {/*product list*/}
        </div>
              ))}
      </div>
      <br />
    </div>
  </div>
  {/* products area end */}
</div>
        </div>
    )
}
}
export default Man
