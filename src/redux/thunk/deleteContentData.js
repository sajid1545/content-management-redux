import { toast } from 'react-hot-toast';
import { baseURL } from '../../baseURL';
import { deleteContent } from '../actions/contentActions';

const deleteContentData = (id) => {
	return async (dispatch, getState) => {
		const res = await fetch(`${baseURL}/api/v1/content/${id}`, {
			method: 'DELETE',
		});

		const data = await res.json();

		if (data.status === 'success') {
			toast.success(`Deleted successful`);
			dispatch(deleteContent(id));
		}
	};
};

export default deleteContentData;
