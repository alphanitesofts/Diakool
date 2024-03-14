import React from "react";
import '../../src/App.css'
import { useParams, useLocation } from "react-router-dom";

function BlogDetails() {
  const location = useLocation();
  const param = useParams();
  let { id } = param
  const { fromHome } = location.state || {}
  let blogs = fromHome.blogs;
  const filterBlogs = blogs.filter((blog) => blog.id == id)
  return (

    <div className="blog-single gray-bg">
      <div className="container">
        <div className="row align-items-start">
          <div className="col-lg-10 m-15px-tb">
            {
              filterBlogs.map((item) => (
                <article className="article">
                  <div className="article-img">
                  </div>
                  <img src={item.image} style={{ width: "100%" }} title alt='images' />
                  <div className="article-title">
                    {/* <h6><a href="#">Lifestyle</a></h6> */}
                    <h2>{item.title}</h2>
                    <div className="media">
                      <div className="avatar">
                        <img src="https://bootdey.com/img/Content/avatar/avatar1.png" title alt />
                      </div>
                      <div className="media-body">
                        <label>{item.author}</label>
                        <span>26 FEB 2020</span>
                      </div>
                    </div>
                  </div>
                  <div className="article-content">
                    <p>{item.content}</p>
                    <p>{item.planeContent}</p>
                    <h4>{item.boldText}</h4>
                    <ul>
                      <li>{item.list1}</li>
                      <li>{item.list2}</li>
                      <li>{item.list3}</li>
                      <li>{item.list4}</li>
                    </ul>
                    <h4>{item.heading4}</h4>
                    <p>{item.text1}</p>
                    <blockquote>
                      <p>{item.blockquote}</p>
                      <p className="blockquote-footer">{item.blockquote_footer}</p>
                    </blockquote>
                    <p>{item.text2}</p>
                  </div>
                  {/* <div className="nav tag-cloud">
                <a href="#">Design</a>
                <a href="#">Development</a>
                <a href="#">Travel</a>
                <a href="#">Web Design</a>
                <a href="#">Marketing</a>
                <a href="#">Research</a>
                <a href="#">Managment</a>
              </div> */}
                </article>
              ))
            }

            {/* <div className="contact-form article-comment">
              <h4>Leave a Reply</h4>
              <form id="contact-form" method="POST">
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input name="Name" id="name" placeholder="Name *" className="form-control" type="text" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input name="Email" id="email" placeholder="Email *" className="form-control" type="email" />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group">
                      <textarea name="message" id="message" placeholder="Your message *" rows={4} className="form-control" defaultValue={""} />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="send">
                      <button className="px-btn theme"><span>Submit</span> <i className="arrow" /></button>
                    </div>
                  </div>
                </div>
              </form>
            </div> */}
          </div>
          {/* <div className="col-lg-4 m-15px-tb blog-aside">
             Author 
            <div className="widget widget-author">
              <div className="widget-title">
                <h3>Author</h3>
              </div>
              <div className="widget-body">
                <div className="media align-items-center">
                  <div className="avatar">
                    <img src="https://bootdey.com/img/Content/avatar/avatar6.png" title alt />
                  </div>
                  <div className="media-body">
                    <h6>Hello, I'm<br /> Rachel Roth</h6>
                  </div>
                </div>
                <p>I design and develop services for customers of all sizes, specializing in creating stylish, modern websites, web services and online stores</p>
              </div>
            </div>
            {/* End Author */}
          {/* Trending Post */}
          {/* <div className="widget widget-post">
              <div className="widget-title">
                <h3>Trending Now</h3>
              </div>
              <div className="widget-body">

                <div className="latest-post-aside media">
                  <div className="lpa-left media-body">
                    <div className="lpa-title">
                      <h5><a href="#">Prevent 75% of visitors from google analytics</a></h5>
                    </div>
                    <div className="lpa-meta">
                      <a className="name" href="#">
                        Rachel Roth
                      </a>
                      <a className="date" href="#">
                        26 FEB 2020
                      </a>
                    </div>
                  </div>
                  <div className="lpa-right">
                    <a href="#">
                      <img src="https://www.bootdey.com/image/400x200/FFB6C1/000000" title alt />
                    </a>
                  </div>
                </div>
              </div>
            </div> */}
          {/* End Trending Post */}
          {/* Latest Post */}
          {/* <div className="widget widget-latest-post">
              <div className="widget-title">
                <h3>Latest Post</h3>
              </div>
              <div className="widget-body">
                <div className="latest-post-aside media">
                  <div className="lpa-left media-body">
                    <div className="lpa-title">
                      <h5><a href="#">Prevent 75% of visitors from google analytics</a></h5>
                    </div>
                    <div className="lpa-meta">
                      <a className="name" href="#">
                        Rachel Roth
                      </a>
                      <a className="date" href="#">
                        26 FEB 2020
                      </a>
                    </div>
                  </div>
                  <div className="lpa-right">
                    <a href="#">
                      <img src="https://www.bootdey.com/image/400x200/FFB6C1/000000" title alt />
                    </a>
                  </div>
                </div>
                <div className="latest-post-aside media">
                  <div className="lpa-left media-body">
                    <div className="lpa-title">
                      <h5><a href="#">Prevent 75% of visitors from google analytics</a></h5>
                    </div>
                    <div className="lpa-meta">
                      <a className="name" href="#">
                        Rachel Roth
                      </a>
                      <a className="date" href="#">
                        26 FEB 2020
                      </a>
                    </div>
                  </div>
                  <div className="lpa-right">
                    <a href="#">
                      <img src="https://www.bootdey.com/image/400x200/FFB6C1/000000" title alt />
                    </a>
                  </div>
                </div>
                <div className="latest-post-aside media">
                  <div className="lpa-left media-body">
                    <div className="lpa-title">
                      <h5><a href="#">Prevent 75% of visitors from google analytics</a></h5>
                    </div>
                    <div className="lpa-meta">
                      <a className="name" href="#">
                        Rachel Roth
                      </a>
                      <a className="date" href="#">
                        26 FEB 2020
                      </a>
                    </div>
                  </div>
                  <div className="lpa-right">
                    <a href="#">
                      <img src="https://www.bootdey.com/image/400x200/FFB6C1/000000" title alt />
                    </a>
                  </div>
                </div>
              </div>
            </div> */}
          {/* End Latest Post */}
          {/* widget Tags */}
          {/* <div className="widget widget-tags">
              <div className="widget-title">
                <h3>Latest Tags</h3>
              </div>
              <div className="widget-body">
                <div className="nav tag-cloud">
                  <a href="#">Design</a>
                  <a href="#">Development</a>
                  <a href="#">Travel</a>
                  <a href="#">Web Design</a>
                  <a href="#">Marketing</a>
                  <a href="#">Research</a>
                  <a href="#">Managment</a>
                </div>
              </div>
            </div> */}
          {/* End widget Tags */}
          {/* </div> */}
        </div>
      </div>
    </div>

  )
}

export default BlogDetails