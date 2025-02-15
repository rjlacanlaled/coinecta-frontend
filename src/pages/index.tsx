import React from 'react';
import type { NextPage } from 'next'
import {
  Container,
  Typography,
  useTheme,
  useMediaQuery,
  Grid,
  Button,
  Box,
  IconButton,
  Paper,
  Grow,
  Slide,
  useScrollTrigger
} from '@mui/material'
import ErgopadLogo from '@components/svgs/ErgopadLogo';
import PaideiaLogo from '@components/svgs/PaideiaLogo';
import Projects from '@components/landing/Projects';
import DiscordIcon from '@components/svgs/DiscordIcon';
import TelegramIcon from '@components/svgs/TelegramIcon';
import { useInView } from 'react-intersection-observer';
import wideBg from "@public/wide.jpg";
import bottomBg from "@public/bottom.jpg";
import HarmonicLabsLogo from '@components/svgs/HarmonicLabsLogo';
import Link from '@components/Link'
import bannerBg from '@public/banner.jpg'
import HeroSlider from '@components/landing/HeroSlider';
import CrciLogo from '@components/svgs/CrciLogo';
import XerberusLogo from '@components/svgs/XerberusLogo';
import DexhunterLogo from '@components/svgs/DexhunterLogo';

const inViewOptions = {
  threshold: 1,
  triggerOnce: true
}

