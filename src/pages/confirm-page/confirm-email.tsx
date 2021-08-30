import { Button, TextField } from "@material-ui/core";
import * as React from "react";
import { connect } from "react-redux";
import { RouteComponentProps } from "react-router-dom";
import {confirmEmail}  from "../../api-methods/user-service";
import { RootState } from "../../redux/rootReducer";
import "./confirm-email.scss";
import * as LoginActions from "../../redux/authentication/authenticationActions";
import { bindActionCreators } from "redux";

interface Props extends RouteComponentProps<any> {
    actions: typeof LoginActions;
}
export function ConfirmEmail(
    props: Props
    ) {
    const [message, setMessage] = React.useState<string>("");
    React.useEffect(() => {
        confirmEmail(props.match.params.token).then((res)=>{
                if(res.success){
                    setMessage("Verification succeed! Please Sign In!")
                    setTimeout(()=>{
                        props.history.push("/");
                    }, 3000);
                }
                else{
                    setMessage("Verification failed!")
                }
               return res;
           })
      },[]);
    return (
    <div id="confirmEmail">
        {message}
    </div>)
}
  
function mapDispatchToProps(dispatch: any) {
    return {
        actions: bindActionCreators(LoginActions as any, dispatch),
    };
  }
export default connect(
mapDispatchToProps)(ConfirmEmail);