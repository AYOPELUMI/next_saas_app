import Link from 'next/link'
import React from 'react'

const CTA = () => {
    return (
        <section className='cta-section'>
            <div className=' sta-badge'> Start learning your way</div>
            <h2 className='font-bold text-3xl'>Build and Personalize Learning Companion</h2>
            <p>Pick a name, subject, voice personality - and start learning throuch voice conversations that feels natural and fun</p>
            <img src="/images/cta.svg" alt="cta" width={362} height={232} />
            <button className='btn-primary'>
                <img src="/icons/plus.svg" alt="plus" width={12} height={12} />

                <Link href={'/companions/new'}>
                    <p>
                        Build a New Companion</p></Link>
            </button>
        </section>
    )
}

export default CTA