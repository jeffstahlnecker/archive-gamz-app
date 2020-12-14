import React from 'react'
import { Transition } from '@headlessui/react'
import { Link } from 'react-router-dom'
import { IconX, IconMenu } from './Icons'
import { MainMenu } from './constants/Menu'

interface SidebarProps {
  view: string
  setView: (v: string) => void
}

const Sidebar: React.FC<SidebarProps> = ({ children, view, setView }) => {
  const [showMenu, setShowMenu] = React.useState<boolean>(false)

  const activeMobileLink =
    'bg-gray-900 text-white group flex items-center px-2 py-2 text-base font-medium rounded-md focus:outline-none'
  const mobileLink =
    'text-gray-300 hover:bg-gray-700 hover:text-white group flex items-center px-2 py-2 text-base font-medium rounded-md focus:outline-none'
  const activeDesktopLink =
    'bg-gray-900 text-white group flex items-center px-2 py-2 text-sm font-medium rounded-md focus:outline-none'
  const desktopLink =
    'text-gray-300 hover:bg-gray-700 hover:text-white group flex items-center px-2 py-2 text-sm font-medium rounded-md focus:outline-none'

  return (
    <div className="h-screen flex overflow-hidden bg-gray-100">
      {/*! --Off - canvas menu for mobile, show/hide based on off-canvas menu state. --*/}
      <div className={showMenu ? 'md:hidden' : 'hidden'}>
        <div className="fixed inset-0 flex z-40">
          <Transition
            show={showMenu}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            {(ref) => (
              <div ref={ref} className="fixed inset-0">
                <div className="absolute inset-0 bg-gray-600 opacity-75" />
              </div>
            )}
          </Transition>
          <Transition
            show={showMenu}
            enter="transition ease-in-out duration-300 transform"
            enterTo="translate-x-0"
            enterFrom="-translate-x-full"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
          >
            {(ref) => (
              <div
                ref={ref}
                className="relative flex-1 flex flex-col max-w-xs w-full bg-gray-800"
              >
                <div className="absolute top-0 right-0 -mr-12 pt-2">
                  <button
                    onClick={() => setShowMenu(false)}
                    type="button"
                    className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                  >
                    <span className="sr-only">Close sidebar</span>
                    <IconX />
                  </button>
                </div>
                <div className="flex-1 h-0 pt-5 pb-4 overflow-y-auto">
                  <div className="flex-shrink-0 flex items-center px-4">
                    <img
                      className="h-8 w-auto"
                      src="https://d33wubrfki0l68.cloudfront.net/2e4761581d2d2b2e228bd25e1550fae994f140a2/e92d6/images/mxc_logo-social.svg"
                      alt="MXC Support"
                    />
                  </div>
                  <nav className="mt-5 px-2 space-y-1">
                    {/* // <!-- Current: "bg-gray-900 text-white",
                  Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}

                    {MainMenu.map((item) => {
                      return (
                        <Link
                          to={item.route}
                          onClick={() => setView(item.route)}
                          key={item.title}
                          className={
                            item.route === view ? activeMobileLink : mobileLink
                          }
                        >
                          {/* // <!-- Current: "text-gray-300",
                    Default: "text-gray-400 group-hover:text-gray-300" --> */}
                          {item.icon}
                          {item.title}
                        </Link>
                      )
                    })}
                  </nav>
                </div>
                <div className="flex-shrink-0 flex bg-gray-700 p-4">
                  <a href="/" className="flex-shrink-0 group block">
                    <div className="flex items-center">
                      <div>
                        <img
                          className="inline-block h-10 w-10 rounded-full"
                          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                          alt=""
                        />
                      </div>
                      <div className="ml-3">
                        <p className="text-base font-medium text-white">
                          Tom Cook
                        </p>
                        <p className="text-sm font-medium text-gray-400 group-hover:text-gray-300">
                          View profile
                        </p>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            )}
          </Transition>
          <div className="flex-shrink-0 w-14">
            {/* // <!-- Force sidebar to shrink to fit close icon --> */}
          </div>
        </div>
      </div>

      {/* // <!-- Static sidebar for desktop --> */}
      <div className="hidden md:flex md:flex-shrink-0">
        <div className="flex flex-col w-64">
          {/* // <!-- Sidebar component, swap this element with another sidebar if you like --> */}
          <div className="flex flex-col h-0 flex-1 bg-gray-800">
            <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
              <div className="flex items-center flex-shrink-0 px-4">
                <img
                  className="h-8 w-auto"
                  src="https://d33wubrfki0l68.cloudfront.net/2e4761581d2d2b2e228bd25e1550fae994f140a2/e92d6/images/mxc_logo-social.svg"
                  alt="MXC Support"
                />
              </div>
              <nav className="mt-5 flex-1 px-2 bg-gray-800 space-y-1">
                {/* // <!-- Current: "bg-gray-900 text-white",
                  Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}

                {MainMenu.map((item) => {
                  return (
                    <Link
                      to={item.route}
                      onClick={() => setView(item.route)}
                      key={item.title}
                      className={
                        item.route === view ? activeDesktopLink : desktopLink
                      }
                    >
                      {/* // <!-- Current: "text-gray-300",
                    Default: "text-gray-400 group-hover:text-gray-300" --> */}
                      {item.icon}
                      {item.title}
                    </Link>
                  )
                })}
              </nav>
            </div>
            <div className="flex-shrink-0 flex bg-gray-700 p-4">
              <a href="/" className="flex-shrink-0 w-full group block">
                <div className="flex items-center">
                  <div>
                    <img
                      className="inline-block h-9 w-9 rounded-full"
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-white">Tom Cook</p>
                    <p className="text-xs font-medium text-gray-300 group-hover:text-gray-200">
                      View profile
                    </p>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-0 flex-1 overflow-hidden">
        <div className="md:hidden pl-1 pt-1 sm:pl-3 sm:pt-3">
          <button
            type="button"
            onClick={() => setShowMenu(true)}
            className="-ml-0.5 -mt-0.5 h-12 w-12 inline-flex items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 z-10"
          >
            <span className="sr-only">Open sidebar</span>
            <IconMenu />
          </button>
        </div>
        {/* tabIndex="0" */}
        <main className="flex-1 relative z-0 overflow-y-auto focus:outline-none">
          <div className="py-6">{children}</div>
        </main>
      </div>
    </div>
  )
}

export default Sidebar
