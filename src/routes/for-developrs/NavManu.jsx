import React from "react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import { TbUser } from "react-icons/tb";
import { GoChevronDown } from "react-icons/go";

function NavManu() {
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
            <span className="bg-blue-500 text-white py-2 px-8">Hackos: 270</span>
          </div>
            <MenuItem> Profile</MenuItem>
            <MenuItem>Dark Mode</MenuItem>
            <MenuItem>Leaderboard</MenuItem>
            <MenuItem>Settings</MenuItem>
            <MenuItem>Bookmarks</MenuItem>
            <MenuItem>Network</MenuItem>
            <MenuItem>Submissions</MenuItem>
            <MenuItem>Administration</MenuItem>
            <MenuItem>Logout</MenuItem>
          </div>
        </MenuList>
      </Menu>
    </div>
  );
}

export default NavManu;
