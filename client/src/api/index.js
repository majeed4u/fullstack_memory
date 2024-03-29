import axios from 'axios';

const url = 'https://memory-api-h36n.onrender.com/posts';

export const fetchPosts = () => axios.get(url);

// export default fetchPosts;

export const createPost = (newPost) => axios.post(url, newPost);
export const updatePost = (id, updatedPost) =>
  axios.patch(`${url}/${id}`, updatedPost);
export const deletePost = (id) => axios.delete(`${url}/${id}`);

export const likePost = (id) => axios.patch(`${url}/${id}/likePost`);
