import React, { Component } from "react";
import CardList from "../../components/home/cardList/CardList";
import "./Blog.css";

class Blog extends Component {
	render() {
		return (
			<div classNameName='wrapper'>
				<nav className='breadcrumb text-center' aria-label='breadcrumbs'>
					<div className='container '>
						<h1 className='breadcrumb_title '>Blog</h1>
						<a href='/' title='Back to the frontpage'>
							Home
						</a>

						<span aria-hidden='true' className='breadcrumb__sep'>
							/
						</span>
						<span>Blog</span>
					</div>
				</nav>

				{/* card Section */}
				<CardList>
					{/* <div classNameName='col-12 col-md-8 my-4'> */}
						{/* <div classNameName='card bg-transparent pos-rel card-height'> */}
							<div className='' >
								<div className="main-row">
								<div className='about-item about-image   pr-0 pr-xs-15 pr-md-15 mb-md-30 response'>
									<img
										className='img-fluid'
										src='/images/bg/banner1.jpg'
										alt='blog img'
									/>
							</div>

								<div className='about-item about-text response  pl-md-15 mb-md-30  container-row '>
									<div className='medium-up--text- '>
										<h1 className='title-block'>WHAT THE PAPERS SAID</h1>

										<div className='rte-setting'>
											<p>
												Lorem ipsum dolor, sit amet consectetur adipisicing
												elit. Cupiditate laudantium id, ipsum qui aliquid cumque
												soluta at odit libero! Cupiditate quasi ratione sunt,
												officiis sequi illum ipsum corrupti fuga placeat! Lorem
												ipsum dolor, sit amet consectetur adipisicing elit.
												Cupiditate laudantium id, ipsum qui aliquid cumque
												soluta at odit libero! Cupiditate quasi ratione sunt,
												officiis sequi illum ipsum corrupti fuga placeat!Lorem
												ipsum dolor, sit amet consectetur adipisicing elit.
												Cupiditate laudantium id, ipsum qui aliquid cumque
												soluta at odit libero! Cupiditate quasi ratione sunt,
												officiis sequi illum ipsum corrupti fuga placeat!
											</p>
										</div>
									</div>
								</div>
								</div>
								<div className="main-row row2">
								<div className='about-item about-text response pr-50 pr-md-15 mt-60 mt-md-0 mb-md-4 container-row2'>
									<div className='medium-up--text-'>
										<h1 className='title-block'>GENIUS IS BORN CRAZY</h1>

										<div className='rte-setting'>
											<p>
												Lorem ipsum dolor sit amet consectetur adipisicing elit.
												Voluptatibus aut quia quisquam, inventore neque vitae.
												Quae voluptatem commodi quia omnis, repellat velit hic
												exercitationem eos quaerat et optio sunt voluptate?Lorem
												ipsum dolor sit amet consectetur, adipisicing elit.
												Tempore porro, rem aspernatur consequatur illo molestias
												corrupti fuga repellat voluptatibus molestiae magni
												placeat, aliquid soluta expedita magnam sed eaque
												accusantium distinctio. Lorem ipsum dolor sit amet
												consectetur, adipisicing elit. Nisi eveniet fugiat
												blanditiis enim recusandae inventore dolorem, quis
												architecto natus. Vero numquam voluptatem beatae
												deserunt minus, recusandae harum labore nemo magnam?
											</p>
											<p></p>
											<p>
												Proin gravida nibh vel velit auctor aliquet. Aenean
												sollicudin, lorem quis bibendum auctor, nisi elit
												consequat ipsumamet mauris.
											</p>
										</div>
									</div>
								</div>
								<div className='about-item about-image  response pl-0 pl-lg-15 mb-md-60'>
									<img
										className='img-fluid'
										src='/images/bg/banner2.jpg'
										alt='blog img'
									/>
								</div>
								</div>
							</div>
						{/* </div> */}
					{/* </div> */}
				</CardList>
			</div>
		);
	}
}

export default Blog;
