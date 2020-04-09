import React from "react"
import Navbar from "../../navigation/Navbar"
import Footer from "../../molecules/Footer"

import Main from "../../organisms/Main"

const Layout = ({ props, children }) => (
  <div>
    {/*  sx={{
        flexDirection: "column",
        height: "100%",
      }}*/}

    <Navbar />
    <Main>
      {/*style={{
        flexGrow: 1,
      }}*/}

      {children}
    </Main>

    <Footer />
  </div>
)

export default Layout
