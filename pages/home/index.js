import { Typography, Button, Paper, SvgIcon, Grid, Avatar } from "@material-ui/core";

import { useScrollTo } from 'react-use-window-scroll';

import classes from './home.module.css';

import React, { useState, useEffect } from 'react';
import { useRouter } from "next/router";

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

function SiteLogo(props) {
  const { color, className } = props;
  return (
    <SvgIcon viewBox="0 0 220.7 33.5" className={className}>
    <g transform="translate(0.000000,33.000000) scale(0.100000,-0.100000)"
    fill="#000000" stroke="none">
    <path d="M0 170 l0 -130 25 0 c18 0 25 -5 25 -20 0 -19 7 -20 90 -20 83 0 90
    1 90 20 0 19 7 20 90 20 83 0 90 -1 90 -20 0 -18 7 -20 60 -20 53 0 60 2 60
    20 0 16 7 20 30 20 23 0 30 -4 30 -20 0 -18 7 -20 60 -20 53 0 60 2 60 20 0
    16 7 20 30 20 23 0 30 -4 30 -20 0 -19 7 -20 90 -20 83 0 90 1 90 20 0 16 7
    20 30 20 23 0 30 -4 30 -20 0 -19 7 -20 95 -20 88 0 95 1 95 20 0 18 7 20 55
    20 48 0 55 -2 55 -20 0 -18 7 -20 65 -20 58 0 65 2 65 20 0 18 7 20 55 20 48
    0 55 -2 55 -20 0 -19 7 -20 95 -20 88 0 95 1 95 20 0 19 7 20 90 20 83 0 90
    -1 90 -20 0 -19 7 -20 90 -20 83 0 90 1 90 20 0 18 7 20 55 20 l55 0 0 130 0
    130 -25 0 c-21 0 -25 -5 -25 -31 l0 -32 -46 7 c-26 3 -53 6 -60 6 -8 0 -14 11
    -14 25 0 21 -5 25 -30 25 -25 0 -30 -4 -30 -24 0 -20 -6 -24 -46 -30 -72 -9
    -74 -9 -74 24 0 28 -3 30 -35 30 -30 0 -35 -3 -35 -24 0 -21 -5 -24 -47 -28
    -45 -4 -134 -4 -210 0 -28 2 -33 6 -33 27 0 22 -4 25 -35 25 -32 0 -35 -3 -35
    -28 l0 -28 -85 0 -85 0 0 28 c0 28 0 28 -65 28 -62 0 -65 -1 -65 -24 0 -21 -6
    -24 -50 -30 -59 -8 -70 -3 -70 30 0 20 -5 24 -30 24 -26 0 -30 -3 -30 -29 l0
    -29 -87 2 -88 1 -3 28 c-3 26 -5 27 -63 27 -59 0 -59 0 -59 -30 l0 -29 -120 2
    -120 1 0 28 c0 24 -4 28 -30 28 -25 0 -30 -4 -30 -24 0 -23 -4 -25 -62 -30
    -35 -2 -102 -4 -150 -4 l-88 1 0 28 c0 24 -4 29 -25 29 l-25 0 0 -130z m170
    40 l0 -30 60 0 60 0 0 30 c0 27 3 30 30 30 29 0 30 -1 30 -50 l0 -50 -74 0
    c-40 0 -94 3 -120 6 l-46 7 0 43 c0 42 1 44 30 44 27 0 30 -3 30 -30z m360 0
    l0 -30 60 0 60 0 0 30 c0 27 3 30 30 30 29 0 30 -1 30 -49 l0 -48 -92 2 c-159
    4 -145 -1 -146 50 0 43 1 45 29 45 26 0 29 -4 29 -30z m360 -15 c0 -43 -1 -45
    -28 -45 -27 0 -29 2 -30 45 0 43 1 45 29 45 28 0 29 -2 29 -45z m300 25 c0
    -16 -7 -20 -30 -20 -25 0 -30 -4 -30 -25 0 -21 -5 -25 -28 -25 -27 0 -29 2
    -30 45 l0 45 59 0 c52 0 59 -2 59 -20z m180 -25 c0 -41 -2 -45 -25 -45 -23 0
    -25 4 -25 45 0 41 2 45 25 45 23 0 25 -4 25 -45z m180 25 c0 -15 -7 -20 -25
    -20 -18 0 -25 5 -25 20 0 15 7 20 25 20 18 0 25 -5 25 -20z m120 -25 c0 -41
    -2 -45 -25 -45 -23 0 -25 4 -25 45 0 41 2 45 25 45 23 0 25 -4 25 -45z m120
    25 c0 -15 -7 -20 -25 -20 -18 0 -25 5 -25 20 0 15 7 20 25 20 18 0 25 -5 25
    -20z m190 -10 c0 -27 3 -30 30 -30 27 0 30 3 30 30 0 27 3 30 30 30 29 0 30
    -1 30 -48 l0 -49 -90 0 -90 0 0 49 c0 47 1 48 30 48 27 0 30 -3 30 -30z m-730
    -50 c0 -15 -7 -20 -25 -20 -18 0 -25 5 -25 20 0 15 7 20 25 20 18 0 25 -5 25
    -20z m-1080 -50 c0 -27 3 -30 30 -30 23 0 30 -4 30 -20 0 -19 -7 -20 -90 -20
    -83 0 -90 1 -90 20 0 16 7 20 30 20 27 0 30 3 30 30 0 27 3 30 30 30 27 0 30
    -3 30 -30z m360 -20 l0 -50 -60 0 c-53 0 -60 2 -60 20 0 16 7 20 30 20 27 0
    30 3 30 30 0 27 3 30 30 30 29 0 30 -1 30 -50z m120 20 c0 -27 3 -30 30 -30
    23 0 30 -4 30 -20 0 -18 -7 -20 -59 -20 l-59 0 0 50 c0 48 1 50 29 50 26 0 29
    -4 29 -30z m240 0 c0 -27 3 -30 30 -30 23 0 30 -4 30 -20 0 -19 -7 -20 -90
    -20 -83 0 -90 1 -90 20 0 16 7 20 30 20 27 0 30 3 30 30 0 27 3 30 30 30 27 0
    30 -3 30 -30z m242 3 c2 -22 9 -29 31 -31 19 -2 27 -9 27 -23 0 -17 -8 -19
    -90 -19 -83 0 -90 1 -90 20 0 16 7 20 30 20 27 0 30 3 30 30 0 27 3 30 29 30
    25 0 30 -4 33 -27z m240 0 c2 -22 9 -29 31 -31 19 -2 27 -9 27 -23 0 -16 -7
    -19 -55 -19 -54 0 -55 0 -55 30 0 27 -3 30 -30 30 -23 0 -30 4 -30 20 0 18 7
    20 54 20 52 0 55 -1 58 -27z m300 0 c2 -22 9 -29 31 -31 19 -2 27 -9 27 -23 0
    -17 -8 -19 -85 -19 -77 0 -85 2 -85 19 0 14 8 21 28 23 21 2 28 9 30 31 3 21
    9 27 27 27 18 0 24 -6 27 -27z m368 -3 c0 -27 3 -30 30 -30 23 0 30 -4 30 -20
    0 -19 -7 -20 -90 -20 -83 0 -90 1 -90 20 0 16 7 20 30 20 27 0 30 3 30 30 0
    27 3 30 30 30 27 0 30 -3 30 -30z"/>
    </g>
    </SvgIcon>
  );
}

