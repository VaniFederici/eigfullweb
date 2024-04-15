// Carousel

function silderRender() {
  const container = document.getElementById("slider");
 const screenWidth = window.innerWidth;
 container.innerHTML = "";



  if (screenWidth <= 899) {
    container.innerHTML = `
      <div class="carousel-item active">
        <div class="card-wrapper">
          <div class="card">
            <img class="card-image" src="./assets/card-1.png" alt="">
            <h4>RULES REWRITTEN</h4>
            <p>Rewrite the rules of coverage with a seamless blend of
              comprehensive benefits and personalized care,
              empowering you to lead a healthy and active lifestyle.</p>
          </div>
        </div>
      </div>
      <div class="carousel-item">
        <div class="card-wrapper">
          <div class="card">
            <img class="card-image" src="./assets/card-2.png" alt="">
            <h4>DRIVE WITH CONFIDENCE</h4>
            <p>Elevate your driving experience with our car insurance,
              providing unparalleled coverage and freedom on the
              open road.</p>
          </div>
        </div>
      </div>
      <div class="carousel-item">
        <div class="card-wrapper">
          <div class="card">
            <img class="card-image" src="./assets/card-3.jpg" alt="">
            <h4>SAFE HAVEN</h4>
            <p>Provide a solid foundation and peace of mind for you
              and your loved ones, allowing you to feel secure and at
              ease in the place you call home.</p>
          </div>
        </div>
      </div>
      <div class="carousel-item">
        <div class="card-wrapper">
          <div class="card">
            <img class="card-image" src="./assets/card-4.png" alt="">
            <h4>SHIELD OF PROTECTION</h4>
            <p>Give yourself the confidence to pursue your business
              ambitions. Our business insurance safeguards your
              hard work and dedication while allowing you to focus
              on your passion and growth.</p>
          </div>
        </div>
      </div>
      <div class="carousel-item">
        <div class="card-wrapper">
          <div class="card">
            <img class="card-image" src="./assets/card-5.jpg" alt="">
            <h4>WORKFORCE SAFETY</h4>
            <p>compensation insurance, providing financial assistance
              and medical care for employees in times of need.</p>
          </div>
        </div>
      </div>  
      <div class="carousel-item">
        <div class="card-wrapper">
          <div class="card">
            <img class="card-image" src="./assets/card-6.jpg" alt="">
            <h4>FAMILY FORTRESS</h4>
            <p>Fortify your family's future with our life insurance,
              offering a secure foundation of financial stability and
              unwavering support.</p>
          </div>
        </div>
      </div>        
    `;
  }

  if (screenWidth >= 900 &  screenWidth <=1399) {
    container.innerHTML = `
      <div class="carousel-item active">
        <div class="card-wrapper">
          <div class="card">
            <img class="card-image" src="./assets/card-1.png" alt="">
            <h4>RULES REWRITTEN</h4>
            <p>Rewrite the rules of coverage with a seamless blend of
              comprehensive benefits and personalized care,
              empowering you to lead a healthy and active lifestyle.</p>
          </div>
          <div class="card">
            <img class="card-image" src="./assets/card-2.png" alt="">
            <h4>DRIVE WITH CONFIDENCE</h4>
            <p>Elevate your driving experience with our car insurance,
              providing unparalleled coverage and freedom on the
              open road.</p>
          </div>
        </div>
      </div>
      <div class="carousel-item">
        <div class="card-wrapper">
          <div class="card">
            <img class="card-image" src="./assets/card-3.jpg" alt="">
            <h4>SAFE HAVEN</h4>
            <p>Provide a solid foundation and peace of mind for you
              and your loved ones, allowing you to feel secure and at
              ease in the place you call home.</p>
          </div>
          <div class="card">
            <img class="card-image" src="./assets/card-4.png" alt="">
            <h4>SHIELD OF PROTECTION</h4>
            <p>Give yourself the confidence to pursue your business
              ambitions. Our business insurance safeguards your
              hard work and dedication while allowing you to focus
              on your passion and growth.</p>
          </div>
        </div>
      </div>
      <div class="carousel-item">
        <div class="card-wrapper">
          <div class="card">
            <img class="card-image" src="./assets/card-5.jpg" alt="">
            <h4>WORKFORCE SAFETY</h4>
            <p>compensation insurance, providing financial assistance
              and medical care for employees in times of need.</p>
          </div>
          <div class="card">
            <img class="card-image" src="./assets/card-6.jpg" alt="">
            <h4>FAMILY FORTRESS</h4>
            <p>Fortify your family's future with our life insurance,
              offering a secure foundation of financial stability and
              unwavering support.</p>
          </div>
        </div>
      </div>          
    `;
  }
  if (screenWidth >= 1400) {
    container.innerHTML = `
      <div class="carousel-item active "> 
         <div class="card-wrapper">
          <div class="card">
            <img class="card-image" src="./assets/card-1.png" alt="">
            <h4>RULES REWRITTEN</h4>
            <p>Rewrite the rules of coverage with a seamless blend of
              comprehensive benefits and personalized care,
              empowering you to lead a healthy and active lifestyle.</p>
          </div>
          <div class="card">
            <img class="card-image" src="./assets/card-2.png" alt="">
            <h4>DRIVE WITH CONFIDENCE</h4>
            <p>Elevate your driving experience with our car insurance,
              providing unparalleled coverage and freedom on the
              open road.</p>
          </div>
          <div class="card">
            <img class="card-image" src="./assets/card-3.jpg" alt="">
            <h4>SAFE HAVEN</h4>
            <p>Provide a solid foundation and peace of mind for you
              and your loved ones, allowing you to feel secure and at
              ease in the place you call home.</p>
          </div>
        </div> 
      </div>
       <div class="carousel-item">
        <div class="card-wrapper">
          <div class="card">
            <img class="card-image" src="./assets/card-4.png" alt="">
            <h4>SHIELD OF PROTECTION</h4>
            <p>Give yourself the confidence to pursue your business
              ambitions. Our business insurance safeguards your
              hard work and dedication while allowing you to focus
              on your passion and growth.</p>
          </div>
          <div class="card">
            <img class="card-image" src="./assets/card-5.jpg" alt="">
            <h4>WORKFORCE SAFETY</h4>
            <p>Ensure workplace security with our reliable workers
              compensation insurance, providing financial assistance
              and medical care for employees in times of need.</p>
          </div>
          <div class="card">
            <img class="card-image" src="./assets/card-6.jpg" alt="">
            <h4>FAMILY FORTRESS</h4>
            <p>Fortify your family's future with our life insurance,
              offering a secure foundation of financial stability and
              unwavering support.</p>
          </div>
        </div>
       `;
  }
}

