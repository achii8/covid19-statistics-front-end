import { Button, TextField } from "@material-ui/core";
import * as React from "react";
import { register } from "../../api-methods/user-service";
import "./registration.scss";
import { useTranslation } from 'react-i18next'

export function Registration() {
    const { t } = useTranslation();
    const [email, setEmail] = React.useState<string>("");
    const [password, setPassword] = React.useState<string>("");
    const [firstName, setFirstName] = React.useState<string>("");
    const [lastName, setLastName] = React.useState<string>("");
    const [message, setMessage] = React.useState<string>("");
    return <div id="registration">
      <div className="area">
        <div className="eachCol">
            {t("register")}
        </div>
        <div className="eachCol">
          <TextField 
                id="outlined-basic" label={t("email")} variant="outlined" fullWidth onChange={(e)=>{
              setEmail(e.target.value)
          }}/>
        </div>
        <div className="eachCol">
          <TextField id="full-width-text-field" label={t("password")} type="password"  fullWidth variant="outlined" onChange={(e)=>{
              setPassword(e.target.value)
          }}/>
        </div>
        <div className="eachCol">
          <TextField id="outlined-basic" label={t("firstName")} fullWidth variant="outlined" onChange={(e)=>{
              setFirstName(e.target.value)
          }}/>
        </div>
        <div className="eachCol">
          <TextField id="outlined-basic" label={t("lastName")} fullWidth variant="outlined" onChange={(e)=>{
              setLastName(e.target.value)
          }}/>
        </div>
        <div className="eachCol">
        <Button variant="contained" color="primary" fullWidth onClick={async()=>{
            const response = await register({email, password,firstName, lastName});
            response.success? setMessage("Please check your email"): setMessage("Oops! something went wrong!")
        }}>
              {t("register")}
        </Button>
        </div>
        <div className="message">
          {message}
        </div>
        </div>
    </div>
}