const Home: NextPage = () => {
  const theme = useTheme()
  // const upMd = useMediaQuery(theme.breakpoints.up('md'))
  // const trigger = useScrollTrigger({ threshold: 800 });
  const [ref1, inView1] = useInView(inViewOptions);
  const [ref2, inView2] = useInView(inViewOptions);
  const [ref3, inView3] = useInView(inViewOptions);
  const [ref4, inView4] = useInView({ ...inViewOptions, threshold: 0.5 });
  const [ref5, inView5] = useInView(inViewOptions);
  const [ref6, inView6] = useInView({ ...inViewOptions, threshold: 0.3 });

  const logoLinkSx = {
    display: 'block',
    textAlign: 'center',
    color: 'rgba(244,244,244,1)',
    '&:hover': {
      '& .MuiSvgIcon-root': {
        color: theme.palette.primary.main,
      }
    }
  }

  return (
    <Box sx={{ overflowX: 'hidden' }}>
      {/* Hero section */}
      <Box sx={{
        backgroundColor: 'rgba(255,255,255,1)',
        color: 'rgba(23,21,21,1)',

      }}>
        <Box sx={{ position: 'relative' }}>
          <Box sx={{ position: 'relative' }}>
            <Container>
              <Box sx={{
                zIndex: 5,
                position: 'relative',
                pb: 6
              }}>
                <HeroSlider />
              </Box>
            </Container>
            <Box sx={{
              width: '3440px',
              height: '430px',
              backgroundImage: `url(${wideBg.src})`,
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              position: 'absolute',
              bottom: 0,
              left: '50%',
              transform: 'translateX(-50%)',
              zIndex: 1
            }}
            />
          </Box>
          <Box sx={{ backgroundColor: 'rgb(8,8,16)', position: 'realtive' }}>
            <Box
              maxWidth='lg'
              sx={{
                mx: 'auto',
                zIndex: 5,
                mb: theme.palette.mode === 'dark' ? 12 : 0
              }}
            >
              <Typography
                variant="body1"
                sx={{ pt: 4, textTransform: 'uppercase', color: 'rgba(244,244,244,1)', }}
                align="center"
                color="text.secondary"
                paragraph
              >
                In partnership with:
              </Typography>
              <Grid container alignItems="center" justifyContent="space-around" spacing={2} sx={{ px: 2, mb: 4 }}>
                <Grid item xs={12} sm={6} md={3}>
                  <Link
                    href="https://www.xerberus.io/"
                    sx={logoLinkSx}
                  >
                    <XerberusLogo sx={{ fontSize: '160px', height: '80px' }} />
                  </Link>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                  <Link
                    href="https://www.dexhunter.io/"
                    sx={logoLinkSx}
                  >
                    <DexhunterLogo sx={{ fontSize: '160px', height: '80px' }} />
                  </Link>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                  <Link
                    href="https://www.crci.review/"
                    sx={logoLinkSx}
                  >
                    <CrciLogo sx={{ fontSize: '160px', height: '80px' }} />
                  </Link>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                  <Link
                    href="https://www.harmoniclabs.tech"
                    sx={logoLinkSx}
                  >
                    <HarmonicLabsLogo sx={{ fontSize: '190px', height: '80px' }} />
                  </Link>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                  <Link
                    href="https://www.ergopad.io"
                    sx={logoLinkSx}
                  >
                    <ErgopadLogo sx={{ fontSize: '160px', height: '80px' }} />
                  </Link>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                  <Link
                    href="https://www.paideia.im"
                    sx={logoLinkSx}
                  >
                    <PaideiaLogo sx={{ fontSize: '140px', height: '80px' }} />
                  </Link>
                </Grid>


              </Grid>
              <Box sx={{
                display: theme.palette.mode === 'dark' ? 'none' : 'block',
                width: '3440px',
                height: '218px',
                backgroundImage: `url(${bottomBg.src})`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                position: 'relative',
                left: '50%',
                transform: 'translateX(-50%)',
              }} />
            </Box>
          </Box>
        </Box>
      </Box>
      {/* End hero section */}

      <Grow in={inView4} {...(inView4 ? { timeout: 250 } : {})}>
        <Box ref={ref4}>
          <Projects />
        </Box>
      </Grow >

      {/* How it works */}
      <Box sx={{
        mb: 24
      }}>
        <Container>
          <Grid container sx={{ mb: 3 }} >
            <Grid item md={1}></Grid>
            <Grid item md={5}>
              <Typography
                variant="h2"
                fontWeight={600}
                gutterBottom
              >
                How it works
              </Typography>
            </Grid>
            <Grid item md={6}></Grid>
          </Grid>
          <Grow in={inView1} {...(inView1 ? { timeout: 300 } : {})}>
            <Grid container sx={{ mb: 6 }} ref={ref1}>
              <Grid item md={2}></Grid>
              <Grid item md={5}>
                <Typography variant="h4" fontWeight={600}>Crowd-funding With Benefits</Typography>
                <Typography variant="subtitle1">Rather than being backed by a few VCs, we believe blockchain projects should be funded by the community, and the community should profit from their successes. By investing in IDOs, you get in before the token is listed and receive preferential pricing as appreciation for your faith in the project. </Typography>
              </Grid>
              <Grid item md={5}></Grid>
            </Grid>
          </Grow>
          <Grid container>
            <Grid item md={3}></Grid>
            <Grid item md={8}>
              <Grid container spacing={6}>
                <Grow
                  in={inView2}
                  {...(inView2 ? { timeout: 800 } : {})}
                >
                  <Grid item md={6} ref={ref2}>
                    <Typography variant="h5" fontWeight={600}>1. Stake The Token</Typography>
                    <Typography variant="body2">To participate, first you have to get the Coinecta Finance token and stake it to reach a staking tier. Your tier will represent your pool weight in IDOs. </Typography>
                    <Grid container spacing={3}>
                      <Grid item>
                        <Button
                          variant="contained"
                          color="secondary"
                          disabled
                        >
                          Get CNCT
                        </Button>
                      </Grid>
                      <Grid item>
                        <Button
                          variant="outlined"
                          color="secondary"
                          disabled
                        >
                          Stake Now
                        </Button>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grow>
                <Grow
                  in={inView2}
                  style={{ transformOrigin: '0 0 0' }}
                  {...(inView2 ? { timeout: 1200 } : {})}
                >
                  <Grid item md={6}>
                    <Typography variant="h5" fontWeight={600}>2. Whitelist For IDOs</Typography>
                    <Typography variant="body2">Keep an eye out for IDOs you like, and whitelist to invest. You will be approved for a specific number of tokens based on your staking tier weight. </Typography>
                    <Button variant="contained" color="secondary" href="/projects">View Projects</Button>
                  </Grid>
                </Grow>
                <Grow
                  in={inView3}
                  {...(inView3 ? { timeout: 800 } : {})}
                >
                  <Grid item md={6} ref={ref3}>
                    <Typography variant="h5" fontWeight={600}>3. Contribute</Typography>
                    <Typography variant="body2">You will receive whitelist tokens in your wallet and can use those to contribute to the project. Send ADA or DJED to the Vesting Contract to receive your vesting key which will unlock tokens over time</Typography>
                    <Button
                      variant="contained"
                      color="secondary"
                      href="https://docs.coinecta.fi/launchpad/redeeming"
                    >
                      Learn About Vesting
                    </Button>
                  </Grid>
                </Grow>
                <Grow
                  in={inView3}
                  style={{ transformOrigin: '0 0 0' }}
                  {...(inView3 ? { timeout: 1200 } : {})}
                >
                  <Grid item md={6}>
                    <Typography variant="h5" fontWeight={600}>4. Redeem</Typography>
                    <Typography variant="body2">Each seed round will have a specific vesting period, depending on how deep the discount is. You can redeem your tokens as they unlock on the Redeem panel. </Typography>
                    <Button
                      variant="contained"
                      color="secondary"
                      disabled
                    >
                      Redeem Now
                    </Button>
                  </Grid>
                </Grow>
              </Grid>
            </Grid>
            <Grid item md={1}></Grid>
          </Grid>
        </Container >
      </Box>
      {/* END How it works */}

      {/* Whos it for? */}
      < Container sx={{ mb: 14 }}>
        <Grow in={inView5} {...(inView5 ? { timeout: 500 } : {})}>
          <Box>
            <Typography
              variant="h5"
              fontWeight={600}
              align="center"
              gutterBottom
              color="primary"
              textTransform="uppercase"
              sx={{ mb: 0, lineHeight: 1 }}
              ref={ref5}
            >
              Who&apos;s It For
            </Typography>
            <Box maxWidth="md" sx={{ margin: 'auto', textAlign: 'center', mb: 6 }}>
              <Typography variant="h3" fontWeight={600}>
                We connect investors and creators to fuel ecosystem growth and deliver innovative new dApps
              </Typography>
            </Box>
          </Box>
        </Grow>
        <Grid container spacing={12} sx={{ mb: 3 }} ref={ref6}>
          <Grid item md={1}></Grid>
          <Slide in={inView6} direction="right" timeout={300}>
            <Grid item md={5}>
              <Typography variant="h4">
                Investors
              </Typography>
              <Typography variant="body2">
                We believe that when a team raises funds for their project, there should be a great deal of accountability to their community. We use smart contracts to help enforce transparency, honesty, and add rugpull resistance.
              </Typography>
              <Typography variant="body2">
                Vested tokens are locked on-chain and released based on the schedule set at the outset. All the details are outlined clearly, so that investors can make informed decisions.
              </Typography>
              <Typography variant="body2">
                Teams are encouraged to use their tokens for governance, and operate as a DAO when possible, to give the community an opportunity to vote on expendatures.
              </Typography>
              <Typography variant="body2">
                In addition, we will draw on our own experience to vet projects before approving them to IDO on Coinecta. We encourage teams to put together a roadmap that clearly outlines their goals and gives consideration to the amount of funds needed to achieve them.
              </Typography>
              <Grid container spacing={3}>
                <Grid item>
                  <Button variant="contained" color="secondary" disabled>Get Started</Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="secondary" href="https://docs.coinecta.fi">Read the Whitepaper</Button>
                </Grid>
              </Grid>
            </Grid>
          </Slide>
          <Slide in={inView6} direction="left" timeout={700}>
            <Grid item md={5}>
              <Typography variant="h4">
                Teams
              </Typography>
              <Typography variant="body2">
                We help secure funding to turn your aspirations into achievements. Our dedicated efforts ensure you receive the necessary resources to manifest your vision successfully.
              </Typography>
              <Typography variant="body2">
                We can offer consultation on project management and tokenomics design. Through our community connections, we can often help fill in the gaps in team structure.
              </Typography>
              <Typography variant="body2">
                If you have some experience building blockchain projects, and have an idea that is somewhat developed, we can help you get funding. If you already have taken some steps towards an MVP and have promoted the idea to your community, we are here to help you raise the necessary funds to turn your project into a complete product. Feel free to apply at any stage of development and we can go over the next steps.
              </Typography>
              <Button href="/apply" variant="contained" color="secondary">Apply for IDO</Button>
            </Grid>
          </Slide>
          <Grid item md={1}></Grid>
        </Grid>
      </Container >
      <Container
        maxWidth="lg"
        sx={{ mb: 12 }}
      >
        <Paper
          sx={{
            textAlign: 'center',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            minHeight: '160px',
            backgroundImage: `url(${bannerBg.src})`
          }}
        >
          <Typography
            sx={{
              fontSize: '1.6rem!important',
              color: 'rgba(23,21,21,1)',
              lineHeight: 1.2,
              fontWeight: "600",
              mb: "12px",
            }}
          >
            Any other questions? Join the community!
          </Typography>
          <Box>
            <IconButton
              href="https://discord.gg/EuFdWye8yw"
              target="_blank"
              sx={{
                color: theme.palette.background.default,
                background: theme.palette.secondary.main,
                "&:hover": {
                  background: theme.palette.secondary.dark,
                },
                mr: "24px",
              }}
            >
              <DiscordIcon />
            </IconButton>
            <IconButton
              href="https://t.me/coinecta"
              target="_blank"
              sx={{
                color: theme.palette.background.default,
                background: theme.palette.secondary.main,
                "&:hover": {
                  background: theme.palette.secondary.dark,
                },
              }}
            >
              <TelegramIcon />
            </IconButton>
          </Box>
        </Paper>
      </Container>
    </Box>
  )
}

export default Home


