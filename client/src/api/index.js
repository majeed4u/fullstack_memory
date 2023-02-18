import axios from 'axios';

const url = 'http://144.24.222.57:5000/posts';

export const fetchPosts = () => axios.get(url);

// export default fetchPosts;

export const createPost = (newPost) => axios.post(url, newPost);
export const updatePost = (id, updatedPost) =>
  axios.patch(`${url}/${id}`, updatedPost);
export const deletePost = (id) => axios.delete(`${url}/${id}`);

export const likePost = (id) => axios.patch(`${url}/${id}/likePost`);
