import React from "react";

class ProductItem extends React.Component {
    render() {
        const { id, title, price, dateRelease } = this.props.product
        return (
            <React.Fragment>

                <tr>
                    <td>{id}</td>
                    <td>{title}</td>
                    <td>{price}</td>
                    <td>{dateRelease}</td>
                    <td><button onClick={() => this.props.deleteProduct(id)}>Delete</button></td>
                </tr>



            </React.Fragment>
        );

    }
}
export default ProductItem;