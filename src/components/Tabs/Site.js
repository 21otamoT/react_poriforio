import { useState } from 'react';
import '../../css/tabContent.css';
import Work1 from '../Works/Site/work1';
import Work2 from '../Works/Site/work2';
import Work3 from '../Works/Site/work3';
import Work6 from '../Works/Site/Work6';
import PreloadImage from '../PreloadImage';
import { Link } from 'react-scroll';
import socialtech from "../../img/works/html1.png";
import profile from "../../img/works/html2.png";
import salon from "../../img/works/wordpress1.png"
import university from "../../img/works/wordpress2.png"

const Sites = () => {
  const [selectWork, setSelectWork] = useState(null)

  const handleClick = work => {
    setSelectWork(work)
  }

  return(
          <div className="tab-contents">
            <Link
            activeClass='active'
            to='move'
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            onClick={() => handleClick(<Work1 />)} className="works-item" >
              {/* 画像をプリロード */}
              <PreloadImage src={socialtech}/>
              <div className="works-img"><img src={socialtech} alt="socialtech" /></div>
              <p className="works-name">コーポレートサイト</p>
              <p className="works-info">{`HTML/CSS/\nJavaScript/jQuery/`}</p>
            </Link>
            <Link
            activeClass='active'
            to='move'
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            onClick={() => handleClick(<Work2 />)} className="works-item">
              {/* 画像をプリロード */}
              <PreloadImage src={profile}/>
              <div className="works-img"><img src={profile} alt="html2" /></div>
              <p className="works-name">プロフィールサイト</p>
              <p className="works-info">{`HTML/CSS/\nJavaScript/jQuery`}</p>
            </Link>
            <Link
            activeClass='active'
            to='move'
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            onClick={() => handleClick(<Work3 />)} className="works-item">
              {/* 画像をプリロード */}
              <PreloadImage src={salon}/>
              <div className="works-img"><img src={salon} alt="WordPress" /></div>
              <p className="works-name">美容室のHP</p>
              <p className="works-info">WordPress</p>
            </Link>
            <Link
            activeClass='active'
            to='move'
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            onClick={() => handleClick(<Work6 />)} className="works-item works-item-row-end">
              {/* 画像をプリロード */}
              <PreloadImage src={university}/>
              <div className="works-img"><img src={university} alt="WordPress2" /></div>
              <p className="works-name">大学のHP</p>
              <p className="works-info">WordPress/PHP</p>
            </Link>
            <>
              {selectWork}
            </>
          </div>
  )
}

export default Sites;