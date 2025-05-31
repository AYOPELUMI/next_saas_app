"use server"

import { auth } from "@clerk/nextjs/server"
import { createSupabaseClient } from "../supabase";

export const createCompanion = async (foemData: Companion) => {
    const { userId: author } = await auth();
    const supabase = createSupabaseClient();
    const { data, error } = await supabase.from("companions").insert({ ...FormData, author }).select();

    if (error || !data) {
        throw new Error(error?.message ?? "Failed to a create Companion");

    }
    return data[0];
}