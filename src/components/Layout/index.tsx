import React, { FC } from "react"
/* import { makeStyles } from "@mui/material/styles" */
import * as S from "./styled"
import Head from "next/head"

interface Props {
  children: any;
  title: string;
}

/* const useStyles = makeStyles((theme: { palette: { background: any; }; }) => {
  root: {
    backgroundColor: theme.palette.background,
      display: "flex",
        height: "100vh",
          overflow: "hidden",
            width: "100vw"
  }
}) */

const Layout: FC<Props> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <S.StatWrapper>
        <div>Topbar</div>
        <div>navbar</div>
        <div>{children}</div>
      </S.StatWrapper>
    </>
  )
}

export default Layout