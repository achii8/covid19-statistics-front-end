// import React  from 'react';  
// import { Redirect, Route } from 'react-router-dom';
// import { checkCookie } from '../utils/cookies';

// const PrivateRoute = ({ component: Component, ...rest }) => (  
//   <Route { ...rest } render={props => (
//     checkCookie() !== null ? (
//       <Component { ...props } />
//     ) : (
//       <Redirect to={{
//           pathname: '/',
//           state: { from: props.location }
//         }}
//       />
//     )
//   )} />
// );

// export default PrivateRoute;
import React, { FunctionComponent } from "react";  
import { Redirect, Route } from "react-router-dom";  
// import { PrivateRouteProps } from "src/root/routing/interfaces/PrivateRouteProps";  
import { useHistory, useLocation } from "react-router-dom";
import { getCookie } from "../utils/cookies";

export  const PrivateRoute: FunctionComponent<any> = ({  
  component: Component,  
  ...rest  
}) => {  
  // const history = useHistory();
  const token = getCookie("token");
  // const decodedToken = jwt_decode(accessToken);

  //  if (decodedToken.userData.isAdmin) {
  //   history.push("/admin-panel");
  //  }

  return (  
    <Route  
      {...rest}  
      render={(props) => {  
        // logic for authenticated user to access /app part goes here.
        // e.g. check if user is logged-in logic.
        // const isLoggedIn = true;  

        return token ? (  
          <Component {...props} />  
        ) : (  
          <Redirect to={"/"} />  
        );  
   }}  
   />  
  );  
};