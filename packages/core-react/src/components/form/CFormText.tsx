import classNames from "classnames";
import PropTypes from "prop-types";
import type { ElementType, HTMLAttributes } from "react";
import React, { forwardRef } from "react";

export interface CFormTextProps
  extends HTMLAttributes<HTMLDivElement | HTMLSpanElement> {
  /**
   * A string of all className you want applied to the component.
   */
  className?: string;
  /**
   * Component used for the root node. Either a string to use a HTML element or a component.
   */
  component?: string | ElementType;
}

export const CFormText = forwardRef<
  HTMLDivElement | HTMLSpanElement,
  CFormTextProps
>(({ children, className, component: Component = "div", ...rest }, ref) => {
  const _className = classNames("form-text", className);
  return (
    <Component className={_className} {...rest} ref={ref}>
      {children}
    </Component>
  );
});

CFormText.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  component: PropTypes.elementType,
};

CFormText.displayName = "CFormText";
