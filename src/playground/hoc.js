import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) =>(
  <div>
    <h1>Info</h1>
    <p>The info is: {props.info}</p>
  </div>
);

const withAdminWranning = (WarppedComponent) =>{
  return (props) =>(
    <div>
      {props.isAdmin && <p>This is a private message!</p>}
      <WarppedComponent {...props} />
    </div>
  )
};

const requireAuthentication = (WrappedComponent) =>{
  return (props) =>(
    <div>
      {props.isAuthenticated ? (
        <WrappedComponent {...props} />
      ) : (
        <p>Please Login to view info</p>
      )}
    </div>
  )
};

const AdminInfo = withAdminWranning(Info);
const AuthInfo = requireAuthentication(Info);

// ReactDOM.render(<AdminInfo isAdmin={true} info="My info here" />, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthenticated={false} info="My info here" />, document.getElementById('app'));
