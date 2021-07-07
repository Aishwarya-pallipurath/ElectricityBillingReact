import axios from 'axios';

const CONSUMER_API_BASE_URL = "http://http://ec2-54-91-121-58.compute-1.amazonaws.com:8081/cg/ebs";

class ConsumerService {

  
    validateConsumer(consumer){
        return axios.post(CONSUMER_API_BASE_URL + '/consumer' , consumer);
    }
    
    }
   
    


    
    

export default new ConsumerService()
