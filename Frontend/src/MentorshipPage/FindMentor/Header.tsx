export default function Header() {
    return (
        <>
            {/* <div className="container mx-auto w-5/6">
                <h1>
                    <div className="text-3xl font-bold leading-normal inline box-decoration-clone bg-slate-500 text-gray-100 p-4 [filter:url('#goo')]">Find your Mentors</div>
                </h1>
                <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
                    <defs>
                        <filter id="goo"><feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
                            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="goo" />
                            <feComposite in="SourceGraphic" in2="goo" operator="atop" />
                        </filter>
                    </defs>
                </svg>
            </div> */}
            <div className="text-left mt-3">
                <h1 className="text-3xl font-bold leading-normal inline text-gray-800 p-4">Find your <span className="text-blue-800">Mentors</span></h1>
            </div>
        </>
    )
}
