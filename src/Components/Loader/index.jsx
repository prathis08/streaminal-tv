import styles from "./styles.module.scss";

export default function Loader({ height, bgColor }) {
    const loaderStyle = { height: height, backgroundColor: bgColor };

    return (
        <div className={styles.loader} style={loaderStyle}>
            <div className={styles.ripple}>
                <div></div>
                <div></div>
            </div>
        </div>
    );
}
