let ans = await data.json();
  let x = ans.filter((item) => {
    const da = item.title.toLowerCase();
    console.log(da);
    if (da.match("electronics")) {
      return true;
    }
  });
  console.log(x, "......  ..");
}
{/*<div class="image-list">
            <img src="https://n1.sdlcdn.com/imgs/k/f/v/12_april_WB_Festive_kurta_sets_WEB_1-9d9b7.jpg"/>
            </div>
            <div class="image-list">
              <img src="https://n4.sdlcdn.com/imgs/k/k/z/web_banner_07-092e2.jpg"/>
              </div>
              <div class="image-list">
                <img src="https://n3.sdlcdn.com/imgs/j/8/e/Health_ID_Snapdeal_ABDM_1300X410-6c79d.jpg"/>
                </div>*/}