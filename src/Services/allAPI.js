import { commonAPI } from "./commonAPI";
import { base_URL } from "./serverURL";

//register user
export const registerAPI = async (reqBody) => {
  return await commonAPI(
    "POST",
    `${base_URL}/maternalcare/user/register`,
    reqBody,
    ""
  );
};

//register service provider
export const registerProviderAPI = async (reqBody) => {
  return await commonAPI(
    "POST",
    `${base_URL}/maternalcare/serviceProvider/register`,
    reqBody,
    { "Content-Type": "multipart/form-data" }
  );
};
