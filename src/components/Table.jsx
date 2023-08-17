
function Table() {
    return (
        <>
            <article
                className="flex flex-col gap-4 rounded-lg border border-gray-100 bg-white p-6 mt-6 dark:border-gray-800 dark:bg-gray-900"
            >
                <div
                    className="inline-flex gap-2 self-end rounded bg-green-100 p-1 text-green-600 dark:bg-green-700 dark:text-green-50"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                        />
                    </svg>

                    <span className="text-xs font-medium"> +$400 </span>
                </div>

                <div>
                    <strong className="block text-sm font-medium text-gray-500 dark:text-gray-400"> New Samsung TV </strong>

                    <p>
                        <span className="text-2xl font-medium text-gray-900 dark:text-white"> it's time for new tv  </span>

                        <span className="text-xs text-gray-500 dark:text-gray-400"> 2023-10-24 10:45 </span>
                    </p>
                </div>
            </article>

            <article
                className="flex flex-col gap-4 rounded-lg border border-gray-100 bg-white p-6 mt-6 dark:border-gray-800 dark:bg-gray-900"
            >
                <div className="inline-flex gap-2 self-end rounded bg-red-100 p-1 text-red-600 dark:bg-red-700 dark:text-red-50">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6"
                        />
                    </svg>

                    <span className="text-xs font-medium"> -$900 </span>
                </div>

                <div>
                    <strong className="block text-sm font-medium text-gray-500 dark:text-gray-400"> new laptop </strong>

                    <p>
                        <span className="text-2xl font-medium text-gray-900 dark:text-white"> time for new laptop </span>

                        <span className="text-xs text-gray-500 dark:text-gray-400"> 2022-1-29 1:30 </span>
                    </p>
                </div>
            </article>
        </>
    )
}

export default Table
