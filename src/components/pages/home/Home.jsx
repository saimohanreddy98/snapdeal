import React from 'react'
import CatelogCard from './extraComponets/catelogCard/CatelogCard';
import styles from "./Home.module.css";

      
  

const Home = () => {
  return (
    <section className={styles["home"]}>
       <div class="image-container">
          <div class="image-list">
            <img src="https://n1.sdlcdn.com/imgs/k/f/v/12_april_WB_Kitchen_Essentials_WEB-cca82.jpg"/>
            </div>
            <div class="image-list">
              <img src="https://n1.sdlcdn.com/imgs/k/f/v/12_april_WB_Festive_kurta_sets_WEB_1-9d9b7.jpg"/>
              </div>
           
                <div class="image-list">
                  <img src="https://n3.sdlcdn.com/imgs/j/8/e/Health_ID_Snapdeal_ABDM_1300X410-6c79d.jpg"/>
                  </div>
                  </div>
       <CatelogCard text="electronics" category="electronics" path="electronics"/>
      <CatelogCard text="cloth" category="cloth" path="cloth"/>
      <CatelogCard text="jewelery" category="jewelery" path="jewelery"/>
      
    </section>
  )
  }

export default Home
