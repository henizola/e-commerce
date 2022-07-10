import React, { Component } from "react";
import "./Footer.css";

export default class Footer extends Component {
  render() {
    return (
      <footer className="footer py-3">
        <div className="container">
          {/* Newsletter */}
          <div className="footer_newsletter">
            <h1>Newsletter</h1>
            <div className="footer_newsletter_input_wrapper">
              <input
                type="email"
                className="footer_newsletter_input"
                placeholder="Your email*"
              />
              <a
                href="/"
                className="btn btn-secondary btn-lg footer_newsletter_button"
              >
                SUBMIT
              </a>
            </div>
          </div>
          {/* Newsletter */}
          <hr className="footer_devider" />
          {/* Footer menu */}
          <div className="footer_menu py-5">
            <div className="row">
              <div className="col-12 col-md-3 mb-5">
                <ul className="footer_menu_ul">
                  <li>
                    <span>Shop In:</span>
                  </li>
                  <li>
                    <a href="/" className="footer_link">
                      United kingdom
                    </a>
                  </li>
                </ul>
                <ul className="footer_menu_ul mt-5">
                  <li>
                    <span>BOUTIQUES:</span>
                  </li>
                  <li>
                    <a href="/" className="footer_link">
                      Find a Boutique
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-12 col-md-3 mb-5">
                <ul className="footer_menu_ul">
                  <li>
                    <span>CUSTOMER CARE:</span>
                  </li>
                  <li className="mt-md-5">
                    <a href="/" className="footer_link">
                      Shipping
                    </a>
                  </li>
                  <li>
                    <a href="/" className="footer_link">
                      Returns
                    </a>
                  </li>
                  <li>
                    <a href="/" className="footer_link">
                      Purchase guide
                    </a>
                  </li>
                  <li>
                    <a href="/" className="footer_link">
                      Size Guide
                    </a>
                  </li>
                  <li>
                    <a href="/" className="footer_link">
                      Contacts
                    </a>
                  </li>
                  <li>
                    <a href="/" className="footer_link">
                      My Orders
                    </a>
                  </li>
                  <li>
                    <a href="/" className="footer_link">
                      Brand Protection
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-12 col-md-3 mb-5">
                <ul className="footer_menu_ul">
                  <li>
                    <span>CUSTOMER CARE:</span>
                  </li>
                  <li className="mt-md-5">
                    <a href="/" className="footer_link">
                      Shipping
                    </a>
                  </li>
                  <li>
                    <a href="/" className="footer_link">
                      Returns
                    </a>
                  </li>
                  <li>
                    <a href="/" className="footer_link">
                      Purchase guide
                    </a>
                  </li>
                  <li>
                    <a href="/" className="footer_link">
                      Size Guide
                    </a>
                  </li>
                  <li>
                    <a href="/" className="footer_link">
                      Contacts
                    </a>
                  </li>
                  <li>
                    <a href="/" className="footer_link">
                      My Orders
                    </a>
                  </li>
                  <li>
                    <a href="/" className="footer_link">
                      Brand Protection
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-12 col-md-3 mb-5">
                <ul className="footer_menu_ul">
                  <li>
                    <span>CUSTOMER CARE:</span>
                  </li>
                  <li className="mt-md-5">
                    <a href="/" className="footer_link">
                      Shipping
                    </a>
                  </li>
                  <li>
                    <a href="/" className="footer_link">
                      Returns
                    </a>
                  </li>
                  <li>
                    <a href="/" className="footer_link">
                      Purchase guide
                    </a>
                  </li>
                  <li>
                    <a href="/" className="footer_link">
                      Size Guide
                    </a>
                  </li>
                  <li>
                    <a href="/" className="footer_link">
                      Contacts
                    </a>
                  </li>
                  <li>
                    <a href="/" className="footer_link">
                      My Orders
                    </a>
                  </li>
                  <li>
                    <a href="/" className="footer_link">
                      Brand Protection
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* Footer menu */}
          <hr className="footer_devider" />
          {/* Footer bottom */}
          <div className="footer_bottom">
            Powered by YOOX NET-A-PORTER GROUP -
            <a href="/" className="footer_link">
              COPYRIGHT © 2000-2020 MONCLER S.P.A. - ALL RIGHTS RESERVED
            </a>
            <br />
            <a href="/" className="footer_link">
              VENDOR INFORMATION
            </a>
          </div>
          {/* Footer bottom */}
        </div>
      </footer>
    );
  }
}
