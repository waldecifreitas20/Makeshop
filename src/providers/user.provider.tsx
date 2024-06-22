import { PropsWithChildren, createContext, useState } from "react";
import { userServices } from "../services/user.services";

const userData: any = {};

export const UserContext = createContext(
  {
    userData,
    updateUserData: function () { }
  });

export function UserContextProvider(props: PropsWithChildren) {
  const [userData, setUserData] = useState(initState());

  function initState() {
    try {
      return userServices.getCurrentUser();
    } catch (error: any) {
      console.error(error);
      return {};
    }
  }

  function updateUserData() {
    try {
      const userData = userServices.getCurrentUser();
      setUserData(userData);
    } catch (error) {
      console.log(error);

      setUserData({});
    }
  }


  return (
    <UserContext.Provider value={{ userData, updateUserData }}>
      {props.children}
    </UserContext.Provider>
  );
}