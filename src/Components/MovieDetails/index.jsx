import { AiOutlineStar } from "react-icons/ai";
import styles from "./styles.module.scss";

export default function MovieDetails({
    title,
    image,
    rating,
    duration,
    production,
    releaseDate,
    genres,
    casts,
}) {
    return (
        <div className={styles.detailsCard}>
            <img
                src={image}
                className={styles.movieImage}
                alt={title}
                onError={({ currentTarget }) => {
                    currentTarget.onerror = null; // prevents looping
                    currentTarget.src = "/logo512.png";
                }}
                loading="lazy"
            />
            <div className={styles.otherDetails}>
                <div className={styles.movieTitle}>{title}</div>
                <div className={styles.ratingAndDuration}>
                    <div className={styles.rating}>
                        <AiOutlineStar size={20} />
                        {rating}
                    </div>
                    <div className={styles.duration}>{duration}</div>
                </div>
                <div className={styles.production}>{production}</div>
                <div className={styles.releaseDate}>{releaseDate}</div>
                <div className={styles.genres}>
                    {genres &&
                        genres.map((genre) => {
                            return (
                                <div className={styles.tag} key={genre}>
                                    {genre}
                                </div>
                            );
                        })}
                </div>
                <b>Starring: </b>
                <div className={styles.cast}>
                    {casts &&
                        casts.map((actor) => {
                            return (
                                <div className={styles.actor} key={actor}>
                                    {actor}
                                </div>
                            );
                        })}
                </div>
            </div>
        </div>
    );
}
