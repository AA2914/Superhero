import commonAPI from "./commonAPI";
import SERVERURL from "./serverurl";

export const registerAPI = async (reqBody)=>{
    return await commonAPI("POST",`${SERVERURL}/register`,reqBody)
}

export const loginAPI = async (reqBody)=>{
    return await commonAPI("POST",`${SERVERURL}/login`,reqBody)
}

export const grievanceAPI = async (reqBody)=>{
    return await commonAPI("POST",`${SERVERURL}/grievance/add`,reqBody)
}

//GET DASHBOARD GRIEVANCE
export const dashboardAPI = async ()=>{
    return await commonAPI("GET",`${SERVERURL}/get-dashboard-grievance`,"")
}