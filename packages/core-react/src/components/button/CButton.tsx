import classNames from "classnames";
import PropTypes from "prop-types";
import type { ButtonHTMLAttributes, ElementType } from "react";
import React, { forwardRef } from "react";

import { CLink } from "../link/CLink";
import { LoadingBtn } from "../public/icons";

export interface CButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  active?: boolean;
  className?: string;
  color?: "1st" | "2nd" | "1st_danger" | "2nd_danger" | "3rd";
  component?: string | ElementType;
  disabled?: boolean;
  href?: string;
  role?: string;
  size?: "light" | "normal" | "medium" | "semibold" | "bold";
  type?: "button" | "submit" | "reset";
  isLoading?: boolean;
  sizeLoading?: number;
}

export const CButton = forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  CButtonProps
>(
  (
    {
      children,
      className,
      color = "1st",
      component = "button",
      size = "normal",
      type = "button",
      isLoading = false,
      sizeLoading,
      ...rest
    },
    ref
  ) => {
    const _className = classNames(
      className,
      isLoading && `button-${color}-loading`,
      !isLoading && rest.disabled && `button-${color}-disable`,
      !isLoading && !rest.disabled && `button-${color}-default`,
      `button-size-${size}`,
      "flex justify-center rounded-lg"
    );

    const _colorIconLoading = {
      "1st": "white",
      "1st_danger": "white",
      "2nd": "#85a5ff",
      "2nd_danger": "#ff7875",
      "3rd": "#999999",
    };

    const colorLoading = _colorIconLoading[color]
      ? _colorIconLoading[color]
      : "white";

    const RenderLoading = (
      <>
        {component !== "a" && isLoading && rest.disabled && (
          <LoadingBtn
            size={sizeLoading}
            className="mr-2"
            color={colorLoading}
          />
        )}
      </>
    );

    return (
      <CLink
        component={rest.href ? "a" : component}
        type={type}
        className={_className}
        isLoading={RenderLoading}
        {...rest}
        ref={ref}
      >
        {children}
      </CLink>
    );
  }
);

CButton.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  color: PropTypes.oneOf(["1st", "2nd", "1st_danger", "2nd_danger", "3rd"]),
  component: PropTypes.elementType,
  size: PropTypes.oneOf(["light", "normal", "medium", "semibold", "bold"]),
  type: PropTypes.oneOf(["button", "submit", "reset"]),
  isLoading: PropTypes.bool,
  disabled: PropTypes.bool,
  sizeLoading: PropTypes.number,
};

CButton.displayName = "CButton";
