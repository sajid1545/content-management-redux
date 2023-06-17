import React from 'react';
import { useDispatch } from 'react-redux';

const ContentList = () => {
	const dispatch = useDispatch();

	// const contents = useSelector((state) => state.content.contents);

	// useEffect(() => {
	// 	dispatch(getContentData());
	// }, [dispatch]);

	return (
		<div className="flex flex-col justify-center items-center h-full w-full">
			<div className="w-full max-w-7xl mx-auto rounded-lg  bg-white shadow-lg border border-gray-200">
				<div className="w-full overflow-x-auto">
					<table
						className="w-full text-left border border-separate rounded border-slate-200"
						cellSpacing="0">
						<tbody>
							<tr className="text-center">
								<th
									scope="col"
									className="h-12 px-6 text-sm font-medium border-l first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-100">
									Image
								</th>
								<th
									scope="col"
									className="h-12 px-6 text-sm font-medium border-l first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-100">
									Title
								</th>
								<th
									scope="col"
									className="h-12 px-6 text-sm font-medium border-l first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-100">
									Created Date
								</th>
								<th
									scope="col"
									className="h-12 px-6 text-sm font-medium border-l first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-100">
									Action
								</th>
							</tr>
							{/* {contents.map((content) => {
								const { image, title, createdAt, _id } = content;
								const formattedDate = format(new Date(createdAt), 'PPpp');
								return (
									<tr key={content._id} className="odd:bg-slate-50 text-center">
										<td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 ">
											<img
												alt="content"
												src={image}
												className="mx-auto object-cover rounded-full h-10 w-10 "
											/>
										</td>
										<td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 ">
											{title}
										</td>
										<td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 ">
											{formattedDate}
										</td>
										<td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 ">
											<div className="flex justify-center gap-3 items-center">
												<Tooltip arrow title="Edit">
													<Link to={'/dashboard/edit-content'} state={{ _id }}>
														<button title="Edit">
															<AiOutlineEdit className="w-8 h-8 hover:text-blue-600 rounded-full hover:bg-gray-100 p-1" />
														</button>
													</Link>
												</Tooltip>

												<Tooltip arrow title="Delete">
													<button onClick={() => dispatch(deleteContentData(_id))}>
														<BsFillTrashFill className="w-8 h-8 hover:text-red-600 rounded-full hover:bg-gray-100 p-1" />
													</button>
												</Tooltip>
											</div>
										</td>
									</tr>
								);
							})} */}
						</tbody>
					</table>
				</div>
			</div>
			{/*<!-- End Striped Table --> */}
		</div>
	);
};

export default ContentList;
