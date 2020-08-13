import React from 'react'
import { Link } from 'react-router-dom'

const Header = props => {
  return (
    <div>
      <header>
  <div className="top-link">
    <div className="container">
      <div className="row">
        <div className="col-md-7 col-md-offset-3 col-sm-9 hidden-xs">
          <div className="call-support" style={{float: 'left'}}>
            <p>Hỗ Trợ khách hàng: <span> 0987654321</span></p>
          </div>
          {/* banner area start */}
          <div className="banner-area" style={{paddingLeft: '350px', marginTop: '20px'}}>
            <div className="single-banner">
              <div className="part-2">
                <div className="search-box">
                  <form action="search.php" method="post">
                    <input id="txtsearch" className="srchTxt" type="text" name="search" placeholder="Tìm kiếm..." required />
                    <button type="submit" id="btnsearch" className="btn btn-search" name="post_search" value="search">
                      <i className="fa fa-search" />
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
          {/* banner area end */}
        </div>
        <div className="col-md-2 col-sm-3">
          <div className="dashboard" style={{width: '235px'}}>
            <div className="account-menu">
              <ul style={{}}>
                <li style={{width: '85px'}}><Link to="admin">Quản&nbsp;Trị</Link></li>
                <li style={{width: '95px'}}><a href="myaccount.php">Tài&nbsp;Khoản</a></li>
              </ul>
            </div>
            <div className="cart-menu">
              <ul>
                <li>
                  <a href="cart.php">
                    <img src="img/icon-cart.png" alt="" style={{marginTop: '20px'}} />
                    <span>5</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="mainmenu-area product-items">
    <div className="container">
      <div className="row">
        <div className="col-md-3">
          <div className="logo">
            <a href="index.php">
              <img src="img/logo.png" alt="" />
            </a>
          </div>
        </div>
        <div className="col-md-9">
          <div className="mainmenu">
            <nav>
              <ul>
                <li><Link to="/home">Trang Chủ</Link></li>
                <li><Link to="/Categories/Man">Man</Link></li>
                <li><Link to="/">Women</Link></li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </div>
</header>

    </div>
  )
}

Header.propTypes = {

}

export default Header
