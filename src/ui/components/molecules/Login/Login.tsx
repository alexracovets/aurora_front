"use client";

import { RiUserLine } from "react-icons/ri";

import { AtomButton, AtomLink, AtomText } from "@atoms";

export const Login = () => {
    return (
        <AtomButton variant="login" asChild>
            <AtomLink href="/sign_in">
                <RiUserLine />
                <AtomText variant="login"> Увійти</AtomText>
            </AtomLink>
        </AtomButton>
    );
};