import  React  from "react";
import Container from "../components/container";
import Link from "next/link"
import Head from "next/head"

const Index = () => {
    return (
      <div>
      <Head>
        <title>KSA-TE | Home </title>
      </Head>

        <Container>
        <style jsx>{`
         .first-block{
          background-image:  url("/Home-Wallpaper-7.jpg");
          background-repeat: no-repeat;
          background-size: 100% 100%;
          background-attachment: scroll;
      }
      `}</style>
          <div className="first-block">
            <header id="up" className="bg-center bg-fixed bg-no-repeat bg-center bg-cover h-screen relative">
              <div className="h-screen bg-opacity-50 bg-black flex items-center justify-center">
                <div className="mx-2 text-center">
                  <h1 className="text-gray-200 font-extrabold text-4xl xs:text-5xl md:text-6xl">
                    Welcome to Ksa-te
                  </h1>
                  <h2 className="text-gray-300 font-extrabold text-2xl xs:text-3xl md:text-4xl leading-tight">
                    The Best site to buy and sell any property
                  </h2>
                  <div className="inline-flex py-2">
                    <Link href="/property"><button 
                      className="p-2 my-5 mx-2 bg-transparent hover:bg-gray-300 hover:text-gray-800 font-bold text-gray-200 rounded border-2 border-gray-200 shadow-md transition duration-500 md:text-xl">Search
                      for a property</button></Link>

                    {/**put the link tag, (page for create) */}

                    <button
                      className="p-2 my-5 mx-2  hover:text-white hover:bg-transparent hover:border-gray-200 bg-gray-300 text-gray-800 font-bold rounded border-2 border-gray-200 shadow-md transition duration-500 md:text-xl">Sell
                      my property</button>
                  </div>
                </div>
              </div>
            </header>
          </div>
        </Container>  
        </div>
    ) 
}

export default Index;