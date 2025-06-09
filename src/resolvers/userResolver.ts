import axios from 'axios';

export const userResolver = {
  users: async () => {
    const res = await axios.get('http://localhost:5000/users');
    return res.data;
  },
};
