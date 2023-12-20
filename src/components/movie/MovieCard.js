import React from 'react';
import { useNavigate } from "react-router-dom";
import Button from '../button/Button';

const MovieCard = ({ movie }) => {
    const {
        title, release_date, vote_average, poster_path, id
    } = movie
    const navigate = useNavigate();
    return (
        <div className="movie-card flex flex-col p-3 rounded-lg bg-slate-800 h-full select-none">
            <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt=""
                className='w-full h-[250px] object-cover rounded-lg mb-5'
            />
            <div className="flex flex-col flex-1">
                <h3 className='text-xl font-medium mb-3'>{title}</h3>
                <div className="flex justify-between items-center opacity-50 text-sm mb-8">
                    <span>{new Date(release_date).getFullYear()}</span>
                    <span>{vote_average}</span>
                </div>
                <Button
                    onClickId={() => navigate(`/movie/${id}`)}
                    bgColor='secondary'
                >Watch Now!</Button>
            </div>
        </div>
    );
};

export default MovieCard;