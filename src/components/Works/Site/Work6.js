import '../../../css/works.css'

const Work6 = () => {
  return (
    <article className="article">
        <div>
          <h2 className='work-title'>大学のHP</h2>
          <div>
            <p className='img-container'>
              <img src="../img/works/details/works-6.png" alt="work6" />
            </p>
            <p>
              大学のHPとなります。
            </p>
            <h3>URL</h3>
            <p><a href="" target="_blank" rel="noopener"></a></p>
            <h3>担当</h3>
            <p>デザイン・コーディング</p>
            <h3>サイトの目的</h3>
            <p>侍エンジニアからの課題</p>
            <h3>使用技術</h3>
            <p>WordPress/PHP</p>
            <h3>デザインについて</h3>
            <p>
              同じようなデザインで学校機関や企業様のHPを作成することが可能です。
            </p>
            <h3>コーディングについて</h3>
            <p>
              ブログのようにコンテンツを投稿できる機能を取り揃えています。またTwitterのフィードをサイト上に表示させることも可能です。
            </p>
          </div>
        </div>
        <div className='works'>
          <a href='#works'>作品一覧へ</a>
        </div>
      </article>
  )
}
export default Work6