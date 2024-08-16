import axios from "axios";
import React, { useContext } from "react";
import { useToast } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import { AuthContext } from "../components/AuthContextProvider";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

function Login() {
  let { setToken } = useContext(AuthContext);
  const toast = useToast();
  let navigate = useNavigate();
  console.log(`${import.meta.env.REACT_APP_API_URL}user/signIn`);

  const initialValues = { email: "", password: "" };

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email format").required("Required"),
    password: Yup.string().min(6, "Password must be at least 6 characters").required("Required"),
  });

  const onSubmit = async (values, { setSubmitting, resetForm }) => {
    console.log(values);
    try {
      // for development
      // let res = await axios.post("http://localhost:3000/user/signIn", values)
      // for production
      let res = await axios.post(
        `${import.meta.env.REACT_APP_API_URL}user/signIn`,
        values
      );
      // console.log(res);
      localStorage.setItem("token", res.data.token);
      setToken(localStorage.getItem("token"));
      resetForm();
      toast({
        title: "Login Success",
        description: `Hello, ${res.data.name}! Good to see you again.`,
        status: "success",
        duration: 9000,
        isClosable: true,
      });
      navigate("/dashboard");
    } catch (error) {
      // console.log("Error during login");
      toast({
        title: "Login Failed",
        description: "Invalid email or password. Please try again.",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Login</title>
        <meta name="description" content="Secure and seamless login to access personalized features, settings, and content tailored to enhance your user experience effectively" />
      </Helmet>
      <div className="">
        <div className="max-w-xl py-6 px-8 h-80 mt-20 bg-white rounded shadow-xl mx-auto">
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            {({ isSubmitting }) => (
              <Form method="POST">
                <div className="mb-6">
                  <label htmlFor="email" className="block text-gray-800 font-bold">
                    Email:
                  </label>
                  <Field
                    type="email"
                    name="email"
                    id="email"
                    autoComplete="username"
                    placeholder="@email"
                    className="w-full border border-gray-300 py-2 pl-3 rounded mt-2 outline-none focus:ring-indigo-600 :ring-indigo-600"
                  />
                  <ErrorMessage name="email" component="div" className="text-red-600 text-sm mt-1" />
                </div>
                <div>
                  <label htmlFor="password" className="block text-gray-800 font-bold">
                    Password:
                  </label>
                  <Field
                    type="password"
                    name="password"
                    id="password"
                    autoComplete="current-password"
                    placeholder="@password"
                    className="w-full border border-gray-300 py-2 pl-3 rounded mt-2 outline-none focus:ring-indigo-600 :ring-indigo-600"
                  />
                  <ErrorMessage name="password" component="div" className="text-red-600 text-sm mt-1" />
                  <a
                    href="#"
                    className="text-sm font-thin text-gray-800 hover:underline mt-2 inline-block hover:text-indigo-600"
                  >
                    Forget Password
                  </a>
                </div>
                <button
                  type="submit"
                  className="cursor-pointer py-2 px-4 block mt-6 bg-indigo-500 text-white font-bold w-full text-center rounded"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Logging in..." : "Login"}
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </>
  );
}

export default Login;