function Home({ changeTheme }) {

  function handleNavigate(route) {
    router.push(route);
  }

  const router = useRouter();

  const scrollTo = useScrollTo();

  return (
    <div className={classes.ffContainer}>

      <div className={classes.contentContainerFull}>

      <SiteLogo className={classes.appLogo} />

        <Grid container spacing={2} className={classes.homeContentMain}>
          <Grid item lg={12} md={12} sm={12} xs={12}>
            <Typography variant="h1" className={classes.preTitle}>0.01% fee</Typography>
          </Grid>
          <Grid item lg={12} md={12} sm={12} xs={12}>
            <Typography variant="h1" className={classes.mainTitle}>Low cost stable coin swaps</Typography>
          </Grid>
          <Grid item lg={12} md={12} sm={12} xs={12}>
            <Grid container spacing={2}>
              <Grid item lg={6} md={6} sm={12} xs={12}>
                <Button className={classes.buttonInfo} onClick={() => scrollTo({ top: 1000, left: 0, behavior: 'smooth' })}>Learn More</Button>
              </Grid>
              <Grid item lg={6} md={6} sm={12} xs={12}>
                <Button className={classes.buttonEnter} onClick={() => router.push('/swap')}>Enter App</Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>

      <div id="info" className={classes.contentContainerFullTwo}>

        <div className={classes.floatingSphere}></div>

        <Grid container spacing={3} className={classes.homeContentMain}>
          <Grid item lg={12} md={12} sm={12} xs={12}>
            <Typography variant="h1" className={classes.secTitle}>Welcome to Printy</Typography>
          </Grid>
          <Grid item lg={12} md={12} sm={12} xs={12}>
            <Typography variant="body1" className={classes.mainDescription}>
              Solidly officially launched in January 2022 with a collective goal of fair and balanced access to DeFi. Solidly is a decentralized exchange that has launched on the Avax network with low fees, near 0 slippage on correlated assets and a strong focus on secondary markets for tokenized locks as NFT’s (veToken = lpNFTs).
            </Typography>
            <Typography variant="body2" className={classes.secDescription}>
              One segment of the cryptocurrency landscape that has shown incredible potential is the swapping of stablecoins and volatile assets. Solidly Swap offers users quick, seamless and cheap transactions while utilizing strategies to maximize their yield.
            </Typography>
          </Grid>
          <Grid item lg={12} md={12} sm={12} xs={12}>
            <Button className={classes.buttonEnterSingle} onClick={() => router.push('/swap')}>Enter App</Button>
          </Grid>
        </Grid>
      </div>

    </div>
  );
}

export default Home;
