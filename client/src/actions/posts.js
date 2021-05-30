import * as api from '../api';

// Action Creators - functions that return actions using redux thunk
export const getPosts = () => async (dispatch) => {
try {
    const { data } = await api.fetchPosts();

    dispatch({ type: 'FETCH_ALL', payload: data });
} catch (error) {
    console.log(error.message)
}

}