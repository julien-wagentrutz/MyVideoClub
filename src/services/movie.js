import {getApiUrl} from "./api";

export function getAllGenre() {
    return fetch(
        getApiUrl(
            `/genre/movie/list`,
            {
                language: 'fr-FR',
            }
        )
    ).then(result => result.json());
}

export function getDirectorMovie(id) {
    return fetch(
        getApiUrl(
            `/movie/${id}/credits`,
            {
                language: 'fr-FR'
            }
        )
    ).then(result => result.json())
}


export function getMovie(id) {
    return fetch(
        getApiUrl(
            `/movie/${id}`,
            {
                language: 'fr-FR'
            }
        )
    ).then(result => result.json())
}


export function getAllMovieByGenre(genre,page) {
    return fetch(
        getApiUrl(
            `/discover/movie`,
            {
                language: 'fr-FR',
                with_genres:genre,
                page: page


            }
        )
    ).then(result => result.json())
}

export function searchMovie(searchText, page) {
    return fetch(
        getApiUrl(
            `/search/movie`,
            {
                query: searchText,
                language: 'fr-FR',
                page: page
            }
        )
    ).then(result => result.json());
}