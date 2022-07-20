import React from 'react';

const Story = () => {
  return (
    <>
      <div className="story">
        <div className="d-flex">
          <div className="col-md-4 d-none d-md-block">
            <img className="w-100" src="./images/story-img-1.svg" alt="" />
          </div>
          <div className="col-12 col-md-8 d-flex">
            <div className="img-wrap">
              <img className="w-100" src="./images/story-img-2.svg" alt="" />
            </div>
            <div className="img-wrap">
              <img className="w-100" src="./images/story-img-3.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Story;
