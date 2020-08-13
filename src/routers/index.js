import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Main from '../pages/layouts/Main'
import MainAdmin from '../pages/layouts/MainAdmin'
//Admin
import Dashboard from '../pages/views/Admin/Dashboard'
import ProductsManager from '../pages/views/Admin/Products'
import CategoriesManager from '../pages/views/Admin/Categories'

//Views
import About from '../pages/views/Main/About'
import Home from '../pages/views/Main/Home'
import Man from '../pages/views/Main/Categories/Man'
import AddProduct from '../pages/views/Admin/addProduct';
import AddCategories from '../pages/views/Admin/addCategories';
import DetailProduct from '../pages/views/Admin/EditProduct';
import EditCategories from '../pages/views/Admin/EditCategories';



const Routers = ({ products , onUpdate}) => {
   

    return (
        <Router >
            <Switch>
                <Route  path="/admin/:path?/:path?/:path?" exact>
                    <MainAdmin>
                        <Switch>
                            <Route path='/admin' exact>
                                <Dashboard />
                            </Route>
                            <Route path='/admin/products'>
                                <ProductsManager />
                            </Route>
                            <Route path='/admin/addProduct'>
                                <AddProduct />
                            </Route>
                            <Route path='/admin/EditProduct/id/:id' 
                                render={(props) => 
                                < DetailProduct   {...props}/>
                            }   
                              >
                            </Route>
                            <Route path='/admin/categories'>
                                <CategoriesManager />
                            </Route>
                            <Route path='/admin/addCategories'
                            render={(props) =>
                                <AddCategories {...props} />
                            }
                                >
                            </Route>
                            <Route path='/admin/EditCategories/id/:id' 
                                render={(props) => 
                                < EditCategories   {...props}/>
                            }   
                              >
                            </Route>
                        </Switch>
                    </MainAdmin>
                </Route>
                <Route>
                    <Main>
                        <Switch>
                            <Route path="/home/:path?/:path?/:path?" exact>
                                <Home products={products}/>
                            </Route>
                            <Route exact path="/Categories/Man">
                                <Man />
                            </Route>
                            <Route exact path="/about">
                                <About />
                            </Route>
                        </Switch>
                    </Main>
                </Route>
            </Switch>
        </Router>
    )
}

Routers.propTypes = {

}

export default Routers
