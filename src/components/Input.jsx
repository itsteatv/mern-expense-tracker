
function Input() {
    return (
        <section className="">
            <div className=" items-center px-5 py-12 lg:px-20">
                <div className="flex flex-col w-full max-w-md p-10 mx-auto my-6 transition duration-500 ease-in-out transhtmlForm dark:bg-slate-900 dark:text-gray-100 rounded-lg md:mt-0">
                    <div className="mt-8">
                        <div className="mt-6">
                            <div className="space-y-6">
                                <div>
                                    <label htmlFor="product" className="block text-sm font-medium text-neutral-600"> Product & Price </label>
                                    <div className="mt-1">
                                        <input id="product" name="product" type="text" required="" placeholder="+100 laptop" className="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transhtmlForm border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300 dark:bg-slate-800 dark:text-gray-100 dark:placeholder-gray-100"></input>
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="data" className="block text-sm font-medium text-neutral-600"> Product & Price </label>
                                    <div className="mt-1">
                                        <input id="data" name="data" type="datetime-local" required="" className="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transhtmlForm border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300 dark:bg-slate-800 dark:text-gray-100"></input>
                                    </div>
                                </div>

                                <div className="space-y-1">
                                    <label htmlFor="description" className="block text-sm font-medium text-neutral-600"> Description </label>
                                    <div className="mt-1">
                                        <input id="description" name="description" type="text" required="" placeholder="description" className="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transhtmlForm border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300 dark:bg-slate-800 dark:text-gray-100 dark:placeholder-pink-100"></input>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Input
