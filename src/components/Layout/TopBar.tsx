import AppBar from "@mui/material/AppBar"
import Toolbar from "@mui/material/Toolbar"
import { styled } from "@mui/material/styles"
import Box from "@mui/material/Box"
import MenuIcon from "@mui/icons-material/Menu"

const SAppBar = styled(AppBar)(({ theme }) => ({
  boxShadow: "none",
  zIndex: theme.zIndex.drawer + 1,
  backgroundColor: theme.palette.background.default
}))

const SToolbar = styled(Toolbar)({
  display: "flex",
  minHeight: 56,
  alignItems: "center",
  justifyContent: "space-between"
})

const SImg = styled("img")(({ theme }) => ({
  cursor: "pointer",
  height: 18,
  marginLeft: theme.spacing(3)
}))

const TopBar = () => {
  return (
    <SAppBar color="default">
      <SToolbar>
        <Box display="flex" alignItems="center">
          <MenuIcon />
          <SImg src="./new-youtube-logo.svg" alt="logo" />
        </Box>
        <Box></Box>
        <Box></Box>
      </SToolbar>
    </SAppBar>
  )
}

export default TopBar