import React, { useState, useEffect } from 'react';
import './Dashboard.css'; // Importation des styles CSS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios'; // Assurez-vous d'avoir axios installé

function ProfileAdmin() {
    const [isEditing, setIsEditing] = useState(false);
    const [adminInfo, setAdminInfo] = useState({
        nom: "",
        prenom: "",
        cin: "",
        email: "",
        motdepasse: "",
        modules: [],
        isadmin: false,
        imageURL: ""
    });

    // Charger les informations de l'administrateur au démarrage
    useEffect(() => {
        const fetchAdminInfo = async () => {
            try {
                const response = await axios.get('http://localhost:8082/professeur/admin/profile/6738e2dbca70207704909f4b'); // Remplacez '1' par l'ID de l'administrateur
                setAdminInfo(response.data);
            } catch (error) {
                console.error("Erreur lors de la récupération des informations:", error);
            }
        };

        fetchAdminInfo();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setAdminInfo({
            ...adminInfo,
            [name]: value
        });
    };

    const handleEdit = () => {
        setIsEditing(true);
    };

    const handleSave = async () => {
        try {
          
           // await axios.put(http://localhost:8082/professeur/admin/update/${adminInfo.id}, adminInfo); 
                // Remplacez 'adminInfo.id' par l'ID approprié
            console.log("Données sauvegardées:", adminInfo);
            setIsEditing(false);
        } catch (error) {
            console.error("Erreur lors de la sauvegarde des informations:", error);
        }
    };

    return (
        <div className="container">
            <div className="profile-header">
                <h1>{adminInfo.prenom} {adminInfo.nom}</h1>
                <h5>{adminInfo.isadmin ? "Administrateur" : "Professeur"}</h5>
            </div>
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">Profile information</h1>
            </div>
            <div className="table-responsive">
                {isEditing ? (
                    <form>
                        <table className="table table-bordered">
                            <tbody>
                                <tr>
                                    <td>Nom</td>
                                    <td>
                                        <input
                                            type="text"
                                            name="nom"
                                            value={adminInfo.nom}
                                            onChange={handleChange}
                                            className="form-control"
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td>Prénom</td>
                                    <td>
                                        <input
                                            type="text"
                                            name="prenom"
                                            value={adminInfo.prenom}
                                            onChange={handleChange}
                                            className="form-control"
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td>CIN</td>
                                    <td>
                                        <input
                                            type="text"
                                            name="cin"
                                            value={adminInfo.cin}
                                            onChange={handleChange}
                                            className="form-control"
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td>Email</td>
                                    <td>
                                        <input
                                            type="email"
                                            name="email"
                                            value={adminInfo.email}
                                            onChange={handleChange}
                                            className="form-control"
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td>Mot de passe</td>
                                    <td>
                                        <input
                                            type="password"
                                            name="motdepasse"
                                            value={adminInfo.motdepasse}
                                            onChange={handleChange}
                                            className="form-control"
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td>Modules</td>
                                    <td>
                                        <input
                                            type="text"
                                            name="modules"
                                            value={adminInfo.modules.join(", ")}
                                            onChange={handleChange}
                                            className="form-control"
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td>Image URL</td>
                                    <td>
                                        <input
                                            type="text"
                                            name="imageURL"
                                            value={adminInfo.imageURL}
                                            onChange={handleChange}
                                            className="form-control"
                                        />
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <button type="button" className="btn btn-success" onClick={handleSave}>Sauvegarder</button>
                    </form>
                ) : (
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th>Champ</th>
                                <th>Information</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Nom</td>
                                <td>{adminInfo.nom}</td>
                            </tr>
                            <tr>
                                <td>Prénom</td>
                                <td>{adminInfo.prenom}</td>
                            </tr>
                            <tr>
                                <td>CIN</td>
                                <td>{adminInfo.cin}</td>
                            </tr>
                            <tr>
                                <td>Email</td>
                                <td>{adminInfo.email}</td>
                            </tr>
                            <tr>
                                <td>Modules</td>
                                <td>{adminInfo.modules.join(", ")}</td>
                            </tr>
                            <tr>
                                <td>Image URL</td>
                                <td><img src={adminInfo.imageURL} alt="Profile" style={{ width: '100px', height: 'auto' }} /></td>
                            </tr>
                        </tbody>
                    </table>
                )}
            </div>
            <div className="d-flex justify-content-between mt-4">
                {!isEditing && (
                    <button className="btn btn-primary" onClick={handleEdit}>Modifier</button>
                )}
            </div>
        </div>
    );
}

export default ProfileAdmin;