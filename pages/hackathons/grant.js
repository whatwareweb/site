import { Box, Container, Flex, Grid, Heading } from 'theme-ui'
import Meta from '@hackclub/meta'
import Head from 'next/head'
import ForceTheme from '../../components/force-theme'
import Nav from '../../components/nav'
import Footer from '../../components/footer'
import MSparkles from '../../components/hackathons/grant/money'
import NextLink from 'next/link'
import { Link, Text, Button, Card } from 'theme-ui'
import Icon from '@hackclub/icons'
import Form from '../../components/hackathons/grant/form'
import Apply from '../../components/hackathons/grant/apply'

import Zoom from 'react-reveal/Zoom'
/** @jsxImportSource theme-ui */
if (typeof window !== 'undefined') {
  window.$ = window.jQuery = require('jquery')

  $(document).ready(function () {
    // Add smooth scrolling to all links (source: w3schools)
    $('a').on('click', function (event) {
      if (this.hash !== '') {
        event.preventDefault()
        var hash = this.hash

        $('html, body').animate(
          {
            scrollTop: $(hash).offset().top
          },
          800,
          function () {
            window.location.hash = hash
          }
        )
      }
    })
  })
}

const Requirement = ({ title, children, checkmark, background, size }) => {
  return (
    <Zoom>
      <Card
        variant="interactive"
        sx={{
          backgroundColor: 'elevated',
          backgroundImage: `url('${background}')`,
          backgroundSize: '40px 40px',
          backgroundRepeat: 'repeat',
          backgroundPosition: '10% 10%',
          color: 'snow',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'start',
          height: '100%'
        }}
      >
        <Flex sx={{ alignItems: 'center' }}>
          <Box mr={3} sx={{ lineHeight: 0, flexShrink: 0 }}>
            <Icon glyph={checkmark} color="#ec3750" size={size} />
          </Box>
          <Text variant="heading" sx={{ fontSize: [2, 3, 3], lineHeight: 1.5 }}>
            {title}
          </Text>
        </Flex>

        <Text pl={48} mt={2} sx={{ fontSize: [1, 2, 2] }}>
          {children}
        </Text>
      </Card>
    </Zoom>
  )
}

