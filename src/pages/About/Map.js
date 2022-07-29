import ProjectButton from '../../components/ProjectButton/ProjectButton';
import H2 from './H2';
import LeafletMap from './LeafletMap';
function Map() {
  return (
    <section className="container">
      <H2 title="店鋪資訊" Entitle="MAP" />
      <div className="col-md-5 mapInfo">
        <div className="">
          <ProjectButton text="市府店"></ProjectButton>
          <ProjectButton text="北車店"></ProjectButton>
          <ProjectButton text="大安店"></ProjectButton>
        </div>
        <p className="bingH4">ポッチーパン屋 大安店</p>
        <ul>
          <li>
            <p className="bingH4">地址</p>
            <p className="bingText-16">106台北市大安區復興南路一段390號2樓</p>
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
                  <i className="fa-regular fa-circle"></i>                  </td>
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
      </div>
      <div className="col-md-7">
        <LeafletMap></LeafletMap>
      </div>
    </section>
  );
}
export default Map;
