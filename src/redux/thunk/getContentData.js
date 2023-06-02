import { baseURL } from '../../baseURL';
import { getContent } from '../actions/contentActions';

const getContentData = () => {
	return async (dispatch, getState) => {
		const uploadFilters = getState().filter.filters.uploadFilters

		const res = await fetch(`${baseURL}/api/v1/content?sort=${uploadFilters}`);
		const data = await res.json();

		if (data.data.length) {
			dispatch(getContent(data.data));
		}
	};
};

export default getContentData;
