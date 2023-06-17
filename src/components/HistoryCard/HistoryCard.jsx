import { format } from 'date-fns';
import React from 'react';

const HistoryCard = ({ content }) => {
	const { title, image, description, tags, createdAt } = content;
	const addedDate = format(new Date(createdAt), 'PPpp');

	return (
		<div className="w-full">
			<div className="flex overflow-hidden bg-white rounded-lg shadow-lg">
				<div className="">
					<figure>
						<img src={image} alt="card" className=" w-[200px] h-[150px] " />
					</figure>
				</div>
				<div className="w-2/3 p-4">
					<h3 className="text-xl font-medium text-slate-700">{title}</h3>
					<p className="text-sm text-slate-500 mb-3"> {addedDate}</p>
					<p className="text-sm text-slate-500"> {description}</p>
					<p className="text-sm text-slate-900 mt-5">
						{' '}
						Quantity -{' '}
						<span class="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-sm text-purple-700">
							{content?.quantity}
						</span>
					</p>
				</div>
			</div>
		</div>
	);
};

export default HistoryCard;
