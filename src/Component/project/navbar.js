         import {Link} from 'react-router-dom';
         const Navbar = ()=>{
            return(
         <div>
         <meta charSet="utf-8" />
          <title>iDESIGN - Interior Design HTML Template</title>
          <meta content="width=device-width, initial-scale=1.0" name="viewport" />
          <meta content="Free HTML Templates" name="keywords" />
          <meta content="Free HTML Templates" name="description" />
          <link to={process.env.PUBLIC_URL+"img/favicon.ico"} rel="icon" />
          <link to="https://fonts.googleapis.com/css2?family=Montserrat&family=Oswald:wght@400;500;600&display=swap" rel="stylesheet" /> 
          <link to="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css" rel="stylesheet" />
          {/* Flaticon Font */}
          <link to="lib/flaticon/font/flaticon.css" rel="stylesheet" />
          {/* Libraries Stylesheet */}
          <link to="lib/owlcarousel/assets/owl.carousel.min.css" rel="stylesheet" />
          <link to="lib/lightbox/css/lightbox.min.css" rel="stylesheet" />
          {/* Customized Bootstrap Stylesheet */}
          <link to="css/style.css" rel="stylesheet" />
          {/* Topbar Start */}
          <div className="container-fluid bg-dark py-3">
            <div className="container">
              <div className="row">
                <div className="col-md-6 text-center text-lg-left mb-2 mb-lg-0">
                  <div className="d-inline-flex align-items-center">
                   <Link className="text-white pr-3" to>FAQs</Link>
                    <span className="text-white">|</span>
                   <Link className="text-white px-3" to>Help</Link>
                    <span className="text-white">|</span>
                   <Link className="text-white pl-3" to>Support</Link>
                  </div>
                </div>
                <div className="col-md-6 text-center text-lg-right">
                  <div className="d-inline-flex align-items-center">
                   <Link className="text-white px-3" to>
                      <i className="fab fa-facebook-f" />
                    </Link>
                   <Link className="text-white px-3" to>
                      <i className="fab fa-twitter" />
                    </Link>
                   <Link className="text-white px-3" to>
                      <i className="fab fa-linkedin-in" />
                    </Link>
                   <Link className="text-white px-3" to>
                      <i className="fab fa-instagram" />
                    </Link>
                   <Link className="text-white pl-3" to>
                      <i className="fab fa-youtube" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Topbar End */}
          {/* Navbar Start */}
          <div className="container-fluid position-relative nav-bar p-0">
            <div className="container position-relative" style={{zIndex: 9}}>
              <nav className="navbar navbar-expand-lg bg-secondary navbar-dark py-3 py-lg-0 pl-3 pl-lg-5">
               <Link to className="navbar-brand">
                  <h1 className="m-0 display-5 text-white"><span className="text-primary">i</span>DESIGN</h1>
                </Link>
                <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                  <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse justify-content-between px-3" id="navbarCollapse">
                  <div className="navbar-nav ml-auto py-0">
                   <Link to="/" className="nav-item nav-link active">Home</Link>
                   <Link to="/about" className="nav-item nav-link">About</Link>
                   <Link to="/service" className="nav-item nav-link">Service</Link>
                   <Link to="/project" className="nav-item nav-link">Project</Link>
                    <div className="nav-item dropdown">
                     <Link to="#" className="nav-link dropdown-toggle" data-toggle="dropdown">Pages</Link>
                      <div className="dropdown-menu rounded-0 m-0">
                       <Link to="react-app/blog" className="dropdown-item">Blog Grid</Link>
                       <Link to="react-app/single" className="dropdown-item">Blog Detail</Link>
                      </div>
                    </div>
                   <Link to="react-app/contact" className="nav-item nav-link">Contact</Link>
                  </div>
                </div>
              </nav>
            </div>
          </div>
          {/* Navbar End */}
          {/* Under Nav Start */}
          <div className="container-fluid bg-white py-3">
            <div className="container">
              <div className="row">
                <div className="col-lg-4 text-left mb-3 mb-lg-0">
                  <div className="d-inline-flex text-left">
                    <h1 className="flaticon-office font-weight-normal text-primary m-0 mr-3" />
                    <div className="d-flex flex-column">
                      <h5>Our Office</h5>
                      <p className="m-0">123 Street, New York, USA</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 text-left text-lg-center mb-3 mb-lg-0">
                  <div className="d-inline-flex text-left">
                    <h1 className="flaticon-email font-weight-normal text-primary m-0 mr-3" />
                    <div className="d-flex flex-column">
                      <h5>Email Us</h5>
                      <p className="m-0">info@example.com</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 text-left text-lg-right mb-3 mb-lg-0">
                  <div className="d-inline-flex text-left">
                    <h1 className="flaticon-telephone font-weight-normal text-primary m-0 mr-3" />
                    <div className="d-flex flex-column">
                      <h5>Call Us</h5>
                      <p className="m-0">+012 345 6789</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
             );
         }
         export default Navbar;
