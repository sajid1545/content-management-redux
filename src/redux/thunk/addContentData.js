import { toast } from 'react-hot-toast';
import { addContent } from '../actions/contentActions';
import { baseURL } from './../../baseURL';

const addContentData = (content) => {
	return async (dispatch, getState) => {
		const res = await fetch(`${baseURL}/api/v1/content`, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(content),
		});

		const data = await res.json();

		if (data.status === 'success') {
			toast.success(data.status);
			dispatch(addContent(data.result));
		}
	};
};

export default addContentData;
