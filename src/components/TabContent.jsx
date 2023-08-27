import React from 'react'

const TabContent = React.memo(({ activeTab }) => {
  return (
    <div>
      <div className={`p-4 ${activeTab === "first" ? "" : "hidden"}`}>First tab</div>
      <div className={`p-4 ${activeTab === "second" ? "" : "hidden"}`}>Second tab</div>
      <div className={`p-4 ${activeTab === "third" ? "" : "hidden"}`}>Third tab</div>
      <div className={`p-4 ${activeTab === "fourth" ? "" : "hidden"}`}>Fourth tab</div>
    </div>
  )
})

export default TabContent