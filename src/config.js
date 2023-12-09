// export const fetcher = (...args) => fetch(...args).then(res => res.json())
import axios from 'axios';


// api moviedb
const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNGNlODZhYjc1YjE5MDU2NzUyMDcxOGU4MTkzNTU0YyIsInN1YiI6IjY1NjJjNTUzYTZjMTA0MDExYmRkZjVlZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.X__x7bxR3f77mqOzD3O-UBcLxgFWhTK7vPPTFeQUhAc'
    }
};
export const fetcher = (url) =>
    axios
        .get(url, { headers: options.headers })
        .then((res) => res.data);
