import React from 'react';
import styles from './Card.module.css';
//import secondStyles from './Card2.module.css';

export default function Card() {
  return (
    <div className={styles.container}>
      <div className={styles.header}></div>
      <div className={styles.imgContainer}>
        <img
          src="https://i.pinimg.com/originals/f0/a6/4e/f0a64e32194d341befecc80458707565.jpg"
          alt="img"
        />
      </div>

      <div className={styles.infoContainer}>
        <h3> Fname Lname </h3>
        <h4> Developer</h4>
        <p> any text... </p>
        <button className={styles.but}> view profile</button>
      </div>
    </div>
  );
}
