import React, { Component } from "react";
import $ from "jquery";

export default class RecomendationModal extends Component {
  state = {
    tab: "step1",
  };

  render() {
    return (
      <div>
        <div
          className="modal fade bd-example-modal-xl"
          tabindex="-1"
          role="dialog"
          aria-labelledby="myExtraLargeModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-xl">
            <div className="modal-content">
              <div className="modal-body no-gutters">
                <div>
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="text-center pt-4">
                  <h3>Find your size</h3>
                </div>

                <div className="text-center pt-4">
                  <div className="row">
                    <div
                      className="col-lg-4 col-md-4 col-sm-4 text-center step"
                      onClick={() => {
                        this.setState({ tab: "step1" });
                      }}
                    >
                      <b>1. About You</b>
                    </div>
                    <div
                      className=" col-lg-4 col-md-4 col-sm-4 text-center step"
                      onClick={() => {
                        this.setState({ tab: "step2" });
                      }}
                    >
                      <b>2. Your Shape</b>
                    </div>
                    <div
                      className=" col-lg-4 col-md-4 col-sm-4 text-center step"
                      onClick={() => {
                        this.setState({ tab: "step3" });
                      }}
                    >
                      <b>3. Your Size</b>
                    </div>
                  </div>
                  <hr style={{ borderWidth: 3, borderColor: "black" }} />
                </div>
                {this.state.tab === "step1" && (
                  <div className="mb-5">
                    <div className="pt-3 text-center">
                      Tell us about yourself, so we can recommend the right size
                      for you
                    </div>
                    <div className="text-center pt-3">
                      <img
                        src="/images/male.png"
                        height="100px"
                        width="100px"
                        className="inline gender"
                        //   onClick={chooseMale()}
                      />
                      <img
                        src="/images/female.png"
                        height="100px"
                        width="100px"
                        className="inline gender ml-3"
                        //   onClick={chooseFemale()}
                      />
                    </div>
                    <form className="pt-3">
                      <div className="row">
                        <div className="col-6">
                          <div className="row no-gutters">
                            <div className="col-lg-2 offset-lg-6 col-md-8 col-sm-6 col-6 inline">
                              <input
                                type="text"
                                className="form-control ml-auto"
                                placeholder="ft."
                              />
                            </div>
                            <div className="col-lg-4 col-md-8 col-sm-6 col-6 inline">
                              <input
                                type="text"
                                className="form-control ml-auto"
                                placeholder="inches"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-3 input-group">
                          <input
                            type="text"
                            className="form-control w-50"
                            placeholder="Your weight"
                            aria-label="Recipient's username"
                            aria-describedby="basic-addon2"
                          />
                          <div className="input-group-append">
                            <span className="input-group" id="basic-addon2">
                              <select name="weight" id="weight">
                                <option value="kg">kg</option>
                                <option value="lbs">lbs</option>
                              </select>
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="row pt-3">
                        <div className="col-lg-3 offset-lg-3 col-md-6 col-sm-12 col-12">
                          <input
                            type="text"
                            className="form-control ml-auto"
                            placeholder="Your Bra Size"
                            className="w-50"
                            id="braSize"
                          />
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 col-12">
                          <input
                            type="date"
                            className="form-control "
                            placeholder="Your year of birth"
                            className="w-50"
                          />
                        </div>
                      </div>
                    </form>
                  </div>
                )}
                {this.state.tab === "step2" && (
                  <div className="">
                    <div className="row pt-3 text-center">
                      <div className="col-lg-3 offset-lg-2 col-md-12 col-sm-12 col-12">
                        <img src="/images/male1.jpg" height="320px" />
                      </div>
                      <div className="col-lg-6 col-md-12 col-sm-12 col-12 pt-3">
                        <p className="text-center">
                          How do you see yourself compared to people of a
                          similar
                          <br /> weight and height?
                        </p>
                        <div>
                          <div className="row pt-2">
                            <div className="col inline text-center">
                              <b>Shoulders</b>
                            </div>
                            <div className="col inline">
                              <input
                                id="ex19"
                                type="text"
                                data-provide="slider"
                                data-slider-ticks="[1,2,3,4,5]"
                                data-slider-min="1"
                                data-slider-max="5"
                                data-slider-step="1"
                                data-slider-value="3"
                                data-slider-tooltip="hide"
                              />
                            </div>
                          </div>
                          <div className="row pt-3">
                            <div className="col inline text-center">
                              <b> Chest</b>
                            </div>
                            <div className="col inline">
                              <input
                                id="ex19"
                                type="text"
                                data-provide="slider"
                                data-slider-ticks="[1,2,3,4,5]"
                                data-slider-min="1"
                                data-slider-max="5"
                                data-slider-step="1"
                                data-slider-value="4"
                                data-slider-tooltip="hide"
                              />
                            </div>
                          </div>
                          <div className="row pt-3">
                            <div className="col inline text-center">
                              <b> Waist</b>
                            </div>
                            <div className="col inline">
                              <input
                                id="ex19"
                                type="text"
                                data-provide="slider"
                                data-slider-ticks="[1,2,3,4,5]"
                                data-slider-min="1"
                                data-slider-max="5"
                                data-slider-step="1"
                                data-slider-value="5"
                                data-slider-tooltip="hide"
                              />
                            </div>
                          </div>
                          <div className="row pt-3">
                            <div className="col inline text-center">
                              <b>Hips</b>
                            </div>
                            <div className="col inline">
                              <input
                                id="ex19"
                                type="text"
                                data-provide="slider"
                                data-slider-ticks="[1,2,3,4,5]"
                                data-slider-min="1"
                                data-slider-max="5"
                                data-slider-step="1"
                                data-slider-value="4"
                                data-slider-tooltip="hide"
                              />
                            </div>
                          </div>
                          <div className="row pt-3">
                            <div className="col inline text-center">
                              <b>Leg Length</b>
                            </div>
                            <div className="col inline">
                              <input
                                id="ex19"
                                type="text"
                                data-provide="slider"
                                data-slider-ticks="[1,2,3,4,5]"
                                data-slider-min="1"
                                data-slider-max="5"
                                data-slider-step="1"
                                data-slider-value="3"
                                data-slider-tooltip="hide"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                {this.state.tab === "step3" && (
                  <div className="">
                    <div className="row pt-3 text-center">
                      <div className="col-lg-4 offset-lg-2 col-md-12 col-sm-12 col-12">
                        <img src="/images/male1.jpg" height="320px" />
                      </div>
                      <div className="col-lg-6 col-md-12 col-sm-12 col-12 text-center">
                        <div className="pt-5">
                          <b>Your recommended size is :</b>
                        </div>
                        <div className="pt-3">
                          <table className="center">
                            <tr>
                              <td>00</td>
                              <td>0</td>
                              <td>1</td>
                              <td>2</td>
                              <td>3</td>
                            </tr>
                          </table>
                        </div>
                        <div className="pt-3">
                          <table className="center" id="newTable">
                            <tr>
                              <td>4</td>
                              <td>5</td>
                              <td>6</td>
                              <td>7</td>
                            </tr>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                <div className="pt-3 row no-gutters">
                  <div className="col-lg-2 col-md-2 col-sm-2">
                    <button
                      className="btn btn-dark"
                      id="prevBtn"
                      //   onClick={nextPrev(-1)}
                    >
                      Previous
                    </button>
                  </div>
                  <div className="col-lg-2 offset-lg-8 col-md-2 offset-md-8 col-sm-2 offset-sm-8 text-center">
                    <button
                      className="btn btn-dark"
                      id="nextBtn"
                      //   onClick={nextPrev(1)}
                    >
                      Continue
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
