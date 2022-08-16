import React, { useState, useEffect, useRef, useMemo } from 'react';
import ReactApexChart from 'react-apexcharts';
import axios from 'axios';

function Graptime(props) {
  const { setReportOption } = props;
  const [originData, setOriginData] = useState([]);
  const [chooseValue, setChooseValue] = useState(0);

  //get grapdata
  const getshowchat = async () => {
    const response = await axios.get(
      `http://localhost:3600/willownews/graptimedata?sid=${chooseValue}`
    );
    const resdata = response.data;
    console.log(resdata);
    setOriginData(resdata);
  };
  useEffect(() => {
    getshowchat();
  }, [chooseValue]);
  const chartData = useMemo(() => {
    const TastList = [];
    const chatCount = {};

    originData.map((p) => {
      const tastThing = p.created_at.slice(0, 10);
      const hasTast = TastList.find((x) => x.tastOption === tastThing);
      if (hasTast) {
      } else {
        TastList.push({
          tastOption: tastThing,
        });
      }

      if (chatCount[p.p_name]) {
        if (chatCount[p.p_name].countByThing[tastThing])
          chatCount[p.p_name].countByThing[tastThing] += p.quantity;
        else chatCount[p.p_name].countByThing[tastThing] = p.quantity;
      } else {
        chatCount[p.p_name] = {
          countByThing: {},
        };
        chatCount[p.p_name].countByThing[tastThing] = p.quantity;
      }
      TastList.sort((a, b) => (a.tastThing > b.tastThing ? 1 : -1));

      console.log('tempCount1', chatCount.strawberry);
    });
    return {
      TastList,
      chatCount,
    };
  }, [originData, chooseValue]);
  console.log('chartDataasdasdasd', chartData.chatCount);

  const series = Object.keys(chartData.chatCount).map((key) => {
    const countByThing = chartData.chatCount[key].countByThing;
    console.log('countByThing', countByThing);
    return {
      name: key,
      data: chartData.TastList.map((x) => countByThing[x.tastOption] || 0),
    };
  });
  //   const series = [
  //     {
  //       name: 'series1',
  //       data: [31, 40, 28, 51, 42, 109, 100],
  //     },
  //     {
  //       name: 'series2',
  //       data: [11, 32, 45, 32, 34, 52, 41],
  //     },
  //   ];
  const options = {
    chart: {
      height: 350,
      type: 'area',
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: 'smooth',
    },
    xaxis: {
      type: 'datetime',
      categories: chartData.TastList.map((x) => `${x.tastOption}`),
    },
    tooltip: {
      x: {
        format: 'dd/MM/yy HH:mm',
      },
    },
  };

  return (
    <div>
      <div>Graptime</div>
      <div className="d-flex justify-content-end mb-5">
        <button
          type="button"
          className="btn  mt-3 willow_button "
          onClick={() => {
            setReportOption(0);
          }}
        >
          回上一頁
        </button>
      </div>
      <div className="container">
        <div className="row">
          <div className="col willow_marbottom">
            <button
              type="button"
              className="btn  mt-3 willow_button willow_marleft"
              value={3}
              onClick={(e) => {
                setChooseValue(e.target.value);
              }}
            >
              近一年
            </button>
            <button
              type="button"
              className="btn  mt-3 willow_button willow_marleft"
              value={2}
              onClick={(e) => {
                setChooseValue(e.target.value);
              }}
            >
              近半年
            </button>
            <button
              type="button"
              className="btn  mt-3 willow_button willow_marleft"
              value={1}
              onClick={(e) => {
                setChooseValue(e.target.value);
              }}
            >
              近一個月
            </button>
          </div>
        </div>
      </div>
      <div id="chart">
        <ReactApexChart
          options={options}
          series={series}
          type="area"
          height={350}
        />
      </div>
    </div>
  );
}

export default Graptime;
