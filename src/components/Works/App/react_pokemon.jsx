import React from 'react'
import '../../../css/works.css'
import work from '../../../img/works/details/pokemon_details.png'
import { Link } from 'react-scroll'

const React_pokemon = () => {
  return (
    <article className="article" id='move'>
        <div>
          <h2 className='work-title'>ポケモン図鑑</h2>
          <div>
            <p className='img-container'>
              <img src={work} alt="ポケモン図鑑ｓ" />
            </p>
            <h3>URL</h3>
            <p><a href="https://21otamot.github.io/pokemon-app/" target="_blank" rel="noopener noreferrer">https://21otamot.github.io/pokemon-app/</a></p>
            <h3>使用技術</h3>
            <p>CSS/React</p>
            <h3>開発の経緯・ストーリー</h3>
            <p>
              APIを叩く学習の中で、ポケモンAPIがあることを知りポケモン図鑑を作ってみようと思いました。
            </p>
            <h3>工夫や苦労した点</h3>
            <p>
              グリッドテンプレートを使用し、自動でレスポンシブ対応をしたことと、デフォルトではポケモンのデータの取得件数が２０件と少ないので４０件ほどに増やしました。
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

export default React_pokemon