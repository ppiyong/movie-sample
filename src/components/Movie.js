import {Link} from 'react-router-dom';

const Movie = ({id, coverImg, title, year, summary, genres}) => {
    return (
        <div>
            <img src={coverImg} alt={title}/>
            <div>
                <h2>
                    <Link to={`/movie/${id}`}>{title}</Link>
                </h2>
                <h3>{year}</h3>
                <p>{summary && summary.length > 235 ? `${summary.slice(0, 235)}...` : summary}</p>
                <ul>
                    {genres && genres.map((g) => {
                        return (
                            <li key={g}>{g}</li>
                        )
                    })}
                </ul>
                <span>========================================================</span>
                <br/><br/><br/>
            </div>
        </div>
    )
}

export default Movie;