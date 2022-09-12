import React from "react";
import { useFormik } from "formik";
import { v4 as uuidv4 } from "uuid";
export default function Form({ users, setUsers }) {
    const formik = useFormik({
        initialValues: {
            id: "",
            name: "",
            email: "",
            website: "",
            image: "",
            gender: "",
            skills: [],
        },
        onSubmit: (user) => {
            console.log("Form data", user);
            user.id = uuidv4();
            if (user.image === "") {
                user.image =
                    "https://statinfer.com/wp-content/uploads/dummy-user.png";
            }

            setUsers([...users, user]);
            formik.resetForm();
        },
    });

    //console.log("form values", formik.values);

    return (
        <>
            <div className="col-6">
                <form onSubmit={formik.handleSubmit}>
                    <div className="mb-3">
                        <label className="form-label">Name</label>
                        <input
                            id="name"
                            name="name"
                            type="text"
                            className="form-control"
                            onChange={formik.handleChange}
                            value={formik.values.name}
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Email address</label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            className="form-control"
                            onChange={formik.handleChange}
                            value={formik.values.email}
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Website</label>
                        <input
                            id="website"
                            name="website"
                            type="url"
                            className="form-control"
                            onChange={formik.handleChange}
                            value={formik.values.website}
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Image</label>
                        <input
                            id="image"
                            name="image"
                            type="url"
                            className="form-control"
                            onChange={formik.handleChange}
                            value={formik.values.image}
                        />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Gender</label>
                        <div className="form-check">
                            <input
                                className="form-check-input"
                                name="gender"
                                type="radio"
                                onChange={formik.handleChange}
                                value="Male"
                            />
                            <label className="form-check-label">Male</label>
                        </div>
                        <div className="form-check">
                            <input
                                className="form-check-input"
                                type="radio"
                                name="gender"
                                onChange={formik.handleChange}
                                value="Female"
                            />
                            <label className="form-check-label">Female</label>
                        </div>
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Skills</label>
                        <div className="form-check">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                onChange={formik.handleChange}
                                value="Java"
                                id="skills"
                                name="skills"
                            />
                            <label
                                className="form-check-label"
                                htmlFor="flexCheckDefault"
                            >
                                Java
                            </label>
                        </div>
                        <div className="form-check">
                            <input
                                className="form-check-input"
                                id="skills"
                                name="skills"
                                onChange={formik.handleChange}
                                value="Python"
                                type="checkbox"
                            />
                            <label
                                className="form-check-label"
                                htmlFor="flexCheckChecked"
                            >
                                Python
                            </label>
                        </div>
                    </div>

                    <button type="submit" className="btn btn-primary">
                        Submit
                    </button>
                </form>
            </div>
        </>
    );
}
