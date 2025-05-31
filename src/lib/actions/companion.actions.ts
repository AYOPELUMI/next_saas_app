"use server"

import { auth } from "@clerk/nextjs/server"
import { createSupabaseClient } from "../supabase";
import { Author } from "@/components/companionForm";

export const createCompanion = async (formData: CreateCompanion, userId: Author) => {

    const supabase = createSupabaseClient();
    console.log({ userId })
    const { data, error } = await supabase
        .from('companions')
        .insert({ ...formData, ...userId })
        .select().single();

    if (error) throw new Error(error?.message || 'Failed to create a companion');

    return data[0];
}