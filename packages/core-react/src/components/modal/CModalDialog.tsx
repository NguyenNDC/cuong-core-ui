import classNames from "classnames";
import PropTypes from "prop-types";
import type { HTMLAttributes } from "react";
import React, { forwardRef } from "react";

export interface CModalDialogProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Align the modal in the center or top of the screen.
   */
  alignment?: string;
  /**
   * A string of all className you want applied to the base component.
   */
  className?: string;
  /**
   * Set modal to covers the entire user viewport.
   */
  fullscreen?: string;
  /**
   * Does the modal dialog itself scroll, or does the whole dialog scroll within the window.
   */
  scrollable?: boolean;
  /**
   * Size the component small, large, or extra large.
   */
  size?: string;
}

export const CModalDialog = forwardRef<HTMLDivElement, CModalDialogProps>(
  (
    { children, alignment, className, fullscreen, scrollable, size, ...rest },
    ref
  ) => {
    const _className = classNames(
      alignment,
      fullscreen,
      className,
      scrollable,
      size
    );

    return (
      <div className={_className} {...rest} ref={ref}>
        {children}
      </div>
    );
  }
);

CModalDialog.propTypes = {
  alignment: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  fullscreen: PropTypes.string,
  scrollable: PropTypes.bool,
  size: PropTypes.string,
};

CModalDialog.displayName = "CModalDialog";
