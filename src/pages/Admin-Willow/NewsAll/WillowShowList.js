import React from 'react';
import { Table, Container, Row } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import axios from 'axios';
import '../scssstyle/WillowShowList.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { BsPenFill } from 'react-icons/bs';

function WillowShowList() {
  const [newsdata, setNewsdata] = useState([]);

  // 點選加1
  const [control, setControl] = useState(0);

  const getdatanews = async () => {
    const response = await axios.get(
      `http://localhost:3600/willownews/newsdata`
    );
    const resdata = response.data;
    console.log(resdata);
    setNewsdata(response.data);
  };
  const deledatanews = async (dsid) => {
    console.log(dsid);
    let con = control;

    const response = await axios.delete(
      `http://localhost:3600/willownews/newsdata?sid=${dsid}`
    );
    const resdata = response;
    console.log('asdasdadads', resdata);

    setControl(con + 1);
  };
  console.log(control);
  useEffect(() => {
    getdatanews();
    console.log('123');
  }, [control]);

  return (
    <div id="willowshowlist">
      <div className="container">
        <h1>ShowList</h1>
        <div className="row">
          <div className="col-12 mt-5">
            <h3>News</h3>
            <div className="willow_focus_left willow_minh">
              <table className="table table-striped text-center">
                <thead className="willow_table_thead_style3">
                  <tr>
                    <th scope="col">newsid</th>
                    <th scope="col">Userid</th>
                    <th scope="col">newsimg</th>
                    <th scope="col">newstitle</th>
                    <th scope="col">words</th>
                    <th scope="col">newsAt</th>
                  </tr>
                </thead>
                <tbody>
                  {console.log('newsdata', newsdata)}
                  {newsdata
                    ? newsdata.map((row) => (
                        <tr key={'mm' + row.newsid}>
                          <th scope="row">
                            <div className="d-flex w-50 justify-content-around">
                              <div>
                                <button
                                  type="button"
                                  className="btn-close"
                                  aria-label="Close"
                                  onClick={() => {
                                    deledatanews(row.newsid);
                                  }}
                                ></button>
                              </div>
                              <div>{row.newsid}</div>
                            </div>
                          </th>
                          <td>{row.userid}</td>
                          <td className="willow_hdsty">
                            <img
                              src={`http://localhost:3600/willowimgs/${row.newsimg}`}
                              className="w-75"
                            />
                          </td>
                          <td>{row.newstitle}</td>
                          <td>{row.words}</td>
                          <td>
                            <div className="d-flex w-50 justify-content-between m-auto">
                              <div> {row.news_at.slice(0, 10)}</div>
                              <div className="willow_icons">
                                <BsPenFill
                                  onClick={() => {
                                    console.log('asdasdasd');
                                  }}
                                />
                              </div>
                            </div>
                          </td>
                        </tr>
                      ))
                    : null}
                </tbody>
              </table>
            </div>
          </div>

          <div className="col-12 mt-5">
            <h3>Activty</h3>
            <div className="willow_focus_middle willow_minh">
              <table className="table table-striped">
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
                    <td>Larry the Bird</td>
                    <td>Thornton</td>
                    <td>@twitter</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="col-12 mt-5 mb-5">
            <h3>Good Writing</h3>
            <div className="willow_focus_right willow_minh">
              <table className="table table-striped table-striped">
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
                        // onClick={() => {
                        //   getdatanews();
                        // }}
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
                    <td>Larry the Bird</td>
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
