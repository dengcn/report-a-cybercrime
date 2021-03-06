/** @jsx jsx */
import { jsx } from '@emotion/core'
import { Trans } from '@lingui/macro'
import { H1 } from './components/header'
import { TrackPageViews } from './TrackPageViews'
import { Layout } from './components/layout'
import { Stack } from '@chakra-ui/core'
import { Alert } from './components/Messages'

export const FinalFeedbackThanksPage = () => {
  return (
    <Layout>
      <TrackPageViews />
      <Stack spacing={10} shouldWrapChildren>
        <H1>
          <Trans id="finalFeedbackThanks.title" />
        </H1>
        <Alert status="success" withIcon>
          <Trans id="thankYouPage.safelyCloseWindow" />
        </Alert>
      </Stack>
    </Layout>
  )
}
