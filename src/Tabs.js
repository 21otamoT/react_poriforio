import { useState } from "react"

const Tabs = ({tabs, content}) => {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <>
      <div>
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={index === activeTab? "active" : ""}
          >
            {tab}
          </button>
        ))}
      </div>
      <div>{content[activeTab]}</div>
    </>
  )
}
export default Tabs