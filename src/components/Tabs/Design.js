import { useState } from 'react';
import '../../css/tabContent.css';
import Work4 from '../Works/Design/work4'
import Work5 from '../Works/Design/work5';
import Work7 from '../Works/Design/work7';
import Work8 from '../Works/Design/work8';
import PreloadImage from '../PreloadImage';
import { Link } from 'react-scroll';

const Design = () => {
  const [selectWork, setSelectWork] = useState(null)

  const handleClick = work => {
    setSelectWork(work)
  }

  return(
    <>
    <div className="tab-contents">
      <Link
      activeClass='active'
      to='move'
      spy={true}
      smooth={true}
      offset={-70}
      duration={500}
      onClick={() => handleClick(<Work4 />)} className="works-item">
        {/* 画像をプリロード */}
        <PreloadImage src="img/works/photoshop.png"/>
        <div className="works-img"><img src="img/works/photoshop.png" alt="Photoshop" /></div>
        <p className="works-name">ITスクールのバナー</p>
        <p className="works-info">Photoshop</p>
      </Link>
      <Link
      activeClass='active'
      to='move'
      spy={true}
      smooth={true}
      offset={-70}
      duration={500}
      onClick={() => handleClick(<Work7 />)} className="works-item">
        {/* 画像をプリロード */}
        <PreloadImage src="img/works/photshop2.png"/>
        <div className="works-img"><img src="img/works/photshop2.png" alt="Photoshop" /></div>
        <p className="works-name">ITスクールのバナー</p>
        <p className="works-info">Photoshop</p>
      </Link>
      <Link
      activeClass='active'
      to='move'
      spy={true}
      smooth={true}
      offset={-70}
      duration={500}
      onClick={() => handleClick(<Work8 />)} className="works-item">
        {/* 画像をプリロード */}
        <PreloadImage src="img/works/samurai_kadai_002.png"/>
        <div className="works-img"><img src="img/works/samurai_kadai_002.png" alt="Figma" /></div>
        <p className="works-name">ITスクールのバナー</p>
        <p className="works-info">Figma</p>
      </Link>
      <Link
      activeClass='active'
      to='move'
      spy={true}
      smooth={true}
      offset={-70}
      duration={500}
      onClick={() => handleClick(<Work5 />)} className="works-item works-item-row-end">
        {/* 画像をプリロード */}
        <PreloadImage src="img/works/xd.png"/>
        <div className="works-img"><img src="img/works/xd.png" alt="Figma" /></div>
        <p className="works-name">ITスクールのLP</p>
        <p className="works-info">Figma</p>
      </Link>
    </div>
    {selectWork}
    </>
  )
}
export default Design