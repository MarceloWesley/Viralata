import { useEffect, useState } from "react";
import styles from "./readingProgressBar.module.scss";

export function ReadingProgressBar({ target }: any) {
  const [readingProgress, setReadingProgress] = useState(0);
  const scrollListener = () => {
    if (!target.current) {
      return;
    }
    const element = target?.current;
    const totalHeight =
      element.clientHeight - element.offsetTop - window.innerHeight;
    const windowScrollTop =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;
    if (windowScrollTop === 0) {
      return setReadingProgress(0);
    }
    if (windowScrollTop > totalHeight) {
      return setReadingProgress(100);
    }
    setReadingProgress((windowScrollTop / totalHeight) * 100);
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollListener);
    return () => window.removeEventListener("scroll", scrollListener);
  });
  return (
    <div
      className={styles.readingProgressBar}
      style={{ width: `${readingProgress}%` }}
    />
  );
}
