import React from "react";
import {
  DrawerBody,
  Drawer,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosArrowRoundForward } from "react-icons/io";
import { Link } from "react-router-dom";

function Hamburger() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  return (
    <div>
      <Button ref={btnRef} colorScheme="white" onClick={onOpen}>
      <GiHamburgerMenu className="text-black text-2xl" />
      </Button>
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
            <img className="mx-auto" src="/infiny.jpg" alt="logo" width={60} />
          </DrawerHeader>

          <DrawerBody>
            {/* <Input placeholder="Type here..." /> */}
            <h1 className="my-6 text-lg">Products</h1>
            <h1 className="my-6 text-lg">Solutions</h1>
            <h1 className="my-6 text-lg">Resources</h1>
            <h1 className="my-6 text-lg">Pricing</h1>
            <h1 className="my-6 text-lg">For Candiadtes</h1>
            <h1 className="my-6 text-lg">Contact Us</h1>
            <button className="w-[90%] mx-auto my-4 py-1 font-bold border-b-2"> <Link to='/login'>Login </Link> <IoIosArrowRoundForward className="inline text-2xl"/></button>
            <button className="w-[90%] mx-auto bg-slate-200 my-4 py-1 font-bold">Request demo</button>
            <button className="w-[90%] mx-auto my-4 bg-green-500 text-white font-bold"> <Link to="/register">Sign up</Link> </button>
          </DrawerBody>

          <DrawerFooter>
            {/* <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="blue">Save</Button> */}
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  );
}

export default Hamburger;
