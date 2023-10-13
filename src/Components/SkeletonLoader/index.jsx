import styles from "./styles.module.scss";

export default function SkeletonLoader({ height, width, bgColor }) {
    const loaderStyle = {
        height: height,
        width: width,
        backgroundColor: bgColor,
    };

    return <div className={styles.loader} style={loaderStyle}></div>;
}
