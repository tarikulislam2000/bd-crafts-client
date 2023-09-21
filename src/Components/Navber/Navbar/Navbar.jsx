import { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import {

  FaHouse,
  FaSistrix,

} from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import LeftSideBar from "../../../Pages/Home/LeftSideBar/LeftSideBar";
import { useSearchContext } from "../../../Provider/ApiContestProvider";
import { AuthContext } from "../../../Provider/AuthProvider";
import Container from "../../../Utilities/Container";

const Navbar = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const { user, logOut } = useContext(AuthContext);
  const { handleSearchData } = useSearchContext();

  const [searchText, setSearchText] = useState("");
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    setLoading(true);
    fetch(`${import.meta.env.VITE_URL}/allposts`)
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        setPosts(data);
      });
  }, []);
  const handleSearch = () => {
    if (searchText === null || searchText === Number || searchText === "") {
      return toast.error(" please search valid keyword");
    }
    setLoading(true);

    fetch(`https://bd-crafts-server.vercel.app/search/${searchText}`)
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        handleSearchData(data);
        console.log(data);
        navigate("/searchData");
      });
  };
  if (loading) {
    return <progress className="progress w-56"></progress>;
  }

  const navLinkItem = (
    <>
      <li className="font-bold text-xl">
        <Link>
          <FaHouse size={25} className="text-white" />
        </Link>
      </li>
      {/* <li className="font-bold text-xl">
        <div className="relative">
          <div className="">
            <Link to="/findFriend">
              <FaUserLarge size={25} className="text-white" />
            </Link>
          </div>
        </div>
      </li> */}

      <li className="font-bold text-xl">
        <div className="relative">
          <div className="">
          
          </div>
        </div>
      </li>
    </>
  );

  return (
    <>
      <div className="bg-[#327ee0] sticky top-0 z-50">
        <Container>
          <div className="navbar ">
            <div className="navbar-start">
              <div className="dropdown">
                <label tabIndex={0} className="btn btn-ghost lg:hidden">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h8m-8 6h16"
                    />
                  </svg>
                </label>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                >
                  <div className="bg-[#0a6defd0]">
                    <LeftSideBar></LeftSideBar>
                  </div>
                </ul>
              </div>
              <Link to="/">
                <span className="text-[#FFF] md:text-[33px] text-[20px] font-normal">
                  bdCrafts
                </span>
              </Link>
              <div className="relative ms-2 lg:inline-block hidden">
                <input
                  onChange={(event) => setSearchText(event.target.value)}
                  type="text"
                  placeholder="Search"
                  className="border rounded-2xl p-2 bg-transparent border-cyan-100  pr-16 text-white::placeholder  placeholder-white w-full"
                  required
                />
                <button
                  onClick={handleSearch}
                  className="absolute  bg-transparent hover:none  top-2 rounded-2xl right-0 "
                >
                  <FaSistrix className="w-16 text-cyan-100 h-8" />
                </button>
              </div>
            </div>

            <div className="navbar-end">
              <ul className="menu menu-horizontal px-1 hidden lg:flex">
                {navLinkItem}
              </ul>
              <div className="dropdown dropdown-end">
                {user ? (
                  <>
                    <label
                      tabIndex={0}
                      className="btn btn-ghost btn-circle avatar"
                    >
                      <div className="w-10 rounded-full">
                        <img src={user?.photoURL} title={user?.displayName} />
                      </div>
                    </label>
                  </>
                ) : (
                  <>
                    <label
                      tabIndex={0}
                      className="btn btn-ghost btn-circle avatar"
                    >
                      <div className="w-10 rounded-full">
                        <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png" />
                      </div>
                    </label>
                  </>
                )}

                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-slate-200 rounded-box w-52"
                >
                  {user ? (
                    <>
                      <Link
                        to="/profile"
                        className="px-4 py-3 hover:bg-neutral-100 transition font-semibold"
                      >
                        Profile
                      </Link>
                      <Link
                        to="/dashboard"
                        className="px-4 py-3 hover:bg-neutral-100 transition font-semibold"
                      >
                        Dashboard
                      </Link>
                      <Link
                        to="/setting"
                        className="px-4 py-3 hover:bg-neutral-100 transition font-semibold"
                      >
                        Settings & Privacy
                      </Link>
                      <div
                        onClick={() => {
                          logOut();
                          toast.success("logout successful");
                          navigate("/login");
                        }}
                        className="px-4 py-3 hover:bg-neutral-100 transition font-semibold cursor-pointer duration-1000 "
                      >
                        Logout
                      </div>
                    </>
                  ) : (
                    <>
                      <Link
                        to="/login"
                        className="px-4 py-3 hover:bg-neutral-100 transition font-semibold"
                      >
                        Login
                      </Link>
                    </>
                  )}
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Navbar;
