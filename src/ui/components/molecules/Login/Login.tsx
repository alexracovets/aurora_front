"use client";

import { RiUserLine } from "react-icons/ri";

import { AtomButton, AtomText } from "@atoms";

export const Login = () => {
    return (
        <AtomButton variant="login">
            <RiUserLine />
            <AtomText variant="login"> Увійти</AtomText>
        </AtomButton>
    );
};