import { Tooltip } from '@mui/material';
import { format } from 'date-fns';
import React from 'react';
import { toast } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { addToHistoryCart } from '../../redux/actions/contentActions';
import { toggleTag } from '../../redux/actions/filterActions';

const ContentCard = ({ content }) => {
	const { title, image, description, tags, createdAt } = content;

	const activeClass = 'bg-purple-100 text-purple-700';
	const addedDate = format(new Date(createdAt), 'PPpp');
	const dispatch = useDispatch();

	const tagFilters = useSelector((state) => state.filter.filters.tagFilters);

	return (
		<div>
			<div className="overflow-hidden  bg-white  shadow-slate-200 shadow-xl hover:shadow-none duration-700 relative rounded-3xl border p-3 flex flex-col text-indigo-900">
				{/*  <!-- Image --> */}
				<figure>
					<img src={image} alt="card" className="aspect-video w-full" />
				</figure>
				{/*  <!-- Body--> */}
				<div className="p-6">
					<header className="mb-4">
						<h3 className="text-xl font-medium text-slate-700">{title}</h3>
						<p className="text-sm text-slate-500"> {addedDate}</p>
						<div className="space-x-4 my-4 flex flex-wrap">
							{tags.map((tag, idx) => (
								<button
									key={idx}
									onClick={() => dispatch(toggleTag(tag))}
									className={`whitespace-nowrap rounded-full border px-2.5 py-0.5 text-sm ${
										tagFilters.includes(tag) ? activeClass : ''
									}`}>
									{tag}
								</button>
							))}
						</div>
					</header>
					<p className="">
						<span className="w-[70%]">
							{description.length > 100 ? `${description.substring(0, 120)}...` : description}{' '}
						</span>
					</p>
					<p>
						<span>
							<Tooltip title="Add to reading History by clicking on this button" arrow>
								<button
									onClick={() => {
										dispatch(addToHistoryCart(content));
										toast.success(`${title} read`);
									}}
									className="bg-indigo-700 border-2 border-indigo-700 p-1 rounded-md mt-5 w-full text-white font-bold text-md hover:bg-white hover:text-black duration-500">
									Read more
								</button>
							</Tooltip>
						</span>
					</p>
				</div>
			</div>
		</div>
	);
};

export default ContentCard;
