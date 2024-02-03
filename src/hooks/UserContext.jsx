import {createContext, useState} from "react";
// import {useNavigate} from "react-router-dom";
export const UserContext = createContext({name: "", auth: false});

export const UserProvider = ({children}) => {
  const [user, setUser] = useState({name: "", auth: true});
  //   const navigate = useNavigate();

  const login = (email) => {
    setUser((user) => ({
      name: email,
      auth: true,
    }));
  };

  const logout = () => {
    setUser((user) => ({
      name: "",
      auth: false,
    }));
    // navigate("/");
  };
  return (
    <UserContext.Provider value={{user, login, logout}}>
      {children}
    </UserContext.Provider>
  );
};
