import React from "react";
import '../../src/App.css'
import { Link } from "react-router-dom";


function Blogs() {
  const blogs = [
    {
      id: 1, title: "How To Choose The Right Industrial Air Conditioning System", author: "John Doe", image: "/images/solutions.webp",
      content: `The landscape of industrial operations is a dynamic one. The selection of an optimal industrial air conditioning system is more than a mere regulation of temperature.`,
      planeContent: `The industrial landscape is ever-evolving, and the choice of an optimal air conditioning system is pivotal for seamless operations. Industrial air conditioning systems go beyond mere temperature regulation; they are a cornerstone for maintaining a conducive working environment.
      In the dynamic world of industrial operations, factors such as the size of the facility, the nature of operations, and environmental considerations play a crucial role in selecting the right air conditioning system. Achieving an optimal balance between cooling efficiency and energy conservation is essential for sustainable and cost-effective industrial processes.
      `,
      boldText: "Key Considerations for Industrial Air Conditioning:",
      list1: "Capacity: Assess the cooling capacity requirements based on the size and nature of your industrial facility."
      , list2: "Energy Efficiency: Opt for energy-efficient systems to reduce operational costs and environmental impact."
      , list3: "Environmental Conditions: Consider the environmental conditions of the location, such as humidity levels and temperature fluctuations.",
      list4: "Maintenance: Choose systems that are easy to maintain, minimizing downtime and ensuring continuous operation.",
      text: "The blog explores these considerations in-depth, providing insights into the selection process for industrial air conditioning systems. From the latest technologies to practical tips, we delve into the nuances that make a difference in the industrial cooling landscape."
      , heading4: "Payment Options and Installation:",
      text1: `We understand that the investment in an industrial air conditioning system is a significant decision. Our flexible payment options aim to provide you with financial convenience. Whether it's outright purchase, lease, or financing, we work with you to find a solution that aligns with your budget and business goals.
      Our team of experienced professionals ensures a seamless installation process. We prioritize efficiency and precision to minimize disruption to your operations during the installation phase. Your satisfaction and the optimal performance of your industrial air conditioning system are our top priorities.`
      , blockquote: `"Choosing the right industrial air conditioning system is not just a technical decision; it's a strategic investment in the longevity and efficiency of your operations."`
      , blockquote_footer: "Rachel Roth, Industrial HVAC Expert",
      text2: "As you navigate the complexities of industrial air conditioning, our blog serves as a comprehensive guide. Stay tuned for more insights into the latest trends, technologies, and best practices in industrial HVAC systems."
    },
    {
      id: 2,
      title: "The Importance Of Regular Maintenance For Your HVAC System",
      author: "Jane Smith", image: "/images/cooling problem.webp",
      content: `Regular maintenance is the key to ensuring the longevity and optimal performance of your HVAC system. This blog discusses the importance of routine maintenance, common issues, and tips for keeping your HVAC system in top-notch condition.`,
      planeContent: `Regular maintenance plays a vital role in ensuring the smooth operation of your HVAC system. By conducting routine inspections and addressing minor issues promptly, you can avoid major breakdowns and extend the lifespan of your equipment. Here are some key points to emphasize the importance of regular HVAC maintenance:`, boldText: "Benefits of Regular HVAC Maintenance:",
      list1: "Prolongs the lifespan of your HVAC system.",
      list2: "Improves energy efficiency and reduces utility costs.",
      list3: "Prevents costly breakdowns and emergency repairs.",
      list4: "Enhances indoor air quality for a healthier environment.",
      heading4: "DIY Maintenance Tips:",
      text1: `While professional maintenance is essential, there are also simple steps you can take to keep your HVAC system in good condition. Regularly clean or replace air filters, inspect ducts for leaks, and ensure outdoor units are free of debris.`,
      blockquote: `"A well-maintained HVAC system is not just an expense; it's an investment in comfort and savings."`,
      blockquote_footer: "Jane Smith, HVAC Specialist",
      text2: "Explore our comprehensive guide to HVAC maintenance for more in-depth tips and insights."
    },
    {
      id: 3,
      title: "Optimizing Energy Consumption in Commercial Buildings",
      author: "Alex Johnson",
      image: "/images/installation.webp",
      content: `In the realm of commercial buildings, energy consumption is a critical factor affecting both costs and environmental impact. This blog explores strategies for optimizing energy usage to achieve sustainability and efficiency.`,
      planeContent: `Energy consumption in commercial buildings is a multifaceted challenge that demands innovative solutions. Explore the strategies and insights below to optimize energy usage and foster sustainability in commercial spaces:`, boldText: "Strategies for Energy Optimization:",
      list1: "Implement energy-efficient lighting solutions.",
      list2: "Invest in smart HVAC systems with programmable thermostats.",
      list3: "Regularly audit and upgrade insulation for better thermal efficiency.",
      list4: "Encourage employee awareness and participation in energy-saving practices.",
      heading4: "Case Study: Successful Energy Optimization",
      text1: `Discover how a leading commercial building reduced its energy consumption by 30% through a comprehensive energy optimization initiative. Learn about the challenges faced, solutions implemented, and the positive impact on both the environment and operating costs.`,
      blockquote: `"Optimizing energy consumption isn't just a trend; it's a responsibility towards a sustainable future."`,
      blockquote_footer: "Alex Johnson, Energy Efficiency Consultant",
      text2: "Stay tuned for more articles on sustainable practices and innovations in the realm of commercial building management."
    },
    {
      id: 4,
      title: "The Future of Smart Home Automation",
      author: "Emily Davis",
      image: "/images/Control..webp",
      content: `As technology continues to advance, smart home automation is becoming an integral part of modern living. This blog delves into the latest trends and innovations shaping the future of smart homes.`,
      planeContent: `The future of smart home automation holds exciting possibilities, transforming the way we live. Delve into the key trends and innovations that are shaping the next generation of intelligent homes:`,
      boldText: "Key Trends in Smart Home Automation:",
      list1: "Integration of artificial intelligence for personalized experiences.",
      list2: "Rise of voice-controlled and gesture-based systems.",
      list3: "Increased focus on energy-efficient and sustainable smart devices.",
      list4: "Enhanced security features with advanced surveillance and monitoring.",
      heading4: "Exploring the Next Generation of Smart Home Devices",
      text1: `Get a sneak peek into the upcoming smart home devices that are set to revolutionize the way we live. From smart appliances to intelligent home security systems, discover the cutting-edge technologies that are making homes smarter and more connected than ever before.`,
      blockquote: `"The future of smart homes is not just automated; it's intelligent, adaptive, and seamlessly integrated."`,
      blockquote_footer: "Emily Davis, Smart Home Enthusiast",
      text2: "Stay updated with our blog as we continue to unravel the possibilities and advancements in the world of smart home automation."
    },
    {
      id: 5,
      title: "Green Roofing Solutions for Eco-Friendly Buildings",
      author: "Michael Green",
      image: "/images/Your Air Con.webp",
      content: `Green roofing has emerged as a sustainable solution for eco-friendly buildings. Learn about the benefits, installation process, and environmental impact of incorporating green roofs into architectural designs.`,
      planeContent: `Green roofing is more than just a trend; it's a commitment to sustainable and eco-friendly building practices. Explore the advantages and considerations of implementing green roofs for a greener future:`,
      boldText: "Advantages of Green Roofing:",
      list1: "Enhances thermal insulation, reducing energy consumption.",
      list2: "Mitigates the urban heat island effect.",
      list3: "Improves air quality by absorbing pollutants and CO2.",
      list4: "Provides additional green spaces for recreation and biodiversity.",
      heading4: "Case Studies: Green Roof Success Stories",
      text1: `Explore real-life examples of buildings that have successfully implemented green roofs. From commercial spaces to residential complexes, discover how green roofing not only benefits the environment but also creates aesthetically pleasing and sustainable urban landscapes.`,
      blockquote: `"Green roofing is not just a trend; it's a commitment to building a greener and healthier future."`,
      blockquote_footer: "Michael Green, Sustainable Architect",
      text2: "Stay tuned for more insights on sustainable building practices and innovative solutions."
    },
    {
      id: 6,
      title: "The Impact of Indoor Air Quality on Health and Productivity",
      author: "Sophia Turner",
      image: "/images/systems installation.webp",
      content: `Indoor air quality plays a crucial role in the well-being and productivity of occupants. This blog discusses the factors influencing indoor air quality, potential health effects, and effective measures for improvement.`,
      planeContent: `Indoor air quality is a silent influencer on the health and productivity of individuals within enclosed spaces. Uncover the vital aspects of indoor air quality, understand the factors that impact it, and explore effective measures for improvement:`,
      boldText: "Factors Affecting Indoor Air Quality:",
      list1: "Ventilation and air circulation within enclosed spaces.",
      list2: "Presence of indoor pollutants such as VOCs and allergens.",
      list3: "Humidity levels and their impact on mold growth.",
      list4: "Effective maintenance of HVAC systems for clean air distribution.",
      heading4: "Tips for Improving Indoor Air Quality",
      text1: `Discover practical tips for maintaining a healthy indoor environment. From proper ventilation practices to the use of air purifiers, learn how to create spaces that promote well-being, focus, and overall comfort for occupants.`,
      blockquote: `"Investing in indoor air quality is not just a luxury; it's an essential aspect of creating a healthy and thriving living and working environment."`,
      blockquote_footer: "Sophia Turner, Indoor Air Quality Specialist",
      text2: "Stay informed as we delve deeper into the significance of indoor air quality and its impact on our daily lives."
    },

  ]
  return (
    <section className="blog-listing gray-bg">
      <div className="container">
        <div className="row align-items-start">
          <div className="col-lg-8 m-15px-tb">
            <div className="row">
              {
                blogs.map((item) => (
                  <div className="col-sm-6" >
                    <div className="blog-grid" key={item.id} style={{ height: "480px" }}>
                      <div className="blog-img">
                        <div className="date">
                          <span>06</span>
                          <label>FEB</label>
                        </div>
                        <Link to={`/blogsdetails/${item.id}`} state={{ fromHome: { blogs } }} >
                          <img src={item.image} style={{ height: "175px", width: "400px" }} title alt />
                        </Link>
                      </div>
                      <div className="blog-info">
                        <h5><Link to={`/blogsdetails/${item.id}`} state={{ fromHome: { blogs } }}>{item.title}</Link></h5>
                        <p>{item.content}</p>
                        <div className="btn-bar">
                          <Link to={`/blogsdetails/${item.id}`} state={{ fromHome: { blogs } }} className="px-btn-arrow" >
                            <span>Read More</span>
                            <i className="arrow" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>)
                )
              }
              {/* <div className="col-sm-6">
                <div className="blog-grid">
                  <div className="blog-img">
                    <div className="date">
                      <span>04</span>
                      <label>FEB</label>
                    </div>
                    <a href="blogsdetails">
                      <img src="https://www.bootdey.com/image/400x200/D3D3D3/000000" title alt />
                    </a>
                  </div>
                  <div className="blog-info">
                    <h5><a href="blogsdetails">Prevent 75% of visitors from google analytics</a></h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <div className="btn-bar">
                      <Link to="blogsdetails" className="px-btn-arrow">
                        <span>Read More</span>
                        <i className="arrow" />
                      </Link>


                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="blog-grid">
                  <div className="blog-img">
                    <div className="date">
                      <span>04</span>
                      <label>FEB</label>
                    </div>
                    <a href="blogsdetails">
                      <img src="https://www.bootdey.com/image/400x200/87CEFA/000000" title alt />
                    </a>
                  </div>
                  <div className="blog-info">
                    <h5><a href="blogsdetails">Prevent 75% of visitors from google analytics</a></h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <div className="btn-bar">
                      <a href="blogsdetails" className="px-btn-arrow">
                        <span>Read More</span>
                        <i className="arrow" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="blog-grid">
                  <div className="blog-img">
                    <div className="date">
                      <span>04</span>
                      <label>FEB</label>
                    </div>
                    <a href="blogsdetails">
                      <img src="https://www.bootdey.com/image/400x200/D3D3D3/000000" title alt />
                    </a>
                  </div>
                  <div className="blog-info">
                    <h5><a href="blogsdetails">Prevent 75% of visitors from google analytics</a></h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <div className="btn-bar">
                      <a href="blogsdetails" className="px-btn-arrow">
                        <span>Read More</span>
                        <i className="arrow" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="blog-grid">
                  <div className="blog-img">
                    <div className="date">
                      <span>04</span>
                      <label>FEB</label>
                    </div>
                    <a href="blogsdetails">
                      <img src="https://www.bootdey.com/image/400x200/E0FFFF/000000" title alt />
                    </a>
                  </div>
                  <div className="blog-info">
                    <h5><a href="blogsdetails">Prevent 75% of visitors from google analytics</a></h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <div className="btn-bar">
                      <a href="blogsdetails" className="px-btn-arrow">
                        <span>Read More</span>
                        <i className="arrow" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="blog-grid">
                  <div className="blog-img">
                    <div className="date">
                      <span>04</span>
                      <label>FEB</label>
                    </div>
                    <a href="blogsdetails">
                      <img src="https://www.bootdey.com/image/400x200/FFF0F5/000000" title alt />
                    </a>
                  </div>
                  <div className="blog-info">
                    <h5><a href="blogsdetails">Prevent 75% of visitors from google analytics</a></h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <div className="btn-bar">
                      <a href="blogsdetails" className="px-btn-arrow">
                        <span>Read More</span>
                        <i className="arrow" />
                      </a>
                    </div>
                  </div>
                </div>
              </div> */}
              {/* <div className="col-12">
            <ul className="pagination justify-content-center">
              <li className="page-item disabled">
                <a className="page-link" href="blogsdetails" tabIndex={-1}><i className="fas fa-chevron-left" /></a>
              </li>
              <li className="page-item"><a className="page-link" href="blogsdetails">1</a></li>
              <li className="page-item active">
                <a className="page-link" href="blogsdetails">2 <span className="sr-only">(current)</span></a>
              </li>
              <li className="page-item"><a className="page-link" href="blogsdetails">3</a></li>
              <li className="page-item">
                <a className="page-link" href="blogsdetails"><i className="fas fa-chevron-right" /></a>
              </li>
            </ul>
          </div> */}
            </div>

            {/* <div className="contact-form article-comment ">
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
          <div className="col-lg-4 m-15px-tb blog-aside">
            {/* Author */}
            {/* <div className="widget widget-author">
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
            </div> */}
            {/* End Author */}
            {/* Trending Post */}
            <div className="widget widget-post">
              <div className="widget-title">
                <h3>Trending Now</h3>
              </div>
              <div className="widget-body">
                {blogs.slice(0, 1).map(blog => (
                  <div className="latest-post-aside media" key={blog.id}>
                    <div className="lpa-left media-body">
                      <div className="lpa-title">
                        <h5><a href="blogsdetails">{blog.title}</a></h5>
                      </div>
                      <div className="lpa-meta">
                        <a className="name" href="blogsdetails">
                          {blog.author}
                        </a>
                        <a className="date" href="blogsdetails">
                          {blog.date}
                        </a>
                      </div>
                    </div>
                    <div className="lpa-right">
                      <a href="blogsdetails">
                        <img src={blog.image} alt={blog.title} />
                      </a>
                    </div>
                  </div>
                ))}
                {/* <div className="latest-post-aside media">
                  <div className="lpa-left media-body">
                    <div className="lpa-title">
                      <h5><a href="blogsdetails">Prevent 75% of visitors from google analytics</a></h5>
                    </div>
                    <div className="lpa-meta">
                      <a className="name" href="blogsdetails">
                        Rachel Roth
                      </a>
                      <a className="date" href="blogsdetails">
                        26 FEB 2020
                      </a>
                    </div>
                  </div>
                  <div className="lpa-right">
                    <a href="blogsdetails">
                      <img src="https://www.bootdey.com/image/400x200/E6E6FA/000000" title alt />
                    </a>
                  </div>
                </div> */}
              </div>
            </div>
            {/* End Trending Post */}
            {/* Latest Post */}
            <div className="widget widget-latest-post">
              <div className="widget-title">
                <h3>Latest Post</h3>
              </div>
              <div className="widget-body">
                {/* <div className="latest-post-aside media">
                  <div className="lpa-left media-body">
                    <div className="lpa-title">
                      <h5><a href="blogsdetails">Prevent 75% of visitors from google analytics</a></h5>
                    </div>
                    <div className="lpa-meta">
                      <a className="name" href="blogsdetails">
                        Rachel Roth
                      </a>
                      <a className="date" href="blogsdetails">
                        26 FEB 2020
                      </a>
                    </div>
                  </div>
                  <div className="lpa-right">
                    <a href="blogsdetails">
                      <img src="https://www.bootdey.com/image/400x200/E6E6FA/000000" title alt />
                    </a>
                  </div>
                </div> */}
                {blogs.slice(1).map(blog => (
                  <div className="latest-post-aside media" key={blog.id}>
                    <div className="lpa-left media-body">
                      <div className="lpa-title">
                        <h5><a href="blogsdetails">{blog.title}</a></h5>
                      </div>
                      <div className="lpa-meta">
                        <a className="name" href="blogsdetails">
                          {blog.author}
                        </a>
                        <a className="date" href="blogsdetails">
                          {blog.date}
                        </a>
                      </div>
                    </div>
                    <div className="lpa-right">
                      <a href="blogsdetails">
                        <img src={blog.image} alt={blog.title} />
                      </a>
                    </div>
                  </div>
                ))}
                {/* <div className="latest-post-aside media">
                  <div className="lpa-left media-body">
                    <div className="lpa-title">
                      <h5><a href="blogsdetails">Prevent 75% of visitors from google analytics</a></h5>
                    </div>
                    <div className="lpa-meta">
                      <a className="name" href="blogsdetails">
                        Rachel Roth
                      </a>
                      <a className="date" href="blogsdetails">
                        26 FEB 2020
                      </a>
                    </div>
                  </div>
                  <div className="lpa-right">
                    <a href="blogsdetails">
                      <img src="https://www.bootdey.com/image/400x200/FFA07A/000000" title alt />
                    </a>
                  </div>
                </div> */}
                {/* <div className="latest-post-aside media">
                  <div className="lpa-left media-body">
                    <div className="lpa-title">
                      <h5><a href="blogsdetails">Prevent 75% of visitors from google analytics</a></h5>
                    </div>
                    <div className="lpa-meta">
                      <a className="name" href="blogsdetails">
                        Rachel Roth
                      </a>
                      <a className="date" href="blogsdetails">
                        26 FEB 2020
                      </a>
                    </div>
                  </div>
                  <div className="lpa-right">
                    <a href="blogsdetails">
                      <img src="https://www.bootdey.com/image/400x200/FFF0F5/000000" title alt />
                    </a>
                  </div>
                </div> */}
              </div>
            </div>
            {/* End Latest Post */}
            {/* widget Tags */}
            {/* <div className="widget widget-tags">
              <div className="widget-title">
                <h3>Latest Tags</h3>
              </div>
              <div className="widget-body">
                <div className="nav tag-cloud">
                  <a href="blogsdetails">Design</a>
                  <a href="blogsdetails">Development</a>
                  <a href="blogsdetails">Travel</a>
                  <a href="blogsdetails">Web Design</a>
                  <a href="blogsdetails">Marketing</a>
                  <a href="blogsdetails">Research</a>
                  <a href="blogsdetails">Managment</a>
                </div>
              </div>
            </div> */}
            {/* End widget Tags */}
          </div>
        </div>
      </div>

    </section>

  )
}
export default Blogs