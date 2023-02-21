import classNames from "classnames";
import PropTypes from "prop-types";
import type { HTMLAttributes } from "react";
import React, { forwardRef } from "react";

export interface CModalBodyProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * A string of all className you want applied to the base component.
   */
  className?: string;
}

export const CModalBody = forwardRef<HTMLDivElement, CModalBodyProps>(
  ({ children, className, ...rest }, ref) => {
    const _className = classNames("modal-body", className);

    return (
      <div className={_className} {...rest} ref={ref}>
        {children}
      </div>
    );
  }
);

CModalBody.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

CModalBody.displayName = "CModalBody";
