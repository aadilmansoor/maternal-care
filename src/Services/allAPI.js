import { commonAPI } from "./commonAPI"
import { base_URL } from "./serverURL"

//register
export const registerAPI=async(reqBody)=>{
    return await commonAPI('POST',`${base_URL}/maternalcare/user/register`,reqBody,"")
}