import React, { useEffect, useState } from "react";
import styles from "./RightView.module.css";

const RightView = ({data}) => {
    const [show,setShow]=useState(false);
    const toggle=()=>
    {
       setShow(!show) ;
    }
  return (
    <section className={styles["right-container"]}>
      
      <h3 className={styles["title"]}>{data?.title}</h3>
      <section className={styles["special-offer"]}>Special offer</section>
      <section className={styles["price-holder"]}>
        <h2>Rs: {data?.price}</h2>
        <span className={styles["actual-price"]}>Rs4000</span>
        <span className={styles["offer"]}>
          {Math.ceil(Math.random() * 100)}% Off
        </span>
      </section>
      <section className={styles["rating-holder"]}>
        <span className={styles["rate"]}>
          {data?.rating?.rate} <i className="fa-sharp fa-solid fa-star" id={styles["star"]}></i>
        </span>
        <span className={styles["rating-count"]}>
          23 ratings and 123 reviews
        </span>
       
      </section>
      <h3>Available Offers</h3>
      <section className={styles["offer-holder"]}>
       <p className={styles["each-offer"]}><img src="https://rukminim1.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90" alt="" />Special Price Get extra 48% off (price inclusive of cashback/coupon) <span className={styles["condition"]}></span></p>
       <p className={styles["each-offer"]}><img src="https://rukminim1.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90" alt="" />Partner Offer Purchase now & get a surprise cashback coupon for January / February 2023 <span className={styles["condition"]}></span></p>
       <p className={styles["each-offer"]}><img src="https://rukminim1.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90" alt="" /> Combo Offer Buy any 1 @MRP, get second freeSee all products<span className={styles["condition"]}></span></p>
       {/* <p className={styles["each-offer"]}><img src="https://rukminim1.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90" alt="" /> <span className={styles["condition"]}></span></p> */}
     
      </section>
      <section className={styles["below-offer"]}>
        <div className={styles["first"]}>
            <img className="" styles={{width:"50px",height:"40px"}} src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48ZWxsaXBzZSBjeD0iOSIgY3k9IjE0LjQ3OCIgZmlsbD0iI0ZGRTExQiIgcng9IjkiIHJ5PSIzLjUyMiIvPjxwYXRoIGZpbGw9IiMyODc0RjAiIGQ9Ik04LjYwOSA3LjAxYy0xLjA4IDAtMS45NTctLjgyNi0xLjk1Ny0xLjg0NSAwLS40ODkuMjA2LS45NTguNTczLTEuMzA0YTIuMDIgMi4wMiAwIDAgMSAxLjM4NC0uNTRjMS4wOCAwIDEuOTU2LjgyNSAxLjk1NiAxLjg0NCAwIC40OS0uMjA2Ljk1OS0uNTczIDEuMzA1cy0uODY0LjU0LTEuMzgzLjU0ek0zLjEzIDUuMTY1YzAgMy44NzQgNS40NzkgOC45MjIgNS40NzkgOC45MjJzNS40NzgtNS4wNDggNS40NzgtOC45MjJDMTQuMDg3IDIuMzEzIDExLjYzNCAwIDguNjA5IDAgNS41ODMgMCAzLjEzIDIuMzEzIDMuMTMgNS4xNjV6Ii8+PC9nPjwvc3ZnPg==" alt="location" /> Deliver to
        </div>
        <div className={styles["second"]}>
            <span className={styles["services"]}>Services</span>
            <span className={styles["cod"]}>Cash on Delivery Available</span>
        </div>
      </section>
      <section className={styles["input-box"]}>
        <div className={styles["box"]}>
            <input type="text" placeholder="Enter Delivery Pincode"/><button>Check</button>
        </div>
      </section>
      <section className={styles["extra"]}>
            <h4>Delivery by26 Jan, Thursday</h4>
            <span>if ordered today</span>
      </section>
      <section className={styles["description"]}>
        <div className={styles["toggle"]} onClick={toggle}>
           <h3>Product Description</h3> {!show ?<i class="fa-solid fa-angle-down"></i>:<i class="fa-solid fa-angle-up"></i>} 
        </div>
       {show && <p> {data?.description}
        </p> }
      </section>
    </section>
  );
};

export default RightView;
