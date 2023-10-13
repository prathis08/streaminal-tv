import Results from "../Results";
import CardSkeletonLoader from "../MovieCard/CardSkeletonLoader";
import SkeletonLoader from "../SkeletonLoader";
import styles from "./styles.module.scss";

const Slider = ({ title = "", data = [], loading = true, error = false }) => {
    return (
        <div className={styles.sliderContainer}>
            {error ? (
                <h1 className="errorText">Something went wrong.</h1>
            ) : loading ? (
                <SkeletonLoader height={"25px"} width={"200px"} />
            ) : (
                <h2 className={styles.heading}>{title}</h2>
            )}
            {!error && (
                <div className={styles.slider}>
                    <div className={styles.slides}>
                        {loading ? (
                            <CardSkeletonLoader />
                        ) : (
                            <Results results={data} />
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Slider;
