"use client"

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useState } from "react";

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage, AtomButton, Input, ReCaptcha } from "@atoms";

const formSchema = z.object({
    phone: z.string().min(10).max(10),
    recaptcha: z.string().min(1, "Будь ласка, підтвердіть, що ви не робот"),
})

export const SignForm = () => {
    const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            phone: "",
            recaptcha: "",
        },
    })

    const handleRecaptchaChange = (token: string | null) => {
        setRecaptchaToken(token);
        form.setValue("recaptcha", token || "");
        
        if (token) {
            form.clearErrors("recaptcha");
        }
    };

    async function onSubmit(values: z.infer<typeof formSchema>) {
        if (!recaptchaToken) {
            form.setError("recaptcha", {
                type: "manual",
                message: "Будь ласка, підтвердіть, що ви не робот"
            });
            return;
        }

        setIsSubmitting(true);

        try {
            const recaptchaResponse = await fetch('/api/verify-recaptcha', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ token: recaptchaToken }),
            });

            const recaptchaData = await recaptchaResponse.json();

            if (!recaptchaResponse.ok) {
                form.setError("recaptcha", {
                    type: "manual",
                    message: recaptchaData.error || "Помилка перевірки reCAPTCHA"
                });
                return;
            }

            console.log("Form values:", values);
            console.log("reCAPTCHA verification successful");
            form.reset();
            setRecaptchaToken(null);
            alert("Форму успішно відправлено!");

        } catch (error) {
            console.error('Помилка при відправці форми:', error);
            form.setError("recaptcha", {
                type: "manual",
                message: "Помилка при відправці форми. Спробуйте ще раз."
            });
        } finally {
            setIsSubmitting(false);
        }
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col items-start gap-y-[24px] my-[24px]">
                <div className="flex justify-start items-center gap-x-[24px]" >
                    <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                            <FormItem className="flex justify-start items-center gap-x-[24px]">
                                <FormLabel className="whitespace-nowrap text-[20px] font-semibold">Введіть Ваш номер телефону :</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="+380 (ХХ) 123 45 67"
                                        className="text-[16px]"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <AtomButton
                        type="submit"
                        variant="form"
                        className="self-start"
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? "Відправляємо..." : "Далі"}
                    </AtomButton>
                </div>
                <FormField
                    control={form.control}
                    name="recaptcha"
                    render={({ field }) => (
                        <FormItem>
                            <ReCaptcha
                                siteKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || "your_site_key_here"}
                                onChange={handleRecaptchaChange}
                                className="mt-[16px]"
                            />
                            <FormMessage />
                        </FormItem>
                    )}
                />
            </form>
        </Form>
    );
};