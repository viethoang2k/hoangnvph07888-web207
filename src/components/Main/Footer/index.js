import React from 'react'
import { Link } from "react-router-dom";
const Footer = props => {
    return (
        <div>
 <footer className="footer-area">
  <div className="container">
    <div className="row">
      <div className="col-sm-6">
        <div className="footer-copyright">
          <p>Copyright © 2016 <Link href="#"> Bootexperts</Link>. All Rights Reserved</p>
        </div>
      </div>
      <div className="col-sm-6">
        <div className="payment-icon">
          <img src="img/payment.png" alt="" />
        </div>
      </div>
    </div>
  </div>
  <Link href="#" id="scrollUp"><i className="fa fa fa-arrow-up" /></Link>
</footer>

        </div>
    )
}

Footer.propTypes = {

}

export default Footer
