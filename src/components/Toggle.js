import React from 'react'
import localdb from '../utils/localdb'
import { ReactComponent as Sun } from '../utils/assets/sun.svg'
import { ReactComponent as Moon } from '../utils/assets/moon.svg'
import useDarkMode from '../hooks/useDarkMode'

const Toggle = () => {
  const [colorTheme, setTheme] = useDarkMode()
  const handleTheme = () => {
    setTheme(colorTheme)
    localdb.setTheme(colorTheme)
  }
  return (
    <div>
      <div className="block md:hidden">
        <div className="flex justify-end items-center space-x-2">
          <div>
            <input type="checkbox" name="" id="toggle" className="hidden" />
            <span
              className="relative w-14 h-7 flex items-center shadow-lg bg-gray-300 dark:bg-gray-300 rounded-full p-1 cursor-pointer"
              onClick={() => handleTheme()}
            >
              <Sun className="absolute left-1 h-6 w-6 transition duration-500 text-gray-800 text-opacity-0 dark:text-opacity-100" />
              <div
                className={
                  colorTheme === 'light'
                    ? 'w-6 h-6 bg-blue-800 rounded-full shadow-md transition duration-500 transform translate-x-6 '
                    : 'w-6 h-6 bg-blue-800 rounded-full shadow-md transition duration-500'
                }
              ></div>
              <Moon className="absolute right-1 h-5 w-5 transition duration-500 text-gray-800 text-opacity-100 dark:text-opacity-0" />
            </span>
          </div>
        </div>
      </div>
      <div className="hidden md:block">
        <div className="flex justify-end items-center space-x-2">
          <Sun className="h-6 w-6 transition duration-500 dark:text-gray-300" />
          <div>
            <input type="checkbox" name="" id="toggle" className="hidden" />
            <span
              className="w-9 h-5 flex items-center shadow-lg bg-gray-300 dark:bg-gray-300 rounded-full p-1 cursor-pointer"
              onClick={() => handleTheme()}
            >
              <div
                className={
                  colorTheme === 'light'
                    ? 'w-4 h-4 bg-blue-800 rounded-full shadow-md transition duration-100 transform translate-x-3'
                    : 'w-4 h-4 bg-blue-800 rounded-full shadow-md transition duration-100'
                }
              ></div>
            </span>
          </div>
          <Moon className="h-5 w-5 transition duration-500 dark:text-gray-300 " />
        </div>
      </div>
    </div>
  )
}

export default Toggle
