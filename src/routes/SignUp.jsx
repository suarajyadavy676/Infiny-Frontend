import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useToast } from "@chakra-ui/react";
import { Helmet } from "react-helmet";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useState } from "react";

function SignUp() {
  // console.log(`${import.meta.env.REACT_APP_API_URL}user/register`);
  const toast = useToast();
  let navigate = useNavigate();
  let [alResData, setAlResData] = useState("");

  // Yup validation schema
  const validationSchema = Yup.object().shape({
    username: Yup.string().required("Username is required"),
    email: Yup.string().email("Invalid email address").required("Email is required"),
    password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
    confirm_password: Yup.string()
      .oneOf([Yup.ref('password'), null], "Passwords must match")
      .required("Confirm Password is required"),
  });

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      // for development
      // let res = await axios.post(
      //   "http://localhost:3000/user/register",
      //   values
      // );
      // for production
      let res = await axios.post(
        `${import.meta.env.REACT_APP_API_URL}user/register`,
        values
      );
      console.log(res);
      if (res.data === "user already present") {
        setAlResData(res.data);
      } else {
        toast({
          title: "Account created.",
          description: "We've created your account for you.",
          status: "success",
          duration: 9000,
          isClosable: true,
        });
        resetForm();
        navigate("/login");
      }
    } catch (error) {
      console.error("Error during signup:", error.response?.data || error.message || error);
      toast({
        title: "Registration failed.",
        description: "An error occurred during registration. Please try again.",
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
        <title>SignUp</title>
        <meta
          name="description"
          content="Sign up now for exclusive benefits! Fast, secure registration process for access to premium content and personalized offers"
        />
      </Helmet>
      <div>
        <div className="flex h-screen items-center justify-center px-4 sm:px-6 lg:px-8">
          <div className="w-full max-w-md space-y-8">
            <div className="bg-white shadow-md rounded-md p-6">
              <img
                className="mx-auto h-12 w-auto"
                src="https://www.svgrepo.com/show/499664/user-happy.svg"
                alt=""
              />
              <h2 className="my-3 text-center text-3xl font-bold tracking-tight text-gray-900">
                Sign up for an account
              </h2>

              <Formik
                initialValues={{
                  username: "",
                  email: "",
                  password: "",
                  confirm_password: "",
                }}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
              >
                {({ isSubmitting }) => (
                  <Form className="space-y-6">
                    <div>
                      <label
                        htmlFor="username"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Username
                      </label>
                      <div className="mt-1">
                        <Field
                          name="username"
                          type="text"
                          required
                          className="px-2 py-3 mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm"
                        />
                        <ErrorMessage
                          name="username"
                          component="div"
                          className="text-red-500 text-sm"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Email
                      </label>
                      <div className="mt-1">
                        <Field
                          name="email"
                          type="email"
                          autoComplete="email"
                          required
                          className="px-2 py-3 mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm"
                        />
                        <ErrorMessage
                          name="email"
                          component="div"
                          className="text-red-500 text-sm"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="password"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Password
                      </label>
                      <div className="mt-1">
                        <Field
                          name="password"
                          type="password"
                          autoComplete="new-password"
                          required
                          className="px-2 py-3 mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm"
                        />
                        <ErrorMessage
                          name="password"
                          component="div"
                          className="text-red-500 text-sm"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="confirm_password"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Confirm Password
                      </label>
                      <div className="mt-1">
                        <Field
                          name="confirm_password"
                          type="password"
                          autoComplete="new-password"
                          required
                          className="px-2 py-3 mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm"
                        />
                        <ErrorMessage
                          name="confirm_password"
                          component="div"
                          className="text-red-500 text-sm"
                        />
                      </div>
                    </div>

                    <div>
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="flex w-full justify-center rounded-md border border-transparent bg-sky-400 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-opacity-75 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2"
                      >
                        {isSubmitting ? "Registering..." : "Register Account"}
                      </button>
                      {alResData === "" ? null : (
                        <h1 className="text-center text-red-600 text-lg">
                          {alResData}
                        </h1>
                      )}
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUp;
