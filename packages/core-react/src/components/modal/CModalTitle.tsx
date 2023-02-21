import classNames from "classnames";
import PropTypes from "prop-types";
import type { ElementType, HTMLAttributes } from "react";
import React, { forwardRef } from "react";

export interface CModalTitleProps extends HTMLAttributes<HTMLHeadingElement> {
  /**
   * A string of all className you want applied to the base component.
   */
  className?: string;
  /**
   * Component used for the root node. Either a string to use a HTML element or a component.
   */
  component?: string | ElementType;
}

export const CModalTitle = forwardRef<HTMLHeadElement, CModalTitleProps>(
  ({ children, component: Component = "h5", className, ...rest }, ref) => {
    const _className = classNames("modal-title", className);

    return (
      <Component className={_className} {...rest} ref={ref}>
        {children}
      </Component>
    );
  }
);

CModalTitle.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  component: PropTypes.elementType,
};

CModalTitle.displayName = "CModalTitle";
