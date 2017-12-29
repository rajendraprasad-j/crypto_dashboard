import { CHANGE_CURRENT_ACCOUNT } from '../Constants/actionTypes';


export function sendMessage(index){
   return{
    type: CHANGE_CURRENT_ACCOUNT,
    index
   }
}