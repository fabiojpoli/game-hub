import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '434c3c955a864e3eb8a034aa6563027b'
    }
});