// CoursList.js
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Searchbar from './Searchbar';  // Importez le composant Searchbar

function CoursList() {
  const [userList, setUserList] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    try {
      const response = await axios.get("https://63a9bccb7d7edb3ae616b639.mockapi.io/users");
      setUserList(response.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (id) => {
    try {
      const confirmDelete = window.confirm("Êtes-vous sûre de vouloir supprimer cet élément ?");
      if (confirmDelete) {
        const confirm = window.confirm("Veuillez confirmer la suppression !");
        if (confirm) {
          await axios.delete(`https://63a9bccb7d7edb3ae616b639.mockapi.io/users/${id}`);
          getUsers();
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  const { searchComponent, filteredData } = Searchbar({ initialData: userList });

  return (
    <>
      <div className="d-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">Les Cours</h1>
        <div className="d-flex align-items-center gap-2">
          {searchComponent}
          <Link to="/portalprof/create-cour" className="btn btn-sm btn-primary shadow-sm" style={{ marginLeft: '10px' ,height: '38px',            
              lineHeight: '24px',        
              display: 'inline-flex',   
              alignItems: 'center'       }}   >
            <FontAwesomeIcon icon={faUser} className="mr-2" />
            Créer Cour
          </Link>
        </div>
      </div>
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h6 className="m-0 font-weight-bold text-primary">Liste des cours</h6>
        </div>
        <div className="card-body">
          {isLoading ? (
            <img src='https://media.giphy.com/media/ZO9b1ntYVJmjZlsWlm/giphy.gif' alt="Loading" />
          ) : (
            <div className="table-responsive">
              <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                <thead>
                  <tr>
                    <th>Id</th>
                    <th>Titre</th>
                    <th>Description</th>
                    <th>Date de publication</th>
                    <th>Heure de publication</th>
                    <th>Module</th>
                    <th>ID de professeur</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredData.map((item) => (
                    <tr key={item.id}>
                      <td>{item.id}</td>
                      <td>{item.titre}</td>
                      <td>{item.description}</td>
                      <td>{item.date_publication}</td>
                      <td>{item.heur_pub}</td>
                      <td>{item.module}</td>
                      <td>{item.professeurId}</td>
                      <td>
                        <Link to={`/portalprof/cour-edit/${item.id}`} className='btn btn-info btn-sm mr-1'>Edit</Link>
                        <button onClick={() => handleDelete(item.id)} className='btn btn-danger btn-sm mr-1'>Delete</button>
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

export default CoursList;