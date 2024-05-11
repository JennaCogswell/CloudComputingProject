export default function Footer() {

    return (
        <footer className="relative inset-x-0 bottom-0 h-fit w-full bg-transparent px-2 md:px-5 py-7 lg:px-8">
          <div className="relative rounded-full bg-secondary w-full h-full grid grid-cols-3 py-3 px-6 text-sm">

          <div className="flex items-center justify-start text-left text-xl">
              The Grapevine Chronicles
            </div>

            <div className="flex items-center justify-center text-center text-xl">
              <div>By: Jenna Cogswell</div>
              
            </div>

            <div className="flex items-center justify-end text-right text-xl">
              CSCI 4145 Winter 2024
            </div>

          </div>
        </footer>
    )
}