
'use client'
import React from 'react'

import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { minLength } from 'zod/v4'
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import FormFieldInput from './form fields/formFieldInput'
import { subjects } from '@/constants'
import FormFieldSelect from './form fields/formFieldSelect'
import FormFieldTextArea from './form fields/formFieldTextArea'

const formSchema = z.object({
    name: z.string().min(1, { message: "Companion is required" }),
    subject: z.string().min(1, { message: "Subject is required" }),
    topic: z.string().min(1, { message: "Topiic is required" }),
    voice: z.string().min(1, { message: "voice is required" }),
    style: z.string().min(1, { message: "Style is required" }),
    duration: z.coerce.number().min(1, { message: "Duration is required" }),
})
const CompanionForm = () => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            subject: "",
            topic: "",
            voice: "",
            style: "",
            duration: 15

        },
    })

    const onSubmit = (values: z.infer<typeof formSchema>) => {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values)
    }
    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormFieldInput name={"name"} placeholder={'Enter the companion name'} label={'Companion Name'} form={form} />

                <FormFieldSelect
                    form={form}
                    name="subject"
                    label='Subject'
                    placeholder="Select the subject"
                    values={subjects}
                />

                <FormFieldTextArea name={"topic"} placeholder={'Ex. Derivatives & Integrals'} label={'What should the companion help with'} form={form} />
                <FormFieldSelect
                    form={form}
                    name="voice"
                    label='Voice'
                    placeholder="Select the voice"
                    values={["male", "female"]}
                />
                <FormFieldSelect
                    form={form}
                    name="style"
                    label='Style'
                    placeholder="Select the style"
                    values={["formal", "informal"]}
                />
                <FormFieldInput type='number' name={"duration"} placeholder={'Estimated session duration in minutes'} label={'Duration'} form={form} />

                <Button type="submit" className='w-full cursor-pointer'>Build Your Companion</Button>
            </form>
        </Form>
    )
}

export default CompanionForm