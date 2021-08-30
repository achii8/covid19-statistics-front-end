import * as AuthenticationActions from './authentication/authenticationActions'
import * as CountryAction from './country/countryActions';

export const ActionCreators = Object.assign({}, {...CountryAction ,...AuthenticationActions});
