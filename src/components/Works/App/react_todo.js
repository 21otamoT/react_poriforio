import { Link } from 'react-scroll'
import '../../../css/works.css'
import reacttodo from "../../../img/works/details/react_todo_app.png"

const ReactTodo = () => {
  return (
    <article className="article" id='move'>
        <div>
          <h2 className='work-title'>ToDoアプリ</h2>
          <div>
            <p className='img-container'>
              <img src={reacttodo} alt="ToDoアプリ" />
            </p>
            <h3>URL</h3>
            <p><a href="https://21otamot.github.io/react_todo_app/" target="_blank" rel="noopener noreferrer">https://21otamot.github.io/react_todo_app/</a></p>
            <h3>使用技術</h3>
            <p>CSS/React</p>
            <h3>開発の経緯・ストーリー</h3>
            <p>
              プログラミングスクールのレッスンでReactの基礎を教えてもらったのでアウトプットのために作成いたしました。
            </p>
            <h3>工夫や苦労した点</h3>
            <p>
              チェックをつけたリストをまとめて削除できるようにしたことと、未入力の時はリストが追加されないようにいたしました。
            </p>
          </div>
        </div>
        <div className='works'>
          <span class="material-symbols-outlined">
          &#9651;
          </span>
          <Link
          activeClass='active'
          to='works'
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          >作品一覧へ</Link>
        </div>
      </article>
  )
}

export default ReactTodo