import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from "react-accessible-accordion";
import styles from "./styles.module.scss";

export default function Seasons({ episode, setEpisode, seasonData }) {
    return (
        <div className={styles.seasonsContainer}>
            <div className={styles.episodeTitle}>
                Now playing: S{episode.season} E{episode.number}:{" "}
                {episode.title}
            </div>
            <div className={styles.seasonsList}>
                <Accordion
                    allowZeroExpanded={true}
                    className={styles.accordion}
                >
                    {Object.keys(seasonData).map((season) => {
                        return (
                            <AccordionItem
                                className={styles.accordion__item}
                                key={season}
                            >
                                <AccordionItemHeading>
                                    <AccordionItemButton
                                        className={styles.accordion__button}
                                    >
                                        Season{` ${season}`}
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <div className={styles.episodesList}>
                                    {seasonData[season].map((ep) => {
                                        return (
                                            <AccordionItemPanel
                                                className={
                                                    styles.accordion__panel
                                                }
                                                key={ep.id}
                                            >
                                                <div
                                                    className={`${
                                                        styles.episode
                                                    } ${
                                                        ep.id === episode.id &&
                                                        styles.activeEpisode
                                                    }`}
                                                    onClick={() => {
                                                        setEpisode(ep);
                                                    }}
                                                >
                                                    {`Episode ${ep.number}`}
                                                </div>
                                            </AccordionItemPanel>
                                        );
                                    })}
                                </div>
                            </AccordionItem>
                        );
                    })}
                </Accordion>
            </div>
        </div>
    );
}
