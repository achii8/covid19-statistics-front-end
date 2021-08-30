import React, { useState, useEffect } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { RouteComponentProps } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { RootState } from "../../redux/rootReducer";
import { TextField } from "@material-ui/core";
import * as CountryActions from "../../redux/country/countryActions";
import "./dashboard.scss";
import { useTranslation } from 'react-i18next'
import { countryCardsSelector, CountryType } from "../../redux/country/countryReducer";


interface Props extends RouteComponentProps<any> {
  countryActions: typeof CountryActions;
  cardData: any;
}

function Dashboard(props: Props) {
  const { t } = useTranslation();
return (
    <div id="dashboard">
        <div className="card">
            <div className="title"> {t("deaths")}</div>
            <div className="statistics">{props.cardData["deaths"]}</div>
        </div>
        <div className="card">
            <div className="title"> {t("critical")}</div>
            <div className="statistics">{props.cardData["critical"]}</div>
        </div>
        <div className="card">
            <div className="title"> {t("recovered")}</div>
            <div className="statistics">{props.cardData["recovered"]}</div>
        </div>
    </div>
  );
}

const mapStateToProps = (state: RootState) => ({
  cardData: countryCardsSelector(state.countryReducer)
});

function mapDispatchToProps(dispatch: any) {
  return {
    countryActions: bindActionCreators(CountryActions as any, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);
