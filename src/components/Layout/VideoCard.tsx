import { Box, Avatar, Typography } from "@mui/material"
import { styled } from "@mui/material/styles"
import dayjs from "dayjs"
import relativeTime from "dayjs/plugin/relativeTime"

dayjs.extend(relativeTime)

const STypography = styled(Typography)({
  fontWeight: 500,
  display: "-webkit-box",
  "-webkit-line-clamp": 2, //se passar dois linhas, por ...
  "-webkit-box-orient": "vertical",
  overflow: "hidden"
})

const VideoCard = ({ item }: { item: any }) => {
  return (
    <Box>
      <img alt={item.title} src={item.thumb} />
      <Box display="flex" marginTop="1" margin="0" padding="0">
        <Box>
          <Avatar alt={item.authorName} src={item.authorAvatar}>
            SS
          </Avatar>
        </Box>
        <Box>
          <STypography gutterBottom variant="body1" color="textPrimary">
            {item.title}
          </STypography>
          <Typography display="block" variant="body2" color="textSecondary">
            {item.authorName}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            {`${item.views} • ${dayjs(item.updatedAt).fromNow()}`}
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}

export default VideoCard
