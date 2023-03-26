import axios from '../custom-axios/axios';

const labEmtService = {
    fetchBooks: () => {
        return axios.get("/books");
    }
}

export default labEmtService;