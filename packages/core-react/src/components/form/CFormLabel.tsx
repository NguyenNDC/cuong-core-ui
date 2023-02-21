import classNames from "classnames";
import PropTypes from "prop-types";
import type { AllHTMLAttributes } from "react";
import React, { forwardRef } from "react";

export interface CFormLabelProps extends AllHTMLAttributes<HTMLLabelElement> {
  className?: string;
  customClassName?: string;
}

export const CFormLabel = forwardRef<HTMLLabelElement, CFormLabelProps>(
  ({ children, className, customClassName, ...rest }, ref) => {
    const _className =
      customClassName || classNames(className, `form-input-label`);
    return (
      <label className={_className} {...rest} ref={ref}>
        {children}
      </label>
    );
  }
);

CFormLabel.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  customClassName: PropTypes.string,
};

CFormLabel.displayName = "CFormLabel";
