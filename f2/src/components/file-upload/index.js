/** @jsx jsx */
import PropTypes from 'prop-types'
import { jsx } from '@emotion/core'
import { Label } from '../label'
import { VisuallyHidden } from '@chakra-ui/core'
import { Button } from '../button'
import { acceptableExtensions } from '../../utils/acceptableFiles'

export const FileUpload = ({ onChange, accept, ...props }) => {
  return (
    <Label>
      <Button
        {...props}
        as="div"
        _focusWithin={{
          boxShadow: 'outline',
        }}
      >
        <VisuallyHidden
          as="input"
          type="file"
          id="uploader"
          name="uploader"
          accept={acceptableExtensions.join(',')}
          max-upload={3}
          onChange={onChange}
        />
        {props.children}
      </Button>
    </Label>
  )
}

FileUpload.defaultProps = {
  accept: undefined,
}

FileUpload.propTypes = {
  onChange: PropTypes.func.isRequired,
  accept: PropTypes.string,
}
