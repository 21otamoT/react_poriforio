import { useState } from 'react';
import '../../css/tabContent.css';
import Work1 from '../Works/Site/work1';
import Work2 from '../Works/Site/work2';
import Work3 from '../Works/Site/work3';
import Work6 from '../Works/Site/Work6';

const Sites = () => {
  const [selectWork, setSelectWork] = useState(null)

  const handleClick = work => {
    setSelectWork(work)
  }

  return(
          <div className="tab-contents">
            <a onClick={() => handleClick(<Work1 />)} class="works-item" > 
              <div className="works-img"><img src="img/works/html1.png" alt="html1" /></div>
              <p className="works-name">コーポレートサイト</p>
              <p className="works-info">HTML/CSS/JavaScript/jQuery/レスポンシブ対応</p>
            </a>
            <a onClick={() => handleClick(<Work2 />)} className="works-item">
              <div className="works-img"><img src="img/works/html2.png" alt="html2" /></div>
              <p className="works-name">プロフィールサイト</p>
              <p className="works-info">HTML/CSS/JavaScript/jQuery</p>
            </a>
            <a onClick={() => handleClick(<Work3 />)} className="works-item">
              <div className="works-img"><img src="img/works/wordpress1.png" alt="WordPress" /></div>
              <p className="works-name">美容室のHP</p>
              <p className="works-info">WordPress</p>
            </a>
            <a onClick={() => handleClick(<Work6 />)} className="works-item works-item-row-end">
              <div className="works-img"><img src="img/works/wordpress2.png" alt="WordPress2" /></div>
              <p className="works-name">大学のHP</p>
              <p className="works-info">WordPress/PHP</p>
            </a>
            <>
              {selectWork}
            </>
          </div>
  )
}

export default Sites;