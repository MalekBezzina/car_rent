import React from 'react';


const Contact =() => {

    return (
      
     
         <div id="contact" class="footer">
            <div class="container-contact">
               <div class="row-contact pdn-top-30">
                  <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                     <ul class="location_icon">
                        <li> <a href="#"><img src="icon/facebook.png"/></a></li>
                        <li> <a href="#"><img src="icon/Twitter.png"/></a></li>
                        <li> <a href="#"><img src="icon/linkedin.png"/></a></li>
                        <li> <a href="#"><img src="icon/instagram.png"/></a></li>
                     </ul>
                  </div>
                  <div class="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                     <div class="Follow">
                        <h1>CONTACT US</h1>
                        <span>
                        <p>123 Second Street Fifth Avenue</p>
                        <p>Manhattan, New York,</p><p> +987 654 3210</p>
                        </span>
                     </div>
                  </div>
                  
                  <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                     <div class="Follow">
                        <h1> CONTACT</h1>
                        <div class="row-contact">
                           <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                              <input class="Newsletter" placeholder="Name" type="text"/>
                           </div>
                           <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                              <input class="Newsletter" placeholder="Email" type="text"/>
                           </div>
                           <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                              <textarea class="textarea" placeholder="comment" type="text">Comment</textarea>
                           </div>
                        </div>
                        <button class="Subscribe">Submit</button>
                     </div>
                  </div>
               </div>
               <div class="copyright">
                  <div class="container-contact">
                     <p>Copyright 2019 All Right Reserved By <a href="https://html.design/">Free html Templates</a></p>
                  </div>
               </div>
            </div>
         </div>
   
    )
  }

 
export default Contact ;