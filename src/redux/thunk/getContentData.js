import { baseURL } from '../../baseURL';
import { getContent, toggleLoading } from '../actions/contentActions';

const getContentData = () => {
	return async (dispatch, getState) => {
		dispatch(toggleLoading(true));
		const uploadFilters = getState().filter.filters.uploadFilters;

		const res = await fetch(`${baseURL}/api/v1/content?sort=${uploadFilters}`, {
			headers: {
				authorization: `Bearer ${localStorage.getItem('user-token')}`,
			},
		});
		const data = await res.json();

		if (data.data.length) {
			dispatch(getContent(data.data));
			dispatch(toggleLoading(false));
		}
		dispatch(toggleLoading(false));
	};
};

export default getContentData;
