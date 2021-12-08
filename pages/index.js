import Layout from '../components/Layout'
import CommunityForum from '../components/CommunityForum';
import Link from 'next/link'
import {
  Container, Box, Grid, Typography, Divider, List, ListItem, ListItemText,
  ListItemIcon, ListSubheader
} from '@mui/material';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
export default function Home() {
  const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
  console.log(tz);
  const list = {
    width: '100%',
    maxWidth: 360,
    bgcolor: 'background.paper',
  };
  return (
    <Layout>
      <Container>
        <h1>Knowledge base</h1>
        <Grid container spacing={2}>
          <Grid item xs={10} md={8}>
            <h3>Getting Started</h3>
            <Divider />
            <List
              sx={{
                width: '100%',
                bgcolor: 'background.paper',
                overflow: 'auto',
                maxHeight: 300,
                '& ul': { padding: 0 },
              }}
              subheader={
                <ListSubheader>
                  <Typography p={2} color="black" variant="h4">Category</Typography>
                </ListSubheader>
              }>
              <ListItem disablePadding>
                <ListItemIcon>
                  <InboxIcon />
                </ListItemIcon>
                <p>Article 1</p>
              </ListItem>
              <ListItem disablePadding>
                <ListItemIcon>
                  <DraftsIcon />
                </ListItemIcon>
                <p>Article 2</p>
              </ListItem>
            </List>
          </Grid>
          <Grid item md={4}>
            <CommunityForum />
          </Grid>
        </Grid>
      </Container>
    </Layout>
  )
}
