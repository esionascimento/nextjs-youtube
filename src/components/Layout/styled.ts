import { styled } from "@mui/system"

export const StatWrapper = styled("div")(
  ({ theme }) => `
  background-color: ${theme.palette.background.paper};
  display: flex;
  height: 100vh;
  overflow: hidden;
  width: 100vw;
`)

export const wrapper = styled("div")(
  ({ theme }) => `
  display: flex;
  flex: 1 1 auto;
  overflow: hidden;
  paddingTop: 64,
  [${theme.breakpoints.up("lg")}]: {
    paddingLeft: 256
  }
`)

export const contentContainer = styled("div")`
  display: flex;
  flex: 1 1 auto;
  overflow: hidden
`
export const content = styled("div")`
  flex: 1 1 auto;
  height: 100 %;
  overflow: auto;
`