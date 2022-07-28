import React from 'react';
import { useState } from 'react';
import { Button, Collapse } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './scssstyle/AdminPlace.scss';
function AdminPlace() {
  const [opennews, setOpennews] = useState(false);
  const [openreports, setOpenreports] = useState(false);
  return (
    <div id="willow_adminplace">
      <div className="container">
        <div className="row">
          <h1 className="text-center">後台管理者頁面</h1>
        </div>
      </div>

      <div className="container-fuild mt-5 mb-5">
        <div className="row w-75 m-auto">
          <div className="col-8">
            <h3 className="ml-4">SUPERUSE 主管您好</h3>
          </div>
          <div className="col willow_palce_rel">
            <div>
              <Button
                onClick={() => setOpennews(!opennews)}
                aria-controls="example-collapse-text"
                aria-expanded={opennews}
                className="mb-3"
              >
                最新消息管理
              </Button>
            </div>

            <div>
              <Link className="nav-link" to="/adminplace">
                <Collapse in={opennews} className="willow_palce_abs">
                  <div id="example-collapse-text" className="text-center">
                    最新消息管理
                  </div>
                </Collapse>
              </Link>
            </div>
          </div>
          <div className="col willow_palce_rel">
            <Button
              onClick={() => setOpenreports(!openreports)}
              aria-controls="example-collapse-text"
              aria-expanded={openreports}
              className="mb-3"
            >
              商品報表管理
            </Button>
            <Link className="nav-link" to="/adminplace">
              <Collapse in={openreports} className="willow_palce_abs">
                <div id="example-collapse-text " className="text-center">
                  商品報表管理
                </div>
              </Collapse>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminPlace;
