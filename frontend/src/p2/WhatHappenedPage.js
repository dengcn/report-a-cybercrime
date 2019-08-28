/** @jsx jsx */
import { jsx } from '@emotion/core'
import { navigate } from '@reach/router'
import { Trans } from '@lingui/macro'
import { H1 } from '../components/header'
import { P } from '../components/paragraph'
import { Ul } from '../components/unordered-list'
import { Li } from '../components/list-item'
import { Container } from '../components/container'
import { Steps } from '../components/stepper'
import { TrackPageViews } from '../TrackPageViews'
import { WhatHappenedForm } from './forms/WhatHappenedForm'
import { Layout } from '../components/layout'
import { getDoneForms } from '../utils/queriesAndMutations'
import { BackButton } from '../components/backbutton'

const submitAndNavigate = (client, data) => {
  client.writeData({ data: { whatHappened: JSON.stringify(data) } })
  navigate(getDoneForms(client) ? 'confirmation' : '/p2/scammerdetails')
}

export const WhatHappenedPage = () => (
  <Layout>
    <Container
      display="flex"
      width="90%"
      flexDirection="row"
      marginBottom="20px"
    >
      <Steps activeStep={1} steps={[{}, {}, {}, {}, {}, {}]} />
    </Container>
    <BackButton route="/p2/timeframe" />
    <H1>
      <Trans>Describe what happened</Trans>
    </H1>
    <P>
      <Trans>
        What happened is not your fault. Scammers use a number of techniques to
        get what they want.
      </Trans>
    </P>
    <P>
      <Trans>Think about including things such as:</Trans>
    </P>
    <Ul>
      <Li>
        <Trans>Where you were (ex: app, website, device, location, etc.)</Trans>
      </Li>
      <Li>
        <Trans>
          What the scammer did (ex: promise, threaten, or steal, etc.)
        </Trans>
      </Li>
    </Ul>
    <TrackPageViews />
    <WhatHappenedForm onSubmit={submitAndNavigate} />
  </Layout>
)
