import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Liststudent() {
  const [studentList, setStudentList] = useState([]); // Liste des étudiants
  const [isLoading, setLoading] = useState(true); // Indicateur de chargement

  useEffect(() => {
    getStudents();
  }, []);

  // Récupération de la liste des étudiants via l'API
  const getStudents = async () => {
    try {
      const response = await axios.get("http://localhost:8085/etudiants"); // Endpoint back-end
      setStudentList(response.data); // Mise à jour de la liste des étudiants
      setLoading(false); // Fin du chargement
    } catch (error) {
      console.error("Erreur lors de la récupération des étudiants :", error);
    }
  };

  // Suppression d'un étudiant
  const handleDelete = async (id) => {
    try {
      const confirmDelete = window.confirm("Êtes-vous sûr de vouloir supprimer cet étudiant ?");
      if (confirmDelete) {
        await axios.delete(`http://localhost:8085/etudiants/${id}`); // Endpoint pour supprimer un étudiant
        getStudents(); // Mise à jour de la liste après suppression
      }
    } catch (error) {
      console.error("Erreur lors de la suppression :", error);
    }
  };

  return (
    <>
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">Liste des étudiants</h1>
        <Link to="/portal/createstudent" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm">
          <FontAwesomeIcon icon={faUser} className="creatinguser mr-2" />
          Ajouter un étudiant
        </Link>
      </div>
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h6 className="m-0 font-weight-bold text-primary">Liste des étudiants</h6>
        </div>
        <div className="card-body">
          {isLoading ? (
            <img src="https://media.giphy.com/media/ZO9b1ntYVJmjZlsWlm/giphy.gif" alt="Loading" />
          ) : (
            <div className="table-responsive">
              <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Nom</th>
                    <th>Prénom</th>
                    <th>Email</th>
                    <th>Modules</th>
                    <th>CIN</th>
                    <th>CNE</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tfoot>
                  <tr>
                    <th>ID</th>
                    <th>Nom</th>
                    <th>Prénom</th>
                    <th>Email</th>
                    <th>Modules</th>
                    <th>CIN</th>
                    <th>CNE</th>
                    <th>Actions</th>
                  </tr>
                </tfoot>
                <tbody>
                  {studentList.map((student) => (
                    <tr key={student.id}>
                      <td>{student.id}</td>
                      <td>{student.nom}</td>
                      <td>{student.prenom}</td>
                      <td>{student.email}</td>
                      <td>{student.modules}</td>
                      <td>{student.cin}</td>
                      <td>{student.cne}</td>
                      <td>
                        <Link to={`/portal/student-edit/${student.id}`} className="btn btn-info btn-sm mr-1">
                          Modifier
                        </Link>
                        <button onClick={() => handleDelete(student.id)} className="btn btn-danger btn-sm">
                          Supprimer
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Liststudent;
