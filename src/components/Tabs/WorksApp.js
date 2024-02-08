import '../../css/tabContent.css';

const WorksApp = () => {
  return (
    <div className="tab-contents">
      <a class="works-item" href="works/java_travel.html" target="_blank" rel="noopener">
              <div class="works-img"><img src="img/works/hirosetravel.png" alt="民宿予約アプリ" /></div>
              <p class="works-name">民宿予約アプリ</p>
              <p class="works-info">HTML/CSS/JavaScript/SpringBoot/SQL</p>
            </a>
            <a class="works-item" href="works/php_merchandise management.html" target="_blank" rel="noopener">
              <div class="works-img"><img src="img/works/hirose_mart.png" alt="商品管理アプリ" /></div>
              <p class="works-name">商品管理アプリ</p>
              <p class="works-info">HTML/CSS/PHP/SQL</p>
            </a>
            <a class="works-item" href="works/js_todo.html" target="_blank" rel="noopener">
              <div class="works-img"><img src="img/works/todo_app.png" alt="ToDoアプリ" /></div>
              <p class="works-name">ToDoアプリ</p>
              <p class="works-info">HTML/CSS/JavaScript</p>
            </a>
            <a class="works-item" href="works/js_typinggame.html" target="_blank" rel="noopener">
              <div class="works-img"><img src="img/works/typing_game.png" alt="タイピングゲーム" /></div>
              <p class="works-name">タイピングゲーム</p>
              <p class="works-info">HTML/CSS/JavaScript</p>
            </a>
            <a class="works-item" href="works/react_menu.html" target="_blank" rel="noopener">
              <div class="works-img"><img src="img/works/react_menu_app.png" alt="メニュー計算アプリ" /></div>
              <p class="works-name">メニュー計算アプリ</p>
              <p class="works-info">css/React</p>
            </a>
            <a class="works-item" href="works/react_todo.html" target="_blank" rel="noopener">
              <div class="works-img"><img src="img/works/react_todo_app.png" alt="ToDoリストアプリ" /></div>
              <p class="works-name">ToDoリストアプリ</p>
              <p class="works-info">css/React</p>
            </a>
            <a class="works-item works-item-row-end" href="works/react_three.html" target="_blank" rel="noopener">
              <div class="works-img"><img src="img/works/react_three_pronged.png" alt="三目並べ" /></div>
              <p class="works-name">三目並べ</p>
              <p class="works-info">css/React</p>
            </a>
            <a class="works-item works-item-row-end" href="works/js-postal-app.html" target="_blank" rel="noopener">
              <div class="works-img"><img src="img/works/js-postal-code.png" alt="住所検索アプリ" /></div>
              <p class="works-name">住所検索アプリ</p>
              <p class="works-info">css/JavaScript</p>
            </a>
    </div>
  )
}
export default WorksApp