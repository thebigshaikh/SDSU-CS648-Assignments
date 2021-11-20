import React, {Component} from 'react'
import Filters from './Filters'
import ProductTable from './ProductTable'
import ProductForm from './ProductForm'

let PRODUCTS = {
    '1': {id: 1, category: 'Clothing', price: '$45.99', name: 'Denim'},
    '2': {id: 2, category: 'Clothing', price: '$50', name: 'Jacket'},
    '3': {id: 3, category: 'Music', price: '$400', name: 'Guitar'},
    '4': {id: 4, category: 'Furniture', price: '$799', name: 'Chaise Lounge'},
    '5': {id: 5, category: 'Kitchen', price: '$800', name: 'Dining Table'},
    '6': {id: 6, category: 'Music', price: '$100', name: 'Drum Kit'}
}

class Product extends Component {
    constructor(props) {
        super(props)
        this.state = {
            filterText: "",
            products: PRODUCTS
        }
        this.handleFilter= this.handleFilter.bind(this)
        this.handleSave = this.handleSave.bind(this)
        this.handleDestroy = this.handleDestroy.bind(this)
    }

    handleFilter(filterInput){
        this.setState(filterInput)
    }

    handleSave(product) {
        if(!product.id) {
                product.id = new Date().getTime()
        }
        this.setState((prevState) => {
                let products = prevState.products
                products[product.id] = product
                return {products}
        });
    }

    handleDestroy(productId) {
        this.setState((prevState) => {
                let products = prevState.products
                delete products[productId]
                return {products}
        })
    }

    render() {
        return (
            <div class="container-fluid">
                <h1 class="col-md-4">My Inventory</h1><br/>
                <Filters onFilter={this.handleFilter}/>
                <ProductTable products={this.state.products} filterText={this.state.filterText} onDestroy={this.handleDestroy}/>
                <ProductForm onSave={this.handleSave}/>
            </div>
        )
    }
}

export default Product