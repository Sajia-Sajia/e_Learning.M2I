import React from "react";
import Sidebar from "./Sidebar2"; // Import Sidebar
import Topbar from "../etudiant/topBar"; // Import Topbar
import "./semestre4.css"; // Ajouter un fichier CSS pour styliser cette section

function Semestre4() {
  return (
    <div className="semestre4-layout">
      {/* Topbar */}
      <Topbar />

      {/* Sidebar + Content */}
      <div className="semestre4-main">
        <Sidebar />
        <div className="semestre4-content">
          <h1 className="semestre4-title">Stages - Semestre 4</h1>

          {/* Introduction */}
          <section className="intro-section">
            <h2>📘 Introduction</h2>
            <p>
              Le semestre 4 est consacré aux stages en entreprise. Ce stage a
              pour objectif de vous plonger dans le monde professionnel,
              d'acquérir des compétences pratiques et d'appliquer vos
              connaissances théoriques.
            </p>
          </section>

          {/* Resources Section */}
          <section className="resources-section">
            <h2>📂 Ressources</h2>
            <ul>
              <li>
                <a
                  href="/guide-stage.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Guide du stage (PDF)
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Trouver une entreprise sur LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://www.cv-templates.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Modèles de CV et lettres de motivation
                </a>
              </li>
            </ul>
          </section>

          {/* Tasks Section */}
          <section className="tasks-section">
            <h2>📋 Vos tâches pendant le stage</h2>
            <ol>
              <li>Assister activement aux activités de l'entreprise.</li>
              <li>Travailler sur un projet spécifique lié à votre domaine.</li>
              <li>Rédiger un rapport détaillé sur votre expérience.</li>
            </ol>
          </section>

          {/* Report Submission Section */}
          <section className="report-section">
            <h2>📤 Soumettre votre rapport</h2>
            <p>
              Une fois le stage terminé, utilisez le bouton ci-dessous pour
              télécharger votre rapport de stage :
            </p>
            <button className="upload-btn">
              <a href="/submit-report">Télécharger le rapport</a>
            </button>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Semestre4;
