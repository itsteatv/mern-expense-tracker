import "./index.css"
import Input from "./components/Input"
import Footer from "./components/Footer"
import { useEffect, useState } from "react"

function App() {

  const [theme, setTheme] = useState(localStorage.getItem("theme") ? localStorage.getItem("theme") : "system");
  const darkQuery = window.matchMedia("(prefers-color-scheme: dark)")
  console.log(darkQuery);

  const element = document.documentElement;

  const onWindowMatch = function () {
    if (localStorage.theme === "dark" ||
      (!("theme" in localStorage) && darkQuery.matches)
    ) {
      element.classList.add("dark");
    } else {
      element.classList.remove("dark");
    }
  }

  onWindowMatch();

  useEffect(() => {

    if (theme === 'dark') {
      element.classList.add('dark');
      element.classList.remove('light');
      localStorage.setItem('theme', 'dark');
    } else if (theme === 'light') {
      element.classList.add('light');
      element.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    } else {
      localStorage.removeItem('theme');
      onWindowMatch();
    }


  }, [theme, onWindowMatch]);

  darkQuery.addEventListener("change", (event) => {
    if (!("theme" in localStorage)) {
      if (event.matches) {
        element.classList.add('dark');
      } else {
        element.classList.remove('dark');
      }
    }
  })

  const options = [
    {
      icon: "sunny-outline",
      text: "light",
    },
    {
      icon: "moon-outline",
      text: "dark",
    },
    {
      icon: "desktop-outline",
      text: "system",
    },
  ]

  return (
    <main className="dark:bg-slate-900 dark:text-gray-100 duration-100">
      <div className="absolute top-5 right-10 dark:bg-slate-800 bg-gray-100 rounded">
        {
          options?.map((option) => (
            <button onClick={() => setTheme(option.text)} key={option.text} className={`w-8 h-8 leading-9 text-xl rounded-full m-1 ${theme === option.text && "text-sky-600"}`}>
              <ion-icon name={option.icon}></ion-icon>
            </button>
          ))
        }
      </div>
      <Input />
      <Footer />
    </main>
  )
}

export default App
