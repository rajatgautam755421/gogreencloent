import React from 'react';  
import './whypms.css';
import Typewriter from 'typewriter-effect';

const WhyPMS = () => {
  return (
    <div className='why-pms'>
      <h3 className='type'>
      <Typewriter
          options={{
            strings: ['Why Choose PMS ?'],
            autoStart: true,
            loop: true,
            
          }}
        />
      </h3>
      <h3 className='text-center'></h3>
      <p>Lorem ipsum dolor sit amet conaesa veritatis sapiente autem, ipsum et, veniam ratione earum nostrum quaerat.</p>
      <div className="container py-5">
      <div className="row">
        <div className="col-lg-4">
          <div className='d-flex align-items-center'>
            <div className="left">
              <i className='fa fa-briefcase fa-4x'></i>
            </div>
            <div className="right text-start ms-3">
              <h5>Best In Business</h5>
              <p>
                Lorem ipsum dolor iditate deserunt. Minus repudiandae ab quos culpa suscipit molestiae quo consectetur!
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className='d-flex align-items-center'>
            <div className="left">
              <i className='fa fa-users fa-4x'></i>
            </div>
            <div className="right text-start ms-3">
              <h5>Large Marketplace</h5>
              <p>
                Lorem ipsum dolor iditate deserunt. Minus repudiandae ab quos culpa suscipit molestiae quo consectetur!
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className='d-flex align-items-center'>
            <div className="left">
              <i className='fa fa-computer-mouse fa-4x'></i>
            </div>
            <div className="right text-start ms-3">
              <h5>One Click Order</h5>
              <p>
                Lorem ipsum dolor iditate deserunt. Minus repudiandae ab quos culpa suscipit molestiae quo consectetur!
              </p>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default WhyPMS