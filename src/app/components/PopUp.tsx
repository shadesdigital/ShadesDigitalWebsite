import React from 'react'

export default function PopUp() {
  return (
    <div className="space-y-2 p-3 ">
              <h3 className="font-semibold text-gray-900 dark:text-white">Must have at least 6 characters</h3>
              <div className="grid grid-cols-4 gap-2">
                <div className="h-1 bg-orange-300 dark:bg-orange-400"></div>
                <div className="h-1 bg-orange-300 dark:bg-orange-400"></div>
                <div className="h-1 bg-gray-200 dark:bg-gray-600"></div>
                <div className="h-1 bg-gray-200 dark:bg-gray-600"></div>
              </div>
              <p>It’s better to have:</p>
              <ul>
                <li className="mb-1 flex items-center">
                  <svg
                    className="me-2 h-3.5 w-3.5 text-green-400 dark:text-green-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 16 12"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 5.917 5.724 10.5 15 1.5"
                    />
                  </svg>
                  Upper & lower case letters
                </li>
                <li className="mb-1 flex items-center">
                  <svg
                    className="me-2.5 h-3 w-3 text-gray-300 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                    />
                  </svg>
                  A symbol (#$&)
                </li>
                <li className="flex items-center">
                  <svg
                    className="me-2.5 h-3 w-3 text-gray-300 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                    />
                  </svg>
                  A longer password (min. 12 chars.)
                </li>
              </ul>
            </div>
  )
}
