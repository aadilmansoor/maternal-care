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
export const userBooking = async (req, headers) => {
  return await commonAPI(
    "POST",
    `${base_URL}/maternalcare/user/primarybooking`,
    req,
    headers
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
export const  registerBlog=async(req,header)=>{
  return await commonAPI(
    "POST",
    `${base_URL}/maternalcare/admin/blog`,
    req,
    header
   
    
  
  );
}
export const  viewBlog=async(req)=>{
  return await commonAPI(
    "GET",
    `${base_URL}/maternalcare/user/blog/view`,
    req,
    ""
   
    
  
  );
}

//view booking requests by service provider
export const viewBookingRequestByProvider = async (headers) => {
  return await commonAPI(
    "GET",
    `${base_URL}/maternalcare/serviceprovider/primarybooking/view`,
    "",
    headers
  );
};

// accept booking request by service provider
export const acceptBookingRequestByProvider = async (req, headers) => {
  return await commonAPI(
    "POST",
    `${base_URL}/maternalcare/serviceprovider/primarybooking/accept`,
    req,
    headers
  );
};

// accept booking request by service provider
export const rejectBookingRequestByProvider = async (req, headers) => {
  return await commonAPI(
    "POST",
    `${base_URL}/maternalcare/serviceprovider/primarybooking/reject`,
    req,
    headers
  );
};

//view all booking by admin
export const viewBookingRequestByAdmin = async () => {
  return await commonAPI(
    "GET",
    `${base_URL}/maternalcare/primarybooking/view`,
    "",
    ""
  );
};

//accept request by admin
export const acceptBookingRequestByAdmin = async (req) => {
  return await commonAPI(
    "POST",
    `${base_URL}/maternalcare/admin/primarybooking/accept`,
    req,
    ""
  );
};

//reject request by admin
export const rejectBookingRequestByAdmin = async (req) => {
  return await commonAPI(
    "POST",
    `${base_URL}/maternalcare/admin/primarybooking/reject`,
    req,
    ""
  );
};
