import React, { Component } from "react";
import BannerCard from '../bannerCard/BannerCard';

export default class BannerList extends Component {
    constructor() {
        super();
        this.state={
            banners: [
                {
                    id: 1,
                    image: '/images/bg/banner1.jpg',
                    name: 'WHAT THE PAPERS SAID',
                    btnText: 'Read It Now'
                },
                {
                    id: 2,
                    image: '/images/bg/banner2.jpg',
                    name: 'GENIUS IS BORN CRAZY',
                    btnText: 'Discover the campaign'
                }
            ]
        }
    }

  render() {
    return (
      <div className="banner_section bg-dark-gray py-5">
        <div className="container">
          <div className="row">
              {this.state.banners.map((banner) => (
                  <BannerCard key={banner.id} banner={banner} />
                )
              )}
          </div>
        </div>
      </div>
    );
  }
}
