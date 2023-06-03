import { toast } from 'react-hot-toast';
import { baseURL } from './../../baseURL';

const updateContentData = (content, id) => {
	return async (dispatch, getState) => {
		const res = await fetch(`${baseURL}/api/v1/content/${id}`, {
			method: 'PATCH',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(content),
		});

		const data = await res.json();

		if (data.status === 'success') {
			toast.success(data.status);
			dispatch(updateContentData(content));
		}
	};
};

export default updateContentData;
