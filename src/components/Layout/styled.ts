import { styled } from "@mui/system"


export const roots = {
  display: "flex",
  height: "100vh",
  overflow: "hidden",
  width: "100vw"
}

export const StatWrapper = styled("div")(
  ({ theme }) => `
  background-color: ${theme.palette.background.paper};
  display: flex;
  height: 100vh;
  overflow: hidden;
  width: 100vw;
`,
)