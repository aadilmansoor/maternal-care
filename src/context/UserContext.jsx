import { createContext, useContext, useEffect, useState } from "react";
import { getProviderAPI, getUserAPI } from "../Services/allAPI";
import { useNavigate } from "react-router-dom";

export const INITIAL_USER = {
  id: "",
  username: "",
  email: "",
};

export const INITIAL_PROVIDER = {
  id: "",
  username: "",
  email: "",
  imageUrl: "",
  service: "",
};

const INITIAL_STATE = {
  user: INITIAL_USER,
  provider: INITIAL_PROVIDER,
  setUser: () => {},
  setProvider: () => {},
};

const UserContext = createContext(INITIAL_STATE);

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(INITIAL_USER);
  const [provider, setProvider] = useState(INITIAL_PROVIDER);
  const navigate = useNavigate();
  const getUser = async () => {
    if (
      localStorage.getItem("maternity-role") === "user" &&
      localStorage.getItem("maternity-token")
    ) {
      try {
        const userID = localStorage.getItem("userId");
        const result = await getUserAPI({ userID });
        console.log(result);
        if (result.status === 200) {
          const client = result.data.user;
          setUser({
            id: client._id,
            username: client.userName,
            email: client.userEmail,
          });
        }
      } catch (error) {
        console.log(error);
      }
    } else if (
      localStorage.getItem("maternity-role") === "provider" &&
      localStorage.getItem("maternity-token")
    ) {
      try {
        const userID = localStorage.getItem("serviceProviderId");
        const result = await getProviderAPI({ userID });
        console.log(result);
        if (result.status === 200) {
          const client = result.data.user;
          setProvider({
            id: client._id,
            username: client.username,
            email: client.email,
            imageUrl: client.profile_image,
            service: client.service,
          });
        }
      } catch (error) {
        console.log(error);
      }
    }
  };
  useEffect(() => {
    getUser();
  }, [navigate]);

  const value = {
    user,
    setUser,
    provider,
    setProvider,
  };
  console.log(value);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export default UserProvider;

export const useUserContext = () => useContext(UserContext);
