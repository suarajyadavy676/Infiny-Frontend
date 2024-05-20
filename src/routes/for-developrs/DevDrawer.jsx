import React from "react";
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

function DevDrawer() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

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
            <p className="my-4 text-lg hover:font-bold cursor-pointer">Logout</p>
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
