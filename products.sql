
CREATE TABLE `categories` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `description` varchar(500) NOT NULL,
  `status` varchar(10) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;




CREATE TABLE `products` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `sku` int(50) DEFAULT '555',
  `name` varchar(100) NOT NULL,
  `price` double NOT NULL,
  `mrp` double DEFAULT '45444',
  `description` varchar(500) NOT NULL,
  `packing` varchar(50) DEFAULT '5555',
  `image` varchar(200) DEFAULT '555',
  `category` int(11) DEFAULT '444',
  `stock` int(11) NOT NULL,
  `status` varchar(10) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;