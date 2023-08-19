import { useEffect, useState } from "react"

function Table({ onBalanceChange }) {

    const [transactions, setTransactions] = useState([]);

    useEffect(() => {
        getTransactions();
    }, []);

    const getTransactions = async function () {
        const url = import.meta.env.VITE_REACT_APP_API_URL + "/transaction";

        try {
            const response = await fetch(url);

            if (!response.ok) {
                console.error("Request failed with status:", response.status);
                return;
            }

            const data = await response.json();
            setTransactions(data);

            let balance = 0;
            for (const transaction of data) {
                balance += transaction.price;
            }
            balance = balance.toFixed(2);
            onBalanceChange(balance);
        } catch (error) {
            console.error("An error occurred:", error);
        }
    };

    return (
        <>
            {transactions.map((transaction) => (
                <article
                    key={transaction._id} // Assuming MongoDB _id field is present
                    className="flex flex-col gap-4 rounded-lg border border-gray-100 bg-white p-6 mt-6 dark:border-gray-800 dark:bg-gray-900"
                >
                    <div
                        className={`inline-flex gap-2 self-end rounded ${transaction.price >= 0
                            ? "bg-green-100 text-green-600 dark:bg-green-700 dark:text-green-50"
                            : "bg-red-100 text-red-600 dark:bg-red-700 dark:text-red-50"
                            } p-1`}
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
                                d={
                                    transaction.price >= 0
                                        ? "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                                        : "M13 17h8m0 0V9m0 8l-8-8-4 4-6-6"
                                }
                            />
                        </svg>

                        <span className="text-xs font-medium">
                            {transaction.price >= 0 ? `+$${transaction.price}` : `-$${-transaction.price}`}
                        </span>
                    </div>

                    <div>
                        <strong className="block text-sm font-medium text-gray-500 dark:text-gray-400">
                            {transaction.name}
                        </strong>

                        <p>
                            <span className="text-2xl font-medium text-gray-900 dark:text-white">
                                {transaction.description}
                            </span>

                            <span className="text-xs text-gray-500 dark:text-gray-400">
                                {new Date(transaction.dateTime).toLocaleString()}
                            </span>
                        </p>
                    </div>
                </article>
            ))}

        </>
    )
}

export default Table
