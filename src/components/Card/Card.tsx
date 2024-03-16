import React from 'react';
import { DataProps } from '../../types/types';
import { StockChart } from '../StockChart/StockChart';
import { PriceInfo } from '../PriceInfo/PriceInfo';
import useCardState from './Card.state';
import styles from './Card.module.css';

export const Card: React.FC<DataProps> = (props) => {
  const { companyData, companyName } = props;

  const { currentDate } = useCardState(companyData);

  return (
    <div className={styles.card}>
      <div className={styles.headerWrapper}>
        <h2>{companyName}</h2>
        <span> {currentDate}</span>
      </div>
      <StockChart times={companyData.times} prices={companyData.prices} />
      <PriceInfo prices={companyData.prices} />
    </div>
  );
};
