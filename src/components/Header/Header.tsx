import styles from './Header.module.css';

export const Header = () => {
  return (
    <div className={styles.wrapper}>
      <span className={styles.materialIcons}>price_check</span>
      <h1>Stock Charts</h1>
    </div>
  );
};
