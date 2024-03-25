import Button from "next/link"
import Link from "next/link"

export default function Header() {

    return (
        <header className="sticky z-50 top-0 h-fit w-full bg-transparent py-6 px-4">
          <div className="sticky rounded-full bg-primary w-full grid grid-cols-2 h-full py-3">

            <div className="flex items-center justify-start ml-7 text-base sm:text-xl md:text-2xl lg:text-3xl font-bold">
              <Link href='/home'>The Grapevine Chronicles</Link>
            </div>

          

            <div className="flex items-center justify-end mr-4 text-sm md:text-base lg:text-2xl">
              <Link className="px-2 font-bold" href='/'>Log In</Link>
              <Button className="py-1 px-2 ml-2 bg-accent rounded-2xl font-bold" href='/'>Sign Up</Button>
              
            </div>

          </div>
        </header>
    )
}