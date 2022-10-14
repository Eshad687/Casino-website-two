// components/layout.js

import Footer from "../components/Footer";
import Navbarr from "../components/Navbarr";



export default function Layout({ children }) {
  return (
    <>
      <Navbarr />
      <main>{children}</main>
      <Footer />
    </>
  )
}