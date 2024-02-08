import Tabs from "./Tabs";
import Design from "./Tabs/Design";
import Sites from "./Tabs/Site";
import WorksApp from "./Tabs/WorksApp";

const Main = () => {
  const tabs = [{id:0, name:'サイト'},
                {id:1,name:'アプリ'},
                {id:2,name:'デザイン'}]

  const content = [<Sites />,<WorksApp />,<Design />]

  return(
    <main>
      <div className="img"></div>
      <Tabs tabs={tabs} content={content}/>
    </main>
  )
}
export default Main;