window.addEventListener("load", silderRender);
window.addEventListener("resize", silderRender);

//section win-slider 

function renderWinSlider(){
const win = document.getElementById("win-slider");
 const sliderWidth = window.innerWidth;
 win.innerHTML = "";


 if (sliderWidth <= 899) {
  win.innerHTML = `<div class="carousel-item active "> 
  <div class="card-wrapper">
  <div class="slick">
      <img class="star" src="./assets/review-star.png"/>
      <h4>“VERY EASY TO TALK TO”</h4>
      <p>This agency was highly recommended from a
        very respected businesswoman in my life. We
        worked with Jordan Venner for homeowners
        insurance for three properties and auto coverage
        as well. He is very easy to talk to, clearly knows
        his busin.</p>
      <h6>Nicky Kolatch</h6>
    </div>
  </div>
</div>
<div class="carousel-item">
  <div class="card-wrapper">
  <div class="slick">
      <img class="star" src="./assets/review-star.png"/>
      <h4>“GOOD JOB”</h4>
      <p>I have been a customer of Equity Insurance
        Group for over a decade and they have always
        done a good job at taking care of my insurance
        needs and checking on me and my coverage.</p>
        <h6>Gregory Koenig</h6> 
    </div>
  </div>
</div>
  <div class="carousel-item">
    <div class="card-wrapper">
    <div class="slick">
        <img class="star" src="./assets/review-star.png"/>
        <h4>“THEY MADE IT EASY”</h4>
        <p>I had multiple polices at multiple carriers and
          things were getting hard to manage. Jordan and
          team helped me bundle everything at one place
          and even saved me some money in the process.
          They made it easy to change!</p>
        <h6>M. DeOreo</h6> 
      </div>
    </div>
</div>
<div class="carousel-item">
  <div class="card-wrapper">
  <div class="slick">
      <img class="star" src="./assets/review-star.png"/>
      <h4>“I COULDN'T BE HAPPIER”</h4>
      <p>There is so much to consider when shopping for
        new or different insurance, but EIG does all of the
        heavy lifting for you! I couldn't be happier with
        the ease and professionalism of this shop, and
        look forward to a continued relationship!</p>
        <h6>Jason Hornyak</h6> 
    </div>
  </div>
</div>
<div class="carousel-item">
  <div class="card-wrapper">
  <div class="slick">
      <img class="star" src="./assets/review-star.png"/>
      <h4>“THE HIGHEST”</h4>
      <p>You can't beat this team! Helpful, responsive,
        informative, and caring. The highest
        recommendations from our family, get them in
        your corner.</p>
        <h6>Nick Evers</h6>
    </div>
  </div>
</div>
<div class="carousel-item">
  <div class="card-wrapper">
  <div class="slick">
      <img class="star" src="./assets/review-star.png"/>
      <h4>“HIGHLY RECOMMENDED”</h4>
      <p>Wonderful working with Kyle and the team at
        Equity! This was the most personal and effective
        insurance brokerage relationship I've ever had.
        Highly recommended.</p>
      <h6>David Champion</h6> 
    </div>
  </div>
</div>
<div class="carousel-item">
  <div class="card-wrapper">
  <div class="slick">
      <img class="star" src="./assets/review-star.png"/>
      <h4>“QUICK AND MORE COVERAGE”</h4>
      <p>Jordan Venner assisted me after I received a
        super high quote from my normal carrier. He was
        quick in finding a quote that fit my budget and
        had more coverage than the quote my normal
        carrier provided. I was very pleased as this was
        very painless process.</p>
        <h6>Autumn Washington</h6>
    </div>
  </div>
</div>
<div class="carousel-item">
  <div class="card-wrapper">
  <div class="slick">
      <img class="star" src="./assets/review-star.png"/>
      <h4>“RESPONSIVENESS”</h4>
      <p>I had an exceptional experience with Equity
        Insurance Group. Their responsiveness was truly
        remarkable, ensuring that all my inquiries and
        concerns were addressed promptly. The team
        they had in place was equally impressive, always
        ready to provide assistance and guidance
        whenever needed. During the crucial time of
        purchasing a new home and vehicles, our
        representative, Jordan, went the extra mile to
        secure the best coverage options for me. Their
        dedication and commitment to ensuring my
        safety and protection made me feel truly valued
        and secure throughout the entire</p>
        <h6>Sonya Contino</h6>
    </div>
  </div>
  </div>
</div>
`
 }
 if (sliderWidth >= 900 &  sliderWidth <=1399) {
  win.innerHTML = `<div class="carousel-item active "> 
  <div class="card-wrapper">
  <div class="slick">
      <img class="star" src="./assets/review-star.png"/>
      <h4>“VERY EASY TO TALK TO”</h4>
      <p>This agency was highly recommended from a
        very respected businesswoman in my life. We
        worked with Jordan Venner for homeowners
        insurance for three properties and auto coverage
        as well. He is very easy to talk to, clearly knows
        his busin.</p>
      <h6>Nicky Kolatch</h6>
    </div>
    <div class="slick">
      <img class="star" src="./assets/review-star.png"/>
      <h4>“GOOD JOB”</h4>
      <p>I have been a customer of Equity Insurance
        Group for over a decade and they have always
        done a good job at taking care of my insurance
        needs and checking on me and my coverage.</p>
        <h6>Gregory Koenig</h6> 
    </div>
  </div>
</div>
  <div class="carousel-item">
    <div class="card-wrapper">
    <div class="slick">
        <img class="star" src="./assets/review-star.png"/>
        <h4>“THEY MADE IT EASY”</h4>
        <p>I had multiple polices at multiple carriers and
          things were getting hard to manage. Jordan and
          team helped me bundle everything at one place
          and even saved me some money in the process.
          They made it easy to change!</p>
        <h6>M. DeOreo</h6> 
      </div>
      <div class="slick">
        <img class="star" src="./assets/review-star.png"/>
        <h4>“I COULDN'T BE HAPPIER”</h4>
        <p>There is so much to consider when shopping for
          new or different insurance, but EIG does all of the
          heavy lifting for you! I couldn't be happier with
          the ease and professionalism of this shop, and
          look forward to a continued relationship!</p>
          <h6>Jason Hornyak</h6> 
      </div>
    </div>
</div>
<div class="carousel-item">
  <div class="card-wrapper">
  <div class="slick">
      <img class="star" src="./assets/review-star.png"/>
      <h4>“THE HIGHEST”</h4>
      <p>You can't beat this team! Helpful, responsive,
        informative, and caring. The highest
        recommendations from our family, get them in
        your corner.</p>
        <h6>Nick Evers</h6>
    </div>
    <div class="slick">
      <img class="star" src="./assets/review-star.png"/>
      <h4>“HIGHLY RECOMMENDED”</h4>
      <p>Wonderful working with Kyle and the team at
        Equity! This was the most personal and effective
        insurance brokerage relationship I've ever had.
        Highly recommended.</p>
      <h6>David Champion</h6> 
    </div>
  </div>
</div>
<div class="carousel-item">
  <div class="card-wrapper">
  <div class="slick">
      <img class="star" src="./assets/review-star.png"/>
      <h4>“QUICK AND MORE COVERAGE”</h4>
      <p>Jordan Venner assisted me after I received a
        super high quote from my normal carrier. He was
        quick in finding a quote that fit my budget and
        had more coverage than the quote my normal
        carrier provided. I was very pleased as this was
        very painless process.</p>
        <h6>Autumn Washington</h6>
    </div>
    <div class="slick">
      <img class="star" src="./assets/review-star.png"/>
      <h4>“RESPONSIVENESS”</h4>
      <p>I had an exceptional experience with Equity
        Insurance Group. Their responsiveness was truly
        remarkable, ensuring that all my inquiries and
        concerns were addressed promptly. The team
        they had in place was equally impressive, always
        ready to provide assistance and guidance
        whenever needed. During the crucial time of
        purchasing a new home and vehicles, our
        representative, Jordan, went the extra mile to
        secure the best coverage options for me. Their
        dedication and commitment to ensuring my
        safety and protection made me feel truly valued
        and secure throughout the entire</p>
        <h6>Sonya Contino</h6>
    </div>
  </div>
</div>
`
 }
 if (sliderWidth >= 1400) {
  win.innerHTML = `<div class="carousel-item active "> 
  <div class="card-wrapper">
    <div class="slick">
      <img class="star" src="./assets/review-star.png"/>
      <h4>“VERY EASY TO TALK TO”</h4>
      <p>This agency was highly recommended from a
        very respected businesswoman in my life. We
        worked with Jordan Venner for homeowners
        insurance for three properties and auto coverage
        as well. He is very easy to talk to, clearly knows
        his busin.</p>
      <h6>Nicky Kolatch</h6>
    </div>
    <div class="slick">
      <img class="star" src="./assets/review-star.png"/>
      <h4>“GOOD JOB”</h4>
      <p>I have been a customer of Equity Insurance
        Group for over a decade and they have always
        done a good job at taking care of my insurance
        needs and checking on me and my coverage.</p>
        <h6>Gregory Koenig</h6> 
    </div>
    <div class="slick">
      <img class="star" src="./assets/review-star.png"/>
      <h4>“THEY MADE IT EASY”</h4>
      <p>I had multiple polices at multiple carriers and
        things were getting hard to manage. Jordan and
        team helped me bundle everything at one place
        and even saved me some money in the process.
        They made it easy to change!</p>
      <h6>M. DeOreo</h6> 
    </div>
    <div class="slick">
      <img class="star" src="./assets/review-star.png"/>
      <h4>“I COULDN'T BE HAPPIER”</h4>
      <p>There is so much to consider when shopping for
        new or different insurance, but EIG does all of the
        heavy lifting for you! I couldn't be happier with
        the ease and professionalism of this shop, and
        look forward to a continued relationship!</p>
        <h6>Jason Hornyak</h6> 
    </div>
  </div>
</div>
<div class="carousel-item">
  <div class="card-wrapper">
  <div class="slick">
      <img class="star" src="./assets/review-star.png"/>
      <h4>“THE HIGHEST”</h4>
      <p>You can't beat this team! Helpful, responsive,
        informative, and caring. The highest
        recommendations from our family, get them in
        your corner.</p>
        <h6>Nick Evers</h6>
    </div>
    <div class="slick">
      <img class="star" src="./assets/review-star.png"/>
      <h4>“HIGHLY RECOMMENDED”</h4>
      <p>Wonderful working with Kyle and the team at
        Equity! This was the most personal and effective
        insurance brokerage relationship I've ever had.
        Highly recommended.</p>
      <h6>David Champion</h6> 
    </div>
    <div class="slick">
      <img class="star" src="./assets/review-star.png"/>
      <h4>“QUICK AND MORE COVERAGE”</h4>
      <p>Jordan Venner assisted me after I received a
        super high quote from my normal carrier. He was
        quick in finding a quote that fit my budget and
        had more coverage than the quote my normal
        carrier provided. I was very pleased as this was
        very painless process.</p>
        <h6>Autumn Washington</h6>
    </div>
    <div class="slick">
      <img class="star" src="./assets/review-star.png"/>
      <h4>“RESPONSIVENESS”</h4>
      <p>I had an exceptional experience with Equity
        Insurance Group. Their responsiveness was truly
        remarkable, ensuring that all my inquiries and
        concerns were addressed promptly. The team
        they had in place was equally impressive, always
        ready to provide assistance and guidance
        whenever needed. During the crucial time of
        purchasing a new home and vehicles, our
        representative, Jordan, went the extra mile to
        secure the best coverage options for me. Their
        dedication and commitment to ensuring my
        safety and protection made me feel truly valued
        and secure throughout the entire</p>
        <h6>Sonya Contino</h6>
    </div>
  </div>
</div>`
 }
}


window.addEventListener("load", renderWinSlider);
window.addEventListener("resize", renderWinSlider);