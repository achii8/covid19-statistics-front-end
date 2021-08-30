import { getCookie } from '../utils/cookies';

export const apiBaseRoute = process.env.REACT_APP_API_BASE_URL;

export enum MethodType {
    POST = 'POST',
    GET = 'GET',
    PUT = 'PUT',
    DELETE = 'DELETE',
}

export const loginRoute = 'auth';
export const countriesRoute = 'countries';


export const createApiCall = async ({ method = 'GET', url = '', data = {}, auth = false}) => {
    const headers: any = {
        "Content-Type": "application/json",
    }
    if (auth){
        headers["Authorization"] = `Bearer ${getCookie('token')}`;
    }
  return fetch(`${apiBaseRoute}${url}`, {
    body: method === 'GET' ? undefined : JSON.stringify(data),
    cache: "no-cache",
    headers,
    method,
  })
  .then(response => response.json())
  .then(result => result);
}

