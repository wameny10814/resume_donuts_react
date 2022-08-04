import React from 'react';
import { Table, Container, Row } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import axios from 'axios';
import '../scssstyle/WillowShowList.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { BsPenFill } from 'react-icons/bs';
import { AiOutlinePlusCircle } from 'react-icons/ai';
function WillowShowList(props) {
  const [newsdata, setNewsdata] = useState([]);
  const [goodwritingdata, setGoodWritingdata] = useState([]);
  const [goodprice, setGoodprice] = useState([]);
  const { setOption, setChoosesid } = props;
  // 點選加1
  const [control, setControl] = useState(0);

  const getdatagoodwriting = async () => {
    const response = await axios.get(
      `http://localhost:3600/willownews/goodwritingdata`
    );
    const resdata = response.data;
    console.log('Good', resdata);
    setGoodWritingdata(response.data);
  };

  const getdatanews = async () => {
    const response = await axios.get(
      `http://localhost:3600/willownews/newsdata`
    );
    const resdata = response.data;
    console.log(resdata);
    setNewsdata(response.data);
  };
  // 刪除news
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
  // 刪除good
  const deledatagood = async (dsid) => {
    console.log(dsid);
    let con = control;

    const response = await axios.delete(
      `http://localhost:3600/willownews/goodwritingdata?sid=${dsid}`
    );
    const resdata = response;
    console.log('asdasdadads', resdata);

    setControl(con + 1);
  };
  console.log(control);
  useEffect(() => {
    getdatanews();
    getdatagoodwriting();
    console.log('123');
  }, [control]);

  return (
    <div id="willowshowlist">
      <div className="container-fuilter">
        <h1 className="w-25 m-auto willow_ellipsis">
          ShowListadasdasdasd asdddddddddddasdasdasda sdadsasdada sdadddddddddd
          dddddddddddd
        </h1>
        <div className="row col_bline justify-content-center">
          <div className="col-12 mt-5 willow_p_5">
            <h3 className="d-flex w-25 justify-content-around">
              <div>News</div>
              <div className="d-flex ">
                <div className="pt-1">新增</div>
                <div className="willow_icons_add">
                  <AiOutlinePlusCircle
                    onClick={() => {
                      setOption(1);
                    }}
                  />
                </div>
              </div>
            </h3>
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
                                    setChoosesid(row.newsid);
                                    console.log(row.newsid);
                                    setOption(11);
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
        </div>
        <div className="row col_bline justify-content-center">
          <div className="col-12 mt-5 willow_p_5">
            <h3 className="d-flex w-25 justify-content-around">
              <div>Activty</div>
              <div className="d-flex ">
                <div className="pt-1">新增</div>
                <div className="willow_icons_add">
                  <AiOutlinePlusCircle
                    onClick={() => {
                      setOption(1);
                    }}
                  />
                </div>
              </div>
            </h3>
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
        </div>
        <div className="row  col_bline justify-content-center">
          <div className="col-12 mt-5 mb-5 willow_p_5">
            <h3 className="d-flex justify-content-around willow_w">
              <div>Good Writing</div>
              <div className="d-flex ">
                <div className="pt-1">新增</div>
                <div className="willow_icons_add">
                  <AiOutlinePlusCircle
                    onClick={() => {
                      setOption(3);
                    }}
                  />
                </div>
              </div>
            </h3>
            <div className="willow_focus_left willow_minh">
              <table className="table table-striped text-center">
                <thead className="willow_table_thead_style3">
                  <tr>
                    <th scope="col">goodwritingid</th>
                    <th scope="col">Userid</th>
                    <th scope="col">goodimg</th>
                    <th scope="col">goodtitle</th>
                    <th scope="col">goodwords</th>
                    <th scope="col">good_at</th>
                  </tr>
                </thead>
                <tbody>
                  {console.log('goodwritingdata', goodwritingdata)}
                  {goodwritingdata
                    ? goodwritingdata.map((row) => (
                        <tr key={'good' + row.goodwritingid}>
                          <th scope="row">
                            <div className="d-flex w-50 justify-content-around">
                              <div>
                                <button
                                  type="button"
                                  className="btn-close"
                                  aria-label="Close"
                                  onClick={() => {
                                    deledatagood(row.goodwritingid);
                                  }}
                                ></button>
                              </div>
                              <div>{row.goodwritingid}</div>
                            </div>
                          </th>
                          <td className="">{row.userid}</td>
                          <td className="willow_hdsty">
                            <img
                              src={`http://localhost:3600/willowimgs/${row.goodimg}`}
                              className="w-75"
                            />
                          </td>
                          <td>{row.goodtitle}</td>
                          <td className="willow_p">
                            <p className="willow_ellipsis ">
                              {row.goodwords}
                            </p>
                          </td>
                          <td>
                            <div className="d-flex  justify-content-between">
                              <div className="willow_wspeace">
                                {row.good_at.slice(0, 10)}
                              </div>
                              <div className="willow_icons">
                                <BsPenFill
                                  onClick={() => {
                                    setChoosesid(row.goodwritingid);
                                    console.log(row.goodwritingid);
                                    setOption(12);
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
        </div>
      </div>
    </div>
  );
}

export default WillowShowList;
