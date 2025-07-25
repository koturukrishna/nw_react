import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useAddUserMutation } from "../../services/jsonplaceholder";

const AddUser = () => {
  const [addNewUser] = useAddUserMutation();

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-6 text-center">Add User</h2>
      <Formik
        initialValues={{ name: "", email: "" }}
        validate={(values) => {
          const errors = {};
          if (!values.name) {
            errors.name = "Required";
          }
          if (!values.email) {
            errors.email = "Required";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Invalid email address";
          }
          return errors;
        }}
        onSubmit={(values, { resetForm }) => {
          // handle submit logic here
          alert(JSON.stringify(values, null, 2));
          addNewUser(values)
            .unwrap()
            .then((response) => {
              console.log("User added successfully:", response);
            })
            .catch((error) => {
              console.error("Error adding user:", error);
            });
          resetForm();
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <div className="mb-4">
              <label className="block mb-1 font-medium" htmlFor="name">
                Name
              </label>
              <Field
                type="text"
                name="name"
                id="name"
                className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
              />
              <ErrorMessage
                name="name"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-1 font-medium" htmlFor="email">
                Email
              </label>
              <Field
                type="email"
                name="email"
                id="email"
                className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
            >
              Add
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default AddUser;
