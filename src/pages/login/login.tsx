import React, { useState, useEffect } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { RouteComponentProps } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { RootState } from "../../redux/rootReducer";
import * as LoginActions from "../../redux/authentication/authenticationActions";
import { TextField } from "@material-ui/core";
import "./login.scss";
import { useTranslation } from 'react-i18next'
import { checkCookie } from "../../utils/cookies";


interface Props extends RouteComponentProps<any> {
  actions: typeof LoginActions;
  token: string | null;
}

function Login(props: Props) {
  const { t } = useTranslation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (event: any) => {
    event.preventDefault();
    props.actions.loginUserAction({
      email,
      password
    });
  };
  useEffect(() => {
    if(checkCookie()) {
      props.history.push('/statistics');
    }
  },[props.token]);
    return (
    <div id="login">
    <div className="area">
      <div className="eachCol">
      {t("login")}
      </div>
      <div className="eachCol">
        <TextField 
              id="outlined-basic" label={t("login")} variant="outlined" fullWidth onChange={(e)=>{
            setEmail(e.target.value)
        }}/>
      </div>
      <div className="eachCol">
        <TextField id="full-width-text-field" label={t("password")} fullWidth type="password" variant="outlined" onChange={(e)=>{
            setPassword(e.target.value)
        }}/>
      </div>
      <div className="eachCol">
      <Button variant="contained" color="primary" fullWidth onClick={(e)=>{
          handleSubmit(e);
      }}>
           {t("login")}
      </Button>
      </div>
      </div>
  </div>
  );
}

const mapStateToProps = (state: RootState) => ({
  token: state.loginForm.token,
});

function mapDispatchToProps(dispatch: any) {
  return {
    actions: bindActionCreators(LoginActions as any, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
