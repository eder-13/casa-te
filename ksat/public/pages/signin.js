import  React  from "react";
import Container from "../components/container";
import Head from "next/head"
const SignIn = () =>{
    return(
      <div>
      <Head>
      <title>KSA-TE | Sign In </title>
    </Head>
        <Container>
            
            <style jsx>
              {
                ` .first-block {
                  background-image: url("/anne-nygard-81GZnKZaWxs-unsplash.jpg");
                  background-repeat: no-repeat;
                  background-size: 100% 100%;
                  background-attachment: scroll;
                }

                `
              }
            </style>
            <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8 first-block">
              <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <h2 className="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-200">
                  Sign in to your account
                </h2>
              </div>
              <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                <div className="bg-transparent py-8 px-4 shadow sm:rounded-lg sm:px-10">
                  <form action="#" method="POST">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium leading-5 text-gray-300">
                        Email address
                      </label>
                      <div className="mt-1 rounded-md shadow-sm">
                        <input id="email" type="email" required
                          className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5" />
                      </div>
                    </div>
                    <div className="mt-6">
                      <label htmlFor="password" className="block text-sm font-medium leading-5 text-gray-300">
                        Password
                      </label>
                      <div className="mt-1 rounded-md shadow-sm">
                        <input id="password" type="password" required
                          className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5" />
                      </div>
                    </div>
                    <div className="mt-6 flex items-center justify-between">
                      <div className="flex items-center">
                        <input id="remember_me" type="checkbox"
                          className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out" />
                        <label htmlFor="remember_me" className="ml-2 block text-sm leading-5 text-gray-300">
                          Remember me
                        </label>
                      </div>
                      <div className="text-sm leading-5">
                        <a href="#"
                          className="font-medium text-gray-300 hover:text-gray-400 focus:outline-none underline transition ease-in-out duration-150">
                          Forgot your password?
                        </a>
                      </div>
                    </div>
                    <div className="mt-6">
                      <span className="block w-full rounded-md shadow-sm">
                        <button type="submit"
                          className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-gray-800 hover:bg-gray-500 focus:outline-none focus:border-gray-800 focus:shadow-outline-indigo active:bg-gray-700 transition duration-150 ease-in-out">
                          Sign in
                        </button>
                      </span>
                    </div>
                  </form>
                  <div className="mt-6">
                    <div className="relative">
                      <div className="relative flex justify-center text-sm leading-5">
                        <span className="px-2 text-gray-300 font-bold">
                          Or continue with
                        </span>
                      </div>
                    </div>
                    <div className="mt-6 grid grid-cols-3 gap-3">
                      <div>
                        <span className="w-full inline-flex rounded-md shadow-sm">
                          <button type="button"
                            className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md bg-white text-sm leading-5 font-medium text-gray-500 hover:opacity-75 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue transition duration-150 ease-in-out"
                            aria-label="Sign in with Facebook">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd"
                                d="M20 10c0-5.523-4.477-10-10-10S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10z"
                                clipRule="evenodd" />
                            </svg>
                          </button>
                        </span>
                      </div>
                      <div>
                        <span className="w-full inline-flex rounded-md shadow-sm">
                          <button type="button"
                            className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md bg-white text-sm leading-5 font-medium text-gray-500 hover:opacity-75 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue transition duration-150 ease-in-out"
                            aria-label="Sign in with Twitter">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                              <path
                                d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                            </svg>
                          </button>
                        </span>
                      </div>
                      <div>
                        <span className="w-full inline-flex rounded-md shadow-sm">
                          <button type="button"
                            className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md bg-white text-sm leading-5 font-medium text-gray-500 hover:opacity-75 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue transition duration-150 ease-in-out"
                            aria-label="Sign in with Google">

                            <svg className="w-5 h-5" viewBox="0 0 172 172" fill="currentColor">
                              <g fill="#95a5a6">
                                <path
                                  d="M82.41667,77.04167v17.91667c0,2.967 2.40442,5.375 5.375,5.375h38.73225c-1.78808,5.074 -4.50067,9.66783 -7.90125,13.63458l21.61825,18.73725c10.82883,-12.55958 17.42575,-28.86017 17.42575,-46.70517c0,-2.967 -0.22933,-6.04867 -0.72383,-9.68217c-0.36192,-2.66242 -2.63733,-4.65117 -5.32483,-4.65117h-63.82633c-2.97058,0 -5.375,2.408 -5.375,5.375zM45.193,99.47692c-1.40467,-4.24267 -2.193,-8.76842 -2.193,-13.47692c0,-4.7085 0.78833,-9.23425 2.193,-13.47692l-23.49592,-17.96683c-4.66908,9.50658 -7.36375,20.15267 -7.36375,31.44375c0,11.29108 2.69467,21.93717 7.36733,31.44375zM110.59958,121.24208c-7.01975,4.90558 -15.52658,7.75792 -24.59958,7.75792c-15.093,0 -28.36925,-7.83317 -36.04475,-19.6295l-22.79717,17.43292c12.95733,18.62617 34.48242,30.86325 58.84192,30.86325c17.802,0 34.07033,-6.56467 46.61558,-17.34333zM134.42875,33.31425c-13.2655,-12.24067 -30.4655,-18.98092 -48.42875,-18.98092c-24.3595,0 -45.88458,12.23708 -58.84192,30.86683l22.79717,17.43292c7.6755,-11.79992 20.95175,-19.63308 36.04475,-19.63308c10.54933,0 20.69733,3.87358 28.5735,10.90408c2.12492,1.89917 5.36783,1.806 7.38167,-0.21142l12.63125,-12.62767c1.03558,-1.032 1.60175,-2.44742 1.57308,-3.90942c-0.02867,-1.462 -0.65575,-2.84875 -1.73075,-3.84133z" />
                              </g>
                            </svg>

                          </button>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex justify-center text-gray-300"> 
                  <h3 className="px-1">Don't have an account?</h3>
                  <a href="/signup" className="underline font-bold hover:text-gray-400 focus:outline-none underline transition ease-in-out duration-150">Sign Up</a>
                </div>
                
              </div>
            </div>
        </Container>
        </div>
    )
}

export default SignIn;