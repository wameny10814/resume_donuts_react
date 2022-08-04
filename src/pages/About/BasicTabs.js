import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs(props) {
  const { moveTo, stores } = props;
  console.log(props);

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 2, borderColor: 'divider' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab
            onClick={() => {
              moveTo(stores[0]);
            }}
            sx={{
              fontSize: '1.5rem',
              margin: '0 auto',
              fontFamily: 'Zen Maru Gothic',
            }}
            label="北車店"
            {...a11yProps(0)}
          />
          <Tab
            onClick={() => {
              moveTo(stores[1]);
            }}
            sx={{
              fontSize: '1.5rem',
              margin: '0 auto',
              fontFamily: 'Zen Maru Gothic',
            }}
            label="大安店"
            {...a11yProps(1)}
          />
          <Tab
            sx={{
              fontSize: '1.5rem',
              margin: '0 auto',
              fontFamily: 'Zen Maru Gothic',
            }}
            label="市府店"
            {...a11yProps(2)}
          />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <p className="bingH4">ポッチーパン屋 北車站</p>

        <ul>
          <li>
            <p className="bingH4">地址</p>
            <p className="bingText-16">台北市中正區北平西路3號</p>
          </li>
          <li>
            <p className="bingH4">聯絡電話</p>
            <p className="bingText-16">02-23713558</p>
          </li>
          <li>
            <p className="bingH4">E-MAIL</p>
            <p className="bingText-16">LoveMeowDonut@meowmeow.com</p>
          </li>
          <li>
            <p className="bingH4">營業時間</p>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">營業起訖</th>
                  <th scope="col">月</th>
                  <th scope="col">火</th>
                  <th scope="col">水</th>
                  <th scope="col">木</th>
                  <th scope="col">金</th>
                  <th scope="col">土</th>
                  <th scope="col">日</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">10：00～20：00</th>
                  <td>
                    <i className="fa-regular fa-circle"></i>{' '}
                  </td>
                  <td>
                    <i className="fa-solid fa-circle"></i>
                  </td>
                  <td>
                    <i className="fa-solid fa-circle"></i>
                  </td>
                  <td>
                    <i className="fa-solid fa-circle"></i>
                  </td>
                  <td>
                    <i className="fa-solid fa-circle"></i>
                  </td>
                  <td>
                    <i className="fa-solid fa-circle"></i>
                  </td>
                  <td>
                    <i className="fa-solid fa-circle"></i>
                  </td>
                </tr>
              </tbody>
            </table>
          </li>
        </ul>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <p className="bingH4">ポッチーパン屋 大安店</p>

        <ul>
          <li>
            <p className="bingH4">地址</p>
            <p className="bingText-16">台北市大安區復興南路一段390號2樓</p>
          </li>
          <li>
            <p className="bingH4">聯絡電話</p>
            <p className="bingText-16">02-33778778</p>
          </li>
          <li>
            <p className="bingH4">E-MAIL</p>
            <p className="bingText-16">LoveMeowDonut@meowmeow.com</p>
          </li>
          <li>
            <p className="bingH4">營業時間</p>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">營業起訖</th>
                  <th scope="col">月</th>
                  <th scope="col">火</th>
                  <th scope="col">水</th>
                  <th scope="col">木</th>
                  <th scope="col">金</th>
                  <th scope="col">土</th>
                  <th scope="col">日</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">10：00～20：00</th>
                  <td>
                    <i className="fa-regular fa-circle"></i>{' '}
                  </td>
                  <td>
                    <i className="fa-solid fa-circle"></i>
                  </td>
                  <td>
                    <i className="fa-solid fa-circle"></i>
                  </td>
                  <td>
                    <i className="fa-solid fa-circle"></i>
                  </td>
                  <td>
                    <i className="fa-solid fa-circle"></i>
                  </td>
                  <td>
                    <i className="fa-solid fa-circle"></i>
                  </td>
                  <td>
                    <i className="fa-solid fa-circle"></i>
                  </td>
                </tr>
              </tbody>
            </table>
          </li>
        </ul>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <p className="bingH4">ポッチーパン屋 市府店</p>

        <ul>
          <li>
            <p className="bingH4">地址</p>
            <p className="bingText-16">台北市信義區忠孝東路五段2號</p>
          </li>
          <li>
            <p className="bingH4">聯絡電話</p>
            <p className="bingText-16">02-55671284</p>
          </li>
          <li>
            <p className="bingH4">E-MAIL</p>
            <p className="bingText-16">LoveMeowDonut@meowmeow.com</p>
          </li>
          <li>
            <p className="bingH4">營業時間</p>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">營業起訖</th>
                  <th scope="col">月</th>
                  <th scope="col">火</th>
                  <th scope="col">水</th>
                  <th scope="col">木</th>
                  <th scope="col">金</th>
                  <th scope="col">土</th>
                  <th scope="col">日</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">10：00～20：00</th>
                  <td>
                    <i className="fa-regular fa-circle"></i>{' '}
                  </td>
                  <td>
                    <i className="fa-solid fa-circle"></i>
                  </td>
                  <td>
                    <i className="fa-solid fa-circle"></i>
                  </td>
                  <td>
                    <i className="fa-solid fa-circle"></i>
                  </td>
                  <td>
                    <i className="fa-solid fa-circle"></i>
                  </td>
                  <td>
                    <i className="fa-solid fa-circle"></i>
                  </td>
                  <td>
                    <i className="fa-solid fa-circle"></i>
                  </td>
                </tr>
              </tbody>
            </table>
          </li>
        </ul>
      </TabPanel>
    </Box>
  );
}
