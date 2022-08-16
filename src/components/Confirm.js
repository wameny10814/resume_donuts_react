import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { confirmable, createConfirmation } from 'react-confirm';
// import { Button } from 'react-bootstrap';

const Confirmation = ({
  okLabel = '確認',
  cancelLabel = '取消',
  title = 'ポッチ―パン屋',
  confirmation,
  show,
  proceed,
  enableEscape = false,
}) => {
  return (
    <div className="static-modal">
      <Modal
        className="pochi-confirm-modal"
        animation={true}
        show={show}
        onHide={() => proceed(false)}
        backdrop={enableEscape ? true : 'static'}
        keyboard={enableEscape}
      >
        <Modal.Header>
          <Modal.Title>
            {/* 標題會在這 */}
            <div className=" w-100 h-100">{title}</div>
          </Modal.Title>
        </Modal.Header>
        {/* 內文會在這 也是 confirm('這裡的內容') */}
        <Modal.Body className="mx-2">{confirmation}</Modal.Body>
        <Modal.Footer className=" justify-content-center">
          {/* btn在這 */}
          <Button
            className="pochi-confirm-btn-pri mx-2 px-4 py-2"
            onClick={() => proceed(false)}
          >
            取消
          </Button>
          <Button
            className="pochi-confirm-btn-pri mx-2 px-4 py-2"
            onClick={() => proceed(true)}
          >
            確認
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

Confirmation.propTypes = {
  okLabel: PropTypes.string,
  cancelLabel: PropTypes.string,
  title: PropTypes.string,
  confirmation: PropTypes.string,
  show: PropTypes.bool,
  proceed: PropTypes.func, // called when ok button is clicked.
  enableEscape: PropTypes.bool,
};

export function confirm(
  confirmation,
  proceedLabel = 'OK',
  cancelLabel = 'cancel',
  options = {}
) {
  return createConfirmation(confirmable(Confirmation))({
    confirmation,
    proceedLabel,
    cancelLabel,
    ...options,
  });
}

// import React from "react";
// import PropTypes from "prop-types";
// import Modal from "react-bootstrap/Modal";
// import Button from "react-bootstrap/Button";
// import { confirmable, createConfirmation } from "react-confirm";
// const canceldesu =()=>{
  
//   return;
// }
// const Confirmation = ({
//   okLabel = "OK",
//   cancelLabel = "Cancel",
//   title = "Confirmation",
//   confirmation,
//   show,
//   proceed,
//   enableEscape = true
// }) => {
//   return (
//     <div className="static-modal">
//       <Modal
//         animation={false}
//         show={show}
//         onHide={() => proceed(false)}
//         backdrop={enableEscape ? true : "static"}
//         keyboard={enableEscape}
//       >
//         <Modal.Header>
//           <Modal.Title>{title}</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>{confirmation}</Modal.Body>
//         <Modal.Footer>
//           <Button onClick={canceldesu}>{cancelLabel}</Button>
//           <Button
//             className="button-l"
//             bsStyle="primary"
//             onClick={() => proceed(true)}
//           >
//             {okLabel}
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </div>
//   );
// };

// Confirmation.propTypes = {
//   okLabel: PropTypes.string,
//   cancelLabel: PropTypes.string,
//   title: PropTypes.string,
//   confirmation: PropTypes.string,
//   show: PropTypes.bool,
//   proceed: PropTypes.func, // called when ok button is clicked.
//   enableEscape: PropTypes.bool
// };

// export function confirm(
//   confirmation,
//   proceedLabel = "OK",
//   cancelLabel = "cancel",
//   options = {}
// ) {
//   return createConfirmation(confirmable(Confirmation))({
//     confirmation,
//     proceedLabel,
//     cancelLabel,
//     ...options
//   });
// }

