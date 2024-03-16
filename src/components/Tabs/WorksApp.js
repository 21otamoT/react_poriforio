import { useState } from "react";
import "../../css/tabContent.css";
import Travel from "../Works/App/travel_app";
import Mart from "../Works/App/mart_app";
import Todo from "../Works/App/todo";
import Typing from "../Works/App/typing_app";
import Menu from "../Works/App/react_menu_app";
import ReactTodo from "../Works/App/react_todo";
import ReactThree from "../Works/App/react_three";
import Postal from "../Works/App/js_postal";
import Order from "../Works/App/spring_order_app";
import PreloadImage from "../PreloadImage";
import { Link } from "react-scroll";
import hirosetravel from "../../img/works/hirosetravel.png";
import orderapp from "../../img/works/Order.png";
import hirosemart from "../../img/works/hirose_mart.png";
import tstodo from "../../img/works/ToDoリスト - 21otamot.github.io.png";
import reacttodo from "../../img/works/react-todo.png";
import reactmenu from "../../img/works/react_menu_app.png";
import postal from "../../img/works/js-postal-code.png";
import typinggame from "../../img/works/typing_game.png";
import reactthree from "../../img/works/react_three_pronged.png";
import React_pokemon from "../Works/App/react_pokemon";
import pokemon from "../../img/works/pokemon.png";
import blog from "../../img/works/blog.png";
import React_blog from "../Works/App/react-blog";
import houseHold from "../../img/works/houseHold.png";
import HouseHold from "../Works/App/react_house_hold";

const WorksApp = () => {
  const [selectWork, setSelectWork] = useState(<Travel />);

  const handleClick = (work) => {
    setSelectWork(work);
  };

  return (
    <div className="tab-contents">
      <Link
        activeClass="active"
        to="move"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        onClick={() => handleClick(<Travel />)}
        className="works-item"
      >
        {/* 画像をプリロード */}
        <PreloadImage src={hirosetravel} />
        <div className="works-img">
          <img src={hirosetravel} alt="民宿予約アプリ" />
        </div>
        <h4 className="works-name">民宿予約アプリ</h4>
        <p className="works-info">{`HTML/CSS/\nJavaScript/SpringBoot\n/SQL`}</p>
      </Link>
      <Link
        activeClass="active"
        to="move"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        onClick={() => handleClick(<Order />)}
        className="works-item"
      >
        {/* 画像をプリロード */}
        <PreloadImage src={orderapp} />
        <div className="works-img">
          <img src={orderapp} alt="注文アプリ" />
        </div>
        <h4 className="works-name">注文アプリ</h4>
        <p className="works-info">{`html/css/JavaScript\nSpringBoot/SQL`}</p>
      </Link>
      <Link
        activeClass="active"
        to="move"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        onClick={() => handleClick(<Mart />)}
        className="works-item"
      >
        {/* 画像をプリロード */}
        <PreloadImage src={hirosemart} />
        <div className="works-img">
          <img src={hirosemart} alt="商品管理アプリ" />
        </div>
        <h4 className="works-name">商品管理アプリ</h4>
        <p className="works-info">HTML/CSS/PHP/SQL</p>
      </Link>
      <Link
        activeClass="active"
        to="move"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        onClick={() => handleClick(<Todo />)}
        className="works-item"
      >
        {/* 画像をプリロード */}
        <PreloadImage src={tstodo} />
        <div className="works-img">
          <img src={tstodo} alt="ToDoアプリ" />
        </div>
        <h4 className="works-name">ToDoアプリ</h4>
        <p className="works-info">HTML/CSS/Typescript</p>
      </Link>
      <Link
        activeClass="active"
        to="move"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        onClick={() => handleClick(<Typing />)}
        className="works-item"
      >
        {/* 画像をプリロード */}
        <PreloadImage src={typinggame} />
        <div className="works-img">
          <img src={typinggame} alt="タイピングゲーム" />
        </div>
        <h4 className="works-name">タイピングゲーム</h4>
        <p className="works-info">HTML/CSS/JavaScript</p>
      </Link>
      <Link
        activeClass="active"
        to="move"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        onClick={() => handleClick(<Menu />)}
        className="works-item"
      >
        {/* 画像をプリロード */}
        <PreloadImage src={reactmenu} />
        <div className="works-img">
          <img src={reactmenu} alt="メニュー計算アプリ" />
        </div>
        <h4 className="works-name">メニュー計算アプリ</h4>
        <p className="works-info">css/React</p>
      </Link>
      <Link
        activeClass="active"
        to="move"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        onClick={() => handleClick(<ReactTodo />)}
        className="works-item"
      >
        {/* 画像をプリロード */}
        <PreloadImage src={reacttodo} />
        <div className="works-img">
          <img src={reacttodo} alt="ToDoリストアプリ" />
        </div>
        <h4 className="works-name">ToDoリストアプリ</h4>
        <p className="works-info">css/React</p>
      </Link>
      <Link
        activeClass="active"
        to="move"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        onClick={() => handleClick(<ReactThree />)}
        className="works-item"
      >
        {/* 画像をプリロード */}
        <PreloadImage src={reactthree} />
        <div className="works-img">
          <img src={reactthree} alt="三目並べ" />
        </div>
        <h4 className="works-name">三目並べ</h4>
        <p className="works-info">css/React</p>
      </Link>
      <Link
        activeClass="active"
        to="move"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        onClick={() => handleClick(<Postal />)}
        className="works-item"
      >
        {/* 画像をプリロード */}
        <PreloadImage src={postal} />
        <div className="works-img">
          <img src={postal} alt="住所検索アプリ" />
        </div>
        <h4 className="works-name">住所検索アプリ</h4>
        <p className="works-info">css/JavaScript</p>
      </Link>
      <Link
        activeClass="active"
        to="move"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        onClick={() => handleClick(<React_pokemon />)}
        className="works-item"
      >
        {/* 画像をプリロード */}
        <PreloadImage src={pokemon} />
        <div className="works-img">
          <img src={pokemon} alt="ポケモン図鑑" />
        </div>
        <h4 className="works-name">ポケモン図鑑</h4>
        <p className="works-info">css/JavaScript/React</p>
      </Link>
      <Link
        activeClass="active"
        to="move"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        onClick={() => handleClick(<React_blog />)}
        className="works-item"
      >
        {/* 画像をプリロード */}
        <PreloadImage src={blog} />
        <div className="works-img">
          <img src={blog} alt="ブログ" />
        </div>
        <h4 className="works-name">ブログ</h4>
        <p className="works-info">css/React/Firebase</p>
      </Link>
      <Link
        activeClass="active"
        to="move"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        onClick={() => handleClick(<React_blog />)}
        className="works-item"
      >
        {/* 画像をプリロード */}
        <PreloadImage src={houseHold} />
        <div className="works-img">
          <img src={houseHold} alt="ブログ" />
        </div>
        <h4 className="works-name">家計簿アプリ</h4>
        <p className="works-info">Typescript/React/Firebase/MUI</p>
      </Link>
      <>{selectWork}</>
    </div>
  );
};
export default WorksApp;
