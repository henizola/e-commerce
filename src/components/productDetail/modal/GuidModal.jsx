import React, { Component } from "react";

export default class GuidModal extends Component {
  render() {
    return (
      <div>
        <div
          className="modal fade bd-example-modal-xl1"
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

                  <div className="text-center pt-4">
                    <h3>Fit Guide</h3>
                  </div>

                  <div className="row pt-3">
                    <div className="col-lg-3 offset-lg-2 col-md-12 col-sm-12 col-12 text-center">
                      <img src="/images/male1.jpg" height="360px" />
                    </div>
                    <div className="col-lg-6 offset-lg-1 col-md-12 col-sm-12 col-12">
                      <div className="pt-3">
                        <div className="row text-center">
                          <div className="col-4 offset-2 border x p-2">Inches</div>
                          <div className="col-4 border x p-2">cm</div>
                        </div>
                        <div className="row pt-4">
                          <div className="col-12 text-center">
                            <b>Choose your size :</b> <br />
                            <select name="size" id="size" className="p-2 w-50">
                              <option value="1">1</option>
                              <option value="2">2</option>
                            </select>
                            <br />
                            (Use the chart below to find your size)
                          </div>
                        </div>
                      </div>
                      <div className="pt-4 ml-5 pl-5" style={{fontSize: 15}}>
                        <div>Item Measurements:</div>
                        <ul type="A">
                          <li>Length</li>
                          <li>Sleeve length</li>
                          <li>Shoulder width: 16.73"</li>
                          <li>Chest: 20.87"</li>
                          <li>Waist</li>
                        </ul>
                      </div>
                      <div className="ml-5 pl-5" style={{fontSsize: 13}}>
                        Find in the list below the item measurements and their
                        definition. To help you to choose the best size, we
                        recommend that you compare each product's measurements
                        with your own.
                      </div>
                    </div>
                  </div>
                  <div className="row pt-5 text-center">
                    <div className="col-12">
                      <h3>Size Guide</h3>
                      <p className="pt-4">
                        Select a size and discover the measurements
                      </p>
                      <table className="table-responsive no-gutters pt-3">
                        <thead>
                          <tr>
                            <th>Height (cm)</th>
                            <th>1/2 Chest (cm)</th>
                            <th>1/2 Waist (cm)</th>
                            <th>Moncler size</th>
                            <th>USA</th>
                            <th>IT</th>
                            <th>UK</th>
                            <th>DE</th>
                            <th>FR</th>
                            <th>JP</th>
                            <th>CN</th>
                            <th>KR</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>178</td>
                            <td>48</td>
                            <td>42</td>
                            <td>2</td>
                            <td>M</td>
                            <td>48</td>
                            <td>38</td>
                            <td>48</td>
                            <td>44</td>
                            <td>L</td>
                            <td>175/92A</td>
                            <td>92-175</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
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
