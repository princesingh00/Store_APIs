Online Shopping Store backend APIs created using node.js express. here we have APIs for signin, signup, adding items, get all items, add items to cart, place order, get orders. 

Store contains total 12 APIs.

## Table of Contents

* [Project Structure](#project-structure)
* [API EndPoints](#api-endpoints)
* [Author](#author)
* [Useful Links](#useful-links)

## Project Structure

```
Online-Shopping-Store
.
├── package.json
├── README.md
├── Procfile
├── server.js
|
├── config
|    └──  db.js
|
├── models
|    ├── cart.js 
|    ├── Item.js 
|    ├── Order.js 
|    └── User.js
|
├── routes
|    ├── cart.js 
|    ├── Item.js 
|    ├── Order.js 
|    └── User.js
|
└── services
     ├── cart.js 
     ├── Item.js 
     ├── Order.js 
     └── User.js

```

## API EndPoints

- Base Url <https://online-shoppers-store.herokuapp.com>

| Endpoints                           | Description              |
| ----------------------------------- | ------------------------ |
| /user/create                        | create user              |
| /user/login                         | user login               |
| /user/list                          | get all users            |
| /cart/add/:userId/:itemId           | add item in cart         |
| /cart/:cartId/complete/:userId      | convert cart to order    |
| /cart/list/:userId                  | cart by user             |
| /cart/list                          | get all carts            |
| /order/create/:userId/:cartId       | create order             |
| /order/list/:userId                 | get orders by user       |
| /order/list                         | get all orders           |
| /item/create                        | add item                 |
| /item/list                          | get all items            |


## Author

- Prince Singh (https://www.princesingh.in) 2021

## Useful Links

Store deployed backend APIs URL:

- <https://online-shoppers-store.herokuapp.com>