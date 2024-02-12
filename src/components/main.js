import Selfintroduction from "./Self-introduction";
import Tabs from "./Tabs/Tabs";
import Design from "./Tabs/Design";
import Sites from "./Tabs/Site";
import WorksApp from "./Tabs/WorksApp";
import Skill from "./skill";
import Contact from "./Contact";

const Main = () => { 

  const tabs = [{id:0, name:'サイト'},
                {id:1, name:'アプリ'},
                {id:2, name:'デザイン'}]

  const content = [<Sites/>,<WorksApp />,<Design />]

  return(
    <main>
      <div className="main-visual"><img src="../img/mainvisual.png" /></div>
      <Tabs tabs={tabs} content={content}/>
      <Skill />
      <Selfintroduction />
      <Contact />
    </main>
  )
}
export default Main;