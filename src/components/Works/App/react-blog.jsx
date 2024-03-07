import React from 'react'
import { Link } from 'react-scroll'
import work from '../../../img/works/blog.png'

const React_blog = () => {
  return (
    <article className="article" id='move'>
        <div>
          <h2 className='work-title'>ブログ</h2>
          <div>
            <p className='img-container'>
              <img src={work} alt="ブログ" />
            </p>
            <h3>URL</h3>
            <p><a href="https://21otamot.github.io/react-blog/" target="_blank" rel="noopener noreferrer">https://21otamot.github.io/react-blog/</a></p>
            <h3>使用技術</h3>
            <p>CSS/React/Firebase</p>
            <h3>開発の経緯・ストーリー</h3>
            <p>
              Firebaseを知り、学習の課程でブログを作れそうだと思い制作いたしました。
            </p>
            <h3>工夫や苦労した点</h3>
            <p>
              ログイン機能を実装し、ログインしているユーザーだけが記事の投稿をできるようにいたしました。<br />
              メニューをクリックすると、メインコンテナだけがレンダリングされるようにReactの機能を使いました。
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

export default React_blog