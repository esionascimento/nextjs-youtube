import React, { FC } from "react"
import Head from "next/head"
import { styled } from "@mui/material/styles"
import TopBar from "./TopBar/TopBar"
import NavBar from "./NavBar/NavBar"

interface Props {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  children: any
  title: string
}

const Root = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  display: "flex",
  height: "100vh",
  overflow: "hidden",
  width: "100vw"
}))

const Wrapper = styled("div")(({ theme }) => ({
  display: "flex",
  flex: "1 1 auto",
  overflow: "hidden",
  paddingTop: 56,
  [theme.breakpoints.up("md")]: {
    paddingLeft: 256
  }
}))

const ContentContainer = styled("div")({
  display: "flex",
  flex: "1 1 auto",
  overflow: "hidden"
})

const Content = styled("div")({
  flex: "1 1 auto",
  height: "100%",
  overflow: "auto"
})

const Layout: FC<Props> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Root>
        <TopBar />
        <NavBar />
        <Wrapper>
          <ContentContainer>
            <Content>{children}</Content>
          </ContentContainer>
        </Wrapper>
      </Root>
    </>
  )
}

export default Layout
