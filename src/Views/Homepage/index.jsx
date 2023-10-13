import useFetch from "../../hooks/useFetch";
import Slider from "../../Components/Slider";
import { API_ENDPOINTS } from "../../API/endpoints";
import styles from "./styles.module.scss";

export default function Homepage() {
    const [trendingMovies, trendingMoviesLoading, trendingMoviesError] =
        useFetch(
            API_ENDPOINTS.STREAMINAL_API_URL +
                API_ENDPOINTS.GET_TRENDING_MOVIES,
            (data) => data.trendingMovies
        );
    const [trendingTvShows, trendingTvShowsLoading, trendingTvShowsError] =
        useFetch(
            API_ENDPOINTS.STREAMINAL_API_URL + API_ENDPOINTS.GET_TRENDING_SHOWS,
            (data) => data.trendingTvShows
        );
    const [latestMovies, latestMoviesLoading, latestMoviesError] = useFetch(
        API_ENDPOINTS.STREAMINAL_API_URL + API_ENDPOINTS.GET_LATEST_MOVIES,
        (data) => data.latestMovies
    );
    const [latestTvShows, latestTvShowsLoading, latestTvShowsError] = useFetch(
        API_ENDPOINTS.STREAMINAL_API_URL + API_ENDPOINTS.GET_LATEST_SHOWS,
        (data) => data.latestTvShows
    );

    return (
        <div className="mainContainer">
            <div className={styles.homepage}>
                <Slider
                    title="Trending Movies"
                    data={trendingMovies}
                    loading={trendingMoviesLoading}
                    error={trendingMoviesError}
                />
                <Slider
                    title="Trending TV Shows"
                    data={trendingTvShows}
                    loading={trendingTvShowsLoading}
                    error={trendingTvShowsError}
                />
                <Slider
                    title="Latest Movies"
                    data={latestMovies}
                    loading={latestMoviesLoading}
                    error={latestMoviesError}
                />
                <Slider
                    title="Latest TV Shows"
                    data={latestTvShows}
                    loading={latestTvShowsLoading}
                    error={latestTvShowsError}
                />
            </div>
        </div>
    );
}
