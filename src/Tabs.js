import { useState } from "react"

const Tabs = ({tabs, content}) => {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <>
      <div>
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={tab.id === activeTab? "active" : ""}
          >
            {tab.name}
          </button>
        ))}
      </div>
      <div>{content[activeTab]}</div>
    </>
  )
}
export default Tabs