const HackathonGrant = () => {
  let open = true // applications are open
  let channel = 'https://hackclub.slack.com/archives/C03TS0VKFPZ' // #hackathon-grants

  return (
    <>
      <Meta
        as={Head}
        title="Hackathon Grant"
        description="Hack Club is partnering with FIRST to provide $500 grants to in-person high school hackathons happening this semester."
        image="https://cloud-7yw9f6xnv-hack-club-bot.vercel.app/0grant.png"
      />
      <Box as="main" key="main">
        <Nav dark />
        <ForceTheme theme="dark" />
        <Meta as={Head} title="Hackathon Grant" />
        <Box
          sx={{
            pt: [5, null, null, null, 6],
            pb: [3, 4, 5, null, 6],
            minHeight: ['70vh', 'none'],
            textAlign: 'center',
            backgroundImage:
              "linear-gradient(to bottom, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.4)), url('https://cloud-gxxp8xcyl-hack-club-bot.vercel.app/0fzfm1e-ueaef1qw.jpeg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <Box
            sx={{
              width: '100%',
              maxWidth: 'calc(56rem + 32px)',
              mx: 'auto',
              px: '16px',
              backdropFilter: 'blur(1.5px)'
            }}
          >
            <Heading
              sx={{
                textAlign: 'center',
                mt: [2, 4],
                textShadow: '0 0 16px rgba(0, 0, 0, 1)',
                fontSize: [5, null, 6, 7]
              }}
              as="h1"
              variant="title"
            >
              <Flex
                sx={{ justifyContent: 'center', alignItems: 'center', mb: 2 }}
              >
                <NextLink href="https://hackclub.com" passHref>
                  <Box
                    as="a"
                    width={64}
                    height={64}
                    sx={{
                      width: 72,
                      height: 72,
                      backgroundImage:
                        "url('https://assets.hackclub.com/icon-square.svg')",
                      backgroundSize: 'contain',
                      backgroundPosition: 'center center',
                      backgroundRepeat: 'no-repeat',
                      mr: 3,
                      borderRadius: 8
                    }}
                    target="_blank"
                  ></Box>
                </NextLink>
                <Box mr={3} sx={{ fontWeight: 'normal' }}>
                  +
                </Box>
                <NextLink href="https://www.firstinspires.org" passHref>
                  <Box
                    as="a"
                    sx={{
                      width: 72,
                      height: 72,
                      backgroundImage: "url('/hackathons/grant/first.png')",
                      backgroundColor: '#231F20',
                      backgroundSize: '60px, cover',
                      backgroundPosition: 'center center',
                      backgroundRepeat: 'no-repeat',
                      borderRadius: 8
                    }}
                    target="_blank"
                  ></Box>
                </NextLink>
              </Flex>
              A <MSparkles>$500</MSparkles> grant for your{' '}
              <a sx={{ whiteSpace: 'nowrap' }}>in-person</a> hackathon.
            </Heading>
            <Box
              sx={{
                fontSize: [2, 3, 3],
                textAlign: 'center',
                my: 4
              }}
            >
              Hack Club is partnering with{' '}
              <NextLink href="https://www.firstinspires.org" passHref>
                <Link target="_blank">
                  <i>FIRST®</i>
                </Link>
              </NextLink>{' '}
              to provide $500 grants (and waiving{' '}
              <Link href="/bank" target="_blank">
                Hack Club Bank
              </Link>{' '}
              fees) to <a sx={{ whiteSpace: 'nowrap' }}>in-person</a>{' '}
              <a sx={{ whiteSpace: 'nowrap' }}>high school</a> hackathons
              happening this semester.
            </Box>
            <Button variant="ctaLg" as="a" href="#apply" sx={{ mt: 2 }}>
              {open ? 'Apply Now' : 'Coming Soon'}
            </Button>
          </Box>
        </Box>
        <Container sx={{ py: 5 }}>
          <Text
            as="h1"
            variant="heading"
            mt={4}
            mb={3}
            sx={{ fontSize: [28, 30, 40], textAlign: 'center' }}
          >
            Check if your hackathon qualifies
          </Text>

          <Grid columns={[1, 1, 2, 2]} gap={4}>
            <Requirement
              title="Running this semester"
              checkmark="clock-fill"
              background="https://icons.hackclub.com/api/icons/0x212025/glyph:clock.svg"
              size="36"
            >
              We want to bring back high schooler-led events around the world,
              so we're only offering this grant for high school hackathons that
              take place this semester (from August 19th to December 31st,
              2022).
              <br />
              <br />
              <Text
                sx={{
                  fontSize: ['14px', 1, 1],
                  color: 'muted'
                }}
              >
                This is not an annual program and is only available this
                semester.
              </Text>
            </Requirement>
            <Requirement
              title={
                <>
                  By <a sx={{ whiteSpace: 'nowrap' }}>high schoolers</a>, for{' '}
                  <a sx={{ whiteSpace: 'nowrap' }}>high schoolers</a>
                </>
              }
              checkmark="profile-fill"
              background="https://icons.hackclub.com/api/icons/0x212025/glyph:profile.svg"
              size="36"
            >
              To create a uniquely tailored high school hackathon, your
              hackathon should be organized by high school students*. All
              attendees should be 18 & under <u>AND</u> not full-time college
              students.
              <br />
              <br />
              <Text
                sx={{
                  fontSize: ['14px', 1, 1],
                  color: 'muted'
                }}
              >
                Maximum of 1 college student is allowed on your organizing team.
              </Text>
            </Requirement>
            <Requirement
              title="Fully in-person"
              checkmark="flag-fill"
              background="https://icons.hackclub.com/api/icons/0x212025/glyph:flag.svg"
              size="36"
            >
              Hacking is a social activity, and we're supporting hackathons that
              bring hackers together IRL. We believe that fully IRL (not hybrid)
              events allow organisers to maximize the unique hackathon
              experience for attendees.
            </Requirement>
            <Requirement
              title="Venue secured"
              checkmark="pin-fill"
              background="https://icons.hackclub.com/api/icons/0x212025/glyph:pin.svg"
            >
              You will need to provide a scan of an email, contract, or an{' '}
              <Link
                href="https://www.investopedia.com/terms/m/mou.asp"
                target="_blank"
              >
                MOU
              </Link>{' '}
              with your venue. Your scan should have the date of your hackathon
              and address, contact details, and the specific commitment of your
              venue.
            </Requirement>
            <Requirement
              title="Handmade website"
              checkmark="web"
              background="https://icons.hackclub.com/api/icons/0x212025/glyph:web.svg"
              size="36"
            >
              We believe the best hackathons embody the hacker spirit by
              building their own website. Complex or simple, beautiful or janky–
              build your own instead of using nontechnical tools like Wix or
              Devpost.
              <br />
              <br />
              <Text
                sx={{
                  fontSize: ['14px', 1, 1],
                  color: 'muted'
                }}
              >
                You will need to share a link to your website. Don't have a
                domain?{' '}
                <Link href="/bank" target="_blank">
                  Hack Club Bank
                </Link>{' '}
                provides a free domain. Check out{' '}
                <Link
                  href="https://notebook.lachlanjc.com/2019-09-06_making_a_hackathon_site"
                  target="_blank"
                >
                  a guide on building hackathon websites
                </Link>{' '}
                or ask in{' '}
                <Link
                  href="/slack"
                  target="_blank"
                  sx={{
                    color: 'muted'
                  }}
                >
                  Slack
                </Link>{' '}
                if you need help.
              </Text>
            </Requirement>
            <Requirement
              title="Open sourced finances"
              checkmark="bank-circle"
              background="https://icons.hackclub.com/api/icons/0x212025/glyph:bank-account.svg"
              size="28"
            >
              You'll receive your grant through{' '}
              <NextLink href="/bank" passHref>
                <Link target="_blank">Hack&nbsp;Club&nbsp;Bank</Link>
              </NextLink>
              , our financial platform for hackathons, and spend it in the open
              with{' '}
              <Link
                href="https://changelog.bank.hackclub.com/transparent-finances-(optional-feature)-151427"
                target="_blank"
              >
                Transparency Mode
              </Link>
              . Sign up for{' '}
              <Link
                href="/bank"
                target="_blank"
                sx={{
                  color: 'white'
                }}
              >
                Hack Club Bank
              </Link>{' '}
              before applying.
              <br />
              <br />
              <Text
                sx={{
                  fontSize: ['14px', 1, 1],
                  color: 'muted'
                }}
              >
                If you're unable to use{' '}
                <Link
                  href="/bank"
                  target="_blank"
                  sx={{
                    color: 'muted'
                  }}
                >
                  Hack Club Bank
                </Link>{' '}
                , we're unfortunately unable to support you through this grant
                program.
              </Text>
            </Requirement>
          </Grid>

          {open ? (
            <>
              <Apply channel={channel} />
            </>
          ) : (
            <>
              <Heading
                sx={{ textAlign: 'center', mb: 3, fontSize: 5 }}
                id="apply"
              >
                Applications opening soon.
              </Heading>

              <Form />
            </>
          )}
        </Container>
      </Box>
      <Zoom>
        <Card
          as="a"
          variant="interactive"
          href="mailto:bank@hackclub.com"
          sx={{
            mx: 'auto',
            maxWidth: '52rem',
            width: '90%',
            textAlign: 'left',
            textDecoration: 'none',
            lineHeight: 'caption',
            display: 'flex',
            alignItems: 'center',
            fontSize: [1, 2, 2],
            mb: [3, 4],
            p: '16px !important',
            svg: { flexShrink: 'none' }
          }}
        >
          <Icon
            glyph="emoji"
            color="#ec3750"
            sx={{
              mr: [2, 3],
              ml: 2,
              display: ['none', 'block'],
              width: 56,
              height: 'auto'
            }}
          />
          <Text
            as="p"
            sx={{
              flex: '1 1 auto',
              strong: { display: ['inline', 'block'], pl: 3 }
            }}
          >
            <strong>Questions?</strong>
            <Text as="span" variant="caption" color="secondary" sx={{ pl: 3 }}>
              Reach out to <Link>bank@hackclub.com</Link>
            </Text>
          </Text>
        </Card>
      </Zoom>
      <Footer dark key="footer" />
    </>
  )
}

export default HackathonGrant