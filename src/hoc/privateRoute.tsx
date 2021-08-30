import React, { FunctionComponent } from "react";  
import { Redirect, Route } from "react-router-dom";  
import { checkCookie } from "../utils/cookies";

export  const PrivateRoute: FunctionComponent<any> = ({  
  component: Component,  
  ...rest  
}) => {  
  const token = checkCookie();
  return (  
    <Route  
      {...rest}  
      render={(props) => {  
        return token ? (  
          <Component {...props} />  
        ) : (  
          <Redirect to={"/"} />  
        );  
   }}  
   />  
  );  
};
