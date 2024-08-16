import React, { useContext } from "react";
import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import { TbUser } from "react-icons/tb";
import { GoChevronDown } from "react-icons/go";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../components/AuthContextProvider";

function NavManu() {
  let navigate = useNavigate();
  const { setToken } = useContext(AuthContext);
  function handleClick() {
    // Clear local storage
    localStorage.clear();

    // Clear authentication context state
    setToken(null); // or use a function to clear the context state

    // Navigate to the home page or login page
    navigate("/");
  }
  return (
    <div>
      <Menu>
        <MenuButton>
          <TbUser className="text-black inline p-1 text-3xl bg-white rounded-full text-right" />
          <GoChevronDown className="inline text-xl ml-2" />
        </MenuButton>
        <MenuList>
          <div className="text-black">
            <div className="text-center my-4">
              <span className="bg-blue-500 text-white py-2 px-8">
                Hackos: 270
              </span>
            </div>
            <MenuItem> Profile</MenuItem>
            <MenuItem>Dark Mode</MenuItem>
            <MenuItem>Leaderboard</MenuItem>
            <MenuItem>Settings</MenuItem>
            <MenuItem>Bookmarks</MenuItem>
            <MenuItem>Network</MenuItem>
            <MenuItem>Submissions</MenuItem>
            <MenuItem>Administration</MenuItem>
            <MenuItem onClick={handleClick}>Logout</MenuItem>
          </div>
        </MenuList>
      </Menu>
    </div>
  );
}

export default NavManu;
