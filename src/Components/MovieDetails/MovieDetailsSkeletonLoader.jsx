import SkeletonLoader from "../SkeletonLoader";
import styles from "./styles.module.scss";

export default function MovieDetailsSkeletonLoader() {
    return (
        <div className={styles.detailsCard}>
            <div className={styles.movieImage}>
                <SkeletonLoader height={"100%"} />
            </div>
            <div className={styles.otherDetails}>
                <div className={styles.movieTitle}>
                    <SkeletonLoader height={"36px"} width={"100%"} />
                </div>
                <div className={styles.ratingAndDuration}>
                    <div className={styles.rating}>
                        <SkeletonLoader height={"20px"} width={"120px"} />
                    </div>
                    <div className={styles.duration}>
                        <SkeletonLoader height={"20px"} width={"40px"} />
                    </div>
                </div>
                <div className={styles.production}>
                    <SkeletonLoader height={"22px"} />
                </div>
                <div className={styles.releaseDate}>
                    <SkeletonLoader height={"20px"} />
                </div>
                <div className={styles.genres}>
                    <SkeletonLoader height={"18px"} width={"25%"} />
                    <SkeletonLoader height={"18px"} width={"25%"} />
                    <SkeletonLoader height={"18px"} width={"25%"} />
                </div>
                <SkeletonLoader height={"20px"} width={"50%"} />
                <SkeletonLoader height={"20px"} width={"25%"} />
                <SkeletonLoader height={"20px"} width={"25%"} />
                <SkeletonLoader height={"20px"} width={"25%"} />
            </div>
        </div>
    );
}
