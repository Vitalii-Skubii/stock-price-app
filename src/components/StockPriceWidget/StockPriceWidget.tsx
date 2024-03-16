import React, { useState } from 'react';
import data from '../../data/mockedData.json';
import { Card } from '../Card/Card';
import styles from './StockPriceWidget.module.css';

//main widget that gets data and shows three cards with stock information for three companies

export const StockPriceWidget: React.FC = () => {
  const companies = Object.entries(data).map(([companyName, companyData]) => ({
    companyName,
    companyData,
  }));

const [state]= useState(companies)

  return (
    <div>
      <div className={styles.wrapper}>
        {state.map(({ companyName, companyData }) => (
          <div key={companyName} data-testid="card"> 
            <Card companyData={companyData} companyName={companyName} />
          </div>
        ))}
      </div>
    </div>
  );
};