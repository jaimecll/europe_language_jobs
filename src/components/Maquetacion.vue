<template>

  <div class=" q-layout-page-container q-layout-transition intro-container">
    
    <div class="layout-content q-pa-xl">

        <div class="row">
            <div class="col-md-5 col-xs-12">
                <p class="title-p q-mt-lg">Find the perfect employee in our database of more than 25,000 new multilingual candidates each month.</p>
                <q-btn flat dense class="q-btn-item non-selectable q-btn-rectangle q-focusable q-hoverable title-btn q-mt-lg">Post a job</q-btn>
            </div>
            <div class="col-md-5 offset-md-2 col-xs-12">
                <div class="row">
                    <div class="col-2">
                        <i aria-hidden="true" class="q-icon fa fa-users fa-4x title-icon"></i>
                    </div>
                    <div class="col-10">
                        <p class="title-p-2"><strong>+ 2,500</strong></p>
                        <p class="info-text">companies posting in more than 48 countries</p>

                    </div>
                </div>
                <div class="row">
                    <div class="col-2">
                        <i aria-hidden="true" class="q-icon fa fa-clock fa-4x title-icon"></i>
                    </div>
                    <div class="col-10">
                        <p class="title-p-2"><strong>Post with ease</strong></p>
                        <p class="info-text">Publish a job advert in just 2 minutes</p>

                    </div>
                </div>
                <div class="row">
                    <div class="col-2">
                        <i aria-hidden="true" class="q-icon fa fa-file fa-4x title-icon"></i>
                    </div>
                    <div class="col-10">
                        <p class="title-p-2"><stron>+ 50,000</stron></p>
                        <p class="info-text">candidate applications per month</p>

                    </div>

                </div>
                
            </div>
            
        </div>

        <div class="row">
            <div class="col-12">
                <q-carousel
                    animated
                    v-model="slide"
                   
                    infinite
                    :autoplay="autoplay"
                    arrows
                    transition-prev="slide-right"
                    transition-next="slide-left"
                    @mouseenter="autoplay = false"
                    @mouseleave="autoplay = true"
                    class="carousel-container"
                    >
                    <q-carousel-slide :name="1" >
                        <div class="row slider-slide" >
                            <div class="col-4">
                                <img class="slider-img" src="https://static.europelanguagejobs.com/contents/banners/logo-agoda-607-4993.svg">
                            </div>
                            <div class="col-4">
                                <img class="slider-img" src="https://static.europelanguagejobs.com/contents/banners/logo-top-company-apple-609-1600.svg">   
                            </div>
                            <div class="col-4">
                                <img class="slider-img" src="https://static.europelanguagejobs.com/contents/banners/airproducts-logo-612.svg"> 
                            </div>
                        </div>
                    </q-carousel-slide>
                    <q-carousel-slide :name="2" >
                        <div class="row slider-slide" >
                            <div class="col-6">
                                <img class="slider-img" src="https://static.europelanguagejobs.com/contents/banners/airproducts-logo-612.svg">
                            </div>
                            <div class="col-6">
                                <img class="slider-img" src="https://static.europelanguagejobs.com/contents/banners/logo-ttec-611-874.svg">   
                            </div>
                            
                        </div>    
                    </q-carousel-slide> 
                </q-carousel>
            </div>
        </div>
    </div>

    
  </div>
  <div class="layout-content q-pa-xl text-center">
    <p class="secondary-title">ELJ's <strong>hiring solutions</strong></p>
    <div class="row hiring-solutions-container">
        <div class="hiring-columns">
            <img src="https://www.europelanguagejobs.com/statics/images/job-posting.svg">
            <p class="secondary-text"><strong>JOB POSTING</strong></p>
        </div>
        <div class="hiring-columns">
            <img src="https://www.europelanguagejobs.com/statics/images/cv-search.svg">
            <p class="secondary-text"><strong>CV SEARCH</strong></p>
        </div>
        <div class="hiring-columns">
            <img src="https://www.europelanguagejobs.com/statics/images/exposure-features.svg">
            <p class="secondary-text"><strong>WEBSITE VISIBILITY</strong></p>
        </div>
        <div class="hiring-columns">
            <img src="https://www.europelanguagejobs.com/statics/images/outreach-features.svg">
            <p class="secondary-text"><strong>OUTREACH FEATURES</strong></p>
        </div>
        
    </div>
  </div>
  <div class="q-pa-xl text-center bg-blue text-white">
    <div class="layout-content">
        <p class="find-more-text">Find more about our basic and personalized hiring solutions</p>
        <q-btn flat dense class="q-btn-item non-selectable q-btn-rectangle q-focusable q-hoverable title-btn">Learn more</q-btn>
    </div>
  </div>
  <div class="q-pa-xl text-center justify-center">
    <p class="contact-title"><strong>Tell us about</strong> your needs!</p>
    
        <div class="row contact-form-container">
            <div class="col-md-6 col-xs-12 block-fields">
                <q-input placeholder="Your name"></q-input>
                <q-input placeholder="Company name"></q-input>
                <q-input placeholder="Email name"></q-input>
            </div>
            <div class="col-md-6 col-xs-12 block-fields">
                <q-input label="Your message" type="textarea"></q-input>
                <label class="form-label"><input type="checkbox" style="vertical-align:middle"> I accept the Legal <a href="">Conditions</a></label>
                <q-btn flat dense class="q-btn-item non-selectable q-btn-rectangle q-focusable q-hoverable q-mt-lg disabled bg-primary text-white form-btn">SEND MESSAGE</q-btn>
                <a href="">or post a job</a>
            </div>
        </div>
   
    <p class="contact-title"><strong>ATS Partners & API Solutions</strong></p>
            <div class="layout-content">
                <q-carousel
                    animated
                    v-model="slide2"
                    control-type="regular"
                    control-color="black"
                    infinite
                    :autoplay="autoplay"
                    arrows
                    transition-prev="slide-right"
                    transition-next="slide-left"
                    @mouseenter="autoplay = false"
                    @mouseleave="autoplay = true"
                    class="carousel-container"
                    >
                    <q-carousel-slide :name="1" >
                        <div class="row slider-slide" >
                            <div class="col-4">
                                <img class="slider-img" src="https://www.europelanguagejobs.com/statics/images/equest.png">
                            </div>
                            <div class="col-4">
                                <img class="slider-img" src="https://www.europelanguagejobs.com/statics/images/recruitly.png">   
                            </div>
                            <div class="col-4">
                                <img class="slider-img" src="https://www.europelanguagejobs.com/statics/images/lever.png"> 
                            </div>
                        </div>
                    </q-carousel-slide>
                    <q-carousel-slide :name="2">
                        <div class="row slider-slide" >
                            <div class="col-4">
                                <img class="slider-img" src="https://www.europelanguagejobs.com/statics/images/broadbean.svg">
                            </div>
                            <div class="col-4">
                                <img class="slider-img" src="https://www.europelanguagejobs.com/statics/images/hrlink.svg">   
                            </div>
                            <div class="col-4">
                                <img class="slider-img" src="https://www.europelanguagejobs.com/statics/images/logicmelon.svg">   
                            </div>
                        </div>    
                    </q-carousel-slide> 
                </q-carousel>
            </div>
  </div>
  <div class="q-pa-xl text-center bg-blue text-white">
    <div class="layout-content">
        <p class="find-more-text"><span>Together, your hires, our goal!</span></p>
     
    </div>
    
  </div>

</template>



<script>
export default {
  name: 'MaquetaCion',
  data(){
    return{
        slide:1,
        slide2:1
    }
  }
}
</script>
<style scoped src="../assets/css/maquetacion.css"></style>