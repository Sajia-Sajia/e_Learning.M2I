import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar2"; // Assurez-vous que le chemin est correct
import Topbar from "../etudiant/topBar"; // Assurez-vous que le chemin est correct
import "./Dashboard.css"; // Fichier CSS pour le style personnalisé
import WelcomeImage from "../etd.png"; // Importez correctement l'image

function Dashboard() {
  const [annonces, setAnnonces] = useState([]); // État local pour stocker les annonces

  // Fonction pour récupérer les annonces depuis l'API
  const fetchAnnonces = async () => {
    try {
      const response = await fetch("http://localhost:8080/Annonce"); // URL de l'API
      const data = await response.json();
      setAnnonces(data);
    } catch (error) {
      console.error("Erreur lors de la récupération des annonces :", error);
    }
  };

  // Utilisez useEffect pour charger les annonces lors du montage du composant
  useEffect(() => {
    fetchAnnonces();
  }, []);

  return (
    <div className="container-fluid p-0">
      {/* Topbar */}
      <Topbar />

      <div className="row no-gutters">
        {/* Sidebar fixée */}
        <div
          className="col-md-2 col-12 position-fixed"
          style={{ height: "100vh", top: 0, left: 0, zIndex: 1000 }}
        >
          <Sidebar />
        </div>

        {/* Contenu principal */}
        <div className="col-md-10 offset-md-2 col-12 p-4">
          <div className="dashboard-container">
            {/* Carte de bienvenue */}
            <div className="welcome-card">
              <h2>Welcome back!</h2>
              <img src={WelcomeImage} alt="Welcome illustration" />
            </div>

            {/* Carte des annonces */}
            <div className="company-card">
              <h4>E-learning</h4>
              
              <p>Annonces :</p>
              <div className="annonces-container">
                {/* Boucle pour afficher les annonces */}
                {annonces.length > 0 ? (
                  annonces.map((annonce) => (
                    <div key={annonce.id} className="annonce-card">
                      <h5>{annonce.titre}</h5>
                      <p>{annonce.description}</p>
                    </div>
                  ))
                ) : (
                  <p>Aucune annonce disponible.</p>
                )}
              </div>
            </div>
          </div>

          {/* Section des statistiques */}
          <div className="stats-container mt-4">
            <div className="stats-card">
              <p>Cours</p>
              <h3>43</h3>
            </div>
            <div className="stats-card">
              <p>TP</p>
              <h3>86</h3>
            </div>
            <div className="stats-card">
              <p>TD</p>
              <h3>161</h3>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
    </div>
  );
}

export default Dashboard;
