import { format } from 'date-fns';
import React from 'react';

const ContentCard = ({ content }) => {
	const { title, image, description, tags, createdAt } = content;

	const activeClass = 'bg-purple-100 text-purple-700';

	const addedDate = format(new Date(createdAt), 'PPpp');

	return (
		<div>
			<div className="overflow-hidden  bg-white  shadow-slate-200 shadow-lg relative rounded-3xl border p-3 flex flex-col text-indigo-900">
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
									className="whitespace-nowrap rounded-full border px-2.5 py-0.5 text-sm ">
									{tag}
								</button>
							))}
						</div>
					</header>
					<p>
						{description.length > 100 ? `${description.substring(0, 100)} ...` : description}{' '}
						{description.length > 100 && <button className="text-indigo-700">Read more</button>}{' '}
					</p>
				</div>
			</div>
		</div>
	);
};

export default ContentCard;
