import { styled } from "@mui/system"

export const StatWrapper = styled("div")(
  ({ theme }) => `
  background-color: ${theme.palette.background.paper};
  display: flex;
  height: 100vh;
  overflow: hidden;
  width: 100vw;
`
)

export const Wrapper = styled("div")(
  ({ theme }) => `
  display: flex;
  flex: 1 1 auto;
  overflow: hidden;
  padding-top: 64;
  padding-left: 256;
  ${theme.breakpoints.up("lg")}: {
    border: 2px solid red;
  }
`
)

export const ContentContainer = styled("div")`
  display: flex;
  flex: 1 1 auto;
  overflow: hidden;
`
export const Content = styled("div")`
  flex: 1 1 auto;
  height: 100%;
  overflow: auto;
`
