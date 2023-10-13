import SkeletonLoader from "../SkeletonLoader";
import styles from "./styles.module.scss";

export default function CardSkeletonLoader({ cardsCount = 5 }) {
    return Array(cardsCount)
        .fill(0)
        .map((_, i) => {
            return (
                <div className={styles.movieCard} key={i}>
                    <SkeletonLoader height={"260px"} />
                    <SkeletonLoader height={"24px"} width={"80%"} />
                    <SkeletonLoader height={"26px"} width={"50%"} />
                    <SkeletonLoader height={"24px"} width={"30%"} />
                </div>
            );
        });
}
