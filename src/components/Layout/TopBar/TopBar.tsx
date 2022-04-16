import { styled } from "@mui/material/styles"
import { Box, AppBar, Toolbar, Paper, InputBase, IconButton, Button } from "@mui/material"
import {
  Menu as MenuIcon,
  Search as SearchIcon,
  Apps as AppsIcon,
  MoreVert as MoreVertIcon,
  AccountCircle,
  KeyboardVoice as KeyboardVoiceIcon
} from "@mui/icons-material"

const SAppBar = styled(AppBar)(({ theme }) => ({
  boxShadow: "none",
  zIndex: theme.zIndex.drawer + 1,
  backgroundColor: theme.palette.background.default,
  ".css-1pcbcjz-MuiToolbar-root": {
    minHeight: 56
  }
}))

const SToolbar = styled(Toolbar)({
  display: "flex",
  height: 56,
  alignItems: "center",
  justifyContent: "space-between"
})

const SImg = styled("img")(({ theme }) => ({
  cursor: "pointer",
  height: 18,
  marginLeft: theme.spacing(3)
}))

const SInput = styled(InputBase)({
  flex: 1
})

const TopBar = () => {
  return (
    <SAppBar color="default">
      <SToolbar>
        <Box display="flex" alignItems="center">
          <MenuIcon />
          <SImg src="./new-youtube-logo.svg" alt="logo" />
        </Box>
        <Box
          alignItems="center"
          margin="0 5px"
          sx={{ display: { xs: "none", sm: "flex" } }}
        >
          <Paper
            component="form"
            sx={{
              padding: "2px 4px",
              display: "flex",
              alignItems: "center",
              width: {
                xs: "auto", // theme.breakpoints.up('xs')
                sm: "auto", // theme.breakpoints.up('sm')
                md: 450, // theme.breakpoints.up('md')
                lg: 700, // theme.breakpoints.up('lg')
                xl: 700 // theme.breakpoints.up('xl')
              },
              height: 30
            }}
          >
            <SInput
              placeholder="Pesquisar"
              inputProps={{ "aria-label": "search google maps" }}
            />
            <IconButton type="submit" aria-label="search">
              <SearchIcon />
            </IconButton>
          </Paper>
          <IconButton>
            <KeyboardVoiceIcon />
          </IconButton>
        </Box>
        <Box display="flex">
          <IconButton>
            <AppsIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
          {/* <Button color="secondary" variant="outlined" startIcon={<AccountCircle />}
            Fazer Login
          </Button> */}
          <Button variant="outlined" startIcon={<AccountCircle />} color="secondary">
            Fazer Login
          </Button>
        </Box>
      </SToolbar>
    </SAppBar>
  )
}

export default TopBar
