import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { api } from "../services/api";
import { useNavigate } from "react-router-dom";

export const TechContext = createContext({});

export const TechProvider = ({ children }) => {
  const [techList, setTechList] = useState([]);
  const [user, setUser] = useState(null);
  const [createTech, setCreateTech] = useState(false);
  const [editTech, setEditTech] = useState(false);
  const [editingTech, setEditingTech] = useState([]);
  const navigate = useNavigate();

  const submit = (formData) => {
    userLogin(formData);
  };

  useEffect(() => {
    const token = localStorage.getItem("@token");
    const getUser = async () => {
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
      }
    };
    if (token) {
      getUser();
    }
  }, []);

  const userLogin = async (formData) => {
    try {
      const { data } = await api.post("/sessions", formData);
      navigate("/dashboard");
      setUser(data.user);
      setTechList(data.user.techs);
      console.log(techList);
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
    setTechList([]);
    navigate("/");
  };

  const createTechs = async (formData) => {
    const token = localStorage.getItem("@token");
    try {
      const { data } = await api.post("/users/techs", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setTechList([...techList, data]);
      setCreateTech(false);
      toast.success("Tecnologia adicionada com sucesso");
    } catch (error) {
      console.log(error);
    }
  };

  const deleteTechs = async (techToDelete) => {
    const token = localStorage.getItem("@token");
    const authHeader = { headers: { Authorization: `Bearer ${token}` } };
    try {
      await api.delete(`/users/techs/${techToDelete}`, authHeader);
      const filteredTechs = techList.filter(({ id }) => id !== techToDelete);
      console.log(filteredTechs);
      setTechList(filteredTechs);
    } catch (error) {
      console.log(error);
    }
  };

  const updateTechs = async ({ id, status, title }) => {
    const token = localStorage.getItem("@token");
    const authHeader = { headers: { Authorization: `Bearer ${token}` } };
    try {
      const { data } = await api.put(
        `/users/techs/${id}`,
        { id, status, title },
        authHeader
      );
      const newTechList = techList.map((tech) => {
        if (tech.id === id) {
          return data;
        } else {
          return tech;
        }
      });
      setTechList(newTechList);
      setEditingTech([]);
      setEditTech(false);
    } catch (error) {
      console.log(error);
    }
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
        createTech,
        setCreateTech,
        createTechs,
        deleteTechs,
        editTech,
        setEditTech,
        editingTech,
        setEditingTech,
        updateTechs,
      }}
    >
      {children}
    </TechContext.Provider>
  );
};
