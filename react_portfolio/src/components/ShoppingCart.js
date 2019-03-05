/**
 * How to Loop through Arrays in React
 * 
 * we will be using the map function.
 * The map method creates a new array with the results of calling 
 * a provided function on every element in the calling array
 * 
 * 
 */

//import React, {Component} from 'react';

const React = require('react');

class ShoppingCart {//extends Component {
    constructor(props) {
            //super(props);

            let cart = this.shoppingCart2;

            this.state = {cart};
            console.log(this.state);
            this.render();

    }
    
    shoppingCart = [];

    shoppingCart2 = [
        {id: 35, item: 'jumper', color: 'red', size: 'medium', price: 20},
        {id: 42, item: 'shirt', color: 'blue', size: 'medium', price: 15},
        {id: 71, item: 'socks', color: 'black', size: 'all', price: 5},
    ];

    

    render() {
        this.items = this.state.cart.map( (item,key, orgCart) => {
            console.log(orgCart);
            return React.createElement(<li key={item.id}>{item.name}</li>);
        });

        console.log(this.items);
    }
}
 


