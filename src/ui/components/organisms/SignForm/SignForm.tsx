"use client"

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage, AtomButton, Input } from "@atoms";

const formSchema = z.object({
    phone: z.string().min(10).max(10),
})

export const SignForm = () => {

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            phone: "",
        },
    })

    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values)
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="flex justify-start items-center gap-x-[24px] my-[24px]">
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
                <AtomButton type="submit" variant="form">Далі</AtomButton>
            </form>
        </Form>
    );
};