import { subjects } from '@/constants'

import React from 'react'
import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '../ui/form'

import { Path, UseFormReturn } from 'react-hook-form';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';

interface FormFieldSelectProps<T extends Record<string, any>> {
    placeholder: string;
    form: UseFormReturn<T>;
    name: Path<T>;
    label: string;
    description?: string;
    values: any[];
}

const FormFieldSelect = <T extends Record<string, any>>({
    form,
    name,
    label,
    description,
    values,
    placeholder
}: FormFieldSelectProps<T>) => {
    return (
        <FormField
            control={form.control}
            name={name}
            render={({ field }) => (
                <FormItem>
                    <FormLabel>{label}</FormLabel>
                    <FormControl>
                        <Select
                            onValueChange={field.onChange}
                            value={field.value}
                            defaultValue={field.value}
                        >
                            <SelectTrigger className="input capitalize">
                                <SelectValue placeholder={placeholder} />
                            </SelectTrigger>
                            <SelectContent>
                                {values.map((value) => (
                                    <SelectItem value={value} key={value} className='capitalize text-black'>
                                        {value}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </FormControl>
                    {description && <FormDescription>{description}</FormDescription>}
                    <FormMessage />
                </FormItem>
            )}
        />
    );
};
export default FormFieldSelect;