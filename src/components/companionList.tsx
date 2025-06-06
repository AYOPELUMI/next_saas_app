'use client'
import React from 'react'
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { cn, getSubjectColor } from '@/lib/utils';
import Link from 'next/link';

interface CompanionListProp {
    title: string;
    companions: Companion[];
    className: string
}

const CompanionList = ({ title, companions, className }: CompanionListProp) => {
    return (
        <article className={cn("companion-list", className)}>
            <h2 className='text-3xl font-bold'>Recent Session</h2>

            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-2/3 text-lg">Lesson</TableHead>
                        <TableHead className='text-lg'>Subject</TableHead>
                        <TableHead className='text-lg text-right'>Duration</TableHead>

                    </TableRow>
                </TableHeader>
                <TableBody>
                    {companions.map((companion) => (
                        <TableRow key={companion.id}>
                            <TableCell className="font-medium">
                                <Link href={`companions/${companion.id}`}>
                                    <div className='flex items-center gap-2'>
                                        <div className='size-[72px] flex items-center justify-center rounded-lg max-md:hidden' style={{
                                            backgroundColor: getSubjectColor(companion.subject)
                                        }}>
                                            <img src={`/images/${companion.subject}`} alt={companion.subject} width={35} height={35} />
                                        </div>
                                        <div className='flex flex-col gap-2'>
                                            <p className='font-bold text-2xl'>{companion.name}</p>
                                            <p className="text-lg">{companion.topic}</p>
                                        </div>
                                    </div>
                                </Link>
                            </TableCell>
                            <TableCell>
                                <div className='subject-badge w-fit max-md:hidden'>
                                    {companion.subject}

                                </div>
                                <div className='flex items-center justify-center rounded-lg w-fit p-2 md:hidden' style={{
                                    backgroundColor: getSubjectColor(companion.subject)
                                }}>
                                    <img src={`/icons/${companion.subject}.svg`} alt={companion.subject} width={18} height={18} />
                                </div>
                            </TableCell>
                            <TableCell>
                                <div className='p-2 flex gap-2 justify-end items-center w-full'>

                                    <p className='text-2xl'>{companion.duration} {''}

                                        <span className='max-md:hidden'>mins</span>
                                    </p>
                                    <img src="/icons/clock.svg" alt="clock" width={14} height={14} className="md:hidden" />
                                </div>
                            </TableCell>
                        </TableRow>
                    ))}                </TableBody>            </Table>

        </article>
    )
}
export default CompanionList