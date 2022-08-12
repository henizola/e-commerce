import React, { Component } from "react";
import CardList from "../../components/home/cardList/CardList";
import "./Blog.css";

class Blog extends Component {
	render() {
		return (
			<div className='wrapper black'>
				<nav className='breadcrumb text-center' aria-label='breadcrumbs'>
					<div className='container '>
						<h1 className='breadcrumb_title '>Blog</h1>
						<a href='/' title='Back to the frontpage'>
							Home
						</a>

						<span aria-hidden='true' className='breadcrumb__sep'>
							/
						</span>
						<span id='1'>Blog</span>
					</div>
				</nav>

				{/* card Section */}
				<CardList>
					{/* <div classNameName='col-12 col-md-8 my-4'> */}
					{/* <div classNameName='card bg-transparent pos-rel card-height'> */}
					<div className=''>
						<div className='main-row'>
							<div className='about-item about-image   pr-0 pr-xs-15 pr-md-15 mb-md-30 response'>
								<img
									className='img-fluid'
									src='/images/Blog/blog1.jpeg'
									alt='blog img'
								/>
							</div>

							<div className='about-item about-text response  pl-md-15 mb-md-30  container-row '>
								<div className='medium-up--text- '>
									<h1 className='title-block'>
										GO GREEN: SUSTAINABILITY AND THE FUTURE OF SHOPPING
									</h1>

									<div className='rte-setting'>
										<p>
											To create and manage your own content, open the Blog
											Manager by hovering over your blog feed and clicking
											Manage. Here you can create, edit and delete posts and
											manage categories. You can also update your post settings
											and SEO, duplicate or draft posts, turn off commenting, or
											delete a post altogether by clicking Edit on each blog
											post. To delete or edit an existing image or video in each
											post, click on the media to reveal a toolbar, which also
											allows you to customize the size and layout of your
											visuals.
										</p>
										<p>
											Add more elements to your post by clicking on each of the
											symbols at the bottom of your post. Insert an image or
											gallery, embed HTML, or add a GIF to spice up your
											content.
										</p>
										<p>
											Add a cover photo to your post before publishing by
											clicking Settings on the left sidebar. Your cover photo is
											visible to all users who browse the blog on your site.
											Edit how your posts show up on search results and make
											them more discoverable by editing the SEO for each post.{" "}
										</p>
										<p id='2'>
											Add categories to your posts so users can navigate your
											blog pages by topic. Once you’re satisfied with your post,
											go live by clicking Publish.{" "}
										</p>
									</div>
								</div>
							</div>
						</div>
						<div className='main-row row2 top-30'>
							<div className='about-item about-text response pr-50 pr-md-15 mt-60 mt-md-0 mb-md-4 container-row2'>
								<div className='medium-up--text-'>
									<h1 className='title-block'>
										How to connect with digital-only customers
									</h1>

									<div className='rte-setting'>
										<p>
											To edit the way your blog feed looks on your site, hover
											over your blog feed and click on Design. Here, you can
											pick from different layouts. If you add a blog feed
											section to a different page on your website, you can pick
											a design that’s different from your main blog page.
										</p>
										<p>
											Edit what info and details your blog feed displays by
											clicking on Settings (look for the 3 dot icon).{" "}
										</p>
										<p>
											From the Settings panel, Wix Blog lets you hide or display
											the author name and picture, date and reading time, views,
											comments and likes counter. Toggle between the options and
											view your changes in real time.
										</p>
										<p>
											If your blog is connected to a Members Area, you’ll want
											to make sure the Login button is visible to users. To send
											automatic email notifications to blog subscribers every
											time there’s a new post, turn on the email notification
											option on your Settings panel. Start managing your blog
											posts by clicking on Manage Posts once you’re happy with
											your blog settings.
										</p>
									</div>
								</div>
							</div>
							<div className='about-item about-image  response pl-0 pl-lg-15 mb-md-60'>
								<img
									className='img-fluid'
									src='/images/Blog/blog2.jpeg'
									alt='blog img'
								/>
							</div>
						</div>
						<div className='main-row top-30'>
							<div className='about-item about-image   pr-0 pr-xs-15 pr-md-15 mb-md-30 response'>
								<img
									className='img-fluid'
									src='/images/Blog/blog3.jpeg'
									alt='blog img'
								/>
							</div>

							<div className='about-item about-text response  pl-md-15 mb-md-30  container-row '>
								<div className='medium-up--text- '>
									<h1 className='title-block'>
										The economics of street vendors
									</h1>

									<div className='rte-setting'>
										<p>
											Edit exactly how your blog looks on your website from the
											Settings panel. Wix Blogs lets you hide or display the
											author name and picture, date and reading time, views,
											comments and likes counter. Toggle between the options and
											view your changes in real time.
										</p>
										<p>
											If your blog is connected to a Members Area, you’ll want
											to make sure the Login button is visible to users. To send
											automatic email notifications to subscribers every time
											there’s a post, turn on the email notification option on
											your Settings panel. Start managing your blog posts from
											your dashboard by clicking on Manage Posts.
										</p>
										<p>
											From the Dashboard, you can create, edit and delete posts
											and update your SEO settings. You can also duplicate or
											draft posts, turn off commenting, or delete a post
											altogether by clicking (...) on each blog post.
										</p>
										<p id='2'>
											Once you’re happy with your blog, make sure to publish
											your posts from the Dashboard and go live with your site
											by clicking Publish.
										</p>
									</div>
								</div>
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
