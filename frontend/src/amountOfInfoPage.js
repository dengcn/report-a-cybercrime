import React from 'react'
import styled from '@emotion/styled'
import { Trans } from '@lingui/macro'
import { H1 } from './components/header'
import { ButtonLink } from './components/link'
import { TrackPageViews } from './TrackPageViews'
import { Container } from './components/container'

const CenterContent = styled('div')`
  max-width: 750px;
  margin: auto;
`

export const AmountOfInfoPage = () => (
  <CenterContent>
    <TrackPageViews />
    <H1 textAlign="center" fontSize={[5, null, 6]}>
      <Trans>How much information do you have to report?</Trans>
    </H1>
    <Container textAlign="center">
      <Container>
        <ButtonLink mb={[3, null, 5]} to="/howtotell">
          <Trans>Suspect information</Trans>
        </ButtonLink>
      </Container>
      <Container>
        <ButtonLink mb={[3, null, 5]} to="/howtotell">
          <Trans>Not much</Trans>
        </ButtonLink>
      </Container>
      <Container>
        <ButtonLink mb={[3, null, 5]} to="">
          <Trans>None</Trans>
        </ButtonLink>
      </Container>
    </Container>
  </CenterContent>
)