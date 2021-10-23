import React,{useState,useRef} from 'react';
import { LightBulbIcon,ChevronDownIcon } from '@heroicons/react/solid'
import { Menu, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { Link } from 'react-router-dom';

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

function Navbar() {

    return (
        <div className="container bg-gray-800 mx-auto my-14 w-5/12 flex flex-wrap p-4 flex-col relative  md:flex-row border-solid rounded-lg">
             <LightBulbIcon className="w-10 h-5 text-white mt-2 "/>
            <p className="font-serif text-white mr-3 mt-2">
                0 Suggestions 
                </p>   
                <p className="opacity-50 text-white mt-2">
                    Sort by:
                    </p>
                    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex text-white opacity-50 mt-2">
          <ChevronDownIcon className=" ml-1 h-6 w-5" aria-hidden="true" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="origin-top-right absolute right--10 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  Most Upvotes
                </a>
              )}
            </Menu.Item>

            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  Least Upvotes
                </a>
              )}
            </Menu.Item>
            <form method="POST" action="#">
              <Menu.Item>
                {({ active }) => (
                  <button
                    type="submit"
                    className={classNames(
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'block w-full text-left px-4 py-2 text-sm'
                    )}
                  >
                    Most Comments
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    type="submit"
                    className={classNames(
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'block w-full text-left px-4 py-2 text-sm'
                    )}
                  >
                    Least Comments
                  </button>
                )}
              </Menu.Item>
            </form>
          </div>
        </Menu.Items>
      </Transition>
    </Menu> 
    <Link to="/create" className="ml-52 py-2 px-4 bg-pink-100 text-white focus:outline-none hover:opacity-50 rounded-lg float-right ">
    + Add Feedback
      </Link>
    
    
         </div>
    )
}

export default Navbar;
