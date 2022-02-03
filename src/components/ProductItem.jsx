import React, { useContext } from 'react';
import '@styles/ProductItem.scss';
import AppContext from '@context/AppContext';
import btAdd from '@icons/bt_add_to_cart.svg'

const ProductItem = ({ product }) => {
	const { addToCart } = useContext(AppContext);

	const handleCLick = item => {
		addToCart(item);
	}
	return (
		<div className="ProductItem">
			<img src={product.images[0]} alt={product.title} />
			<div className="product-info">
				<div>
					<p>${product.price} USD</p>
					<p>{product.title}</p>
				</div>
				<figure onClick={() => handleCLick(product)}>
					<img src={btAdd} alt="" />
				</figure>
			</div>
		</div>
	);
}

export default ProductItem;
