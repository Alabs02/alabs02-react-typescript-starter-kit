import React, {  Fragment } from 'react';
import { Outlet } from 'react-router-dom';

// IMAGES
import StaticImg from 'src/assets/images'; 

// COMPONENTS
import { AppBar } from 'src/components/navigation';

const AuthLayout = () => {
  return (
    <Fragment>
      <div className="auth-layout">
        <div className="auth-layout__wrapper grid grid-col-15">
          <div className="col-span-15 col-span-md-9 auth-layout__content pd-20 pd-md-40 border-green">
            <AppBar />

            <Outlet />
          </div>
          <div className="col-span-15 col-span-md-6 grid auth-layout__media hide visible-md">
            <div className="auth-layout__media-wrapper">
              <img src={StaticImg.AUTH_MEDIA} alt="Auth media" />
            </div>
          </div>
        </div>
      <Outlet />

      </div>
    </Fragment>
  );
}

export { AuthLayout as default };