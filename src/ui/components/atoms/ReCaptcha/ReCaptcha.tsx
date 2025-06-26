"use client";

import React from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { cn } from "@utils";

interface ReCaptchaProps {
  siteKey: string;
  onChange?: (token: string | null) => void;
  className?: string;
}

export const ReCaptcha: React.FC<ReCaptchaProps> = ({ 
  siteKey, 
  onChange, 
  className 
}) => {
  return (
    <div className={cn("flex justify-center", className)}>
      <ReCAPTCHA
        sitekey={siteKey}
        onChange={onChange}
        theme="light"
        size="normal"

      />
    </div>
  );
}; 