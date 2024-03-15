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

export const getProviderRequest = async () => {
  return await commonAPI(
    "GET",
    `${base_URL}/maternalcare/admin/listofserviceproviderRequest`,
    "",
    ""
  );
};

export const approveRequest = async (req) => {
  return await commonAPI(
    "POST",
    `${base_URL}/maternalcare/admin/approval/serviceprovider`,
    req,
    ""
  );
};

export const serviceProviderLogin = async (req) => {
  return await commonAPI(
    "POST",
    `${base_URL}/maternalcare/serviceprovider/login`,
    req,
    ""
  );
};
