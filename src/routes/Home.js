import {useState, useEffect} from 'react';
import Movie from '../components/Movie';

function Home() {
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    const getMovies = async () => {
        const json = await (
            await fetch(`https://yts.mx/api/v2/list_movies.json?minimum_rating=9.0&sort_by=year`)
        ).json();
        setMovies(json.data.movies);
        setLoading(false);
    };
    useEffect(() => {
        getMovies();
    }, []);
    console.log(`loading is ${loading}`);
    console.log(movies);
    return (
        <div>
            {loading ? (<span>Loading...</span>) : null}
            {movies.map((movie) => {
                return (
                    <Movie
                        key={movie.id}
                        id={movie.id}
                        year={movie.year}
                        coverImg={movie.medium_cover_image}
                        title={movie.title}
                        summary={movie.summary}
                        genres={movie.genres}
                    />);
            })}
        </div>
    );    
}

export default Home;