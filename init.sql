drop table if exists users;
drop table if exists products;
drop table if exists orders;
drop table if exists reviews;

create table users
(
    id       	   int          	NOT NULL AUTO_INCREMENT,
    username 	   varchar(255) 	not null,
    password       varchar(255) 	not null,
	email 	       varchar(255) 	not null,
	balance		   double			not null,
    PRIMARY KEY (ID)
);

create table products
(
    id             int         		 NOT NULL AUTO_INCREMENT,
	sellerId       int               not null,
	name		   varchar(255)		 not null,
	price		   double			 not null,
	paidPromotion  boolean			 not null,
    PRIMARY KEY (ID)
);

create table orders
(
    id             int          	NOT NULL AUTO_INCREMENT,
	buyerId		   int				not null,
	productId      int				not null,
	price		   double			not null,
	count		   int              not null,
	firstName	   varchar(255)		not null,
	lastName	   varchar(255)		not null,
	address	   	   varchar(255)		not null,
	contactPhone   varchar(255)		not null,
    PRIMARY KEY (ID)
);

create table reviews
(
    id             int          	NOT NULL AUTO_INCREMENT,
	productId	   int				not null,
	username	   varchar(255)		not null,
	review	       varchar(255)		not null,
    PRIMARY KEY (ID)
);

insert into users(username, password, email, balance) values ('pedja', 'pass1234', 'pedja@gmail.com', 10000);
insert into users(username, password, email, balance) values ('vlada', 'pass1234', 'vlada@gmail.com', 20000);
insert into users(username, password, email, balance) values ('miki', 'pass1234', 'miki@gmail.com', 30000);
insert into users(username, password, email, balance) values ('moma', 'pass1234', 'moma@gmail.com', 40000);

insert into products(sellerId, name, price, paidPromotion) values (1, 'Intel i3 procesor', 200, true);
insert into products(sellerId, name, price, paidPromotion) values (1, 'Intel i5 procesor', 300, false);
insert into products(sellerId, name, price, paidPromotion) values (2, 'Intel i7 procesor', 400, false);
insert into products(sellerId, name, price, paidPromotion) values (3, 'Acer Aspire laptop', 900, true);
insert into products(sellerId, name, price, paidPromotion) values (4, 'Logitech tastatura', 50, false);

insert into orders(buyerId, productId, price, count, firstName, lastName, address, contactPhone) values (2, 1, 200, 12, 'Pera', 'Peric', 'Bulevar kralja Aleksandra 48/5', '063123456');
insert into orders(buyerId, productId, price, count, firstName, lastName, address, contactPhone) values (3, 1, 200, 7, 'Mika', 'Mikic', 'Bulevar kralja Aleksandra 12/16', '064987654');
insert into orders(buyerId, productId, price, count, firstName, lastName, address, contactPhone) values (4, 1, 200, 5, 'Jova', 'Jovic', 'Bulevar kralja Aleksandra 105/3', '063333444');
insert into orders(buyerId, productId, price, count, firstName, lastName, address, contactPhone) values (1, 3, 400, 3, 'Zika', 'Zikic', 'Bulevar kralja Aleksandra 205', '0631122334');

insert into reviews(productId, username, review) values(1, 'user1', 'Best product');
insert into reviews(productId, username, review) values(1, 'user2', 'Worst product ever');
insert into reviews(productId, username, review) values(1, 'user3', 'Ok, nothing special');