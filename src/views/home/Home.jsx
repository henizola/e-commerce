import React, { Component } from "react";
import "./Home.css";
import Hero from "../../components/home/hero/Hero";
import BannerList from "../../components/home/bannerList/BannerList";
import CardList from "../../components/home/cardList/CardList";
import { Link } from "react-router-dom";
import Advert from "../../components/home/Advert/Advert";

class Home extends Component {
	render() {
		return (
			<div className='wrapper'>
				<Hero />
				{/* card Section */}
				<CardList>
					<div className='col-12 col-md-8 my-4'>
						<div className='card bg-transparent pos-rel card-height'>
							<img src='images/bg/card1.jpg' alt='' className='img-fluid' />
							<div className='card-body bg-transparent card_lg_detail'>
								<h4 className='card_small_title'>MEN'S Outerwear</h4>
								<h2 className='card_title'>
									HERITAGE <br />
									HEIGHTS
								</h2>
								<Link
									to='/shop'
									className='btn btn-primary st_btn_primary mt-4 '
								>
									<strong>SHOP MEN</strong>
								</Link>
							</div>
						</div>
					</div>
					<div className='col-12 col-md-4 my-4'>
						<div className='card bg-dark-gray pos-rel card-height'>
							<img src='images/bg/card2.jpg' alt='' className='img-fluid' />
							<div className='card-body bg-dark-gray card_sm_detail'>
								<h4 className='card_small_title'>WOMEN'S Outerwear</h4>
								<h2 className='card_title'>MALACHITE</h2>
								<p>
									A compact microfiber long parka that is as dependable as an
									old friend and as novel as an new acquaintance.
								</p>
								<Link
									to='/shop'
									className='btn btn-primary st_btn_secondary mt-4 '
								>
									<strong>SHOP WOMEN</strong>
								</Link>
							</div>
						</div>
					</div>
				</CardList>
				<Advert />
				<CardList>
					<div className='col-12 col-md-4 my-4'>
						<div className='card bg-dark-gray pos-rel card-height'>
							<img src='images/bg/card3.jpg' alt='' className='img-fluid' />
							<div className='card-body bg-dark-gray card_sm_detail'>
								<h4 className='card_small_title'>MEN'S Outerwear</h4>
								<h2 className='card_title'>BENOIT</h2>
								<p>
									A compact microfiber long parka that is as dependable as an
									old friend and as novel as an new acquaintance.
								</p>
								<Link
									to='/shop'
									className='btn btn-primary st_btn_secondary mt-4 '
								>
									<strong>SHOP MEN</strong>
								</Link>
							</div>
						</div>
					</div>
					<div className='col-12 col-md-8 my-4'>
						<div className='card bg-transparent pos-rel card-height'>
							<img src='images/bg/card4.jpg' alt='' className='img-fluid' />
							<div className='card-body bg-transparent card_lg_detail'>
								<h4 className='card_small_title'>WOMEN'S Outerwear</h4>
								<h2 className='card_title'>
									KHAKI <br />
									Festival
								</h2>
								<Link
									to='/shop'
									className='btn btn-primary st_btn_primary mt-4 '
								>
									<strong>SHOP WOMEN</strong>
								</Link>
							</div>
						</div>
					</div>
				</CardList>
				{/* card Section */}
				<BannerList />
			</div>
		);
	}
}

export default Home;
