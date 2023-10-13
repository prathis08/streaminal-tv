import { useEffect } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";

import Results from "../../Components/Results";
import CardSkeletonLoader from "../../Components/MovieCard/CardSkeletonLoader";
import SkeletonLoader from "../../Components/SkeletonLoader";

import { API_ENDPOINTS } from "../../API/endpoints";
import styles from "./styles.module.scss";

export default function SearchResults() {
    const { query } = useParams();
    const [results, resultsLoading, resultsError] = useFetch(
        `${API_ENDPOINTS.CONSUMET_URL}movies/flixhq/${query}`,
        (data) => data.results
    );

    useEffect(() => {
        window.scroll({
            top: 0,
            left: 0,
            behavior: "smooth",
        });
    }, []);

    return (
        <div className="mainContainer">
            {!resultsError ? (
                resultsLoading ? (
                    <>
                        <SkeletonLoader height="25px" width="200px" />
                        <div className={styles.resultsLoader}>
                            <CardSkeletonLoader cardsCount={3} />
                        </div>
                    </>
                ) : (
                    <div className={styles.results}>
                        {results.length === 0 ? (
                            <div className={styles.noResults}>
                                {`No results found for '${query}'`}
                            </div>
                        ) : (
                            <Results results={results} />
                        )}
                    </div>
                )
            ) : (
                <h1 className="errorText">
                    There was an error loading search results.
                </h1>
            )}
        </div>
    );
}
