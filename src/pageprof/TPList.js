import { faUser } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function TPList() {
  const [userList, setUserList] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    getUsers();
    console.log("welcome");
  }, []);

  let getUsers = async () => {
    try {
      const response = await axios.get("https://63a9bccb7d7edb3ae616b639.mockapi.io/users"); // Update endpoint if necessary
      setUserList(response.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  let handleDelete = async (id) => {
    try {
      const confirmDelete = window.confirm("Are you sure you want to delete this item?");
      if (confirmDelete) {
        await axios.delete(`https://63a9bccb7d7edb3ae616b639.mockapi.io/users/${id}`);
        getUsers();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">Les Annonces </h1>
        <Link to="/portal/create-user" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm">
          <FontAwesomeIcon icon={faUser} className="creatinguser mr-2" />
          Crèe Annonce
        </Link>
      </div>
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h6 className="m-0 font-weight-bold text-primary">DataTables</h6>
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
                    <th>Title</th>
                    <th>Description</th>
                    <th>Publication Date</th>
                    <th>Publication Time</th>
                    <th>Type</th>
                    <th>Author ID</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tfoot>
                  <tr>
                    <th>Id</th>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Publication Date</th>
                    <th>Publication Time</th>
                    <th>Type</th>
                    <th>Author ID</th>
                    <th>Action</th>
                  </tr>
                </tfoot>
                <tbody>
                  {userList.map((item) => (
                    <tr key={item.id}>
                      <td>{item.id}</td>
                      <td>{item.titre}</td>
                      <td>{item.description}</td>
                      <td>{item.date_publication}</td>
                      <td>{item.heur_pub}</td>
                      <td>{item.type}</td>
                      <td>{item.auteur_id}</td>
                      <td>
                        <Link to={`/portal/user-edit/${item.id}`} className='btn btn-info btn-sm mr-1'>Edit</Link>
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

export default TPList;
