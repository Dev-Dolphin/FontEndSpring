import { URL_EMPLOYEE } from "./apiConstant"
import http from "./http"

export const  getAllEmployee = async (onSuccess, OnError) => {
    try {
        const data =   await http.get(URL_EMPLOYEE);
        if(data){
            onSuccess(data?.data)
        }
    } catch (error) {
        OnError(error)        
    }
}