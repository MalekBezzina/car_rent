import React from 'react';


const Info =() => {


    return (
      <section>
        <div class="banner-main">
            <div class="container">
            <div class="text-bg">
                    <form class="main-form">
                          <div class="col-md-9">
                          <h1>Find Your Car</h1>
                             <div class="row"> 
                                <div class="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12">
                                   <label >Pick-up location</label>
                                   <input class="form-control" placeholder="Location" type="text" name=""/>
                                </div>
                                <div class="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12">
                                   <label >Pick-up date</label>
                                   <input class="form-control" placeholder="Any" type="date" name="Any"/>
                                </div>
                                <div class="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12">
                                   <label >Drop-off date</label>
                                   <input class="form-control" placeholder="Any" type="date" name="Any"/>
                                </div>
                                <div class="col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12">
                             <a href="#">Search</a>
                                </div>
                             </div>
                             
                          </div>
                          
                    </form>
                 </div>
              </div>
           </div>
           </section>
         
        
    )
}

export default Info ;