
function Footer() {
    return (
        <footer className="fixed bottom-0 w-full" aria-labelledby="footer-heading">
            <h2 id="footer-heading" className="sr-only">Footer</h2>

            <div className="px-4 py-5 mx-auto max-w-7xl sm:px-6 lg:px-16">
                <div className="flex flex-wrap items-baseline justify-center lg:justify-center">
                    <span className="text-sm font-light text-gray-500">
                        Copyright © 2023 - 2024
                        <a href="https://wickedlabs.dev" className="mx-2 text-wickedblue hover:text-gray-500" rel="noopener noreferrer">@itsteatv</a>. Since 2023
                    </span>
                </div>
            </div>
        </footer>

    )
}

export default Footer
