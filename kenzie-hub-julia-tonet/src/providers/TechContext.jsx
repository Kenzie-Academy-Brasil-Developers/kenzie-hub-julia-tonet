import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { api } from "../services/api";
import { useNavigate } from "react-router-dom";

export const TechContext = createContext({});
export const useTechContext = createContext(TechContext);

export const TechProvider = ({ children }) => {
  const [techList, setTechList] = useState(null);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const submit = (formData) => {
    userLogin(formData);
  };

  useEffect(() => {
    const loadUser = async () => {
      const token = localStorage.getItem("@token");
      if (token) {
        try {
          const { data } = await api.get("/profile", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          setUser(data);
          setTechList(data.techs);
          navigate("/dashboard");
        } catch (error) {
          console.log(error);
          localStorage.removeItem("@token");
        }
      }
    };
    loadUser();
  }, []);

  const userLogin = async (formData) => {
    try {
      const { data } = await api.post("/sessions", formData);
      navigate("/dashboard");
      setUser(data.user);
      localStorage.setItem("@token", data.token);
      localStorage.setItem("@data", JSON.stringify(data.user));
    } catch (error) {
      toast.error("Algo deu errado. Tente novamente");
    }
  };

  const userLogout = () => {
    localStorage.removeItem("@token");
    localStorage.removeItem("@data");
    setUser(null);
    navigate("/");
  };

  return (
    <TechContext.Provider
      value={{
        techList,
        setTechList,
        user,
        setUser,
        navigate,
        submit,
        userLogin,
        userLogout,
      }}
    >
      {children}
    </TechContext.Provider>
  );
};
