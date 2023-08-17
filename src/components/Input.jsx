import { useState } from "react"
import Table from "./Table"

function Input() {
    const [name, setName] = useState("");
    const [dateTime, setDateTime] = useState("");
    const [description, setDescription] = useState("");

    const addNewTransaction = async function (event) {
        event.preventDefault();

        const url = import.meta.env.VITE_REACT_APP_API_URL + "/transaction";

        try {
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name, description, dateTime
                }),
            });

            if (!response.ok) {
                console.error("Request failed with status:", response.status);
                return;
            }

            const responseData = await response.json();
            console.log(responseData);
        } catch (error) {
            console.error("An error occurred:", error);
        }
    }


    return (
        <>
            <section>
                <form onSubmit={addNewTransaction} className="items-center px-5 py-12 lg:px-20">
                    <div className="flex flex-col w-full max-w-md mx-auto my-6 transition duration-100 ease-in-out transhtmlForm dark:bg-slate-900 dark:text-gray-100 rounded-lg md:mt-0">
                        <div className="mt-8">
                            <div className="mt-6">
                                <div className="space-y-6">
                                    <div>
                                        <h1 className=" text-clamp mb-8 text-center text-3xl font-extrabold text-neutral-600 dark:text-gray-100 duration-100">$400.00</h1>
                                        <label htmlFor="name" className="block text-sm font-medium text-neutral-600"> Product & Price </label>
                                        <div className="mt-1">
                                            <input autoComplete="off" value={name} onChange={e => setName(e.target.value)} id="name" name="name" type="text" required="" placeholder="+100 laptop" className="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-100 ease-in-out transhtmlForm border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300 dark:bg-slate-800 dark:text-gray-100 dark:placeholder-gray-100"></input>
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="dateTime" className="block text-sm font-medium text-neutral-600"> Date </label>
                                        <div className="mt-1">
                                            <input autoComplete="off" value={dateTime} onChange={e => setDateTime(e.target.value)} id="dateTime" name="dateTime" type="datetime-local" required="" className="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-100 ease-in-out transhtmlForm border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300 dark:bg-slate-800 dark:text-gray-100"></input>
                                        </div>
                                    </div>

                                    <div className="space-y-1">
                                        <label htmlFor="description" className="block text-sm font-medium text-neutral-600"> Description </label>
                                        <div className="mt-1">
                                            <input autoComplete="off" value={description} onChange={e => setDescription(e.target.value)} id="description" name="description" type="text" required="" placeholder="description" className="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-100 ease-in-out transhtmlForm border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300 dark:bg-slate-800 dark:text-gray-100 dark:placeholder-pink-100"></input>
                                        </div>
                                    </div>
                                    <div>
                                        <button type="submit" className="flex items-center justify-center w-full px-10 py-4 text-base font-medium text-center text-white transition duration-100 ease-in-out transform bg-blue-600 rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">Add new transaction</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* TABLE */}
                        <Table />
                    </div>
                </form>
            </section>
        </>
    )
}

export default Input
