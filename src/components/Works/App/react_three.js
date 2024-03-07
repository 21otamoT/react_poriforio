import { Link } from 'react-scroll'
import '../../../css/works.css'
import reactthree from "../../../img/works/details/react_three_pronged.png"

const ReactThree = () => {
  return (
    <article className="article" id='move'>
        <div>
          <h2 className='work-title'>三目並べ</h2>
          <div>
            <p className='img-container'>
              <img src={reactthree} alt="三目並べ" />
            </p>
            <h3>URL</h3>
            <p><a href="https://21otamot.github.io/react_three_pronged_app/" target="_blank" rel="noopener noreferrer">https://21otamot.github.io/react_todo_app/</a></p>
            <h3>使用技術</h3>
            <p>CSS/React</p>
            <h3>開発の経緯・ストーリー</h3>
            <p>
              ReactのチュートリアルでReactを学びながら作成いたしました。
            </p>
            <h3>工夫や苦労した点</h3>
            <p>
              プログラミングスクールでReactを教わった後に学んだので作成する課程でより一層理解が深まりました。
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

export default ReactThree