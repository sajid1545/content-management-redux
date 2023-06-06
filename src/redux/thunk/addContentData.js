import axios from 'axios';
import { toast } from 'react-hot-toast';
import { addContent } from '../actions/contentActions';
import { baseURL } from './../../baseURL';

const addContentData = (content) => {
	return async (dispatch, getState) => {
		try {
			const res = await axios.post(`${baseURL}/api/v1/content`, content, {
				headers: {
					'Content-Type': 'application/json',
					authorization: `Bearer ${localStorage.getItem('user-token')}`,
				},
			});

			console.log(res);
			toast.success(res.data.message);
			dispatch(addContent(res.data.result));
		} catch (error) {
			toast.error(error.response.data.message);
		}
	};
};

export default addContentData;
