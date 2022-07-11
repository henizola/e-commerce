import React, { Component } from "react";
import CardList from "../../components/home/cardList/CardList";
import "./About.css";

class About extends Component {
	render() {
		return (
			<div classNameName='wrapper'>
				<nav className='breadcrumb text-center' aria-label='breadcrumbs'>
					<div className='container '>
						<h1 className='breadcrumb_title '>About Us</h1>
						<a href='/' title='Back to the frontpage'>
							Home
						</a>

						<span aria-hidden='true' className='breadcrumb__sep'>
							/
						</span>
						<span>About</span>
					</div>
				</nav>

				{/* card Section */}
				<CardList>
					<div classNameName='col-12 col-md-8 my-4'>
						<div classNameName='card bg-transparent pos-rel card-height'>
							<p>
								Our online store was founded by like-minded individuals, a group
								of professionals dedicated to building innovative, smart and
								easy online shopping solutions. At Cyber Image Cafe, we
								guarantee that every single purchase you make will be a seamless
								process from start to finish. Ultimately, having Income
								producing abilities in the long run is the goal. Take a look at
								our site and get in touch with questions or concerns.
							</p>
						</div>
					</div>
					<div classNameName='col-12 col-md-8 my-4'>
						<div classNameName='card bg-transparent pos-rel card-height'>
							<p>
								Welcome to Cyber Image Café! We are delighted to see that you
								are browsing our website pages. You must be wondering what is
								the Cyber Image Café about?
							</p>
							<p>
								Cyber Image Café is effectively the future meeting place in the
								Multiverse for the Dr. Charles Circle, LLC members/customers.
							</p>
							<p>
								Ordinarily, in a meeting place people do spend time together,
								exchange ideas, and make deals. Thanks to AI/Artificial
								Intelligence, the World is evolving toward better and greater
								opportunities for all. We have access to so much knowledge and
								information that nowadays we are able to handle problems that
								years ago were unsolvable, like Third-World countries poverty
								and economic insecurity in the developed nations.
							</p>
							<p>
								At Cyber Image Café we take great care of our customers, and we
								work hard to offer them the best products available.
							</p>
							<p>
								Please take time to check out all our links on this site and we
								will be happy to help you with any request. Our motto: If you
								think, you work!
							</p>
							<p>
								At Cyber Image Café we are looking for a few good people who can
								think independently and help us confront everyday problems of
								the modern era and find appropriate and tailored solutions. One
								overwhelming issue of the modern era in our community is:
								Financial Sustainability
							</p>
							<p>
								Effectively, at Cyber Image Café we think of Financial
								Sustainability as the “capacity to have one’s cake and eat it at
								the same time”. In this fast-moving economy we are dealing
								everyday with this issue: how to save money while enjoying all
								the goods and luxury at our reach? How to work hard every day,
								spend quality time vacationing with family and friends and still
								save money for the future? We all agree that this is a tough
								balancing act.
							</p>
							<p>
								We are open to suggestions, and we expect members/customers to
								contribute with genial ideas… Expecting your intelligent input,
								we thank you all in advance for your contribution to the Cyber
								Image Café Forum!
							</p>
						</div>
					</div>
				</CardList>
			</div>
		);
	}
}

export default About;
