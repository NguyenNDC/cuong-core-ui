import classNames from "classnames";
import PropTypes from "prop-types";
import type { HTMLAttributes } from "react";
import React, { forwardRef } from "react";

export interface CModalContentProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * A string of all className you want applied to the base component.
   */
  className?: string;
}

export const CModalContent = forwardRef<HTMLDivElement, CModalContentProps>(
  ({ children, className, ...rest }, ref) => {
    const _className = classNames("modal-content", className);

    return (
      <div className={_className} {...rest} ref={ref}>
        {children}
      </div>
    );
  }
);

CModalContent.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

CModalContent.displayName = "CModalContent";
