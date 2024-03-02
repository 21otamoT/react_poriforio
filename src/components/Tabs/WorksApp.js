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
import { Link } from 'react-scroll';

const WorksApp = () => {
const [selectWork, setSelectWork] = useState(null)

const handleClick = work => {
  setSelectWork(work)
}

  return (
    <div className="tab-contents">
      <Link
      activeClass='active'
      to='move'
      spy={true}
      smooth={true}
      offset={-70}
      duration={500}
      onClick={() => handleClick(<Travel />)} className="works-item">
        {/* 画像をプリロード */}
        <PreloadImage src="img/works/hirosetravel.png"/>
        <div className="works-img"><img src="img/works/hirosetravel.png" alt="民宿予約アプリ" /></div>
        <h4 className="works-name">民宿予約アプリ</h4>
        <p className="works-info">{`HTML/CSS/\nJavaScript/SpringBoot\n/SQL`}</p>
      </Link>
      <Link
      activeClass='active'
      to='move'
      spy={true}
      smooth={true}
      offset={-70}
      duration={500}
      onClick={() => handleClick(<Order />)} className='works-item'>
        {/* 画像をプリロード */}
        <PreloadImage src="img/works/Order.png"/>
        <div className="works-img"><img src="img/works/Order.png" alt="注文アプリ" /></div>
        <h4 className="works-name">注文アプリ</h4>
        <p className="works-info">{`html/css/JavaScript\nSpringBoot/SQL`}</p>
      </Link>
      <Link
      activeClass='active'
      to='move'
      spy={true}
      smooth={true}
      offset={-70}
      duration={500}
      onClick={() => handleClick(<Mart />)} className="works-item">
        {/* 画像をプリロード */}
        <PreloadImage src="img/works/hirose_mart.png"/>
        <div className="works-img"><img src="img/works/hirose_mart.png" alt="商品管理アプリ" /></div>
        <h4 className="works-name">商品管理アプリ</h4>
        <p className="works-info">HTML/CSS/PHP/SQL</p>
      </Link>
      <Link
      activeClass='active'
      to='move'
      spy={true}
      smooth={true}
      offset={-70}
      duration={500}
      onClick={() => handleClick(<Todo />)} className="works-item">
        {/* 画像をプリロード */}
        <PreloadImage src="img/works/ToDoリスト - 21otamot.github.io.png"/>
        <div className="works-img"><img src="img/works/ToDoリスト - 21otamot.github.io.png" alt="ToDoアプリ" /></div>
        <h4 className="works-name">ToDoアプリ</h4>
        <p className="works-info">HTML/CSS/Typescript</p>
      </Link>
      <Link
      activeClass='active'
      to='move'
      spy={true}
      smooth={true}
      offset={-70}
      duration={500}
      onClick={() => handleClick(<Typing />)} className="works-item">
        {/* 画像をプリロード */}
        <PreloadImage src="img/works/typing_game.png"/>
        <div className="works-img"><img src="img/works/typing_game.png" alt="タイピングゲーム" /></div>
        <h4 className="works-name">タイピングゲーム</h4>
        <p className="works-info">HTML/CSS/JavaScript</p>
      </Link>
      <Link
      activeClass='active'
      to='move'
      spy={true}
      smooth={true}
      offset={-70}
      duration={500}
      onClick={() => handleClick(<Menu />)} className="works-item">
        {/* 画像をプリロード */}
        <PreloadImage src="img/works/react_menu_app.png"/>
        <div className="works-img"><img src="img/works/react_menu_app.png" alt="メニュー計算アプリ" /></div>
        <h4 className="works-name">メニュー計算アプリ</h4>
        <p className="works-info">css/React</p>
      </Link>
      <Link
      activeClass='active'
      to='move'
      spy={true}
      smooth={true}
      offset={-70}
      duration={500}
      onClick={() => handleClick(<ReactTodo />)} className="works-item">
        {/* 画像をプリロード */}
        <PreloadImage src="img/works/react-todo.png"/>
        <div className="works-img"><img src="img/works/react-todo.png" alt="ToDoリストアプリ" /></div>
        <h4 className="works-name">ToDoリストアプリ</h4>
        <p className="works-info">css/React</p>
      </Link>
      <Link
      activeClass='active'
      to='move'
      spy={true}
      smooth={true}
      offset={-70}
      duration={500}
      onClick={() => handleClick(<ReactThree />)} className="works-item">
        {/* 画像をプリロード */}
        <PreloadImage src="img/works/react_three_pronged.png"/>
        <div className="works-img"><img src="img/works/react_three_pronged.png" alt="三目並べ" /></div>
        <h4 className="works-name">三目並べ</h4>
        <p className="works-info">css/React</p>
      </Link>
      <Link
      activeClass='active'
      to='move'
      spy={true}
      smooth={true}
      offset={-70}
      duration={500}
      onClick={() => handleClick(<Postal />)} className="works-item">
        {/* 画像をプリロード */}
        <PreloadImage src="img/works/js-postal-code.png"/>
        <div className="works-img"><img src="img/works/js-postal-code.png" alt="住所検索アプリ" /></div>
        <h4 className="works-name">住所検索アプリ</h4>
        <p className="works-info">css/JavaScript</p>
      </Link>
      <>
        {selectWork}
      </>
    </div>
  )
}
export default WorksApp