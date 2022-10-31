import React from "react";
import ProductItem from "./ProductItem";


class Products extends React.Component {
    render() {
        return (
            <div>
                <table className="container">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Date Release</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.products.map(product => (
                            <ProductItem
                                key={product.id}
                                product={product}
                                deleteProduct={this.props.deleteProduct}
                            />


                        ))}
                    </tbody>
                </table>
                <ul>

                </ul>
            </div>
        );
    }
}
export default Products;