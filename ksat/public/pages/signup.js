import  React  from "react";
import Container from "../components/container";
import Head from "next/head";

const SignUp =()=>{
    return(
        <div>

            <Head>
                <title>KSA-TE | Sign Up </title>
            </Head>
            <Container>
                <style jsx>
                    {
                        ` .first-block {
                            background-image: url("/rinck-content-studio-jF-8LUJMrdk-unsplash1.jpg");
                            background-repeat: no-repeat;
                            background-size: 100% 100%;
                            background-attachment: scroll;
                        }

                        `
                    }
                </style>
                <div className="first-block bg-grey-darker min-h-screen flex flex-col">
                    <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                        <div className="bg-white px-6 py-8 rounded shadow-lg text-black w-full m-6">
                            <h1 className="mb-8 text-3xl font-bold text-center">Sign Up</h1>
                            <input type="text" className="block border border-grey-light w-full p-3 rounded mb-4"
                                name="fullname" placeholder="Full Name" />
                            <input type="text" className="block border border-grey-light w-full p-3 rounded mb-4"
                                name="email" placeholder="Email" />
                            <input type="password" className="block border border-grey-light w-full p-3 rounded mb-4"
                                name="password" placeholder="Password" />
                            <input type="password" className="block border border-grey-light w-full p-3 rounded mb-4"
                                name="confirm_password" placeholder="Confirm Password" />
                            <input type="text" className="block border border-grey-light w-full p-3 rounded mb-4"
                                name="phone_number" placeholder="Phone Number" />
                            <input type="text" className="block border border-grey-light w-full p-3 rounded mb-4"
                                name="other_way" placeholder="Another way to contact you (optional)" />
                            <button type="submit"
                                className="w-full text-center py-3 rounded bg-white border-2 font-bold border-black text-black hover:border-gray-700 hover:text-gray-700 focus:outline-none my-1">Create
                                Account</button>
                            <div className="text-center text-sm text-grey-dark mt-4">
                                By signing up, you agree to the&nbsp;
                                <a className="underline border-b border-grey-dark text-grey-dark hover:text-gray-800"
                                    href="#">
                                    Terms of Service
                                </a> and&nbsp;
                                <a className="underline border-b border-grey-dark text-grey-dark hover:text-gray-800"
                                    href="#">
                                    Privacy Policy
                                </a>
                            </div>
                        </div>
                        <div className="text-grey-dark mt-6">
                            Already have an account?&nbsp;
                            <a className="underline hover:text-gray-800" href="/signin">
                                Sign in
                            </a>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}
export default SignUp;