import React from 'react';
import { Table, Container, Row } from 'react-bootstrap';
import '../scssstyle/WillowShowList.scss';
function WillowShowList() {
  return (
    <div id="willowshowlist">
      <div className="container-fluild">
        <h1>ShowList</h1>
        <div className="row">
          <div className="col ">
            <h3>News</h3>
            <div className="willow_focus_left">
              <table className="table">
                <thead className="willow_table_thead_style3">
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">First</th>
                    <th scope="col">Last</th>
                    <th scope="col">Handle</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th >1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                  </tr>
                  <tr>
                    <th >2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                  </tr>
                  <tr>
                    <th>3</th>
                    <td >Larry the Bird</td>
                    <td>@twitter</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="col">
            <h3>Activty</h3>
            <div className="willow_focus_middle ">
              <table className="table ">
                <thead className="willow_table_thead_style1">
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">First</th>
                    <th scope="col">Last</th>
                    <th scope="col">Handle</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td >Larry the Bird</td>
                    <td>@twitter</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="col">
            <h3>Good Writing</h3>
            <div className="willow_focus_right">
              <table className="table">
                <thead className="willow_table_thead_style2">
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">First</th>
                    <th scope="col">Last</th>
                    <th scope="col">Handle</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th>
                      <button
                        type="button"
                        className="btn-close"
                        aria-label="Close"
                      ></button>
                      122
                    </th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                  </tr>
                  <tr>
                    <th>
                      <button
                        type="button"
                        className="btn-close"
                        aria-label="Close"
                      ></button>
                      2
                    </th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td >Larry the Bird</td>
                    <td>@twitter</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WillowShowList;
