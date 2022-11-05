import Logo from "../assets/images/logo.svg"
import BurgerMenu from "../assets/images/icon-menu.svg"
import CloseMenu from "../assets/images/icon-menu-close.svg"
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
} from '@chakra-ui/react'
import { useRef } from "react"
function Navigation() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = useRef()
  return (
    <nav className="flex justify-between items-center font-inter">
      <img src={Logo} alt="logo image" className="w-16"/>
      <div className="flex md:hidden">
        <a href="#" onClick={onOpen}><img src={BurgerMenu} alt="Burger Menu" className="w-12"/></a>
      </div>
      <div className="hidden md:flex space-x-16 text-xl text-DarkgrayishBlue">
        <a href="#" className="hover:text-SoftRed">Home</a>
        <a href="#" className="hover:text-SoftRed">New</a>
        <a href="#" className="hover:text-SoftRed">Popular</a>
        <a href="#" className="hover:text-SoftRed">Trending</a>
        <a href="#" className="hover:text-SoftRed">Categories</a>
      </div>
      <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        size="sm"
      >
        <DrawerOverlay />
        <DrawerContent>

          <DrawerBody className="flex flex-col">
          <a href="#" className="self-end"><img src={CloseMenu} alt="Close Menu Icon" onClick={onClose} className="w-12"/></a>
        <div className="flex flex-col space-y-8 text-2xl text-VeryDarkBlue mt-44">
        <a href="#" className="hover:text-SoftRed">Home</a>
        <a href="#" className="hover:text-SoftRed">New</a>
        <a href="#" className="hover:text-SoftRed">Popular</a>
        <a href="#" className="hover:text-SoftRed">Trending</a>
        <a href="#" className="hover:text-SoftRed">Categories</a>
      </div>
          </DrawerBody>

        </DrawerContent>
      </Drawer>
    </nav>
  )
}

export default Navigation