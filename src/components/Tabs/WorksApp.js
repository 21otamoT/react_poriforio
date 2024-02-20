import { useState } from 'react';
import '../../css/tabContent.css';
import Travel from '../Works/App/travel_app';
import Mart from '../Works/App/mart_app';
import Todo from '../Works/App/todo';
import Typing from '../Works/App/typing_app';
import Menu from '../Works/App/react_menu_app';
import ReactTodo from '../Works/App/react_todo';
import ReactThree from '../Works/App/react_three';
import Postal from '../Works/App/js_postal';
import Order from '../Works/App/spring_order_app';
import PreloadImage from '../PreloadImage';

const WorksApp = () => {
const [selectWork, setSelectWork] = useState(null)

const handleClick = work => {
  setSelectWork(work)
}

  return (
    <div className="tab-contents">
      <a onClick={() => handleClick(<Travel />)} class="works-item">
        {/* 画像をプリロード */}
        <PreloadImage src="img/works/hirosetravel.png"/>
        <div className="works-img"><img src="img/works/hirosetravel.png" alt="民宿予約アプリ" /></div>
        <p className="works-name">民宿予約アプリ</p>
        <p className="works-info">{`HTML/CSS/\nJavaScript/SpringBoot\n/SQL`}</p>
      </a>
      <a onClick={() => handleClick(<Order />)} className='works-item'>
        {/* 画像をプリロード */}
        <PreloadImage src="img/works/Order.png"/>
        <div className="works-img"><img src="img/works/Order.png" alt="注文アプリ" /></div>
        <p className="works-name">注文アプリ</p>
        <p className="works-info">{`html/css/JavaScript\nSpringBoot/SQL`}</p>
      </a>
      <a onClick={() => handleClick(<Mart />)} className="works-item">
        {/* 画像をプリロード */}
        <PreloadImage src="img/works/hirose_mart.png"/>
        <div className="works-img"><img src="img/works/hirose_mart.png" alt="商品管理アプリ" /></div>
        <p className="works-name">商品管理アプリ</p>
        <p className="works-info">HTML/CSS/PHP/SQL</p>
      </a>
      <a onClick={() => handleClick(<Todo />)} className="works-item">
        {/* 画像をプリロード */}
        <PreloadImage src="img/works/ToDoリスト - 21otamot.github.io.png"/>
        <div className="works-img"><img src="img/works/ToDoリスト - 21otamot.github.io.png" alt="ToDoアプリ" /></div>
        <p className="works-name">ToDoアプリ</p>
        <p className="works-info">HTML/CSS/Typescript</p>
      </a>
      <a onClick={() => handleClick(<Typing />)} className="works-item">
        {/* 画像をプリロード */}
        <PreloadImage src="img/works/typing_game.png"/>
        <div className="works-img"><img src="img/works/typing_game.png" alt="タイピングゲーム" /></div>
        <p className="works-name">タイピングゲーム</p>
        <p className="works-info">HTML/CSS/JavaScript</p>
      </a>
      <a onClick={() => handleClick(<Menu />)} className="works-item">
        {/* 画像をプリロード */}
        <PreloadImage src="img/works/react_menu_app.png"/>
        <div className="works-img"><img src="img/works/react_menu_app.png" alt="メニュー計算アプリ" /></div>
        <p className="works-name">メニュー計算アプリ</p>
        <p className="works-info">css/React</p>
      </a>
      <a onClick={() => handleClick(<ReactTodo />)} className="works-item">
        {/* 画像をプリロード */}
        <PreloadImage src="img/works/react_todo_app.png"/>
        <div className="works-img"><img src="img/works/react_todo_app.png" alt="ToDoリストアプリ" /></div>
        <p className="works-name">ToDoリストアプリ</p>
        <p className="works-info">css/React</p>
      </a>
      <a onClick={() => handleClick(<ReactThree />)} className="works-item">
        {/* 画像をプリロード */}
        <PreloadImage src="img/works/react_three_pronged.png"/>
        <div className="works-img"><img src="img/works/react_three_pronged.png" alt="三目並べ" /></div>
        <p className="works-name">三目並べ</p>
        <p className="works-info">css/React</p>
      </a>
      <a onClick={() => handleClick(<Postal />)} className="works-item">
        {/* 画像をプリロード */}
        <PreloadImage src="img/works/js-postal-code.png"/>
        <div className="works-img"><img src="img/works/js-postal-code.png" alt="住所検索アプリ" /></div>
        <p className="works-name">住所検索アプリ</p>
        <p className="works-info">css/JavaScript</p>
      </a>
      <>
        {selectWork}
      </>
    </div>
  )
}
export default WorksApp