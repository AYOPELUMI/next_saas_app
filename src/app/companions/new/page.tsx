

// 'use client'
import CompanionForm from '@/components/companionForm'
// import { useUser } from '@clerk/nextjs'
import { auth } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation'
import React from 'react'

const NewCompanion = async () => {
    const authData = await auth();
    console.log({ authData })
    // const { user } = useUser()

    // if (!user?.id) {
    if (!authData.userId) {
        redirect('/sign-in')
    }
    return (
        <main className='min-l:w-1/3 min-md:w-2/3 items-center justify-center '>
            <article className='w-full gap-4 flex flex-col'>
                <h1>Companion Builder</h1>

                <CompanionForm userId={authData.userId} />
            </article>

        </main>
    )
}

export default NewCompanion