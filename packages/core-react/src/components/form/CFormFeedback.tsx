import classNames from "classnames";
import PropTypes from "prop-types";
import type { ElementType, HTMLAttributes } from "react";
import React, { forwardRef } from "react";

export interface CFormFeedbackProps
  extends HTMLAttributes<HTMLDivElement | HTMLSpanElement> {
  className?: string;
  component?: string | ElementType;
  invalid?: boolean;
  valid?: boolean;
}

export const CFormFeedback = forwardRef<
  HTMLDivElement | HTMLSpanElement,
  CFormFeedbackProps
>(
  (
    {
      children,
      className,
      component: Component = "div",
      invalid,
      valid,
      ...rest
    },
    ref
  ) => {
    const _className = classNames(
      className,
      invalid && `form-feedback-invalid`,
      valid && `form-feedback-valid`
    );
    return (
      <Component className={_className} {...rest} ref={ref}>
        {children}
      </Component>
    );
  }
);

CFormFeedback.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  component: PropTypes.elementType,
  invalid: PropTypes.bool,
  valid: PropTypes.bool,
};

CFormFeedback.displayName = "CFormFeedback";
