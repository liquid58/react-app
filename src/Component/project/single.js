import { Link } from "react-router-dom";
const Singal = () =>{
      return (
        <div>
          {/* Under Nav End */}
          {/* Page Header Start */}
          <div className="container-fluid bg-secondary py-5">
            <div className="container py-5">
              <div className="row align-items-center py-4">
                <div className="col-md-6 text-center text-md-left">
                  <h1 className="mb-4 mb-md-0 text-primary text-uppercase">Blog Detail</h1>
                </div>
                <div className="col-md-6 text-center text-md-right">
                  <div className="d-inline-flex align-items-center">
                    <Link className="btn btn-outline-primary" to>Home</Link>
                    <i className="fas fa-angle-double-right text-primary mx-2" />
                    <Link className="btn btn-outline-primary disabled" to>Blog Detail</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Page Header Start */}
          {/* Detail Start */}
          <div className="container py-5">
            <div className="row pt-5">
              <div className="col-lg-8">
                <div className="d-flex flex-column text-left mb-4">
                  <h6 className="text-primary font-weight-normal text-uppercase mb-3">Blog Detail Page</h6>
                  <h1 className="mb-4 section-title">Diam dolor est ipsum clita lorem</h1>
                  <div className="d-index-flex mb-2">
                    <span className="mr-3"><i className="fa fa-user text-primary" /> Admin</span>
                    <span className="mr-3"><i className="fa fa-folder text-primary" /> Web Design</span>
                    <span className="mr-3"><i className="fa fa-comments text-primary" /> 15</span>
                  </div>
                </div>
                <div className="mb-5">
                  <img className="img-fluid w-100 mb-4" src={process.env.PUBLIC_URL+"img/carousel-1.jpg"} alt="Image" />
                  <p>Sadipscing labore amet rebum est et justo gubergren. Et eirmod ipsum sit diam ut magna lorem. Nonumy vero labore lorem sanctus rebum et lorem magna kasd, stet amet magna accusam consetetur eirmod. Kasd accusam sit ipsum sadipscing et at at sanctus et. Ipsum sit gubergren dolores et, consetetur justo invidunt at et aliquyam ut et vero clita. Diam sea sea no sed dolores diam nonumy, gubergren sit stet no diam kasd vero.</p>
                  <p>Voluptua est takimata stet invidunt sed rebum nonumy stet, clita aliquyam dolores vero stet consetetur elitr takimata rebum sanctus. Sit sed accusam stet sit nonumy kasd diam dolores, sanctus lorem kasd duo dolor dolor vero sit et. Labore ipsum duo sanctus amet eos et. Consetetur no sed et aliquyam ipsum justo et, clita lorem sit vero amet amet est dolor elitr, stet et no diam sit. Dolor erat justo dolore sit invidunt.</p>
                  <h2 className="mb-4">Est dolor lorem et ea</h2>
                  <img className="img-fluid w-50 float-left mr-4 mb-3" src={process.env.PUBLIC_URL+"img/blog-1.jpg"} alt="Image" />
                  <p>Diam dolor est labore duo invidunt ipsum clita et, sed et lorem voluptua tempor invidunt at est sanctus sanctus. Clita dolores sit kasd diam takimata justo diam lorem sed. Magna amet sed rebum eos. Clita no magna no dolor erat diam tempor rebum consetetur, sanctus labore sed nonumy diam lorem amet eirmod. No at tempor sea diam kasd, takimata ea nonumy elitr sadipscing gubergren erat. Gubergren at lorem invidunt sadipscing rebum sit amet ut ut, voluptua diam dolores at sadipscing stet. Clita dolor amet dolor ipsum vero ea ea eos. Invidunt sed diam dolores takimata dolor dolore dolore sit. Sit ipsum erat amet lorem et, magna sea at sed et eos. Accusam eirmod kasd lorem clita sanctus ut consetetur et. Et duo tempor sea kasd clita ipsum et. Takimata kasd diam justo est eos erat aliquyam et ut. Ea sed sadipscing no justo et eos labore, gubergren ipsum magna dolor lorem dolore, elitr aliquyam takimata sea kasd dolores diam, amet et est accusam labore eirmod vero et voluptua. Amet labore clita duo et no. Rebum voluptua magna eos magna, justo gubergren labore sit voluptua eos.</p>
                  <h3 className="mb-4">Est dolor lorem et ea</h3>
                  <img className="img-fluid w-50 float-right ml-4 mb-3" src={process.env.PUBLIC_URL+"img/blog-2.jpg"} alt="Image" />
                  <p>Diam dolor est labore duo invidunt ipsum clita et, sed et lorem voluptua tempor invidunt at est sanctus sanctus. Clita dolores sit kasd diam takimata justo diam lorem sed. Magna amet sed rebum eos. Clita no magna no dolor erat diam tempor rebum consetetur, sanctus labore sed nonumy diam lorem amet eirmod. No at tempor sea diam kasd, takimata ea nonumy elitr sadipscing gubergren erat. Gubergren at lorem invidunt sadipscing rebum sit amet ut ut, voluptua diam dolores at sadipscing stet. Clita dolor amet dolor ipsum vero ea ea eos. Invidunt sed diam dolores takimata dolor dolore dolore sit. Sit ipsum erat amet lorem et, magna sea at sed et eos. Accusam eirmod kasd lorem clita sanctus ut consetetur et. Et duo tempor sea kasd clita ipsum et. Takimata kasd diam justo est eos erat aliquyam et ut. Ea sed sadipscing no justo et eos labore, gubergren ipsum magna dolor lorem dolore, elitr aliquyam takimata sea kasd dolores diam, amet et est accusam labore eirmod vero et voluptua. Amet labore clita duo et no.</p>
                </div>
                <div className="mb-5 mx-n3">
                  <h3 className="mb-4 ml-3 section-title">Related Post</h3>
                  <div className="owl-carousel service-carousel position-relative">
                    <div className="card border-0 mx-3">
                      <img className="card-img-top" src={process.env.PUBLIC_URL+"img/blog-1.jpg"} alt="" />
                      <div className="card-body bg-light p-4">
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
                    <div className="card border-0 mx-3">
                      <img className="card-img-top" src={process.env.PUBLIC_URL+"img/blog-2.jpg"} alt="" />
                      <div className="card-body bg-light p-4">
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
                    <div className="card border-0 mx-3">
                      <img className="card-img-top" src={process.env.PUBLIC_URL+"img/blog-3.jpg"} alt="" />
                      <div className="card-body bg-light p-4">
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
                </div>
                <div className="mb-5">
                  <h3 className="mb-4 section-title">3 Comments</h3>
                  <div className="media mb-4">
                    <img src={process.env.PUBLIC_URL+"img/user.jpg"} alt="Image" className="img-fluid mr-3 mt-1" style={{width: '45px'}} />
                    <div className="media-body">
                      <h6>John Doe <small><i>01 Jan 2045 at 12:00pm</i></small></h6>
                      <p>Diam amet duo labore stet elitr invidunt ea clita ipsum voluptua, tempor labore accusam ipsum et no at. Kasd diam tempor rebum magna dolores sed sed eirmod ipsum. Gubergren clita aliquyam consetetur sadipscing, at tempor amet ipsum diam tempor consetetur at sit.</p>
                      <button className="btn btn-sm btn-light">Reply</button>
                    </div>
                  </div>
                  <div className="media mb-4">
                    <img src={process.env.PUBLIC_URL+"img/user.jpg"} alt="Image" className="img-fluid mr-3 mt-1" style={{width: '45px'}} />
                    <div className="media-body">
                      <h6>John Doe <small><i>01 Jan 2045 at 12:00pm</i></small></h6>
                      <p>Diam amet duo labore stet elitr invidunt ea clita ipsum voluptua, tempor labore accusam ipsum et no at. Kasd diam tempor rebum magna dolores sed sed eirmod ipsum. Gubergren clita aliquyam consetetur sadipscing, at tempor amet ipsum diam tempor consetetur at sit.</p>
                      <button className="btn btn-sm btn-light">Reply</button>
                      <div className="media mt-4">
                        <img src={process.env.PUBLIC_URL+"img/user.jpg"} alt="Image" className="img-fluid mr-3 mt-1" style={{width: '45px'}} />
                        <div className="media-body">
                          <h6>John Doe <small><i>01 Jan 2045 at 12:00pm</i></small></h6>
                          <p>Diam amet duo labore stet elitr invidunt ea clita ipsum voluptua, tempor labore accusam ipsum et no at. Kasd diam tempor rebum magna dolores sed sed eirmod ipsum. Gubergren clita aliquyam consetetur sadipscing, at tempor amet ipsum diam tempor consetetur at sit.</p>
                          <button className="btn btn-sm btn-light">Reply</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-light p-5">
                  <h3 className="mb-4 section-title">Leave a comment</h3>
                  <form>
                    <div className="form-group">
                      <label htmlFor="name">Name *</label>
                      <input type="text" className="form-control" id="name" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Email *</label>
                      <input type="email" className="form-control" id="email" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="website">Website</label>
                      <input type="url" className="form-control" id="website" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="message">Message *</label>
                      <textarea id="message" cols={30} rows={5} className="form-control" defaultValue={""} />
                    </div>
                    <div className="form-group mb-0">
                      <input type="submit" defaultValue="Leave Comment" className="btn btn-primary px-3" />
                    </div>
                  </form>
                </div>
              </div>
              <div className="col-lg-4 mt-5 mt-lg-0">
                <div className="d-flex flex-column text-center bg-secondary mb-5 py-5 px-4">
                  <img src={process.env.PUBLIC_URL+"img/user.jpg"} className="img-fluid mx-auto mb-3" style={{width: '100px'}} />
                  <h3 className="text-primary mb-3">John Doe</h3>
                  <p className="text-white m-0">Conset elitr erat vero dolor ipsum et diam, eos dolor lorem ipsum, ipsum ipsum sit no ut est. Guber ea ipsum erat kasd amet est elitr ea sit.</p>
                </div>
                <div className="mb-5">
                  <form action>
                    <div className="input-group">
                      <input type="text" className="form-control form-control-lg" placeholder="Keyword" />
                      <div className="input-group-append">
                        <span className="input-group-text bg-transparent text-primary"><i className="fa fa-search" /></span>
                      </div>
                    </div>
                  </form>
                </div>
                <div className="mb-5">
                  <h3 className="mb-4 section-title">Categories</h3>
                  <ul className="list-group">
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                      Web Design
                      <span className="badge badge-primary badge-pill">150</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                      Web Development
                      <span className="badge badge-primary badge-pill">131</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                      Online Marketing
                      <span className="badge badge-primary badge-pill">78</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                      Keyword Research
                      <span className="badge badge-primary badge-pill">56</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                      Email Marketing
                      <span className="badge badge-primary badge-pill">98</span>
                    </li>
                  </ul>
                </div>
                <div className="mb-5">
                  <img src={process.env.PUBLIC_URL+"img/blog-1.jpg"} alt="" className="img-fluid" />
                </div>
                <div className="mb-5">
                  <h3 className="mb-4 section-title">Recent Post</h3>
                  <div className="d-flex align-items-center border-bottom mb-3 pb-3">
                    <img className="img-fluid" src={process.env.PUBLIC_URL+"img/blog-1.jpg"} style={{width: '80px', height: '80px'}} alt="" />
                    <div className="d-flex flex-column pl-3">
                      <Link className="text-dark mb-2" to>Lorem ipsum dolor sit amet consec adipis elit</Link>
                      <div className="d-flex">
                        <small className="mr-3"><i className="fa fa-user text-primary" /> Admin</small>
                        <small className="mr-3"><i className="fa fa-folder text-primary" /> Web Design</small>
                        <small className="mr-3"><i className="fa fa-comments text-primary" /> 15</small>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex align-items-center border-bottom mb-3 pb-3">
                    <img className="img-fluid" src={process.env.PUBLIC_URL+"img/blog-2.jpg"} style={{width: '80px', height: '80px'}} alt="" />
                    <div className="d-flex flex-column pl-3">
                      <Link className="text-dark mb-2" to>Lorem ipsum dolor sit amet consec adipis elit</Link>
                      <div className="d-flex">
                        <small className="mr-3"><i className="fa fa-user text-primary" /> Admin</small>
                        <small className="mr-3"><i className="fa fa-folder text-primary" /> Web Design</small>
                        <small className="mr-3"><i className="fa fa-comments text-primary" /> 15</small>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex align-items-center border-bottom mb-3 pb-3">
                    <img className="img-fluid" src={process.env.PUBLIC_URL+"img/blog-3.jpg"} style={{width: '80px', height: '80px'}} alt="" />
                    <div className="d-flex flex-column pl-3">
                      <Link className="text-dark mb-2" to>Lorem ipsum dolor sit amet consec adipis elit</Link>
                      <div className="d-flex">
                        <small className="mr-3"><i className="fa fa-user text-primary" /> Admin</small>
                        <small className="mr-3"><i className="fa fa-folder text-primary" /> Web Design</small>
                        <small className="mr-3"><i className="fa fa-comments text-primary" /> 15</small>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex align-items-center border-bottom mb-3 pb-3">
                    <img className="img-fluid" src={process.env.PUBLIC_URL+"img/blog-1.jpg"} style={{width: '80px', height: '80px'}} alt="" />
                    <div className="d-flex flex-column pl-3">
                      <Link className="text-dark mb-2" to>Lorem ipsum dolor sit amet consec adipis elit</Link>
                      <div className="d-flex">
                        <small className="mr-3"><i className="fa fa-user text-primary" /> Admin</small>
                        <small className="mr-3"><i className="fa fa-folder text-primary" /> Web Design</small>
                        <small className="mr-3"><i className="fa fa-comments text-primary" /> 15</small>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex align-items-center border-bottom mb-3 pb-3">
                    <img className="img-fluid" src={process.env.PUBLIC_URL+"img/blog-2.jpg"} style={{width: '80px', height: '80px'}} alt="" />
                    <div className="d-flex flex-column pl-3">
                      <Link className="text-dark mb-2" to>Lorem ipsum dolor sit amet consec adipis elit</Link>
                      <div className="d-flex">
                        <small className="mr-3"><i className="fa fa-user text-primary" /> Admin</small>
                        <small className="mr-3"><i className="fa fa-folder text-primary" /> Web Design</small>
                        <small className="mr-3"><i className="fa fa-comments text-primary" /> 15</small>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mb-5">
                  <img src={process.env.PUBLIC_URL+"img/blog-2.jpg"} alt="" className="img-fluid" />
                </div>
                <div className="mb-5">
                  <h3 className="mb-4 section-title">Tag Cloud</h3>
                  <div className="d-flex flex-wrap m-n1">
                    <Link to className="btn btn-outline-primary m-1">Design</Link>
                    <Link to className="btn btn-outline-primary m-1">Development</Link>
                    <Link to className="btn btn-outline-primary m-1">Marketing</Link>
                    <Link to className="btn btn-outline-primary m-1">SEO</Link>
                    <Link to className="btn btn-outline-primary m-1">Writing</Link>
                    <Link to className="btn btn-outline-primary m-1">Consulting</Link>
                  </div>
                </div>
                <div className="mb-5">
                  <img src={process.env.PUBLIC_URL+"img/blog-3.jpg"} alt="" className="img-fluid" />
                </div>
                <div>
                  <h3 className="mb-4 section-title">Plain Text</h3>
                  Aliquyam sed lorem stet diam dolor sed ut sit. Ut sanctus erat ea est aliquyam dolor et. Et no consetetur eos labore ea erat voluptua et. Et aliquyam dolore sed erat. Magna sanctus sed eos tempor rebum dolor, tempor takimata clita sit et elitr ut eirmod.
                </div>
              </div>
            </div>
          </div>
          {/* Detail End */}
          {/* Footer Start */}
        
        </div>
      );
    }
export default Singal;