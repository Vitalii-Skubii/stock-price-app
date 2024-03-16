import React from 'react';
import styles from './PriceInfo.module.css';
import usePriceInfoState from './PriceInfo.state';

export const PriceInfo: React.FC<{ prices: number[] }> = ({ prices }) => {
  const { stringifiedCurrentPrice, stringifiedPercentage, percentageChange } =
    usePriceInfoState(prices);

  return (
    <div className={styles.wrapper}>
      <span>${stringifiedCurrentPrice}</span>
      <div className={styles.trendWrapper}>
        {percentageChange >= 0 ? (
          <span className={`${styles.materialIcons} ${styles.up}`}>
            trending_up
          </span>
        ) : (
          <span className={`${styles.materialIcons} ${styles.down}`}>
            trending_down
          </span>
        )}
        <span> {stringifiedPercentage}%</span>
      </div>
    </div>
  );
};
