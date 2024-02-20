import '../../../css/works.css'

const Todo = () => {
  return (
    <article className="article">
        <div>
          <h2 className='work-title'>ToDoアプリ</h2>
          <div>
            <p className='img-container'>
              <img src="../img/works/details/ToDoリスト - 21otamot.github.io.png" alt="ToDoアプリ" />
            </p>
            <h3>URL</h3>
            <p><a href="https://21otamot.github.io/ts-ToDo/" target="_blank" rel="noopener noreferrer">https://21otamot.github.io/ts-ToDo/</a></p>
            <h3>使用技術</h3>
            <p>HTML/CSS/Typescript</p>
            <h3>開発の経緯・ストーリー</h3>
            <p>
              Typescriptの学習の中で学んだ基礎のアウトプットのために制作いたしました。
            </p>
            <h3>工夫や苦労した点</h3>
            <p>
              ページをリロードしても登録したリストが消えないようにしたことと、データ型の不一致によるエラーの解決に苦労しました。
            </p>
          </div>
        </div>
        <div className='works'>
          <span class="material-symbols-outlined">
            arrow_upward
          </span>
          <a href='#works'>作品一覧へ</a>
        </div>
      </article>
  )
}

export default Todo