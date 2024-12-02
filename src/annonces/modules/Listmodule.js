import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Listmodule() {
  const [modules, setModules] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetchModules();
  }, []);

  const fetchModules = async () => {
    try {
      const response = await axios.get("http://localhost:8085/api/modules");
      setModules(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Erreur lors de la récupération des modules :", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      const confirmDelete = window.confirm("Êtes-vous sûr de vouloir supprimer ce module ?");
      if (confirmDelete) {
        await axios.delete(`http://localhost:8085/api/modules/${id}`);
        fetchModules(); // Recharge la liste après suppression
      }
    } catch (error) {
      console.error("Erreur lors de la suppression :", error);
    }
  };

  return (
    <div className="container">
      <h3>Liste des Modules</h3>
      <Link to="/portal/createmodule" className="btn btn-primary mb-3">
        Ajouter un Module
      </Link>
      {isLoading ? (
        <p>Chargement...</p>
      ) : (
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nom</th>
              <th>Description</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {modules.map((module) => (
              <tr key={module.id}>
                <td>{module.id}</td>
                <td>{module.nom}</td>
                <td>{module.description}</td>
                <td>
                  <Link to={`/portal/editmodule/${module.id}`} className="btn btn-info btn-sm mr-2">
                    Modifier
                  </Link>
                  <button onClick={() => handleDelete(module.id)} className="btn btn-danger btn-sm">
                    Supprimer
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Listmodule;
