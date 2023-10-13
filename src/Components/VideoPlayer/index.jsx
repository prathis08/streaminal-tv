import NetPlayer from "netplayer";
import Loader from "../Loader";
import styles from "./styles.module.scss";

export default function VideoPlayer({ sources, subtitles, isLoading, error }) {
    return (
        <div className={styles.videoDiv}>
            {!error ? (
                isLoading ? (
                    <Loader bgColor="#000" />
                ) : (
                    <NetPlayer
                        sources={sources}
                        subtitles={subtitles}
                        hlsConfig={{
                            maxLoadingDelay: 4,
                            minAutoBitrate: 0,
                            lowLatencyMode: true,
                        }}
                        autoPlay={true}
                    />
                )
            ) : (
                <img
                    src="https://http.cat/521.jpg"
                    alt="service down"
                    className={styles.errorImage}
                />
            )}
        </div>
    );
}
