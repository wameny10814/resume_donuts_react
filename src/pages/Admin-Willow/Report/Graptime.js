import React, { useState, useEffect, useRef, useMemo } from 'react';
import ReactApexChart from 'react-apexcharts';
import axios from 'axios';

function Graptime() {
  const [originData, setOriginData] = useState([]);
  const [chooseValue, setChooseValue] = useState(0);
  const [outputtData, setOutputData] = useState({
    strawberry: 0,
    matcha: 0,
    oldFashion: 0,
    chocolateOldfashion: 0,
  });

  //get grapdata
  const getshowchat = async () => {
    const response = await axios.get(
      `http://localhost:3600/willownews/graptimedata?sid=3`
    );
    const resdata = response.data;
    console.log(resdata);
    setOriginData(resdata);
  };
  useEffect(() => {
    getshowchat();
  }, []);
  const chartData = useMemo(() => {
    const TastList = [];
    const chatCount = {};
    // let chatCount = {
    //   strawberry: 0,
    //   matcha: 0,
    //   oldFashion: 0,
    //   chocolateOldfashion: 0,
    // };
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
      //   if (p.product_sid === 1) {
      //     chatCount.strawberry += p.quantity;
      //   } else if (p.product_sid === 2) {
      //     chatCount.matcha += p.quantity;
      //   } else if (p.product_sid === 3) {
      //     chatCount.oldFashion += p.quantity;
      //   } else if (p.product_sid === 4) {
      //     chatCount.chocolateOldfashion += p.quantity;
      //   } else if (p.product_sid === 5) {
      //   } else {
      //   }
      console.log('tempCount1', chatCount.strawberry);
    });
    return {
      TastList,
      chatCount,
    };
  }, [originData, chooseValue]);
  console.log('chartDataasdasdasd', chartData.chatCount);

  //   const getCountThingName = (x) => `${x}`;

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
