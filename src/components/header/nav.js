import Link from 'next/link';

function Nav() {
    return (
        <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <Link rel="stylesheet" href="/about"><a class="mr-5 hover:text-gray-900">About</a></Link>
            <Link rel="stylesheet" href="/events"><a class="mr-5 hover:text-gray-900">Events</a></Link>
            <Link rel="stylesheet" href="/contact-us"><a class="mr-5 hover:text-gray-900">Contact Us</a></Link>
        </nav>
    )
}

export default Nav;