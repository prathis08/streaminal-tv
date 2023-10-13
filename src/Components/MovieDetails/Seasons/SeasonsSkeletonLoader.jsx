import SkeletonLoader from "../../SkeletonLoader";
import styles from "./styles.module.scss";

export default function SeasonsSkeletonLoader() {
    return (
        <div className={styles.seasonsContainer}>
            <div className={styles.episodeTitle}>
                <SkeletonLoader height={"20px"} />
            </div>
            <div className={styles.seasonsList}>
                <SkeletonLoader height={"60px"} />
            </div>
        </div>
    );
}
