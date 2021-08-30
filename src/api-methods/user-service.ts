import { UserData } from "../model/model";
import { createApiCall } from '../services/Api';

export function register(userData: UserData){
    return createApiCall({ method: 'POST', url: 'user', data: userData});
}

export function confirmEmail(token: string){
    return createApiCall({ method: 'PATCH', url: `user/${token}`});
}