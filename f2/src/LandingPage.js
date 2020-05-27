/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import { useLingui } from '@lingui/react'
import { Route } from 'react-router-dom'
import PropTypes from 'prop-types'
import { Trans } from '@lingui/macro'
import { P } from './components/paragraph'
import { ButtonLink } from './components/link'
import { H1, H2 } from './components/header'
import { Ul } from './components/unordered-list'
import { Li } from './components/list-item'
import { A } from './components/link'
import { Layout, Row } from './components/layout'
import { Stack, Icon } from '@chakra-ui/core'
import { useStateValue } from './utils/state'
import { Page } from './components/Page'
import { Well } from './components/Messages'
import { CovidWell } from './Covid19Page'
import { LandingBox } from './components/container'


export const LandingPage = (props) => {
  const { i18n } = useLingui()
  const [state, dispatch] = useStateValue()
  if (state.doneForms) {
    dispatch({ type: 'saveDoneForms', data: false })
  }
  return (
    <Route
      render={({ history }) => (
        <Page>
          <CovidWell />
          <Layout columns={{ base: 4 / 4, md: 6 / 8, lg: 7 / 12 }}>
            <Stack spacing={10} shouldWrapChildren>
              <H1>
                <Trans id="landingPage.title" />
              </H1>
              <P>
                <Trans id="landingPage.intro">
                  <A
                    href={
                      i18n.locale === 'en'
                        ? 'http://www.rcmp-grc.gc.ca/en/nc3'
                        : 'http://www.rcmp-grc.gc.ca/fr/gnc3'
                    }
                    isExternal
                  />
                  <A
                    href={
                      i18n.locale === 'en'
                        ? 'http://www.antifraudcentre-centreantifraude.ca/index-eng.htm'
                        : 'http://www.antifraudcentre-centreantifraude.ca/index-fra.htm'
                    }
                    isExternal
                  />
                </Trans>
              </P>

              <Stack alignItems="flex-start">
                <H2>
                  <Trans id="landingPage.reportOnline" />
                </H2>

                <P>
                  <Trans id="landingPage.onlineIntro" />
                </P>
                <Row>
                  <LandingBox spacing={10} columns={{ base: 4 / 4, md: 6 / 8 }}>
                    <p mb={2}>
                      <Trans id="landingPage.fyiReport.description" />
                    </p>

                    <ButtonLink to="/startPage">
                      <Trans id="landingPage.fullReport.button" />
                      <Icon
                        focusable="false"
                        ml={2}
                        mr={-2}
                        name="chevron-right"
                        size="28px"
                      />
                    </ButtonLink>
                    
                  </LandingBox>
                </Row>

                <ButtonLink to="/startPage">
                  <Trans id="landingPage.nextButton.reportNow" />
                  <Icon
                    focusable="false"
                    ml={2}
                    mr={-2}
                    name="chevron-right"
                    size="28px"
                  />
                </ButtonLink>
              </Stack>

              <Well variantColor="blue">
                <Trans id="landingPage.warning" />
              </Well>

              <H2>
                <Trans id="landingPage.reportingOptions" />
              </H2>

              <Ul>
                <Li>
                  <Trans id="landingPage.reportingOptions0" />
                </Li>
                <Li>
                  <Trans id="landingPage.reportingOptions1">
                    <A
                      href={
                        i18n.locale === 'en'
                          ? 'https://www.cybertip.ca/app/en/report'
                          : 'https://www.cybertip.ca/app/fr/report'
                      }
                      isExternal // Opens new tab
                    />
                  </Trans>
                </Li>
                <Li>
                  <Trans id="landingPage.reportingOptions2">
                    <A
                      href={
                        i18n.locale === 'en'
                          ? 'https://www.consumer.equifax.ca/fr/c/portal/update_language?p_l_id=23&redirect=%2Ffr%2Fpersonnel%2F&languageId=en_US'
                          : 'https://www.consumer.equifax.ca/en/c/portal/update_language?p_l_id=23&redirect=%2Fen%2Fpersonal%2F&languageId=fr_FR'
                      }
                      isExternal // Opens new tab
                    />
                    <A
                      href={
                        i18n.locale === 'en'
                          ? 'https://www.transunion.ca/'
                          : 'https://www.transunion.ca/fr'
                      }
                      isExternal // Opens new tab
                    />
                  </Trans>
                </Li>

                <Li>
                  <Trans id="landingPage.reportingOptions3" />
                </Li>
              </Ul>
            </Stack>
          </Layout>
        </Page>
      )}
    />
  )
}

LandingPage.propTypes = {
  location: PropTypes.object,
}
