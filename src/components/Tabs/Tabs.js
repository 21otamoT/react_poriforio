import { useState } from "react"

const Tabs = ({tabs, content}) => {
  const [activeTab, setActiveTab] = useState(0)

  return (
      <section className="container" id="works">
        <h2>作品</h2>
        <div className="tab-container">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={tab.id === activeTab? "active" : ""}
              >
                {tab.name}
              </button>
            ))}
            <div className="tabBorder" style={{left: `${(activeTab)*33.3}%`}}></div>
        </div>
        <div>{content[activeTab]}</div>
      </section>
  )
}
export default Tabs
