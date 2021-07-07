import axios from 'axios';

const CONSUMER_API_BASE_URL = "http://ec2-54-163-61-125.compute-1.amazonaws.com:8081";

class BillService {

  
    validateConsumer(bill){
        return axios.post(CONSUMER_API_BASE_URL + '/validateConsumer' , bill);
    }

    getBillById(billId){
        return axios.post(CONSUMER_API_BASE_URL + '/getBillById' , billId);
    }
  createBill(bill){
        return axios.post(CONSUMER_API_BASE_URL + '/createNewBill' , bill);
    }
   getAllBills(){
        return axios.get(CONSUMER_API_BASE_URL + '/getAllBills' );
    }
   deleteBillById(billId){
        return axios.delete(CONSUMER_API_BASE_URL + '/deleteBillById' , billId);
    }
    
    }
   
    


    
    

export default new BillService()
