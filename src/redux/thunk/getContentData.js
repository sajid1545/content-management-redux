import { baseURL } from '../../baseURL';
import { getContent } from '../actions/contentActions';

const getContentData = () => {
	return async (dispatch, getState) => {
		const res = await fetch(`${baseURL}/api/v1/content`);
		const data = await res.json();

		if (data.data.length) {
			dispatch(getContent(data.data));
		}
	};
};

export default getContentData;
