import React, { useState } from 'react'

const tabs = [
  { name: 'My Account', current: false },
  { name: 'Company', current: false },
  { name: 'Team Members', current: true },
  { name: 'Billing', current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const Example = () => {
  const [currentTab, setCurrentTab] = useState('Team Members');

  const handleTabClick = (tabName) => {
    setCurrentTab(tabName);
  };

  return (
    <div className='px-4'>
      <div className='sm:hidden'>
        <label htmlFor="tabs" className='sr-only'>
          Select a tab
        </label>
        <select 
          name="tabs" 
          id="tabs"
          className='bg-cyan-400  block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
          value={currentTab}
          onChange={(e) => setCurrentTab(e.target.value)}
        >
          {
            tabs.map((tab) => (
              <option
                key={tab.name}
                value={tab.name}
              >
                {tab.name}
              </option>
            ))
          }
        </select>
      </div>
      <div className='hidden sm:block'>
        <div className='border-b border-gray-200'>
          <nav className='-mb-px flex space-x-4 sm:space-x-8' aria-label='Tabs'>
            {
              tabs.map((tab) => (
                <a
                  key={tab.name} 
                  href="#"
                  onClick={() => handleTabClick(tab.name)}
                  className={classNames(
                    currentTab === tab.name
                    ? 'border-indigo-500 text-indigo-600'
                    : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700',
                    'whitespace-nowrap border-b-2 py-2 sm:py-4 px-1 text-sm font-medium'
                  )}
                  aria-current={tab.content ? 'page' : undefined}
                >
                  {tab.name}
                </a>
              ))
            }
          </nav>
        </div>
      </div>

      {/* Tab Content  */}
      <div className='mt-4 sm:mt-8'>
        {
          tabs.map((tab) => (
            <div 
              key={tab.name}
              className={classNames(
                'p-4',
                currentTab === tab.name ? 'block' : 'hidden'
              )}
            >
              {/* Context for each tab  */}
              <h2 className='text-lg font-medium text-gray-900'>{tab.name}</h2>
              <p className='mt-2 text-sm text-gray-500'>{tab.name}</p>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Example