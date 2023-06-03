import { format } from 'date-fns';
import React from 'react';

const HistoryCard = ({ content }) => {
	const { title, image, description, tags, createdAt } = content;
	const addedDate = format(new Date(createdAt), 'PPpp');


	return (
		<div className='w-full'>
			<div class="flex overflow-hidden bg-white rounded-lg shadow-lg">
				<div class="">
					<figure>
						<img src={image} alt="card" className=" w-[200px] h-[150px] " />
					</figure>
				</div>
				<div class="w-2/3 p-4">
					<h3 className="text-xl font-medium text-slate-700">{title}</h3>
					<p className="text-sm text-slate-500 mb-3"> {addedDate}</p>
					<p className="text-sm text-slate-500"> {description}</p>
				</div>
			</div>
		</div>
	);
};

export default HistoryCard;
