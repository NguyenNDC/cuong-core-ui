import PropTypes from "prop-types";
import type { FC, ReactNode } from "react";
import React from "react";

import { CFormFeedback } from "./CFormFeedback";

export interface CFormControlValidationProps {
  describedby?: string;
  feedback?: ReactNode | string;
  feedbackInvalid?: ReactNode | string;
  feedbackValid?: ReactNode | string;
  floatingLabel?: ReactNode | string;
  invalid?: boolean;
  valid?: boolean;
}

export const CFormControlValidation: FC<CFormControlValidationProps> = ({
  describedby,
  feedback,
  feedbackInvalid,
  feedbackValid,
  invalid,
  valid,
}) => {
  return (
    <>
      {feedback && (valid || invalid) && (
        <CFormFeedback
          {...(invalid && { id: describedby })}
          invalid={invalid}
          valid={valid}
        >
          {feedback}
        </CFormFeedback>
      )}
      {feedbackInvalid && (
        <CFormFeedback id={describedby} invalid>
          {feedbackInvalid}
        </CFormFeedback>
      )}
      {feedbackValid && <CFormFeedback valid>{feedbackValid}</CFormFeedback>}
    </>
  );
};

CFormControlValidation.propTypes = {
  describedby: PropTypes.string,
  feedback: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  feedbackValid: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  feedbackInvalid: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  invalid: PropTypes.bool,
  valid: PropTypes.bool,
};

CFormControlValidation.displayName = "CFormControlValidation";
