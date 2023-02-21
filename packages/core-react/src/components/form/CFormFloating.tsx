import classNames from "classnames";
import PropTypes from "prop-types";
import type { HTMLAttributes } from "react";
import React, { forwardRef } from "react";

export interface CFormFloatingProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
}

export const CFormFloating = forwardRef<HTMLDivElement, CFormFloatingProps>(
  ({ children, className, ...rest }, ref) => {
    const _className = classNames("form-floating", className);
    return (
      <div className={_className} {...rest} ref={ref}>
        {children}
      </div>
    );
  }
);

CFormFloating.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

CFormFloating.displayName = "CFormFloating";
