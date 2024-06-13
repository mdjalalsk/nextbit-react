

const Navbar = ({navs}) => {
    const navItems=<>
    {
        navs.map((item,index)=>(
            <li key={index} className={`text-lg font-semibold ${index === 0 ? 'text-blue-600' : ''}`}><a>{item}</a></li>
        ))
    }
    </>
    return (
        <div>
            <div className="navbar bg-white text-black">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24"
                                 stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                      d="M4 6h16M4 12h8m-8 6h16"/>
                            </svg>
                        </div>
                        <ul tabIndex={0}
                            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 bg-white text-black
                            w-40">
                            {navItems}
                            <li className="text-lg font-semibold "><a>Jalal</a></li>
                            <li>
                                <div className="avatar">
                                    <div className="w-12 rounded-full">
                                        <img
                                            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"/>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-3xl font-bold">CV Maker</a>
                </div>

                <div className="navbar-end">
                    <ul className="menu menu-horizontal px-1 hidden lg:flex items-center">
                        {navItems}
                        <li className="text-lg font-semibold "><a>Jalal</a></li>
                        <li>
                            <div className="avatar">
                            <div className="w-12 rounded-full">
                                    <img
                                        src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"/>
                                </div>
                            </div>
                        </li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Navbar;