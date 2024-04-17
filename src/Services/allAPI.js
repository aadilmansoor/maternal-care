import { commonAPI } from "./commonAPI";
import { base_URL } from "./serverURL";

//register user
export const registerAPI = async (reqBody) => {
  return await commonAPI(
    "POST",
    `${base_URL}/maternalcare/user/register`,
    reqBody,
    {
      headers: {
        "Content-type": "application/json",
      },
      withCredential: true,
      credentials: "include",
    }
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

export const rejectRequest = async (req) => {
  return await commonAPI(
    "POST",
    `${base_URL}/maternalcare/admin/rejection/serviceprovider`,
    req,
    ""
  );
};

export const serviceProviderLogin = async (req, res) => {
  return await commonAPI(
    "POST",
    `${base_URL}/maternalcare/serviceprovider/login`,
    req,
    {
      headers: {
        "Content-type": "application/json",
      },
      credentials: "include",
    }
  );
};
export const uploadProviderImage = async (req) => {
  return await commonAPI(
    "POST",
    `${base_URL}/maternalcare/serviceProvider/uploadimage`,
    req,
    { "Content-Type": "multipart/form-data" }
  );
};

export const adminLogin = async (req) => {
  return await commonAPI(
    "POST",
    `${base_URL}/maternalcare/admin/login`,
    req,
    ""
  );
};

export const serviceProviderMarkAttendance = async (req, headers) => {
  return await commonAPI(
    "POST",
    `${base_URL}/maternalcare/user/serviceprovider/attendance`,
    req,
    headers
  );
};

export const serviceProviderShowAttendance = async (req, headers) => {
  return await commonAPI(
    "POST",
    `${base_URL}/maternalcare/user/serviceprovider/attendanceview`,
    req,
    headers
  );
};

//list of approved service provider
export const getApprovedServiceProvidersList = async (req) => {
  return await commonAPI(
    "GET",
    `${base_URL}/maternalcare/admin/listofapprovedserviceproviderRequest`,
    "",
    ""
  );
};

//user login
export const userLogin = async (req) => {
  return await commonAPI(
    "POST",
    `${base_URL}/maternalcare/user/login`,
    req,
    ""
  );
};

//user booking
export const userBooking = async (req) => {
  return await commonAPI(
    "POST",
    `${base_URL}/maternalcare/user/primarybooking`,
    req,
    ""
  );
};

export const searchServiceProvider = async (req) => {
  return await commonAPI(
    "POST",
    `${base_URL}/maternalcare/user/serviceproviderSearch`,
    req,
    ""
  );
};

export const leaveRequest=async(req,headers)=>{
  return await commonAPI(
    "POST",
    `${base_URL}/maternalcare/serviceprovider/leaverequest`,
    req,
    headers
  
  );
}
export const  addWebinar=async(req,header)=>{
  return await commonAPI(
    "POST",
    `${base_URL}/maternalcare/admin/webinar`,
    req,
    header
    
  
  );
}
export const  showAllWebinar=async(req)=>{
  return await commonAPI(
    "GET",
    `${base_URL}/maternalcare/user/webinar/view`,
    req,
    ""
    
  
  );
}
export const  registerBlog=async(req)=>{
  return await commonAPI(
    "POST",
    `${base_URL}/maternalcare/admin/blog`,
    req,
    ""
    
  
  );
}
