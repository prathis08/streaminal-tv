import { useState, useEffect, useMemo } from "react";
import { useLocation } from "react-router-dom";
import useFetch from "../../hooks/useFetch";

import VideoPlayer from "../../Components/VideoPlayer";
import MovieDetails from "../../Components/MovieDetails";
import Seasons from "../../Components/MovieDetails/Seasons";

import Utilities from "../../Utilities";
import { API_ENDPOINTS } from "../../API/endpoints";

import styles from "./styles.module.scss";
import MovieDetailsSkeletonLoader from "../../Components/MovieDetails/MovieDetailsSkeletonLoader";
import SeasonsSkeletonLoader from "../../Components/MovieDetails/Seasons/SeasonsSkeletonLoader";

function useQuery() {
    const { search } = useLocation();
    return useMemo(() => new URLSearchParams(search), [search]);
}

export default function MoviePage() {
    const query = useQuery();
    const [episode, setEpisode] = useState({});
    const shouldFetchStream = episode.id && query.get("id");

    const MOVIE_DETAILS_URL = `${
        API_ENDPOINTS.CONSUMET_URL
    }movies/flixhq/info?id=${query.get("id")}`;

    const MOVIE_STREAM_URL = shouldFetchStream
        ? `${API_ENDPOINTS.CONSUMET_URL}movies/flixhq/watch?episodeId=${
              episode.id
          }&mediaId=${query.get("id")}&server=upcloud`
        : null;

    const [movieDetails, movieDetailsLoading, movieDetailsError] =
        useFetch(MOVIE_DETAILS_URL);
    const [streamData, streamDataLoading, streamDataError] = useFetch(
        MOVIE_STREAM_URL,
        (data) => Utilities.cleanStreamData(data)
    );

    const [seasonData, setSeasonData] = useState({});

    useEffect(() => {
        window.scroll({
            top: 0,
            left: 0,
            behavior: "smooth",
        });
    }, []);

    useEffect(() => {
        if (!movieDetails || Object.keys(movieDetails).length === 0) return;

        let episodes = movieDetails.episodes;
        let seasonDataObj = {};
        for (let index = 0; index < episodes.length; index++) {
            const episode = episodes[index];
            if (episode.season in seasonDataObj) {
                seasonDataObj[episode.season].push(episode);
            } else {
                seasonDataObj[episode.season] = [episode];
            }
        }

        setEpisode(movieDetails.episodes[0]);
        setSeasonData(seasonDataObj);
    }, [movieDetails]);

    return (
        <div className={styles.mainDiv}>
            <div className={styles.movieDetails}>
                <VideoPlayer
                    sources={streamData && streamData.sources}
                    subtitles={streamData && streamData.subtitles}
                    isLoading={streamDataLoading}
                    error={streamDataError}
                />
                <div className={styles.infoAndSeasons}>
                    {!movieDetailsError ? (
                        movieDetailsLoading ? (
                            <MovieDetailsSkeletonLoader />
                        ) : (
                            <MovieDetails
                                title={movieDetails.title}
                                image={movieDetails.image}
                                rating={movieDetails.rating}
                                duration={movieDetails.duration}
                                production={movieDetails.production}
                                releaseDate={movieDetails.releaseDate}
                                genres={movieDetails.genres}
                                casts={movieDetails.casts}
                            />
                        )
                    ) : (
                        <h1 className="errorText">
                            There was an error loading movie details.
                        </h1>
                    )}

                    {!movieDetailsError ? (
                        movieDetailsLoading ? (
                            <SeasonsSkeletonLoader />
                        ) : (
                            movieDetails.type === "TV Series" &&
                            Object.keys(seasonData).length !== 0 && (
                                <Seasons
                                    episode={episode}
                                    setEpisode={setEpisode}
                                    seasonData={seasonData}
                                />
                            )
                        )
                    ) : (
                        <h1 className="errorText">
                            There was an error loading season details.
                        </h1>
                    )}
                </div>
            </div>
        </div>
    );
}
