import { Link } from "react-router-dom";
const Blog = () =>{
     return (
        <div>
          {/* Under Nav End */}
          {/* Page Header Start */}
          <div className="container-fluid bg-secondary py-5">
            <div className="container py-5">
              <div className="row align-items-center py-4">
                <div className="col-md-6 text-center text-md-left">
                  <h1 className="mb-4 mb-md-0 text-primary text-uppercase">Our Blog</h1>
                </div>
                <div className="col-md-6 text-center text-md-right">
                  <div className="d-inline-flex align-items-center">
                    <Link className="btn btn-outline-primary" to>Home</Link>
                    <i className="fas fa-angle-double-right text-primary mx-2" />
                    <Link className="btn btn-outline-primary disabled" to>Our Blog</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Page Header Start */}
          {/* Blog Start */}
          <div className="container-fluid bg-light pt-5">
            <div className="container py-5">
              <div className="row justify-content-center">
                <div className="col-lg-6 col-md-8 col text-center mb-4">
                  <h6 className="text-primary font-weight-normal text-uppercase mb-3">Our Blog</h6>
                  <h1 className="mb-4">Read The Latest News &amp; Articles From Our Blog</h1>
                </div>
              </div>
              <div className="row pb-3">
                <div className="col-md-4 mb-4">
                  <div className="card border-0 mb-2">
                    <img className="card-img-top" src={process.env.PUBLIC_URL+"img/blog-1.jpg"} alt="" />
                    <div className="card-body bg-white p-4">
                      <div className="d-flex align-items-center mb-3">
                        <Link className="btn btn-primary" to><i className="fa fa-link" /></Link>
                        <h5 className="m-0 ml-3 text-truncate">Diam amet eos at no eos</h5>
                      </div>
                      <p>Diam amet eos at no eos sit, amet rebum ipsum clita stet, diam sea est diam eos, sit vero stet justo</p>
                      <div className="d-flex">
                        <small className="mr-3"><i className="fa fa-user text-primary" /> Admin</small>
                        <small className="mr-3"><i className="fa fa-folder text-primary" /> Web Design</small>
                        <small className="mr-3"><i className="fa fa-comments text-primary" /> 15</small>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 mb-4">
                  <div className="card border-0 mb-2">
                    <img className="card-img-top" src={process.env.PUBLIC_URL+"img/blog-2.jpg"} alt="" />
                    <div className="card-body bg-white p-4">
                      <div className="d-flex align-items-center mb-3">
                        <Link className="btn btn-primary" to><i className="fa fa-link" /></Link>
                        <h5 className="m-0 ml-3 text-truncate">Diam amet eos at no eos</h5>
                      </div>
                      <p>Diam amet eos at no eos sit, amet rebum ipsum clita stet, diam sea est diam eos, sit vero stet justo</p>
                      <div className="d-flex">
                        <small className="mr-3"><i className="fa fa-user text-primary" /> Admin</small>
                        <small className="mr-3"><i className="fa fa-folder text-primary" /> Web Design</small>
                        <small className="mr-3"><i className="fa fa-comments text-primary" /> 15</small>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 mb-4">
                  <div className="card border-0 mb-2">
                    <img className="card-img-top" src={process.env.PUBLIC_URL+"img/blog-3.jpg"} alt="" />
                    <div className="card-body bg-white p-4">
                      <div className="d-flex align-items-center mb-3">
                        <Link className="btn btn-primary" to><i className="fa fa-link" /></Link>
                        <h5 className="m-0 ml-3 text-truncate">Diam amet eos at no eos</h5>
                      </div>
                      <p>Diam amet eos at no eos sit, amet rebum ipsum clita stet, diam sea est diam eos, sit vero stet justo</p>
                      <div className="d-flex">
                        <small className="mr-3"><i className="fa fa-user text-primary" /> Admin</small>
                        <small className="mr-3"><i className="fa fa-folder text-primary" /> Web Design</small>
                        <small className="mr-3"><i className="fa fa-comments text-primary" /> 15</small>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 mb-4">
                  <div className="card border-0 mb-2">
                    <img className="card-img-top" src={process.env.PUBLIC_URL+"img/blog-2.jpg"} alt="" />
                    <div className="card-body bg-white p-4">
                      <div className="d-flex align-items-center mb-3">
                        <Link className="btn btn-primary" to><i className="fa fa-link" /></Link>
                        <h5 className="m-0 ml-3 text-truncate">Diam amet eos at no eos</h5>
                      </div>
                      <p>Diam amet eos at no eos sit, amet rebum ipsum clita stet, diam sea est diam eos, sit vero stet justo</p>
                      <div className="d-flex">
                        <small className="mr-3"><i className="fa fa-user text-primary" /> Admin</small>
                        <small className="mr-3"><i className="fa fa-folder text-primary" /> Web Design</small>
                        <small className="mr-3"><i className="fa fa-comments text-primary" /> 15</small>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 mb-4">
                  <div className="card border-0 mb-2">
                    <img className="card-img-top" src={process.env.PUBLIC_URL+"img/blog-3.jpg"} alt="" />
                    <div className="card-body bg-white p-4">
                      <div className="d-flex align-items-center mb-3">
                        <Link className="btn btn-primary" to><i className="fa fa-link" /></Link>
                        <h5 className="m-0 ml-3 text-truncate">Diam amet eos at no eos</h5>
                      </div>
                      <p>Diam amet eos at no eos sit, amet rebum ipsum clita stet, diam sea est diam eos, sit vero stet justo</p>
                      <div className="d-flex">
                        <small className="mr-3"><i className="fa fa-user text-primary" /> Admin</small>
                        <small className="mr-3"><i className="fa fa-folder text-primary" /> Web Design</small>
                        <small className="mr-3"><i className="fa fa-comments text-primary" /> 15</small>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 mb-4">
                  <div className="card border-0 mb-2">
                    <img className="card-img-top" src={process.env.PUBLIC_URL+"img/blog-1.jpg"} alt="" />
                    <div className="card-body bg-white p-4">
                      <div className="d-flex align-items-center mb-3">
                        <Link className="btn btn-primary" to><i className="fa fa-link" /></Link>
                        <h5 className="m-0 ml-3 text-truncate">Diam amet eos at no eos</h5>
                      </div>
                      <p>Diam amet eos at no eos sit, amet rebum ipsum clita stet, diam sea est diam eos, sit vero stet justo</p>
                      <div className="d-flex">
                        <small className="mr-3"><i className="fa fa-user text-primary" /> Admin</small>
                        <small className="mr-3"><i className="fa fa-folder text-primary" /> Web Design</small>
                        <small className="mr-3"><i className="fa fa-comments text-primary" /> 15</small>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-12 mb-4">
                  <nav aria-label="Page navigation">
                    <ul className="pagination justify-content-center mb-0">
                      <li className="page-item disabled">
                        <Link className="page-link" to="#" aria-label="Previous">
                          <span aria-hidden="true">«</span>
                          <span className="sr-only">Previous</span>
                        </Link>
                      </li>
                      <li className="page-item active"><Link className="page-link" to="#">1</Link></li>
                      <li className="page-item"><Link className="page-link" to="#">2</Link></li>
                      <li className="page-item"><Link className="page-link" to="#">3</Link></li>
                      <li className="page-item">
                        <Link className="page-link" to="#" aria-label="Next">
                          <span aria-hidden="true">»</span>
                          <span className="sr-only">Next</span>
                        </Link>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
          {/* Blog End */}
          {/* Footer Start */}
       
        </div>
      );
    }
export default Blog;