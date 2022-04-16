import {
  Subscriptions,
  Home as HomeIcon,
  Whatshot,
  VideoLibrary,
  History
} from "@mui/icons-material"

export const primaryMenu = [
  { id: 1, label: "Início", path: "/", icon: HomeIcon },
  { id: 2, label: "Em alta", path: "/trendding", icon: Whatshot },
  {
    id: 3,
    label: "Inscrições",
    path: "/subscriptions",
    icon: Subscriptions
  }
]

export const secondaryManu = [
  { id: 1, label: "Biblioteca", icon: VideoLibrary },
  { id: 2, label: "Histórico", icon: History }
]
