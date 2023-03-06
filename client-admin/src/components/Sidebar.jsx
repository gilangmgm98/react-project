import { Link, Outlet, useNavigate } from "react-router-dom";

export default function Sidebar() {
  const navigate = useNavigate();

  const logoutHandler =  () => {
    localStorage.clear();
    navigate("/");
  }
  return (
    <>
      <div className="flex">
        <div className="bg-[#ffd4b2] flex flex-col w-64 h-screen px-4 py-8 overflow-y-auto border-r">
          <Link to="/">
            {/* <h2 className="text-3xl font-semibold text-center text-red-50">
              Admin Panel
            </h2> */}
            <img src="https://www.awrestaurants.co.id/assets/images/logo.png" alt="" />
          </Link>

          <div className="flex flex-col justify-between mt-6">
            <aside>
              <ul>
                <Link to="/">
                  <li>
                    <a
                      className="flex items-center px-4 py-2 text-gray-600  rounded-md hover:bg-gray-200"
                      href="#"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                        />
                      </svg>

                      <span className="mx-4 font-medium">Food List</span>
                    </a>
                  </li>
                </Link>

                <Link to="/categories">
                  <li>
                    <a
                      className="flex items-center px-4 py-2 text-gray-600  rounded-md hover:bg-gray-200"
                      href="#"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                        />
                      </svg>

                      <span className="mx-4 font-medium">Category List</span>
                    </a>
                  </li>
                </Link>

                <Link to="/addfood">
                  <li>
                    <a
                      className="flex items-center px-4 py-2 mt-5 text-gray-600 rounded-md hover:bg-gray-200"
                      href="#"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>

                      <span className="mx-4 font-medium">Food</span>
                    </a>
                  </li>
                </Link>

                <Link to="/addcategory">
                  <li>
                    <a
                      className="flex items-center px-4 py-2 mt-5 text-gray-600 rounded-md hover:bg-gray-200"
                      href="#"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>

                      <span className="mx-4 font-medium">Category</span>
                    </a>
                  </li>
                </Link>

                <Link to="/register">
                  <li>
                    <a
                      className="flex items-center px-4 py-2 mt-5 text-gray-600 rounded-md hover:bg-gray-200"
                      href="#"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z"
                        />
                      </svg>

                      <span className="mx-4 font-medium">Add Admin</span>
                    </a>
                  </li>
                </Link>

                <Link to="/login">
                  <li>
                    <a
                      className="flex items-center px-4 py-2 mt-5 text-gray-600 rounded-md hover:bg-gray-200"
                      href="#"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
                        />
                      </svg>

                      <span onClick={logoutHandler} className="mx-4 font-medium">LogOut</span>
                    </a>
                  </li>
                </Link>
              </ul>
            </aside>
          </div>
        </div>
        <div className="w-full h-full p-4 m-8">
          <Outlet />
          {/* <div className="flex items-center justify-center">
                    </div> */}
        </div>
      </div>
    </>
  );
}
