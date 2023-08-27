import React, { useState } from 'react'
import TabContent from './TabContent'

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("first");

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div className='rounded border w-1/2 mx-auto mt-4'>
      <ul
        className='inline-flex pt-2 px-1 w-full border-b'
      >
        <li className={`bg-white px-4 py-2 text-gray-800 font-semibold rounded-t  ${activeTab === "first" ? "-mb-px border-t border-r border-l" : ""}`}>
          <a href='#first' onClick={() => handleTabClick("first")}>Tab 1</a>
        </li>
        <li className={`px-4 py-2 text-gray-800 font-semibold rounded-t ${activeTab === "second" ? "bg-white -mb-px border-t border-r border-l " : ""}`}>
          <a href='#second' onClick={() => handleTabClick("second")}>Tab 2</a>
        </li>
        <li className={`px-4 py-2 text-gray-800 font-semibold rouned-t ${activeTab === "third" ? "bg-white -mb-px border-t border-r border-l" : ""}`}>
          <a href='#third' onClick={() => handleTabClick("third")}>Tab 3</a>
        </li>
        <li className={`px-4 py-2 text-gray-800 font-semibold rounded-t ${activeTab === "fourth" ? "bg-white -mb-px border-t border-r border-l" : ""}`}>
          <a href='#fourth' onClick={() => handleTabClick("fourth")}>Tab 3</a>
        </li>
      </ul>

      <TabContent activeTab={activeTab} />
    </div>
  )
}

export default Tabs