import { InputContainer } from "./style";

import React, { InputHTMLAttributes, useCallback } from "react";
import { currencyMask, installmentsMask, mdrMask } from "./masks";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  mask: "currency" | "mdr" | "installments";
  prefix?: string;
}

const Input: React.FC<InputProps> = React.forwardRef(
  ({ mask, prefix, ...rest }, ref) => {
    const handleKeyUp = useCallback((e: React.FormEvent<HTMLInputElement>) => {
      if (mask === "currency") {
        currencyMask(e);
      } else if (mask === "mdr") {
        mdrMask(e);
      } else if (mask === "installments") {
        installmentsMask(e);
      } else {
        return e;
      }
    }, []);

    return (
      <InputContainer>
        {prefix && <span>{prefix}</span>}
        <input {...rest} onKeyUp={handleKeyUp} />
      </InputContainer>
    );
  }
);

export default Input;
