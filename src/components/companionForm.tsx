
'use client'
import React from 'react'

import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import {
    Form,

} from "@/components/ui/form"

import FormFieldInput from './form fields/formFieldInput'
import { subjects } from '@/constants'
import FormFieldSelect from './form fields/formFieldSelect'
import FormFieldTextArea from './form fields/formFieldTextArea'
import { createCompanion } from '@/lib/actions/companion.actions'
import { redirect } from 'next/navigation'
import { toast } from 'sonner'
import { useFormStatus } from 'react-dom'

export interface Author {
    author: string
}

const formSchema = z.object({
    name: z.string().min(1, { message: "Companion is required" }),
    subject: z.string().min(1, { message: "Subject is required" }),
    topic: z.string().min(1, { message: "Topiic is required" }),
    voice: z.string().min(1, { message: "voice is required" }),
    style: z.string().min(1, { message: "Style is required" }),
    duration: z.coerce.number().min(1, { message: "Duration is required" }),
})
const CompanionForm = ({ userId }: { userId: string }) => {
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
    const { pending } = useFormStatus()

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        const companion = await createCompanion(values, { author: userId });
        if (companion) {
            toast.success("Companion created successfully")
            redirect(`companiions/${companion.id}`);
        }
        else {
            toast.error("Failed to create companion");
            console.log("Failed to create companion");
            // redirect("/");
        }
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

                <Button type="submit" className='w-full cursor-pointer'>{pending ? "Building..." : "Build Your Companion"}</Button>
            </form>
        </Form>
    )
}

export default CompanionForm