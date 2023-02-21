import classNames from "classnames";
import PropTypes from "prop-types";
import type { ChangeEventHandler, InputHTMLAttributes } from "react";
import React, { forwardRef, useCallback, useRef, useState } from "react";

import { CloseBg, Eye, EyeHidden } from "../public/icons";
import type { CFormControlWrapperProps } from "./CFormControlWrapper";
import { CFormControlWrapper } from "./CFormControlWrapper";

export interface CFormInputProps
  extends CFormControlWrapperProps,
    Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
  className?: string;
  disabled?: boolean;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  size?: "small" | "medium" | "large";
  type?: "color" | "file" | "text" | string;
  value?: string | string[] | number;
  right?: React.ReactNode;
  left?: React.ReactNode;
  hiddenClose?: boolean;
}

export const CFormInput = forwardRef<HTMLInputElement, CFormInputProps>(
  (
    {
      children,
      className,
      feedback,
      feedbackInvalid,
      feedbackValid,
      floatingLabel,
      id,
      invalid,
      label,
      onChange,
      size = "medium",
      type = "text",
      valid,
      right,
      left,
      hiddenClose = false,
      ...rest
    },
    ref
  ) => {
    const inputRef = useRef<HTMLInputElement | null>(null);
    const [typeInput, setTypeInput] = useState(type);
    const [isShow, setIsShow] = useState(false);
    const [reset, setReset] = useState(false);

    const _className = classNames(size, className);

    const setOnchangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
      return onChange && onChange(event);
    };

    const setInputRef = useCallback(
      (inputElement: HTMLInputElement | null) => {
        inputRef.current = inputElement;

        if (!ref) {
          return;
        }

        if (typeof ref === "object") {
          ref.current = inputElement;
        }

        if (typeof ref === "function") {
          ref(inputElement);
        }
      },
      [ref]
    );

    const onHandleResetValue = () => {
      if (inputRef && inputRef.current) {
        inputRef.current.value = "";
        setReset(false);
      }
    };

    const onHandleChangeType = () => {
      setTypeInput(() => (isShow ? "password" : "text"));
      setIsShow((prev) => !prev);
    };

    const onHandleKeyUp = (event: any) => {
      if (event.target.value !== "") {
        setReset(true);
      } else {
        setReset(false);
      }
    };

    return (
      <CFormControlWrapper
        describedby={rest["aria-describedby"]}
        feedback={feedback}
        feedbackInvalid={feedbackInvalid}
        feedbackValid={feedbackValid}
        floatingLabel={floatingLabel}
        id={id}
        invalid={invalid}
        label={label}
        valid={valid}
      >
        <div
          className={classNames(
            _className,
            rest.disabled && "form-disable",
            feedbackInvalid && "form-error dropdown-shadow-error shadow-error",
            !rest.disabled &&
              !feedbackInvalid &&
              "form-normal dropdown-shadow-normal",
            size === "small" && "form-input-small",
            size === "medium" && "form-input-medium",
            size === "large" && "form-input-large",
            "rounded-lg flex items-center"
          )}
        >
          {left}
          <input
            className={classNames(
              `form-input`,
              rest.disabled ? `text-ic-black-7` : `text-ic-ink-6`
            )}
            id={id}
            type={typeInput}
            onChange={setOnchangeInput}
            {...rest}
            ref={setInputRef}
            onKeyUp={onHandleKeyUp}
          >
            {children}
          </input>
          {hiddenClose === false && reset === true && (
            <CloseBg onClick={onHandleResetValue} />
          )}
          {type === "password" &&
            (isShow ? (
              <EyeHidden
                className="ml-2 cursor-pointer"
                onClick={onHandleChangeType}
              />
            ) : (
              <Eye
                className="ml-2 cursor-pointer"
                onClick={onHandleChangeType}
              />
            ))}
          {right}
        </div>
      </CFormControlWrapper>
    );
  }
);

CFormInput.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string,
  size: PropTypes.oneOf(["small", "medium", "large"]),
  disabled: PropTypes.bool,
  type: PropTypes.oneOfType([
    PropTypes.oneOf(["color", "file", "text"]),
    PropTypes.string,
  ]),
  ...CFormControlWrapper.propTypes,
};

CFormInput.displayName = "CFormInput";
