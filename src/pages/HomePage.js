import React from 'react'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Container from '@material-ui/core/Container';
import HomeContent from './HomeContent'
import PersistentDrawerRight from './drawer';

<components />
export default function HomePage() {
  return (
    <Container>
      {/*Notes page*/}
      <PersistentDrawerRight />
      <HomeContent/>
    </Container>
  )
}
