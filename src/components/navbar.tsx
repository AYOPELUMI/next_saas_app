'use client' // Add this at the top if not already present

import Link from 'next/link'
import { SignedOut, SignInButton, SignedIn, UserButton } from '@clerk/nextjs'
import NavItems from './navItem'

const Navbar = () => {
    return (
        <nav className='navbar'>
            <Link href="/">
                <div className='flex items-center gap-2.5 cursor-pointer'>
                    <img
                        src="/images/logo.svg"
                        alt='logo'
                        className='size-11'
                    />
                </div>
            </Link>

            <div className="flex items-center gap-8">
                <NavItems />
                <div className="flex items-center gap-2">
                    <SignedIn>
                        <UserButton afterSignOutUrl="/" />
                    </SignedIn>
                    <SignedOut>
                        <SignInButton>
                            <button className="btn-signin">Sign In</button>
                        </SignInButton>
                    </SignedOut>
                </div>
            </div>
        </nav>
    )
}

export default Navbar