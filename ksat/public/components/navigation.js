import Head from "next/head"

const Navigation= () => {
        return(        
            <div>

            
                <header className="border-b md:flex md:items-center md:justify-between p-4 pb-0 shadow-lg md:pb-4">
                    {/* Logo text */}
                    <div className="flex items-center justify-between mb-4 md:mb-0">
                        <h1 className="leading-none text-2xl text-grey-darkest">
                            <a className="no-underline text-grey-darkest hover:text-black flex items-center" href="/">
                                <span className="font-bold">K-S</span>
                                <img src="/home_floor_a_icon_135506.ico" alt="casa logo" className="w-8" />
                                <span className="font-bold">-TE</span>
                            </a>
                        </h1>

                        {/* Hamburger Menu*/}
                        <div className="px-4 cursor-pointer md:hidden" id="hamburger">
                            <svg className="w-8 h-8 duration-500 transform" fill="none" id="toggle" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
                        </div>
                        {/*END Hamburger Menu*/}
                    </div>
                    {/* END Logo text  */}

                    {/* Global navigation */}
                    <nav>
                        <ul className="list-reset md:flex md:items-center hidden text-lg" id="menu">
                            <li className="md:ml-4">
                                <a className="block no-underline hover:underline py-2 text-grey-darkest hover:text-black md:border-none md:p-0"
                                    href="/">
                                    Home
                                </a>
                            </li>
                            <li className="md:ml-4">
                                <a className="border-t block no-underline hover:underline py-2 text-grey-darkest hover:text-black md:border-none md:p-0"
                                    href="/property">
                                    Properties
                                </a>
                            </li>
                            <li className="md:ml-4">
                                <a className="border-t block no-underline hover:underline py-2 text-grey-darkest hover:text-black md:border-none md:p-0"
                                    href="/user">
                                    My User
                                </a>
                            </li>
                        </ul>
                    </nav>
                    {/* END Global navigation */}
                </header>
        
              <script src="/js/hamburger-controller.js"></script>
                
            </div>    
        )
}

export default Navigation;