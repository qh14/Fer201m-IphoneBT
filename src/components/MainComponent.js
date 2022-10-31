import React from 'react'
import Header from './HeaderComponent'
import Footer from './FooterComponent'
import AddProduct from './AddProductComponent';
import ListProduct from './ListProductComponent'
import { PRODUCTS } from '../resources/product'
class MainComponent extends React.Component {
    state = {
        products: PRODUCTS
    };
    addProduct = (title, price, dateRelease) => {
        const newProduct = {
            id: this.state.products.length + 1,
            title: title,
            price: price,
            dateRelease: dateRelease
        };
        this.setState({
            products: [...this.state.products, newProduct]
        });
    };
    deleteProduct = (id) => {
        this.setState({
            products: [...this.state.products.filter(product => {
                return product.id !== id
            })]
        })
    }
    render() {
        return (
            <div>
                <Header />
                <AddProduct addProduct={this.addProduct} />
                <ListProduct products={this.state.products} deleteProduct={this.deleteProduct} />
                <Footer />
            </div>
        )
    };
}

export default MainComponent;