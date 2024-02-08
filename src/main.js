import Tabs from "./Tabs";
import Works from "./Tabs/works";

const Main = () => {
  const tabs = [{id:0, name:'サイト'},
                {id:1,name:'アプリ'},
                {id:2,name:'デザイン'}]

  const content = [<div>Site Content</div>,<div>App Content</div>,<div>Design Content</div>]

  return(
    <main>
      <div className="img"></div>
      <Tabs tabs={tabs} content={content}/>
    </main>
  )
}
export default Main;