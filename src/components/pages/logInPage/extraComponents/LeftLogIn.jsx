import React from 'react'
import styles from "./LeftLogIn.module.css"
const LeftLogIn = () => {
  return (
    <section className={styles["left-side"]}>
      <h2 className={styles["login-text"]}>Log In</h2>
      <div className={styles["text"]}>
        get access to your wishlists,orders and recommendation
      </div>
      
    </section>
  )
}

export default LeftLogIn
