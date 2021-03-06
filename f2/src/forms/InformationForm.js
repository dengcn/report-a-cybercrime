/** @jsx jsx */
import React from 'react'
import PropTypes from 'prop-types'
import { jsx } from '@emotion/core'
import { useLingui } from '@lingui/react'
import { Trans } from '@lingui/macro'
import { Form } from 'react-final-form'
import { NextAndCancelButtons } from '../components/next-and-cancel-buttons'
import { Stack } from '@chakra-ui/core'
import { useStateValue } from '../utils/state'
import { ConditionalForm } from '../components/container'
import { TextInput } from '../components/TextInput'
import { CheckboxAdapter } from '../components/checkbox'
import { FormArrayControl } from '../components/FormArrayControl'
import { Field } from '../components/Field'
import { A } from '../components/link'
import { P } from '../components/paragraph'
import { Well } from '../components/Messages'
import { clientFieldsAreValid } from '../utils/clientFieldsAreValid'
import { formDefaults } from './defaultValues'

export const InformationForm = (props) => {
  const localOnSubmit = (data) => {
    if (clientFieldsAreValid(data, formDefaults.personalInformation))
      props.onSubmit(data)
  }

  const { i18n } = useLingui()
  const [data] = useStateValue()
  const information = {
    ...formDefaults.personalInformation,
    ...data.formData.personalInformation,
  }

  const typeOfInfoReq = [
    'typeOfInfoReq.creditCard',
    'typeOfInfoReq.dob',
    'typeOfInfoReq.homeAddress',
    'typeOfInfoReq.sin',
    'typeOfInfoReq.other',
  ]

  const typeOfInfoObtained = [
    'typeOfInfoObtained.creditCard',
    'typeOfInfoObtained.dob',
    'typeOfInfoObtained.homeAddress',
    'typeOfInfoObtained.sin',
    'typeOfInfoObtained.other',
  ]

  return (
    <React.Fragment>
      {false ? ( // mark ids for lingui
        <div>
          <Trans id="typeOfInfoReq.creditCard" />
          <Trans id="typeOfInfoReq.dob" />
          <Trans id="typeOfInfoReq.homeAddress" />
          <Trans id="typeOfInfoReq.sin" />
          <Trans id="typeOfInfoReq.other" />
          <Trans id="typeOfInfoObtained.creditCard" />
          <Trans id="typeOfInfoObtained.dob" />
          <Trans id="typeOfInfoObtained.homeAddress" />
          <Trans id="typeOfInfoObtained.sin" />
          <Trans id="typeOfInfoObtained.other" />
        </div>
      ) : null}
      <Form
        initialValues={information}
        onSubmit={localOnSubmit}
        render={({ handleSubmit, values }) => (
          <Stack
            as="form"
            onSubmit={handleSubmit}
            shouldWrapChildren
            spacing={6}
          >
            <Stack spacing={4}>
              <FormArrayControl
                name="typeOfInfoReq"
                label={<Trans id="informationPage.typeOfInfoReq" />}
                helperText={<Trans id="informationPage.typeOfInfoReqExample" />}
              >
                {typeOfInfoReq.map((key) => {
                  return (
                    <React.Fragment key={key}>
                      <CheckboxAdapter name="typeOfInfoReq" value={key}>
                        {i18n._(key)}
                      </CheckboxAdapter>
                      {key === 'typeOfInfoReq.other' &&
                        values.typeOfInfoReq.includes(
                          'typeOfInfoReq.other',
                        ) && (
                          <ConditionalForm>
                            <Field name="infoReqOther" component={TextInput} />
                          </ConditionalForm>
                        )}
                    </React.Fragment>
                  )
                })}
              </FormArrayControl>
            </Stack>
            <Stack spacing={4}>
              <FormArrayControl
                name="typeOfInfoObtained"
                label={<Trans id="informationPage.typeOfInfoObtained" />}
                helperText={
                  <Trans id="informationPage.typeOfInfoObtainedExample" />
                }
              >
                {typeOfInfoObtained.map((key) => {
                  return (
                    <React.Fragment key={key}>
                      <CheckboxAdapter name="typeOfInfoObtained" value={key}>
                        {i18n._(key)}
                      </CheckboxAdapter>
                      {key === 'typeOfInfoObtained.other' &&
                        values.typeOfInfoObtained.includes(
                          'typeOfInfoObtained.other',
                        ) && (
                          <ConditionalForm>
                            <Field
                              name="infoObtainedOther"
                              component={TextInput}
                            />
                          </ConditionalForm>
                        )}
                    </React.Fragment>
                  )
                })}
              </FormArrayControl>
            </Stack>
            <Well variantColor="blue">
              <P fontSize="md" mb={0}>
                <Trans id="informationPage.tip">
                  <A
                    color="blue.900"
                    href={
                      i18n.locale === 'en'
                        ? 'https://www.consumer.equifax.ca/fr/c/portal/update_language?p_l_id=23&redirect=%2Ffr%2Fpersonnel%2F&languageId=en_US'
                        : 'https://www.consumer.equifax.ca/en/c/portal/update_language?p_l_id=23&redirect=%2Fen%2Fpersonal%2F&languageId=fr_FR'
                    }
                    isExternal // Opens new tab
                  />
                  <A
                    color="blue.900"
                    href={
                      i18n.locale === 'en'
                        ? 'https://www.transunion.ca/'
                        : 'https://www.transunion.ca/fr'
                    }
                    isExternal // Opens new tab
                  />
                </Trans>
              </P>
            </Well>
            <NextAndCancelButtons
              next={<Trans id="informationPage.nextStep" />}
              button={<Trans id="informationPage.nextButton" />}
            />
          </Stack>
        )}
      />
    </React.Fragment>
  )
}
InformationForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}
