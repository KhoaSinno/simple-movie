import React from 'react';
import { fetcher } from '../config';
import useSWR from 'swr';

const UseFetchMovie = (postFix) => {
    const { data, error, isLoading } = useSWR(
        `https://api.themoviedb.org/3/${postFix}`,
        fetcher
    );
    const dataMovie = data || []
    return { dataMovie, error, isLoading }

};

export default UseFetchMovie;