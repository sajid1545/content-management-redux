import React from 'react';
import { useSelector } from 'react-redux';
import HistoryCard from '../../../components/HistoryCard/HistoryCard';

const ReadingHistory = () => {
	const cart = useSelector((state) => state.content.historyCart);
	console.log(cart);

	const sortedCart = [...cart];

	return (
		<div className="grid lg:grid-cols-1  gap-5 mx-auto my-10 place-content-center">
			{sortedCart
				.sort((a, b) => b.quantity - a.quantity)
				.map((content) => (
					<HistoryCard key={content._id} content={content} />
				))}
		</div>
	);
};

export default ReadingHistory;
