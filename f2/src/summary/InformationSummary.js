/** @jsx jsx */
import React from 'react'
import { jsx } from '@emotion/core'
import { Trans } from '@lingui/macro'
import { Stack, Flex } from '@chakra-ui/core'
import { useStateValue } from '../utils/state'
import { testdata } from '../ConfirmationSummary'
import { EditButton } from '../components/EditButton'
import { H2 } from '../components/header'
import { DescriptionListItem } from '../components/DescriptionListItem'
import { useLingui } from '@lingui/react'
import { Text } from '../components/text'
import { formatList } from '../utils/formatList'
import { containsData } from '../utils/containsData'

export const InformationSummary = (props) => {
  const [data] = useStateValue()
  const { i18n } = useLingui()

  const personalInformation = {
    ...testdata.formData.personalInformation,
    ...data.formData.personalInformation,
  }

  //push all select entities into the stack and if 'other' is selected, push the value of other.
  const infoReqSummary = personalInformation.typeOfInfoReq.map((key) =>
    key === 'typeOfInfoReq.other' && personalInformation.infoReqOther !== ''
      ? personalInformation.infoReqOther
      : i18n._(key),
  )
  const infoReqLine = formatList(infoReqSummary, {
    pair: i18n._('default.pair'),
    middle: i18n._('default.middle'),
    end: i18n._('default.end'),
  })

  //push all select entities into the stack and if 'other' is selected, push the value of other.
  const infoObtainedSummary = personalInformation.typeOfInfoObtained.map(
    (key) =>
      key === 'typeOfInfoObtained.other' &&
      personalInformation.infoObtainedOther !== ''
        ? personalInformation.infoObtainedOther
        : i18n._(key),
  )
  const infoObtainedLine = formatList(infoObtainedSummary, {
    pair: i18n._('default.pair'),
    middle: i18n._('default.middle'),
    end: i18n._('default.end'),
  })

  return (
    <React.Fragment>
      {false ? (
        <div>
          {/*: mark the proper ids for lingui */}
          <Trans id="confirmationPage.personalInformation.typeOfInfoReq" />
          <Trans id="confirmationPage.personalInformation.typeOfInfoObtained" />
          <Trans id="confirmationPage.personalInformation.title.edit" />
          {/**Consider moving this upwards if we want to go towards lingui defaults */}
          <Trans id="default.pair" />
          <Trans id="default.middle" />
          <Trans id="default.end" />
        </div>
      ) : null}

      <Stack
        className="section"
        spacing={4}
        borderBottom="2px"
        borderColor="gray.300"
        pb={4}
        {...props}
      >
        <Flex align="baseline">
          <H2 fontWeight="normal">
            <Trans id="confirmationPage.personalInformation.title" />
          </H2>
          <EditButton
            path="/information"
            label="confirmationPage.personalInformation.title.edit"
          />
        </Flex>

        {containsData(personalInformation) ? (
          <Stack as="dl" spacing={4} shouldWrapChildren>
            <DescriptionListItem
              descriptionTitle="confirmationPage.personalInformation.typeOfInfoReq"
              description={infoReqLine}
            />

            <DescriptionListItem
              descriptionTitle="confirmationPage.personalInformation.typeOfInfoObtained"
              description={infoObtainedLine}
            />
          </Stack>
        ) : (
          <Text>
            <Trans id="confirmationPage.personalInformation.nag" />
          </Text>
        )}
      </Stack>
    </React.Fragment>
  )
}
