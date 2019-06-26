/** @jsx jsx */
import React from 'react'
import { navigate } from '@reach/router'
import PropTypes from 'prop-types'
import { css, jsx } from '@emotion/core'
import styled from '@emotion/styled'
import { ApolloConsumer } from 'react-apollo'
import { I18n, i18nMark } from '@lingui/react'
import { Trans } from '@lingui/macro'
import { Form, Field } from 'react-final-form'
import { Checkbox } from '../components/checkbox'
import { Container } from '../components/container'
import { TextArea } from '../components/text-area'
import { Button } from '../components/button'
import { ButtonLink } from '../components/button-link'
import { Text } from '../components/text'
import { finalFormAdapter } from '../utils/finalFormAdapter'

const CheckboxAdapter = finalFormAdapter(Checkbox)
const TextAreaAdapter = finalFormAdapter(TextArea)

const howContacted = [
  i18nMark('phone'),
  i18nMark('email'),
  i18nMark('website link'),
  i18nMark('other'),
]

const CheckboxStyle = styled('label')`
  margin-bottom: 8pt;
`

const validate = () => {
  return {}
}

export const ScamInfoForm = ({ onSubmit }) => (
  <ApolloConsumer>
    {client => (
      <Form
        onSubmit={data => onSubmit(client, data)}
        validate={validate}
        render={({
          handleSubmit,
          // reset,
          // submitting,
          // pristine,
          values,
          // invalid,
        }) => (
          <form onSubmit={handleSubmit}>
            <label htmlFor="howWereYouContacted">
              <Text>
                <Trans>How were you first contacted by the suspect?</Trans>
              </Text>
            </label>
            <div>
              <I18n>
                {({ i18n }) =>
                  howContacted.map(key => {
                    return (
                      <CheckboxStyle key={key}>
                        <Field
                          name="howWereYouContacted"
                          id="howWereYouContacted"
                          component={CheckboxAdapter}
                          type="checkbox"
                          value={key}
                          label={i18n._(key)}
                        />
                      </CheckboxStyle>
                    )
                  })
                }
              </I18n>
            </div>

            {values.howWereYouContacted &&
            values.howWereYouContacted.indexOf('other') > -1 ? (
              <React.Fragment>
                <label htmlFor="otherMethodOfContact">
                  <Text>
                    <Trans>Other method of contact</Trans>
                  </Text>
                </label>
                <div>
                  <Field
                    name="otherMethodOfContact"
                    id="otherMethodOfContact"
                    component={TextAreaAdapter}
                    height="50px"
                    width="300px"
                  />
                </div>
              </React.Fragment>
            ) : (
              ''
            )}

            <label htmlFor="whenWereYouContacted">
              <Text marginTop={[4, null, 5]}>
                <Trans>When did this scam occur?</Trans>
              </Text>
            </label>
            <div>
              <Field
                name="whenWereYouContacted"
                id="whenWereYouContacted"
                component={TextAreaAdapter}
                height="25px"
                width="300px"
              />
            </div>

            <label htmlFor="scamDetails">
              <Text marginTop={[4, null, 5]}>
                <Trans>How did this scam take place?</Trans>
              </Text>
            </label>
            <div>
              <Field
                name="scamDetails"
                id="scamDetails"
                component={TextAreaAdapter}
                height="100px"
                width="300px"
              />
            </div>

            <Text>
              {JSON.stringify(validate(values)) === JSON.stringify({}) ? (
                ''
              ) : (
                <Text>
                  <Trans>Please fill out all fields</Trans>
                </Text>
              )}
            </Text>

            <Container
              width="305px"
              marginTop={[3, null, 4]}
              css={css`
                display: flex;
                flex-direction: row;
                justify-content: space-between;
              `}
            >
              <Button type="button" onClick={() => navigate('/')}>
                <Trans>Back</Trans>
              </Button>

              <Button type="submit">
                <Trans>Next</Trans>
              </Button>
            </Container>

            <Container
              width="300px"
              marginTop={[2, null, 3]}
              css={css`
                display: flex;
                flex-direction: column;
                justify-content: space-between;
              `}
            >
              <ButtonLink type="button" color="black">
                <Trans>Cancel Report</Trans>
              </ButtonLink>

              <ButtonLink type="button" color="black" marginTop={[1, null, 1]}>
                <Trans>Save Report</Trans>
              </ButtonLink>
            </Container>
          </form>
        )}
      />
    )}
  </ApolloConsumer>
)

ScamInfoForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}