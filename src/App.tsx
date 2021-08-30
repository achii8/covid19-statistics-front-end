/* eslint-disable no-mixed-spaces-and-tabs */
import { withWidth } from "@material-ui/core";
import { WithWidth } from "@material-ui/core/withWidth";
import * as React from "react";
import { connect } from "react-redux";
import { BrowserRouter, Route, RouteComponentProps, Router } from "react-router-dom";
import { history } from "./redux/configure.store";
import { RootState } from "./redux/rootReducer";
import withRoot from "./withRoot";
import {PrivateRoute} from '../src/hoc/privateRoute';
import Login from "./pages/login/login";
import  Header from "./components/header/header";
import { Registration } from "./pages/registration/registration";
import { ConfirmEmail } from "./pages/confirm-page/confirm-email";
import Statistics from "./pages/statistics/statistics";
import "./App.css";
import dashboard from "./pages/dashboard/dashboard";
import { About } from "./pages/about/about";

function Routes() {
	return (
		<div className="content">
			<BrowserRouter>
				<Route path="*" component={Header} />
				<Route exact={true} path="/registration" component={Registration} />
				<PrivateRoute exact={true} path="/statistics" component={Statistics} />
				<PrivateRoute exact={true} path="/dashboard" component={dashboard} />
				<Route exact={true} path="/confirm/:token" component={ConfirmEmail} />
				<Route exact={true} path="/about" component={About} />
				<Route exact={true} path="/" component={Login} />
			</BrowserRouter>
		</div>
	);
}

interface Props extends RouteComponentProps<void>, WithWidth {
	token: string | null;
}

function App(props?: Props) {
	

	if (!props) {
		return null;
	}
	return (
		<Router history={history}>
			<div className="root">
				<Routes />
			</div>
		</Router>
	);
}

function mapStateToProps(state: RootState) {
	return {
		token: state.loginForm.token,
	};
}

export default connect(mapStateToProps)(withRoot(App));
