import React, { Component } from "react";
import CardList from "../../components/home/cardList/CardList";
import "./About.css";
import "./cloudCarousel";
const About = () => {
	return (
		<div classNameName='wrapper'>
			<div id='carousel1' className='slider'>
				<img
					className='cloudcarousel'
					src='/images/About/1.jpeg'
					alt='Flag 1 Description'
					title='Flag 1 Title'
				/>
				<img
					className='cloudcarousel'
					src='/images/About/2.jpeg'
					alt='Flag 2 Description'
					title='Flag 2 Title'
				/>
				<img
					className='cloudcarousel'
					src='/images/About/3.jpeg'
					alt='Flag 3 Description'
					title='Flag 3 Title'
				/>
				<img
					className='cloudcarousel'
					src='/images/About/4.jpeg'
					alt='Flag 4 Description'
					title='Flag 4 Title'
				/>
				<img
					className='cloudcarousel'
					src='/images/About/5.jpeg'
					alt='Flag 5 Description'
					title='Flag 5 Title'
				/>

				<img
					className='cloudcarousel'
					src='/images/About/6.jpeg'
					alt='Flag 7 Description'
					title='Flag 7 Title'
				/>
				<img
					className='cloudcarousel'
					src='/images/About/7.png'
					alt='Flag 8 Description'
					title='Flag 8 Title'
				/>
				<img
					className='cloudcarousel'
					src='/images/About/8.png'
					alt='Flag 9 Description'
					title='Flag 9 Title'
				/>
				<img
					className='cloudcarousel'
					src='/images/About/9.png'
					alt='Flag 10 Description'
					title='Flag 10 Title'
				/>
				<img
					className='cloudcarousel'
					src='/images/About/10.jpeg'
					alt='Flag 10 Description'
					title='Flag 10 Title'
				/>
				<img
					className='cloudcarousel'
					src='/images/About/11.png'
					alt='Flag 10 Description'
					title='Flag 10 Title'
				/>
			</div>

			<CardList>
				<div classNameName='col-12 col-md-8 my-4'>
					<div classNameName='card bg-transparent pos-rel card-height'>
						<div className='about-content row'>
							<div className='main-row'>
								<div className='about-item about-image   pr-0 pr-xs-15 pr-md-15 mb-md-30 response'>
									<img
										className='img-fluid'
										src='/images/About/3.jpeg'
										alt='blog img'
									/>
								</div>

								<div className='about-item about-text response  pl-md-15 mb-md-30  container-row '>
									<div className='medium-up--text-'>
										<div className='rte-setting'>
											<p>
												Our online store was founded by like-minded individuals,
												a group of professionals dedicated to building
												innovative, smart and easy online shopping solutions. At
												Cyber Image Cafe, we guarantee that every single
												purchase you make will be a seamless process from start
												to finish. Ultimately, having Income producing abilities
												in the long run is the goal. Take a look at our site and
												get in touch with questions or concerns. ​
											</p>
											<p>Welcome to Cyber Image Café!</p>
											<p>
												We are delighted to see that you are browsing our
												website pages. You must be wondering what is the Cyber
												Image Café about?
											</p>
											<p>
												Cyber Image Café is effectively the future meeting place
												in the Multiverse for the Dr. Charles Circle, LLC
												members/customers.
											</p>
										</div>
									</div>
								</div>
							</div>
							<p style={{ margin: "50px 0" }}>
								Ordinarily, in a meeting place people do spend time together,
								exchange ideas, and make deals. Thanks to AI/Artificial
								Intelligence, the World is evolving toward better and greater
								opportunities for all. We have access to so much knowledge and
								information that nowadays we are able to handle problems that
								years ago were unsolvable, like Third-World countries poverty
								and economic insecurity in the developed nations.
							</p>
							<p
								style={{
									marginBottom: "50px ",
									textAlign: "center",
									width: "100%",
								}}
							>
								At Cyber Image Café we take great care of our customers, and we
								work hard to offer them the best products available.
							</p>

							<p
								style={{
									marginBottom: "50px ",
									textAlign: "center",
									width: "100%",
								}}
							>
								Please take time to check out all our links on this site and we
								will be happy to help you with any request.
							</p>
							<p
								style={{
									marginBottom: "50px ",
									textAlign: "center",
									width: "100%",
								}}
							>
								Our motto: If you think, you work! request.
							</p>
							<div className='main-row row2'>
								<div className='about-item about-text response pr-50 pr-md-15 mt-60 mt-md-0 mb-md-4 container-row2'>
									<div className='medium-up--text-'>
										<div className='rte-setting'>
											<p>
												At Cyber Image Café we are looking for a few good people
												who can think independently and help us confront
												everyday problems of the modern era and find appropriate
												and tailored solutions. One overwhelming issue of the
												modern era in our community is: Financial Sustainability
											</p>
											<p></p>
											<p>
												Effectively, at Cyber Image Café we think of Financial
												Sustainability as the “capacity to have one’s cake and
												eat it at the same time”. In this fast-moving economy we
												are dealing everyday with this issue: how to save money
												while enjoying all the goods and luxury at our reach?
												How to work hard every day, spend quality time
												vacationing with family and friends and still save money
												for the future? We all agree that this is a tough
												balancing act.
											</p>
										</div>
									</div>
								</div>
								<div className='about-item about-image  response pl-0 pl-lg-15 mb-md-60'>
									<img
										className='img-fluid'
										src='/images/About/2.jpeg'
										alt='blog img'
									/>
								</div>
							</div>

							<p
								style={{
									margin: "50px 0",
									textAlign: "center",
									width: "100%",
								}}
							>
								We are open to suggestions, and we expect members/customers to
								contribute with genial ideas… Expecting your intelligent input,
								we thank you all in advance for your contribution to the Cyber
								Image Café Forum!
							</p>
						</div>
					</div>
				</div>
			</CardList>
		</div>
	);
};

export default About;
