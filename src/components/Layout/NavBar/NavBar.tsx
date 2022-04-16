import { useState } from "react"
import { useRouter } from "next/router"
import {
  Drawer,
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  Avatar,
  Divider,
  Typography,
  Button,
  SvgIconTypeMap,
  ListItemButton,
} from "@mui/material"
import {
  Subscriptions,
  Home as HomeIcon,
  Whatshot,
  VideoLibrary,
  History,
  AccountCircle,
} from "@mui/icons-material"
import { styled } from "@mui/material/styles"
import { useSession } from "next-auth/react"
import { OverridableComponent } from "@mui/material/OverridableComponent"
import { primaryMenu, secondaryManu } from "./Options"

const SlistItem = styled(ListItem)({
  paddingTop: 5,
  paddingBottom: 5,
})

// using
const SdesktopDrawer = styled(Drawer)({
  width: "290px",
  top: "56px",
  height: "calc(100% - 56px)",
  borderRight: "none",
})

//using
const SBox = styled(Box)({
  width: "230px",
  marginTop: "56px",
})

const SListItemButton = styled(ListItemButton)(({ theme }) => ({
  paddingTop: 1,
  paddingBottom: 1,
  paddingLeft: theme.spacing(1),
}))

/* const Savatar = styled(Avatar)({
  cursor: "pointer",
  width: 24,
  height: 24,
}) */

//using
const SlistItemText = styled(ListItemText)({
  "& .MuiListItemText-primary": {
    fontSize: 14,
  },
})

const NavBar = () => {
  const router = useRouter()
  /* const { status } = useSession({ required: true }) */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [subscriptions, setSubscriptions] = useState([
    { id: 1, name: "Canal 1" },
    { id: 2, name: "Canal 2" },
    { id: 3, name: "Canal 3" },
    { id: 4, name: "Canal 4" },
    { id: 5, name: "Canal 5" },
    { id: 6, name: "Canal 6" },
    { id: 7, name: "Canal 7" },
    { id: 8, name: "Canal 8" },
  ])

  const isSelected = (item: {
    id?: number
    label?: string
    path?: string
    // eslint-disable-next-line @typescript-eslint/ban-types
    icon?: OverridableComponent<SvgIconTypeMap<{}, "svg">> & { muiName: string }
    name?: string
  }) => router.pathname === item.path

  const content = (
    <SBox height="100%" display="flex" flexDirection="column">
      <List>
        {primaryMenu.map((item) => {
          const Icon = item.icon
          return (
            <SListItemButton key={item.id} selected={isSelected(item)}>
              <SlistItem>
                <ListItemIcon>
                  <Icon style={{ color: isSelected(item) ? "#f44336" : "#6B6C6D" }} />
                </ListItemIcon>
                <SlistItemText primary={item.label} />
              </SlistItem>
            </SListItemButton>
          )
        })}
      </List>
      <Divider />
      <List>
        {secondaryManu.map((item) => {
          const Icon = item.icon
          return (
            <SListItemButton>
              <SlistItem key={item.id} selected={isSelected(item)}>
                <ListItemIcon>
                  <Icon style={{ color: isSelected(item) ? "#f44336" : "#6B6C6D" }} />
                </ListItemIcon>
                <SlistItemText primary={item.label} />
              </SlistItem>
            </SListItemButton>
          )
        })}
      </List>
      <Divider />
      <Box mx={4} my={2}>
        <Typography variant="body2">
          Faça login para curtir vídeos, comentar e se inscrever.
        </Typography>
        <Box mt={2}>
          <Button variant="outlined" color="secondary" startIcon={<AccountCircle />}>
            Fazer login
          </Button>
        </Box>
      </Box>
      {/* <Box>
        {!status ? (
          <Box mx={4} my={2}>
            <Typography variant="body2">
              Faça login para curtur vídeos, comentar e se inscrever.
            </Typography>
            <Box mt={2}>
              <Button variant="outlined" color="secondary" startIcon={<AccountCircle />}>
                Fazer login
              </Button>
            </Box>
          </Box>
        ) : (
          <List
            subheader={
              <ListSubheader component="div" id="nested-list-subheader">
                INSCRIÇÕES
              </ListSubheader>
            }
          >
            {subscriptions.map((item) => (
              <SlistItem key={item.id} button selected={isSelected(item)}>
                <ListItemIcon>
                  <Savatar>H</Savatar>
                </ListItemIcon>
                <SlistItemText primary={item.name} />
              </SlistItem>
            ))}
          </List>
        )}
      </Box> */}
    </SBox>
  )

  return (
    <div>
      <SdesktopDrawer anchor="left" open variant="persistent">
        {content}
      </SdesktopDrawer>
    </div>
  )
}

export default NavBar
