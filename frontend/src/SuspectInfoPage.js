/** @jsx jsx */
import { jsx } from '@emotion/core'
import { navigate } from '@reach/router'
import styled from '@emotion/styled'
import { Trans } from '@lingui/macro'
import { H1 } from './components/header'

import { TrackPageViews } from './TrackPageViews'
import { SuspectInfoForm } from './forms/SuspectInfoForm'

const CenterContent = styled('div')`
  max-width: 750px;
  margin: auto;
`

const submitAndNavigate = (client, data) => {
  client.writeData({ data })
  navigate('/uploadfiles')
}

export const SuspectInfoPage = () => (
  <CenterContent>
    <H1>
      <Trans>Add any suspect information you may have</Trans>
    </H1>
    <TrackPageViews />
    <SuspectInfoForm onSubmit={submitAndNavigate} />
  </CenterContent>
)