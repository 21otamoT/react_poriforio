import { useState } from 'react';
import '../../css/tabContent.css';
import Work4 from '../Works/Design/work4'
import Work5 from '../Works/Design/work5';
import Work7 from '../Works/Design/work7';
import Work8 from '../Works/Design/work8';
import PreloadImage from '../PreloadImage';

const Design = () => {
  const [selectWork, setSelectWork] = useState(null)

  const handleClick = work => {
    setSelectWork(work)
  }

  return(
    <>
    <div className="tab-contents">
      <a onClick={() => handleClick(<Work4 />)} class="works-item">
        {/* 画像をプリロード */}
        <PreloadImage src="img/works/photoshop.png"/>
        <div class="works-img"><img src="img/works/photoshop.png" alt="Photoshop" /></div>
        <p class="works-name">ITスクールのバナー</p>
        <p class="works-info">Photoshop</p>
      </a>
      <a onClick={() => handleClick(<Work7 />)} class="works-item">
        {/* 画像をプリロード */}
        <PreloadImage src="img/works/photshop2.png"/>
        <div class="works-img"><img src="img/works/photshop2.png" alt="Photoshop" /></div>
        <p class="works-name">ITスクールのバナー</p>
        <p class="works-info">Photoshop</p>
      </a>
      <a onClick={() => handleClick(<Work8 />)} class="works-item">
        {/* 画像をプリロード */}
        <PreloadImage src="img/works/samurai_kadai_002.png"/>
        <div class="works-img"><img src="img/works/samurai_kadai_002.png" alt="Figma" /></div>
        <p class="works-name">ITスクールのバナー</p>
        <p class="works-info">Figma</p>
      </a>
      <a onClick={() => handleClick(<Work5 />)} class="works-item works-item-row-end">
        {/* 画像をプリロード */}
        <PreloadImage src="img/works/xd.png"/>
        <div class="works-img"><img src="img/works/xd.png" alt="Figma" /></div>
        <p class="works-name">ITスクールのLP</p>
        <p class="works-info">Figma</p>
      </a>
    </div>
    {selectWork}
    </>
  )
}
export default Design