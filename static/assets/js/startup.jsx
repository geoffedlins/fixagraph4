var NewComponent = React.createClass({
  render: function() {
    return (
      <div>
        {/*Meta*/}
        <meta charSet="UTF-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta name="description" content="A complete landing page solution for any business" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/*Favicon*/}
        <link rel="icon" href="assets/img/favicon/144x144.png" />
        {/* Title*/}
        <title>TheFury - A complete landing solution for any business</title>
        {/*Google fonts*/}
        <link href="https://fonts.googleapis.com/css?family=Dosis:400,500,600,700%7COpen+Sans:400,600,700" rel="stylesheet" />
        {/*Icon fonts*/}
        <link rel="stylesheet" href="assets/vendor/strokegap/style.css" />
        <link rel="stylesheet" href="assets/vendor/font-awesome/css/font-awesome.min.css" />
        <link rel="stylesheet" href="assets/vendor/linearicons/style.css" />
        {/* Stylesheet*/}
        {/*
// ////////////////////////////////////////////////
// To Reduce server request and improved page speed drastically all third-party plugin bundle in assets/css/bundle.css
// If you wanna add those manually bellow is the sequence 
// ///////////////////////////////////////////////
*/}
        {/*  <link rel="stylesheet" href="assets/vendor/bootstrap/dist/css/bootstrap.min.css">  
  <link rel="stylesheet" href="assets/vendor/slick-carousel/slick/slick.css">
  <link rel="stylesheet" href="assets/vendor/fancybox/dist/jquery.fancybox.min.css">
  <link rel="stylesheet" href="assets/vendor/animate.css/animate.min.css">*/}
        <link rel="stylesheet" href="assets/css/bundle.css" />
        <link rel="stylesheet" href="assets/css/style.css" />
        {/*[if lt IE 8]>
<p>You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
<![endif]*/}
        <header className="header-top py-3">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-6 mb-3 mb-md-0 text-center text-md-left">
                <ul className="list-inline mb-0">
                  <li className="list-inline-item mr-3">
                    <span className="icon icon-Phone2 text-primary mr-1" /> 008. 567. 890. 634
                  </li>
                  <li className="list-inline-item">
                    <span className="icon icon-Mail text-primary mr-1" /> <a href="mailto:support@echotheme.com">support@echotheme.com</a>
                  </li>
                </ul> {/* END list-inline*/}
              </div> {/* END col-md-6 */}
              <div className="col-md-6 mb-3 mb-md-0">
                <ul className="list-inline social social-rounded social-default social-sm mb-0 text-center text-md-right">
                  <li className="list-inline-item">
                    <a href><i className="fa fa-facebook" /></a>
                  </li>
                  <li className="list-inline-item">
                    <a href><i className="fa fa-twitter" /></a>
                  </li>
                  <li className="list-inline-item">
                    <a href><i className="fa fa-google-plus" /></a>
                  </li>
                  <li className="list-inline-item">
                    <a href><i className="fa fa-linkedin" /></a>
                  </li>
                </ul>
              </div> {/* END col-md-6 */}
            </div> {/* END row*/}
          </div> {/* END container*/}
        </header> {/* END header-top*/}
        <header className="header header-shadow header-shrink sticky-top bg-gray-v2">
          <div className="container">
            <nav className="navbar navbar-expand-lg">
              <a className="navbar-brand" href="index.html">
                <img src="assets/img/logo-inverse.png" alt />
              </a>
              <button className="navbar-toggler p-0" data-toggle="collapse" data-target="#navbarNav">
                <div className="hamburger hamburger--spin js-hamburger">
                  <div className="hamburger-box">
                    <div className="hamburger-inner" />
                  </div>
                </div>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <a className="nav-link" href="#" data-scrollto="about">about</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#" data-scrollto="features">FEATURES</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#" data-scrollto="work">work</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#" data-scrollto="team">team</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#" data-scrollto="reviews">reviews</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#" data-scrollto="pricing">pricing</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#" data-scrollto="contact">contact</a>
                  </li>
                </ul>
              </div>
            </nav>
          </div> {/* END container*/}
        </header> {/* END header-inverse */}
        <section className="u-py-md-250 u-flex-center" style={{background: '#ECF5FE url(assets/img/startup/hero-banner.png) no-repeat', backgroundSize: 'cover', backgroundPosition: 'top center'}}>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-7 mb-5 mb-lg-0">
                <h1 className="display-4 u-fw-600">
                  <span className="text-primary">Our Startup</span> Is Absolutely Awesome!!
                </h1>
                <p className="u-fs-22 u-lh-1_8 my-4">
                  The best template for your startup to showcase and acquire new customers all around the world!
                </p>
                <a href className="btn btn btn-rounded btn-primary  u-w-170 u-mt-15">
                  Get Started
                </a>
              </div> {/* END col-lg-7*/}
              <div className="col-lg-5">
                <div className="card box-shadow-v2 bg-white u-of-hidden text-center">
                  <h2 className="bg-primary m-0 py-3 text-white">Sign Up And Get Free Update</h2>
                  <form action method="POST" className="p-4 p-md-5">
                    <div className="input-group u-rounded-50 border u-of-hidden u-mb-20">
                      <div className="input-group-addon bg-white border-0 pl-4 pr-0">
                        <span className="icon icon-User text-primary" />
                      </div>
                      <input className="form-control border-0 p-3" placeholder="Your fullname" type="text" />
                    </div>
                    <div className="input-group u-rounded-50 border u-of-hidden u-mb-20">
                      <div className="input-group-addon bg-white border-0 pl-4 pr-0">
                        <span className="icon icon-Mail text-primary" />
                      </div>
                      <input className="form-control border-0 p-3" placeholder="Your email" type="text" />
                    </div>
                    <div className="input-group u-rounded-50 border u-of-hidden u-mb-20">
                      <div className="input-group-addon bg-white border-0 pl-4 pr-0">
                        <span className="icon icon-ClosedLock text-primary" />
                      </div>
                      <input className="form-control border-0 p-3" placeholder="Password" type="password" />
                    </div>
                    <button className="btn btn-primary btn-rounded">
                      Get Started
                    </button>
                  </form>
                </div>
              </div> {/* END col-lg-5*/}
            </div> {/* END row*/}
          </div> {/* END container*/}
        </section> {/* END intro-hero*/}
        <section id="about" className="pb-0">
          <div className="container">
            <div className="row text-center">
              <div className="col-lg-8 mx-auto">
                <h2 className="h1">
                  We Develop Digital Strategies <br /> Products and Services.
                </h2>
                <div className="u-h-4 u-w-50 bg-primary rounded mt-4 u-mb-70 mx-auto" />
                <p>
                  Nam liber tempor cum soluta nobis eleifend option congue is nihil imper is per tem por legere me that doming vulputate velit esse molestie possim. wisi enim ad placerat facer possim assum minim there veniam, nostrud exerci tation ullamcorper quis nostrud exerci tation ullamcorper. Nam is tempor cum soluta nobis eleifend option congue is nihil imper.
                </p>
                <a href className="btn btn-primary btn-rounded mt-4">More About Us</a>
              </div>
              <div className="col-12 u-mt-70 text-center">
                <img src="assets/img/startup/s-1.png" alt />
              </div>
            </div> {/* END row*/}
          </div> {/* END container*/}
        </section> {/* END section*/}
        <section className="bg-gray-v2 u-pb-80">  
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-6 u-mb-70">
                <div className="media">
                  <span className="icon icon-Briefcase text-primary u-fs-50 mr-4" />
                  <div className="media-body">
                    <h4>
                      Digital Branding
                    </h4>
                    <p>
                      Nam liber tempor cum soluta nois eleifend option congue is nihil tem imper per tem por legere.
                    </p>
                  </div>
                </div>
              </div> {/* END col-lg-4 col-md-6*/}
              <div className="col-lg-4 col-md-6 u-mb-70">
                <div className="media">
                  <span className="icon icon-Web text-primary u-fs-50 mr-4" />
                  <div className="media-body">
                    <h4>
                      Web Solutinos
                    </h4>
                    <p>
                      Nam liber tempor cum soluta nois eleifend option congue is nihil tem imper per tem por legere.
                    </p>
                  </div>
                </div>
              </div> {/* END col-lg-4 col-md-6*/}
              <div className="col-lg-4 col-md-6 u-mb-70">
                <div className="media">
                  <span className="icon icon-Dollars text-primary u-fs-50 mr-4" />
                  <div className="media-body">
                    <h4>
                      Financial Advice
                    </h4>
                    <p>
                      Nam liber tempor cum soluta nois eleifend option congue is nihil tem imper per tem por legere.
                    </p>
                  </div>
                </div>
              </div> {/* END col-lg-4 col-md-6*/}
              <div className="col-lg-4 col-md-6 u-mb-70">
                <div className="media">
                  <span className="icon icon-Headset text-primary u-fs-50 mr-4" />
                  <div className="media-body">
                    <h4>
                      Dedicated Support
                    </h4>
                    <p>
                      Nam liber tempor cum soluta nois eleifend option congue is nihil tem imper per tem por legere.
                    </p>
                  </div>
                </div>
              </div> {/* END col-lg-4 col-md-6*/}
              <div className="col-lg-4 col-md-6 u-mb-70">
                <div className="media">
                  <span className="icon icon-Resume text-primary u-fs-50 mr-4" />
                  <div className="media-body">
                    <h4>
                      Business Consulting
                    </h4>
                    <p>
                      Nam liber tempor cum soluta nois eleifend option congue is nihil tem imper per tem por legere.
                    </p>
                  </div>
                </div>
              </div> {/* END col-lg-4 col-md-6*/}
              <div className="col-lg-4 col-md-6 u-mb-70">
                <div className="media">
                  <span className="icon icon-Starship2 text-primary u-fs-50 mr-4" />
                  <div className="media-body">
                    <h4>
                      Progress Across Projects
                    </h4>
                    <p>
                      Nam liber tempor cum soluta nois eleifend option congue is nihil tem imper per tem por legere.
                    </p>
                  </div>
                </div>
              </div> {/* END col-lg-4 col-md-6*/}
            </div> {/*END row*/}
          </div> {/* END container*/}
        </section> {/* END section*/}
        <section id="features">  
          <div className="container">
            <div className="row">
              <div className="col-12 text-center">
                <h2 className="h1 text-capitalize">
                  Solutions in <span className="text-primary u-fw-700">3</span> easy step
                </h2>
                <div className="u-h-4 u-w-50 bg-primary rounded mt-4 u-mb-70 mx-auto" />
              </div>
              <div className="col-12">	
                <ul className="nav nav-tabs justify-content-center tabs-v3 text-center u-ff-dosis u-fw-600 u-fs-20" role="tablist">
                  <li className="nav-item mx-2">
                    <a className="nav-link active p-4" data-toggle="tab" href="#tab1_1" role="tab">
                      <span className="u-fs-md-30 d-block mb-1">01</span>
                      Join
                    </a>
                  </li>
                  <li className="nav-item mx-2">
                    <a className="nav-link p-4" data-toggle="tab" href="#tab1_2" role="tab">
                      <span className="u-fs-md-30 d-block mb-1">02</span>
                      Login
                    </a>
                  </li>
                  <li className="nav-item mx-2">
                    <a className="nav-link p-4" data-toggle="tab" href="#tab1_3" role="tab">
                      <span className="u-fs-md-30 d-block mb-1">03</span>
                      Cracking
                    </a>
                  </li>
                </ul>
              </div> {/* END col-12 */}
              <div className="col-12">
                <div className="tab-content">
                  <div className="tab-pane fade show active" id="tab1_1">
                    <div className="row u-my-70 align-items-center">
                      <div className="col-md-6 mb-5">
                        <img src="assets/img/startup/s-2.png" alt />
                      </div> {/* END col-md-6 */}
                      <div className="col-md-6">
                        <h2 className="mb-4">
                          Present Your Startup With Style And Easy
                        </h2>
                        <p>
                          Nam liber tempor cum soluta nobis eleifend option congue is nihil imper  per tem por legere me that doming vulputate velit esse molestie  possim wisi enim ad placerat facer possim assum minim there veniam, nostrud exerci tation ullamcorper quis nostrud.
                        </p>
                        <ul className="list-unstyled u-fw-600 u-lh-2 u-mt-30">
                          <li><i className="fa fa-check text-primary mr-2" />Professional and easy-to-use software</li>
                          <li><i className="fa fa-check text-primary mr-2" />Setup and installations takes ten minutes</li>
                          <li><i className="fa fa-check text-primary mr-2" />Perfect for any device with pixel-perfect design</li>
                        </ul>
                      </div> {/* END col-md-6 */}
                    </div> {/* END row*/}
                  </div> {/* END tab-pane*/}
                  <div className="tab-pane fade" id="tab1_2">
                    <div className="row u-my-70 align-items-center">
                      <div className="col-md-6 mb-5">
                        <img src="assets/img/seo/s-3.png" alt />
                      </div> {/* END col-md-6 */}
                      <div className="col-md-6">
                        <h2 className="mb-4">
                          We Provide Three Steps Business Solutions
                        </h2>
                        <p>
                          Nam liber tempor cum soluta nobis eleifend option congue is nihil imper  per tem por legere me that doming vulputate velit esse molestie  possim wisi enim ad placerat facer possim assum minim there veniam, nostrud exerci tation ullamcorper quis nostrud.
                        </p>
                        <ul className="list-unstyled u-fw-600 u-lh-2 u-mt-30">
                          <li><i className="fa fa-check text-primary mr-2" />Professional and easy-to-use software</li>
                          <li><i className="fa fa-check text-primary mr-2" />Setup and installations takes ten minutes</li>
                          <li><i className="fa fa-check text-primary mr-2" />Perfect for any device with pixel-perfect design</li>
                        </ul>
                      </div> {/* END col-md-6 */}
                    </div> {/* END row*/}
                  </div> {/* END tab-pane*/}
                  <div className="tab-pane fade" id="tab1_3">
                    <div className="row u-my-70 align-items-center">
                      <div className="col-md-6 mb-5">
                        <img src="assets/img/startup/s-2.png" alt />
                      </div> {/* END col-md-6 */}
                      <div className="col-md-6">
                        <h2 className="mb-4">
                          It's as easy as 1 2 3 to get start
                        </h2>
                        <p>
                          Nam liber tempor cum soluta nobis eleifend option congue is nihil imper  per tem por legere me that doming vulputate velit esse molestie  possim wisi enim ad placerat facer possim assum minim there veniam, nostrud exerci tation ullamcorper quis nostrud.
                        </p>
                        <ul className="list-unstyled u-fw-600 u-lh-2 u-mt-30">
                          <li><i className="fa fa-check text-primary mr-2" />Professional and easy-to-use software</li>
                          <li><i className="fa fa-check text-primary mr-2" />Setup and installations takes ten minutes</li>
                          <li><i className="fa fa-check text-primary mr-2" />Perfect for any device with pixel-perfect design</li>
                        </ul>
                      </div> {/* END col-md-6 */}
                    </div> {/* END row*/}
                  </div> {/* END tab-pane*/}
                </div> {/* END tab-content*/}
              </div> {/* END col-12*/}
            </div> {/*END row*/}
          </div> {/* END container*/}
        </section> {/* END section*/}
        <section className="u-py-80" style={{background: '#273f5b url(assets/img/startup/bg-1.png) no-repeat', backgroundPosition: 'center center'}}>
          <div className="container">
            <div className="row text-center">
              <div className="col-lg-3 col-md-6 u-my-20 text-white">
                <h4 className="mb-0 u-fs-60 text-green">
                  4670+
                </h4>
                <p className="u-fs-20">
                  Completed Projects
                </p>
              </div> {/* END col-lg-3 col-md-6*/}
              <div className="col-lg-3 col-md-6 u-my-20 text-white">
                <h4 className="mb-0 u-fs-60 text-green">
                  7980+
                </h4>
                <p className="u-fs-20">
                  Business Solutions
                </p>
              </div> {/* END col-lg-3 col-md-6*/}
              <div className="col-lg-3 col-md-6 u-my-20 text-white">
                <h4 className="mb-0 u-fs-60 text-green">
                  170+
                </h4>
                <p className="u-fs-20">
                  Available Country
                </p>
              </div> {/* END col-lg-3 col-md-6*/}
              <div className="col-lg-3 col-md-6 u-my-20 text-white">
                <h4 className="mb-0 u-fs-60 text-green">
                  10M+
                </h4>
                <p className="u-fs-20">
                  Users Worldwide
                </p>
              </div> {/* END col-lg-3 col-md-6*/} 			
            </div> {/* END row*/}
          </div> {/* END container*/}
        </section>       
        <section id="work">
          <div className="container">
            <div className="row">
              <div className="col-12 text-center">
                <h2 className="h1">
                  Our Awesome Work
                </h2>
                <div className="u-h-4 u-w-50 bg-primary rounded mt-4 u-mb-40 mx-auto" />
              </div>
            </div>
            <div className="row">
              <div className="col-lg-7 mx-auto mt-5">
                <ul className="nav nav-tabs justify-content-center tabs-v2 box-shadow-v2" role="tablist">
                  <li className="nav-item">
                    <a className="nav-link" data-toggle="tab" href="#tab2_1" role="tab" aria-expanded="false">
                      All Work
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" data-toggle="tab" href="#tab2_2" role="tab" aria-expanded="false">
                      Branding
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link active" data-toggle="tab" href="#tab2_3" role="tab" aria-expanded="true">
                      Consulting
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" data-toggle="tab" href="#tab2_4" role="tab" aria-expanded="false">
                      Corporate
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-10 mx-auto mt-5">
                <div className="tab-content tab__slider">
                  <div className="tab-pane fade" id="tab2_1" role="tabpanel" aria-labelledby="home-tab">
                    <div data-init="carousel" data-slick-margin={15} data-slick="{
							&quot;slidesToShow&quot;:2,
							&quot;slidesToScroll&quot;:1,
							&quot;arrows&quot;:true,
							&quot;prevArrow&quot;:&quot;<div class=\&quot;slick-prev box-shadow-v1\&quot;><i class=\&quot;fa fa-angle-left\&quot;></i></div>&quot;,
							&quot;nextArrow&quot;:&quot;<div class=\&quot;slick-next box-shadow-v1\&quot;><i class=\&quot;fa fa-angle-right\&quot;></i></div>&quot;, 
							&quot;responsive&quot;: [
								{ 
								 &quot;breakpoint&quot;:1024,
								 &quot;settings&quot;:{
									&quot;arrows&quot;:false,
									&quot;dots&quot;:true,
									&quot;dotsClass&quot;:&quot;slick-dots text-center mt-4&quot;
								 }
								},
								{ 
								 &quot;breakpoint&quot;:700,
								 &quot;settings&quot;:{
									&quot;arrows&quot;:false,
									&quot;slidesToShow&quot;:1,
									&quot;dots&quot;:true,
									&quot;dotsClass&quot;:&quot;slick-dots text-center mt-4&quot;
								 }
								}					
							]
						}">
                      <div className="card">
                        <img src="assets/img/startup/s-3.jpg" alt />
                        <div className="py-4">
                          <h3>
                            <a href>Digital Branding Solution</a>
                          </h3>
                          <p>
                            Branding Design
                          </p>
                        </div>
                      </div>  {/* END card*/}
                      <div className="card">
                        <img src="assets/img/startup/s-4.jpg" alt />
                        <div className="py-4">
                          <h3>
                            <a href>This is a awesome title</a>
                          </h3>
                          <p>
                            B2B marketing
                          </p>
                        </div>
                      </div>  {/* END card*/}
                      <div className="card">
                        <img src="assets/img/startup/s-3.jpg" alt />
                        <div className="py-4">
                          <h3>
                            <a href>This is a awesome title</a>
                          </h3>
                          <p>
                            B2B marketing
                          </p>
                        </div>
                      </div> {/* END card*/}
                    </div> 
                  </div> {/* END tab-pane*/}
                  <div className="tab-pane fade show active" id="tab2_2" role="tabpanel" aria-labelledby="home-tab">
                    <div data-init="carousel" data-slick-margin={15} data-slick="{
							&quot;slidesToShow&quot;:2,
							&quot;slidesToScroll&quot;:1,
							&quot;arrows&quot;:true,
							&quot;prevArrow&quot;:&quot;<div class=\&quot;slick-prev box-shadow-v1\&quot;><i class=\&quot;fa fa-angle-left\&quot;></i></div>&quot;,
							&quot;nextArrow&quot;:&quot;<div class=\&quot;slick-next box-shadow-v1\&quot;><i class=\&quot;fa fa-angle-right\&quot;></i></div>&quot;, 
							&quot;responsive&quot;: [
								{ 
								 &quot;breakpoint&quot;:1024,
								 &quot;settings&quot;:{
									&quot;arrows&quot;:false,
									&quot;dots&quot;:true,
									&quot;dotsClass&quot;:&quot;slick-dots text-center mt-4&quot;
								 }
								},
								{ 
								 &quot;breakpoint&quot;:700,
								 &quot;settings&quot;:{
									&quot;arrows&quot;:false,
									&quot;slidesToShow&quot;:1,
									&quot;dots&quot;:true,
									&quot;dotsClass&quot;:&quot;slick-dots text-center mt-4&quot;
								 }
								}					
							]
						}">
                      <div className="card">
                        <img src="assets/img/startup/s-4.jpg" alt />
                        <div className="py-4">
                          <h3>
                            <a href>Digital Branding Solution</a>
                          </h3>
                          <p>
                            Branding Design
                          </p>
                        </div>
                      </div>  {/* END card*/}
                      <div className="card">
                        <img src="assets/img/startup/s-3.jpg" alt />
                        <div className="py-4">
                          <h3>
                            <a href>This is a awesome title</a>
                          </h3>
                          <p>
                            B2B marketing
                          </p>
                        </div>
                      </div>  {/* END card*/}
                      <div className="card">
                        <img src="assets/img/startup/s-3.jpg" alt />
                        <div className="py-4">
                          <h3>
                            <a href>This is a awesome title</a>
                          </h3>
                          <p>
                            B2B marketing
                          </p>
                        </div>
                      </div> {/* END card*/}
                    </div> 
                  </div> {/* END tab-pane*/}
                  <div className="tab-pane fade" id="tab2_3" role="tabpanel" aria-labelledby="home-tab">
                    <div data-init="carousel" data-slick-margin={15} data-slick="{
							&quot;slidesToShow&quot;:2,
							&quot;slidesToScroll&quot;:1,
							&quot;arrows&quot;:true,
							&quot;prevArrow&quot;:&quot;<div class=\&quot;slick-prev box-shadow-v1\&quot;><i class=\&quot;fa fa-angle-left\&quot;></i></div>&quot;,
							&quot;nextArrow&quot;:&quot;<div class=\&quot;slick-next box-shadow-v1\&quot;><i class=\&quot;fa fa-angle-right\&quot;></i></div>&quot;, 
							&quot;responsive&quot;: [
								{ 
								 &quot;breakpoint&quot;:1024,
								 &quot;settings&quot;:{
									&quot;arrows&quot;:false,
									&quot;dots&quot;:true,
									&quot;dotsClass&quot;:&quot;slick-dots text-center mt-4&quot;
								 }
								},
								{ 
								 &quot;breakpoint&quot;:700,
								 &quot;settings&quot;:{
									&quot;arrows&quot;:false,
									&quot;slidesToShow&quot;:1,
									&quot;dots&quot;:true,
									&quot;dotsClass&quot;:&quot;slick-dots text-center mt-4&quot;
								 }
								}					
							]
						}">
                      <div className="card">
                        <img src="assets/img/startup/s-3.jpg" alt />
                        <div className="py-4">
                          <h3>
                            <a href>Digital Branding Solution</a>
                          </h3>
                          <p>
                            Branding Design
                          </p>
                        </div>
                      </div>  {/* END card*/}
                      <div className="card">
                        <img src="assets/img/startup/s-4.jpg" alt />
                        <div className="py-4">
                          <h3>
                            <a href>This is a awesome title</a>
                          </h3>
                          <p>
                            B2B marketing
                          </p>
                        </div>
                      </div>  {/* END card*/}
                      <div className="card">
                        <img src="assets/img/startup/s-3.jpg" alt />
                        <div className="py-4">
                          <h3>
                            <a href>This is a awesome title</a>
                          </h3>
                          <p>
                            B2B marketing
                          </p>
                        </div>
                      </div> {/* END card*/}
                    </div> 
                  </div> {/* END tab-pane*/}
                  <div className="tab-pane fade" id="tab2_4" role="tabpanel" aria-labelledby="home-tab">
                    <div data-init="carousel" data-slick-margin={15} data-slick="{
							&quot;slidesToShow&quot;:2,
							&quot;slidesToScroll&quot;:1,
							&quot;arrows&quot;:true,
							&quot;prevArrow&quot;:&quot;<div class=\&quot;slick-prev box-shadow-v1\&quot;><i class=\&quot;fa fa-angle-left\&quot;></i></div>&quot;,
							&quot;nextArrow&quot;:&quot;<div class=\&quot;slick-next box-shadow-v1\&quot;><i class=\&quot;fa fa-angle-right\&quot;></i></div>&quot;, 
							&quot;responsive&quot;: [
								{ 
								 &quot;breakpoint&quot;:1024,
								 &quot;settings&quot;:{
									&quot;arrows&quot;:false,
									&quot;dots&quot;:true,
									&quot;dotsClass&quot;:&quot;slick-dots text-center mt-4&quot;
								 }
								},
								{ 
								 &quot;breakpoint&quot;:700,
								 &quot;settings&quot;:{
									&quot;arrows&quot;:false,
									&quot;slidesToShow&quot;:1,
									&quot;dots&quot;:true,
									&quot;dotsClass&quot;:&quot;slick-dots text-center mt-4&quot;
								 }
								}					
							]
						}">
                      <div className="card">
                        <img src="assets/img/startup/s-4.jpg" alt />
                        <div className="py-4">
                          <h3>
                            <a href>Digital Branding Solution</a>
                          </h3>
                          <p>
                            Branding Design
                          </p>
                        </div>
                      </div>  {/* END card*/}
                      <div className="card">
                        <img src="assets/img/startup/s-3.jpg" alt />
                        <div className="py-4">
                          <h3>
                            <a href>This is a awesome title</a>
                          </h3>
                          <p>
                            B2B marketing
                          </p>
                        </div>
                      </div>  {/* END card*/}
                      <div className="card">
                        <img src="assets/img/startup/s-3.jpg" alt />
                        <div className="py-4">
                          <h3>
                            <a href>This is a awesome title</a>
                          </h3>
                          <p>
                            B2B marketing
                          </p>
                        </div>
                      </div> {/* END card*/}
                    </div> 
                  </div> {/* END tab-pane*/}
                </div> {/* END tab-content*/}
              </div> {/* END col-lg-10 mx-auto mt-5*/}
              <div className="col-12 text-center mt-4">
                <a href className="btn btn-primary btn-rounded"> View Gallery</a>
              </div>
            </div> {/* END row*/}
          </div> {/* END container*/}
        </section>
        <section id="team" style={{background: '#ecf5fd url(assets/img/startup/bg-2.png) no-repeat', backgroundPosition: 'center center'}}>  
          <div className="container">
            <div className="row">
              <div className="col-12 text-center">
                <h2 className="h1">
                  Our Best Experts
                </h2>
                <div className="u-h-4 u-w-50 bg-primary rounded mt-4 u-mb-40 mx-auto" />
              </div>  {/* END col-12*/}
              <div className="col-lg-3 col-md-6 mt-4">
                <div className="card text-center show-onHover-parent">
                  <div className="u-pos-rel">
                    <img className="w-100" src="assets/img/person/1_1.jpg" alt />
                    <div className="show-onHover u-pos-abs-center u-w-100p">
                      <ul className="list-inline social social-white social-sm mt-4">
                        <li className="list-inline-item">
                          <a href><i className="fa fa-facebook" /></a>
                        </li>
                        <li className="list-inline-item">
                          <a href><i className="fa fa-twitter" /></a>
                        </li>
                        <li className="list-inline-item">
                          <a href><i className="fa fa-google-plus" /></a>
                        </li>
                        <li className="list-inline-item">
                          <a href><i className="fa fa-linkedin" /></a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="py-4">
                    <h4>
                      Peter Spenser
                    </h4>
                    <p className="mb-0">
                      Founder &amp; CEO
                    </p>
                  </div>
                </div> {/* END card*/}
              </div> {/* END col-lg-3 col-md-6*/}
              <div className="col-lg-3 col-md-6 mt-4">
                <div className="card text-center show-onHover-parent">
                  <div className="u-pos-rel">
                    <img className="w-100" src="assets/img/person/2.jpg" alt />
                    <div className="show-onHover u-pos-abs-center u-w-100p">
                      <ul className="list-inline social social-white social-sm mt-4">
                        <li className="list-inline-item">
                          <a href><i className="fa fa-facebook" /></a>
                        </li>
                        <li className="list-inline-item">
                          <a href><i className="fa fa-twitter" /></a>
                        </li>
                        <li className="list-inline-item">
                          <a href><i className="fa fa-google-plus" /></a>
                        </li>
                        <li className="list-inline-item">
                          <a href><i className="fa fa-linkedin" /></a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="py-4">
                    <h4>
                      Britney Simpson
                    </h4>
                    <p className="mb-0">
                      Creative Director
                    </p>
                  </div>
                </div> {/* END card*/}
              </div> {/* END col-lg-3 col-md-6*/}
              <div className="col-lg-3 col-md-6 mt-4">
                <div className="card text-center show-onHover-parent">
                  <div className="u-pos-rel">
                    <img className="w-100" src="assets/img/person/3.jpg" alt />
                    <div className="show-onHover u-pos-abs-center u-w-100p">
                      <ul className="list-inline social social-white social-sm mt-4">
                        <li className="list-inline-item">
                          <a href><i className="fa fa-facebook" /></a>
                        </li>
                        <li className="list-inline-item">
                          <a href><i className="fa fa-twitter" /></a>
                        </li>
                        <li className="list-inline-item">
                          <a href><i className="fa fa-google-plus" /></a>
                        </li>
                        <li className="list-inline-item">
                          <a href><i className="fa fa-linkedin" /></a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="py-4">
                    <h4>
                      Christian Bush
                    </h4>
                    <p className="mb-0">
                      Senior Developer
                    </p>
                  </div>
                </div> {/* END card*/}
              </div> {/* END col-lg-3 col-md-6*/}
              <div className="col-lg-3 col-md-6 mt-4">
                <div className="card text-center show-onHover-parent">
                  <div className="u-pos-rel">
                    <img className="w-100" src="assets/img/person/4.jpg" alt />
                    <div className="show-onHover u-pos-abs-center u-w-100p">
                      <ul className="list-inline social social-white social-sm mt-4">
                        <li className="list-inline-item">
                          <a href><i className="fa fa-facebook" /></a>
                        </li>
                        <li className="list-inline-item">
                          <a href><i className="fa fa-twitter" /></a>
                        </li>
                        <li className="list-inline-item">
                          <a href><i className="fa fa-google-plus" /></a>
                        </li>
                        <li className="list-inline-item">
                          <a href><i className="fa fa-linkedin" /></a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="py-4">
                    <h4>
                      James Anderson
                    </h4>
                    <p className="mb-0">
                      Business Analyst
                    </p>
                  </div>
                </div> {/* END card*/}
              </div> {/* END col-lg-3 col-md-6*/}
            </div>{/*END row*/}
          </div> {/* END container*/}
        </section> {/* END section*/}
        <section>
          <div className="container">
            <div className="row text-center">
              <div className="col-md-4 mt-5 mt-md-0">
                <span className="icon icon-MessageLeft u-fs-60 text-primary" />
                <h3 className="my-4">
                  Excellent Support
                </h3>
                <p>
                  Nam liber tempor cum soluta nobi eleifend option congue nihil imper per tem por legere eleifend legere me doming.
                </p>
              </div>  {/* END col-md-4 */}
              <div className="col-md-4 mt-5 mt-md-0">
                <span className="icon icon-Users u-fs-60 text-primary" />
                <h3 className="my-4">
                  Awesome Team
                </h3>
                <p>
                  Nam liber tempor cum soluta nobi eleifend option congue nihil imper per tem por legere eleifend legere me doming.
                </p>
              </div>  {/* END col-md-4 */}
              <div className="col-md-4 mt-5 mt-md-0">
                <span className="icon icon-Dollars u-fs-60 text-primary" />
                <h3 className="my-4">
                  Affordable Price
                </h3>
                <p>
                  Nam liber tempor cum soluta nobi eleifend option congue nihil imper per tem por legere eleifend legere me doming.
                </p>
              </div>  {/* END col-md-4 */}
            </div> {/* END row*/}
          </div> {/* END container*/}
        </section>
        <section id="reviews" style={{background: '#0081ff url(assets/img/startup/bg-3.png) no-repeat', backgroundPosition: 'center center'}}>  
          <div className="container">
            <div className="row">
              <div className="col-12 text-center">
                <h2 className="h1 text-white">
                  What Our Customers Say 
                </h2>
                <div className="u-h-4 u-w-50 bg-white rounded mt-4 u-mb-60 mx-auto" />
              </div>  {/* END col-12*/} 
            </div>{/*END row*/}
            <div data-init="carousel" data-slick="{ &quot;slidesToShow&quot;:1, &quot;dots&quot;:true, &quot;arrows&quot;:false, &quot;dotsClass&quot;:&quot;slick-dots dots-white text-center&quot;}" data-slick-margin={30}>
              <div className="p-5 rounded bg-white text-center box-shadow-v2 my-4">
                <img className="rounded-circle mx-auto mb-4 u-w-100" src="assets/img/person/1.jpg" alt />
                <h4>
                  Kenelia Deshmukh
                </h4>
                <p className="text-muted">
                  Creative Director
                </p>
                <p>
                  Nam liber tempor cum soluta nobis eleifend option congue is nihil imper per tem por legere me doming vulputate velit esse molestie possim. Ut wisi enim ad placerat facer.
                </p>
              </div>
              <div className="p-5 rounded bg-white text-center box-shadow-v2 my-4">
                <img className="rounded-circle mx-auto mb-4 u-w-100" src="assets/img/person/2.jpg" alt />
                <h4>
                  Dorian Black
                </h4>
                <p className="text-muted">
                  Manager
                </p>
                <p>
                  Nam liber tempor cum soluta nobis eleifend option congue is nihil imper per tem por legere me doming vulputate velit esse molestie possim. Ut wisi enim ad placerat facer.
                </p>
              </div>
              <div className="p-5 rounded bg-white text-center box-shadow-v2 my-4">
                <img className="rounded-circle mx-auto mb-4 u-w-100" src="assets/img/person/3.jpg" alt />
                <h4>
                  David Case
                </h4>
                <p className="text-muted">
                  Designer
                </p>
                <p>
                  Nam liber tempor cum soluta nobis eleifend option congue is nihil imper per tem por legere me doming vulputate velit esse molestie possim. Ut wisi enim ad placerat facer.
                </p>
              </div>
            </div> {/* END carosel*/}		
          </div> {/* END container*/}
        </section> {/* END section*/}
        <section className="u-py-100 bg-gray-v2">
          <div className="container">
            <div className="row">
              <div className="col-12 d-md-flex justify-content-between text-center">
                <div className="p-3">
                  <img src="assets/img/partner/micosoft.png" alt />
                </div>
                <div className="p-3">
                  <img src="assets/img/partner/envato.png" alt />
                </div>
                <div className="p-3">
                  <img src="assets/img/partner/dribbble.png" alt />
                </div>
                <div className="p-3">
                  <img src="assets/img/partner/google.png" alt />
                </div>
                <div className="p-3">
                  <img src="assets/img/partner/micosoft.png" alt />
                </div>
              </div>
            </div> {/* END row*/}
          </div> {/* END container*/}
        </section>
        <section id="pricing">
          <div className="container text-center">
            <div className="row">
              <div className="col-12">
                <h2 className="h1">
                  Choose the Plan that You <br /> Really Need!
                </h2>
                <div className="u-h-4 u-w-50 bg-primary rounded mt-4 u-mb-40 mx-auto" />
              </div>
            </div> {/* END row*/}
            <div className="row">
              <div className="col-md-4 mt-4">
                <div className="bg-white box-shadow-v2 rounded py-5">
                  <img src="assets/img/svg/plane-up.svg" className="u-h-90" alt />
                  <h4 className="u-mb-35 u-mt-15">
                    Startup
                  </h4>
                  <hr className="m-0" />
                  <ul className="list-unstyled u-py-30 u-lh-2">
                    <li><strong>Unlimited</strong> searchable message</li>
                    <li><strong>Unlimited</strong> apps and service</li>
                    <li><strong>8GB</strong> file storage per team</li>
                    <li><strong>100GB</strong> Monthly Bandwidth</li>
                  </ul>
                  <hr className="m-0" />
                  <h2 className="u-fs-60 u-fw-600 u-my-20">
                    <sup className="u-fs-20">$</sup>14
                  </h2>
                  <a href className="btn btn-white btn-rounded">
                    Get Started
                  </a>
                </div>
              </div> {/* END col-md-4*/}
              <div className="col-md-4 mt-4">
                <div className="bg-white box-shadow-v2 rounded py-5">
                  <img src="assets/img/svg/phone-book.svg" className="u-h-90" alt />
                  <h4 className="u-mb-35 u-mt-15">
                    Professional
                  </h4>
                  <hr className="m-0" />
                  <ul className="list-unstyled u-py-30 u-lh-2">
                    <li><strong>Unlimited</strong> searchable message</li>
                    <li><strong>Unlimited</strong> apps and service</li>
                    <li><strong>8GB</strong> file storage per team</li>
                    <li><strong>100GB</strong> Monthly Bandwidth</li>
                  </ul>
                  <hr className="m-0" />
                  <h2 className="u-fs-60 u-fw-600 u-my-20 text-primary">
                    <sup className="u-fs-20">$</sup>49
                  </h2>
                  <a href className="btn btn-white btn-rounded">
                    Get Started
                  </a>
                </div>
              </div> {/* END col-md-4*/}
              <div className="col-md-4 mt-4">
                <div className="bg-white box-shadow-v2 rounded py-5">
                  <img src="assets/img/svg/dollar-bag.svg" className="u-h-90" alt />
                  <h4 className="u-mb-35 u-mt-15">
                    Business
                  </h4>
                  <hr className="m-0" />
                  <ul className="list-unstyled u-py-30 u-lh-2">
                    <li><strong>Unlimited</strong> searchable message</li>
                    <li><strong>Unlimited</strong> apps and service</li>
                    <li><strong>8GB</strong> file storage per team</li>
                    <li><strong>100GB</strong> Monthly Bandwidth</li>
                  </ul>
                  <hr className="m-0" />
                  <h2 className="u-fs-60 u-fw-600 u-my-20">
                    <sup className="u-fs-20">$</sup>99
                  </h2>
                  <a href className="btn btn-white btn-rounded">
                    Get Started
                  </a>
                </div>
              </div> {/* END col-md-4*/}
            </div> {/* END row*/}
          </div> {/* END container*/}
        </section> {/*END section*/}
        <section id="blog" className="bg-gray-v2">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 m-auto text-center">
                <h2 className="h1">
                  Latest News
                </h2>
                <div className="u-h-4 u-w-50 bg-primary rounded mt-4 u-mb-40 mx-auto" />
              </div>
            </div> {/*END row*/}
            <div className="row">
              <div className="col-md-4 mt-4">
                <div className="card border-0 box-shadow-v3 u-h-100p">
                  <img src="assets/img/blog/1.jpg" alt />
                  <div className="u-p-30">
                    <h4>Contrast and Similarity in Design</h4>
                    <p className="d-flex text-muted">
                      <span><i className="icon icon-Time mr-1" /> May 24, 2017</span>
                      <span><i className="icon icon-Eye mr-1 ml-3" /> 468 views</span>
                    </p>
                    <p>
                      Nam liber tempor cum soluta nobis eleif end option congue is nihil
                    </p>
                    <a href className="btn btn-primary btn-rounded my-3">Read More</a>
                  </div>
                </div> {/* END card*/}
              </div> {/* END col-md-4*/}
              <div className="col-md-4 mt-4">
                <div className="card border-0 box-shadow-v3 u-h-100p">
                  <img src="assets/img/blog/3.jpg" alt />
                  <div className="u-p-30">
                    <h4>
                      Hyper conv in 2018
                    </h4>
                    <p className="d-flex text-muted">
                      <span><i className="icon icon-Time mr-1" /> May 24, 2017</span>
                      <span><i className="icon icon-Eye mr-1 ml-3" /> 468 views</span>
                    </p>
                    <p>
                      Nam liber tempor cum soluta nobis eleif end option congue is nihil imper per tem por legere me
                    </p>
                    <a href className="btn btn-primary btn-rounded my-3">
                      Read More
                    </a>
                  </div>
                </div> {/* END card*/}
              </div> {/* END col-md-4*/}
              <div className="col-md-4 mt-4">
                <div className="card border-0 box-shadow-v3 u-h-100p">
                  <img src="assets/img/blog/2.jpg" alt />
                  <div className="u-p-30">
                    <h4>
                      Awesome design trand in clean design 
                    </h4>
                    <p className="d-flex text-muted">
                      <span><i className="icon icon-Time mr-1" /> May 24, 2017</span>
                      <span><i className="icon icon-Eye mr-1 ml-3" /> 468 views</span>
                    </p>
                    <p>
                      Nam liber tempor cum soluta nobis eleif end option congue is nihil
                    </p>
                    <a href className="btn btn-primary btn-rounded my-3">
                      Read More
                    </a>
                  </div>
                </div> {/* END card*/}
              </div> {/* END col-md-4*/}
            </div> {/* END row*/}
          </div> {/* END container*/}
        </section>
        <section id="contact" style={{background: '#0081ff url(assets/img/startup/bg-4.png) no-repeat', backgroundPosition: 'center center'}}>
          <div className="container">
            <div className="row">
              <div className="col-lg-8 mx-auto">
                <h2 className="h1 text-center text-white u-mb-30">
                  Do You Want to Start a <br /> New Project?
                </h2>
                <div className="u-h-4 u-w-50 bg-white rounded u-mb-70 mx-auto" />
                <form action method="POST">
                  <div className="row">
                    <div className="col-md-6 u-mb-30">
                      <input placeholder="Your name*" type="text" />
                    </div>
                    <div className="col-md-6 u-mb-30">
                      <input placeholder="Your email*" type="email" />
                    </div>
                    <div className="col-md-6 u-mb-30">
                      <input placeholder="Phone number" type="tel" />
                    </div>
                    <div className="col-md-6 u-mb-30">
                      <input placeholder="Your website" type="tel" />
                    </div>
                    <div className="col-12 u-mb-30">
                      <textarea rows={5} placeholder="Message" defaultValue={""} />
                    </div>
                  </div> {/* END row*/}
                  <div className="text-center">
                    <button className="btn btn-white"> Send Request</button>
                  </div>
                </form>
              </div> {/* END col-lg-8*/}
            </div> {/* END row*/}
          </div> {/* END container*/}
        </section>
        <footer>
          <section className="bg-gray-v2">
            <div className="container">
              <div className="row">
                <div className="col-lg-4 mb-5 mb-lg-0">
                  <img src="assets/img/logo-inverse.png" alt />
                  <p className="u-my-40">
                    Nam liber tempor cum soluta nobis eleifend they option congue is nihil 
                    imper per tem por legere is  me velit doming vulputate.
                  </p>
                  <form className="form-inline">
                    <div className="input-group box-shadow-v1 u-rounded-50 bg-white u-of-hidden">
                      <div className="input-group-addon bg-white border-0 pl-4 pr-0">
                        <span className="icon icon-Mail text-primary" />
                      </div>
                      <input className="form-control border-0 p-3" placeholder="Enter your email" type="text" />
                      <button type="submit" className="input-group-btn btn bg-white">
                        <span className="icon icon-Arrow text-primary" />
                      </button>
                    </div>
                  </form>
                </div>		
                <div className="col-lg-2 col-md-6 ml-auto mb-5 mb-lg-0">
                  <h4>Useful Links</h4>
                  <div className="u-h-4 u-w-50 bg-primary rounded mt-3 u-mb-40" />
                  <ul className="list-unstyled u-lh-2">
                    <li><a href>About Us </a> </li>
                    <li><a href>Testimonials </a> </li>
                    <li><a href>Pricing </a> </li>
                    <li><a href>Contact Us</a></li>
                    <li><a href>News </a> </li>
                  </ul>
                </div>
                <div className="col-lg-3 col-md-6 ml-auto mb-5 mb-lg-0">
                  <h4>Contact Info</h4>
                  <div className="u-h-4 u-w-50 bg-primary rounded mt-3 u-mb-40" />
                  <ul className="list-unstyled">
                    <li className="mb-2">
                      <span className="icon icon-Phone2 text-primary mr-2" /> 008. 567. 890. 634
                    </li>
                    <li className="mb-2">
                      <span className="icon icon-Mail text-primary mr-2" /> <a href="mailto:support@echotheme.com">support@echotheme.com</a>
                    </li>
                    <li className="mb-2">
                      <span className="icon icon-Pointer text-primary mr-2" /> Melbourne, Australia
                    </li>
                  </ul>
                  <ul className="list-inline social social-rounded social-white mt-4">
                    <li className="list-inline-item">
                      <a href><i className="fa fa-facebook" /></a>
                    </li>
                    <li className="list-inline-item">
                      <a href><i className="fa fa-twitter" /></a>
                    </li>
                    <li className="list-inline-item">
                      <a href><i className="fa fa-google-plus" /></a>
                    </li>
                    <li className="list-inline-item">
                      <a href><i className="fa fa-linkedin" /></a>
                    </li>
                  </ul>
                </div>
              </div> {/* END row*/}
            </div> {/* END container*/}
          </section> {/* END section*/}
          <section className="u-py-40">
            <div className="container">				
              <p className="mb-0 text-center"> 
                © Copyright 2017  -  Created by <a className="text-primary" href="https://wrapbootstrap.com/user/EchoTheme" target="_blank">EchoTheme</a>
              </p>
            </div>
          </section>
        </footer> {/* END footer*/}
        <div className="scroll-top bg-white box-shadow-v1">
          <i className="fa fa-angle-up" aria-hidden="true" />
        </div> 
        {/*
// ////////////////////////////////////////////////
// To Reduce server request and improved page speed drastically all third-party plugin bundle in assets/js/bundle.js
// If you wanna add those manually bellow is the sequence 
// ///////////////////////////////////////////////
*/}
        {/*
		
		
		
		
		
		
		
		
		
		
		
		
		
		
*/}
      </div>
    );
  }
});