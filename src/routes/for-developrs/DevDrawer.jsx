import React, { useContext, useRef } from "react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import { GiHamburgerMenu } from "react-icons/gi";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../components/AuthContextProvider";

function DevDrawer() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();
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
    <>
      <button ref={btnRef} onClick={onOpen}>
        <GiHamburgerMenu className="text-2xl" />
      </button>
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>
          <p className="text-xl font-extrabold">INFINY SCHOOL</p>
          </DrawerHeader>

          <DrawerBody>
            <p className="my-4 text-lg hover:font-bold cursor-pointer">Prepare</p>
            <p className="my-4 text-lg hover:font-bold cursor-pointer">Certify</p>
            <p className="my-4 text-lg hover:font-bold cursor-pointer">Compete</p>
            <p className="my-4 text-lg hover:font-bold cursor-pointer">Apply</p>
            <p className="my-4 text-lg hover:font-bold cursor-pointer">Profile</p>
            <p className="my-4 text-lg hover:font-bold cursor-pointer">Leaderboard</p>
            <p className="my-4 text-lg hover:font-bold cursor-pointer">Bookmarks</p>
            <p className="my-4 text-lg hover:font-bold cursor-pointer">Setting</p>
            <p className="my-4 text-lg hover:font-bold cursor-pointer" onClick={handleClick}>Logout</p>
          </DrawerBody>

          <DrawerFooter>
            <button  onClick={onClose}>
              Cancel
            </button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default DevDrawer;
