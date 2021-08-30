import React, { useEffect } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { NavLink, RouteComponentProps } from "react-router-dom";
import { RootState } from "../../redux/rootReducer";
import * as LoginActions from "../../redux/authentication/authenticationActions";
import  './header.scss';
import { CountryType } from "../../redux/country/countryReducer";
import { Button } from "@material-ui/core";
import i18next from 'i18next'
import { useTranslation } from 'react-i18next'


interface HeaderProps extends RouteComponentProps<any> {
  actions: typeof LoginActions;
  isLoggedIn: boolean | null;
  statistics: CountryType[] | []
}


export function Header(
    props: HeaderProps
) {
 
  const { t } = useTranslation();
  
  const getHeader = () => {
    if(props.isLoggedIn){
      return(<ul className="header">
        <li className="menu-item" onClick={()=>{props.history.push("/dashboard")}}>{t("mainPage")}</li>
        <li className="menu-item" onClick={()=>{props.history.push("/statistics")}}>{t("statistics")}</li>
        <li className="menu-item" onClick={()=>{props.history.push("/about")}}>{t("about")}</li>
        <li className="menu-item" onClick={()=>{
            props.actions.LogoutUserAction();
            props.history.push("/");
          }}>{t("logout")}</li>
            <div className="menu-item">
        <Button onClick={() => {
                      i18next.changeLanguage("en")
                    }}>En</Button>
        <Button onClick={() => {
                      i18next.changeLanguage("ge")
                    }}>Ge</Button>
      </div>
      </ul>)
    }
    else{
      return(<ul className="header">
        <li className="menu-item" onClick={()=>{props.history.push("/registration")}}>{t("register")}</li>
        <li className="menu-item" onClick={()=>{props.history.push("/")}}>{t("login")}</li>
        <li className="menu-item" onClick={()=>{props.history.push("/about")}}>{t("about")}</li>
        <div className="menu-item">
        <Button onClick={() => {
                      i18next.changeLanguage("en")
                    }}>En</Button>
        <Button onClick={() => {
                      i18next.changeLanguage("ge")
                    }}>Ge</Button>
      </div>
      </ul>
      )
    }
  }
  return (
    <div className="header">
      {getHeader()}
    </div>
  );
}

const mapStateToProps = (state: RootState) => ({
  isLoggedIn: state.loginForm.isLoggedIn,
  statistics: state.countryReducer.statistics,
});

function mapDispatchToProps(dispatch: any) {
  return {
    actions: bindActionCreators(LoginActions as any, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);