import Layout from '../components/Layout'
import Link from 'next/link'
import { Container, Box, Grid, Typography } from '@mui/material';
import {styled } from '@mui/styles';
import CommunityForum from '../components/CommunityForum';
export default function Home() {
  const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
  console.log(tz);
  const Side = styled(Box)({
    overflow: 'scroll',
    height: '55vh',
    padding: '0 30px',
    width: "100%",
  });
  return (
    <Layout>
      <Container>
        <h1>Knowledge base</h1>
        <CommunityForum/>
      </Container>
    </Layout>
  )
}
