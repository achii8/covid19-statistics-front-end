import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { RouteComponentProps } from "react-router-dom";
import { DataGrid, GridColDef, GridValueGetterParams } from '@material-ui/data-grid';
import "./statistics.scss"
import { RootState } from "../../redux/rootReducer";
import { CountryType } from "../../redux/country/countryReducer";
import * as CountryActions from "../../redux/country/countryActions";

interface Props extends RouteComponentProps<any> {
  countryActions: typeof CountryActions;
  statistics: CountryType[];
}
const columns: GridColDef[] = [
  {
    field: 'code',
    headerName: 'Code',
    width: 200,
  },
  {
    field: 'country',
    headerName: 'Country',
    width: 200,
  },
  {
    field: 'critical',
    headerName: 'Critical',
    type: 'number',
    width: 200,
  },
  {
    field: 'deaths',
    headerName: 'Deaths',
    type: 'number',
    width: 200,
  },
  {
    field: 'recovered',
    headerName: 'Recovered',
    type: 'number',
    width: 200,
  },
  {
    field: 'lastUpdate',
    headerName: 'Last Update',
    width: 200,
  },
];

function Statistics(props: Props) {
  React.useEffect(()=>{
    props.countryActions.getStatistics();
  },[]);

  return (
    <div style={{width:"1200px", margin: "auto", marginTop: "30px"}} >
    <div className="dataTable">
    <DataGrid
      rows={props.statistics.map((country)=>{
        return country.statistics
      })}
      columns={columns}
  />
  </div>
  </div>
  );
}

const mapStateToProps = (state: RootState) => ({
  statistics: state.countryReducer.statistics,
});

function mapDispatchToProps(dispatch: any) {
  return {
    countryActions: bindActionCreators(CountryActions as any, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Statistics);
