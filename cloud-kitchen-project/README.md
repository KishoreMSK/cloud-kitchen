# cloud-kitchen-project -frontend

## Project setup
```
move to cloud-kitchen-project directory
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```
### DESCRIPTION
```
ADMIN:
1] Admin can add and remove products in inventory

USERS:
1] Can Register and login
2] Can View list of products and select the specific items
3] Can Order and cancel orders
```
### backend
```
queries:
USER TABLE:

create table userdetails(

userid serial,

username text,phoneno text, 

email text,address text,

usertype text,

 loginpassword text, 

 primary key (userid)

 );



ORDER TABLE:

 create table orderdetails(index serial,

orderid text,

customerid int,

productid int, 

productname text,

price float,

quantity int,

 orderstatus text,

primarykey(index)); 



INVENTORY TABLE:

create table inventory(

foodid serial,

foodname text,

 price float,

 stockcount int,

itemtype text,

category text,

cuisine text, description text, 

rating float, 

duration text, 

offer text, 

coupon text,

url text, 

primary key(foodid));

```

### FUNCTIONS:
```
register a new user
login with the emailid and password
if admin add,delete items to the inventory
if customer place or cancel order
```
