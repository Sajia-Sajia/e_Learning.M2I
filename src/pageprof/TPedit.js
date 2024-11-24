import axios from 'axios';
import { useFormik } from 'formik';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function TPedit() {
    const params = useParams();
    const [isLoading, setLoading] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        getUserData();
    }, []);

    let getUserData = async () => {
        try {
            const user = await axios.get(`https://63a9bccb7d7edb3ae616b639.mockapi.io/users/${params.id}`);
            myFormik.setValues(user.data);
            setLoading(false);
        } catch (error) {
            console.log(error);
        }
    };

    const myFormik = useFormik({
        initialValues: {
            titre: "",
            description: "",
            professeurId: "",
            module: "",
            date_publication: "",
            heur_pub: ""
        },
        validate: (values) => {
            let errors = {};

            if (!values.titre) {
                errors.titre = "Veuillez entrer le titre";
            } else if (values.titre.length < 5) {
                errors.titre = "Le titre ne doit pas comporter moins de 5 lettres.";
            } else if (values.titre.length > 50) {
                errors.titre = "Le titre ne doit pas comporter plus de 50 lettres.";
            }

            if (!values.description) {
                errors.description = "Veuillez entrer la description";
            }

            if (!values.date_publication) {
                errors.date_publication = "Veuillez entrer la date de la publication";
            }

            if (!values.heur_pub) {
                errors.heur_pub = "Veuillez entrer l'heure de la publication";
            }

            if (!values.module) {
                errors.module = "Ce champs est obligatoire";
            }

            if (!values.professeurId) {
                errors.professeurId = "Ce champs est obligatoire";
            }

            return errors;
        },

        onSubmit: async (values) => {
            try {
                setLoading(true);
                await axios.put(`https://63a9bccb7d7edb3ae616b639.mockapi.io/users/${params.id}`, values);
                setLoading(false);
                navigate("/portalprof/tp-list");
            } catch (error) {
                console.log(error);
                setLoading(false);
            }
        }
    });

    return (
        <>
            <h3>Modification de TP - ID : {params.id}</h3>
            <div className='container'>
                <form onSubmit={myFormik.handleSubmit}>
                    <div className='row'>
                        <div className="col-lg-6">
                            <label>Titre</label>
                            <input name='titre' value={myFormik.values.titre} onChange={myFormik.handleChange} type="text"
                                className={`form-control ${myFormik.errors.titre ? "is-invalid" : ""}`} />
                            <span style={{ color: "red" }}>{myFormik.errors.titre}</span>
                        </div>

                        <div className="col-lg-6">
                            <label>Description</label>
                            <textarea name='description' value={myFormik.values.description} onChange={myFormik.handleChange}
                                className={`form-control ${myFormik.errors.description ? "is-invalid" : ""}`}></textarea>
                            <span style={{ color: "red" }}>{myFormik.errors.description}</span>
                        </div>

                        <div className="col-lg-4">
                            <label>Date de la publication</label>
                            <input name='date_publication' value={myFormik.values.date_publication} onChange={myFormik.handleChange} type="date"
                                className={`form-control ${myFormik.errors.date_publication ? "is-invalid" : ""}`} />
                            <span style={{ color: "red" }}>{myFormik.errors.date_publication}</span>
                        </div>

                        <div className="col-lg-4">
                            <label>Heure de la publication</label>
                            <input name='heur_pub' value={myFormik.values.heur_pub} onChange={myFormik.handleChange} type="time"
                                className={`form-control ${myFormik.errors.heur_pub ? "is-invalid" : ""}`} />
                            <span style={{ color: "red" }}>{myFormik.errors.heur_pub}</span>
                        </div>

                        <div className="col-lg-4">
                            <label>ID de professeur</label>
                            <input name='professeurId' value={myFormik.values.professeurId} onChange={myFormik.handleChange} type="text"
                                className={`form-control ${myFormik.errors.professeurId ? "is-invalid" : ""}`} />
                            <span style={{ color: "red" }}>{myFormik.errors.professeurId}</span>
                        </div>

                        <div className="col-lg-4">
                            <label>Module</label>
                            <input name='module' value={myFormik.values.module} onChange={myFormik.handleChange} type="text"
                                className={`form-control ${myFormik.errors.module ? "is-invalid" : ""}`} />
                            <span style={{ color: "red" }}>{myFormik.errors.module}</span>
                        </div>

                        <div className='col-lg-4 mt-3'>
                            <input disabled={isLoading} type="submit" value={isLoading ? "Updating..." : "Modifier"} className='btn btn-primary' />
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
}

export default TPedit;
