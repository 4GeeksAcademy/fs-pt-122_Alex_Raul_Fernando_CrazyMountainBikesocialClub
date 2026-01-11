import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const Private = () => {
  const navigate = useNavigate();
  const [data, setData] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
      return;
    }

    fetch("http://127.0.0.1:3001/api/private", {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then((resp) => {
        if (!resp.ok) {
          localStorage.removeItem("token");
          navigate("/login");
          return null;
        }
        return resp.json();
      })
      .then((json) => {
        if (json) setData(json);
      });
  }, []);

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="private-page">
      <div className="private-header">
        <h1>Zona privada</h1>
        <button className="login-button" type="button" onClick={logout}>
          Logout
        </button>
      </div>

      <pre className="private-pre">{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};
