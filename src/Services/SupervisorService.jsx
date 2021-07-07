import React from 'react'
import axios from 'axios'
const customer_base_url="http://ec2-54-167-249-113.compute-1.amazonaws.com:8081/api/supervisor"
const LOGIN_API_BASE_URL="http://ec2-54-167-249-113.compute-1.amazonaws.com:8081/api/supervisor";
class SupervisorService extends React.Component{
   
        login(supervisor){
           return axios.post(LOGIN_API_BASE_URL+"/login",supervisor);
    }
        forgotPassword(supervisor , email)
        {
            return axios.put(customer_base_url+ "/resetpwd/{email}" +email, supervisor)
        }
}
export default new SupervisorService();
