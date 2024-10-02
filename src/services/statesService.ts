'use strict';
import axios from 'axios'
import qs from 'qs'


import type StateCodeType from '@/types/StateCodeType'


const config_pth = 'http://localhost:8000/api/'
axios.defaults.baseURL = config_pth;
axios.defaults.withCredentials = true;
axios.defaults.withXSRFToken = true;
// config header
var config = {
    headers: {
        //'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8',
       //  'Authorization': ''
       //headers: { Accept: 'application/json', apikey: 'xxxx' },
       Accept: 'application/json'
    }
    };
  
    const Axio = axios.create({
        baseURL: config_pth,
    });
class StateService {
    getStates =()=>{
        // console.log(qs.stringify(paras))
         return Axio.get('get_states').then(
             response => response.data
         )
     }
     /**************************** */
     getCities =(state:string)=>{
        // console.log(qs.stringify(paras))
        return Axio.get('get_cities', {
            params: {
              state: state,
            }
          }).then(response => response.data); 
     }

     /**************************** */
     getzips =(city:string)=>{
      // console.log(qs.stringify(paras))
      return Axio.get('get_zips', {
          params: {
            city: city,
          }
        }).then(response => response.data); 
   }

  }
  
  export default new StateService(); 