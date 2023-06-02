import React from 'react';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsFillTrashFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const ContentList = () => {
	return (
		<div className="flex flex-col justify-center items-center h-full w-full">
			<div className="w-full max-w-7xl mx-auto rounded-lg  bg-white shadow-lg border border-gray-200">
				<div className="w-full overflow-x-auto">
					<table
						className="w-full text-left border border-separate rounded border-slate-200"
						cellspacing="0">
						<tbody>
							<tr className='text-center'>
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
									Description
								</th>
								<th
									scope="col"
									className="h-12 px-6 text-sm font-medium border-l first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-100">
									Action
								</th>
							</tr>
							<tr className="odd:bg-slate-50 text-center">
								<td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 ">
									Designer
								</td>
								<td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 ">
									Carroll Group
								</td>
								<td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 ">
									Member
								</td>
								<td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 ">
									<div class="flex justify-center gap-3 items-center">
										<Link to={''}>
											<button title="Edit">
												<AiOutlineEdit className="w-8 h-8 hover:text-blue-600 rounded-full hover:bg-gray-100 p-1" />
											</button>
										</Link>
										<Link to={''}>
											<button title="Edit">
												<BsFillTrashFill className="w-8 h-8 hover:text-red-600 rounded-full hover:bg-gray-100 p-1" />
											</button>
										</Link>
									</div>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
			{/*<!-- End Striped Table --> */}
		</div>
	);
};

export default ContentList;
