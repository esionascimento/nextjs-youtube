import AppBar from "@mui/material/AppBar"
import Toolbar from "@mui/material/Toolbar"
import { styled } from "@mui/material/styles"

const SAppBar = styled(AppBar)(({ theme }) => ({
  boxShadow: "none",
  zIndex: theme.zIndex.drawer + 1,
  backgroundColor: theme.palette.background.default
}))

const TopBar = () => {
  return (
    <SAppBar color="default">
      <Toolbar>
        appBar
      </Toolbar>
    </SAppBar>
  )
}

export default TopBar