import React from "react"
import { Box, Grid } from "@mui/material"
import VideoCard from "src/components/Layout/VideoCard"
import { dataMocky } from "src/mocky/Videos"
import Layout from "src/components/Layout/index"

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Home = ({ data }: { data: any }) => {
  return (
    <Layout title="Youtube">
      <Box p={2}>
        <Grid container spacing={4}>
          {data.map((item: { id: React.Key | null | undefined }) => (
            <Grid key={item.id} item xs={8} sm={4} md={3}>
              <VideoCard item={item} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Layout>
  )
}

export async function getStaticProps() {
  return {
    props: {
      data: JSON.parse(JSON.stringify(dataMocky))
    }
  }
}

export default Home
