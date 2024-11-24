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
            date_publication: "",
            heur_pub: "",
            type: "",
            auteur_id: ""
        },
        validate: (values) => {
            let errors = {};

            if (!values.titre) {
                errors.titre = "Please enter title";
            } else if (values.titre.length < 5) {
                errors.titre = "Title shouldn't be less than 5 characters";
            } else if (values.titre.length > 50) {
                errors.titre = "Title shouldn't be more than 50 characters";
            }

            if (!values.description) {
                errors.description = "Please enter description";
            }

            if (!values.date_publication) {
                errors.date_publication = "Please enter publication date";
            }

            if (!values.heur_pub) {
                errors.heur_pub = "Please enter publication time";
            }

            if (!values.type) {
                errors.type = "Please select a type";
            }

            if (!values.auteur_id) {
                errors.auteur_id = "Please enter author ID";
            }

            return errors;
        },

        onSubmit: async (values) => {
            try {
                setLoading(true);
                await axios.put(`https://63a9bccb7d7edb3ae616b639.mockapi.io/users/${params.id}`, values);
                setLoading(false);
                navigate("/portal/user-list");
            } catch (error) {
                console.log(error);
                setLoading(false);
            }
        }
    });

    return (
        <>
            <h3>Edit TP - Id : {params.id}</h3>
            <div className='container'>
                <form onSubmit={myFormik.handleSubmit}>
                    <div className='row'>
                        <div className="col-lg-6">
                            <label>Title</label>
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
                            <label>Publication Date</label>
                            <input name='date_publication' value={myFormik.values.date_publication} onChange={myFormik.handleChange} type="date"
                                className={`form-control ${myFormik.errors.date_publication ? "is-invalid" : ""}`} />
                            <span style={{ color: "red" }}>{myFormik.errors.date_publication}</span>
                        </div>

                        <div className="col-lg-4">
                            <label>Publication Time</label>
                            <input name='heur_pub' value={myFormik.values.heur_pub} onChange={myFormik.handleChange} type="time"
                                className={`form-control ${myFormik.errors.heur_pub ? "is-invalid" : ""}`} />
                            <span style={{ color: "red" }}>{myFormik.errors.heur_pub}</span>
                        </div>

                        <div className="col-lg-4">
                            <label>Type</label>
                            <select name='type' value={myFormik.values.type} onChange={myFormik.handleChange}
                                className={`form-control ${myFormik.errors.type ? "is-invalid" : ""}`}>
                                <option value="">----Select----</option>
                                <option value="news">News</option>
                                <option value="article">Article</option>
                                <option value="blog">Blog</option>
                            </select>
                            <span style={{ color: "red" }}>{myFormik.errors.type}</span>
                        </div>

                        <div className="col-lg-4">
                            <label>Author ID</label>
                            <input name='auteur_id' value={myFormik.values.auteur_id} onChange={myFormik.handleChange} type="text"
                                className={`form-control ${myFormik.errors.auteur_id ? "is-invalid" : ""}`} />
                            <span style={{ color: "red" }}>{myFormik.errors.auteur_id}</span>
                        </div>

                        <div className='col-lg-4 mt-3'>
                            <input disabled={isLoading} type="submit" value={isLoading ? "Updating..." : "Update"} className='btn btn-primary' />
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
}

export default  TPedit ;
