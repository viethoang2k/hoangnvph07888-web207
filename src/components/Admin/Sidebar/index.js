import React from 'react'
import { Link } from 'react-router-dom'

const index = props => {
  return (
    <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
      {/* Sidebar - Brand */}
      <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
        <div className="sidebar-brand-icon rotate-n-15">
          <i className="fas fa-laugh-wink" />
        </div>
        <div className="sidebar-brand-text mx-3">SB Admin <sup>2</sup></div>
      </a>
      {/* Divider */}
      <hr className="sidebar-divider my-0" />
      {/* Nav Item - Dashboard */}
      <li className="nav-item">
        <Link className="nav-link" to="/Admin/">
          <i className="fas fa-fw fa-tachometer-alt" />
          <span>Dashboard</span></Link>
      </li>
     
      <hr className="sidebar-divider" />
      <li className="nav-item">
        <Link className="nav-link" to="/Admin/Products">
          <i className="fas fa-fw fa-tachometer-alt" />
          <span>Sản Phẩm</span></Link>
      </li>
      <hr className="sidebar-divider" />
      <li className="nav-item">
        <Link className="nav-link" to="/Admin/Categories">
          <i className="fas fa-fw fa-tachometer-alt" />
          <span>Danh Mục</span></Link>
      </li>
      {/* Divider */}
      <hr className="sidebar-divider" />
      {/* Heading */}


      {/* Sidebar Toggler (Sidebar) */}
      <div className="text-center d-none d-md-inline">
        <button className="rounded-circle border-0" id="sidebarToggle" />
      </div>
    </ul>
  )
}

index.propTypes = {

}

export default index
