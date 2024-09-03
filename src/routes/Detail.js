import {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import Movie from '../components/Movie';

function Detail() {
    const {id} = useParams();
    const [loading, setLoading] = useState(false);
    const [movie, setMovie] = useState({});

    const getMovie = async () => {
        const json = await (
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json();
        setMovie(json.data.movie);
        setLoading(false);
    }
    useEffect(() => {
        getMovie();
    }, []);
    return (
        <div>
            {loading ? (<span>Loading...</span>) : null}
            <Movie
                id={movie.id}
                year={movie.year}
                coverImg={movie.large_cover_image}
                title={movie.title}
                summary={movie.description_full}
                genres={movie.genres}
            />;
        </div>
    );
}

export default Detail;