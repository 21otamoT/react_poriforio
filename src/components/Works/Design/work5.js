import '../../../css/works.css'

const Work5 = () => {
  return (
    <article className="article">
        <div>
          <h2 className='work-title'>ITスクールのLP</h2>
          <div>
            <p className='img-container'>
              <img src="./img/works/details/works-5.png" alt="work5" />
            </p>
            <p>
              ITスクールLPのデザインカンプになります。
            </p>
            <h3>URL</h3>
            <p><a href="" target="_blank" rel="noopener"></a></p>
            <h3>担当</h3>
            <p>デザイン</p>
            <h3>デザインカンプの目的</h3>
            <p>侍エンジニアからの課題</p>
            <h3>使用技術</h3>
            <p>Figma</p>
            <h3>デザインについて</h3>
            <p>
              お問い合わせを増やすことが目的のため、ついついお問い合わせをしたくなるようなストーリー性をもたせたデザインにいたしました。
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
export default Work5