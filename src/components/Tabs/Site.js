import '../../css/tabContent.css';

const Sites = () => {
  return(
          <div className="tab-contents">
            <a class="works-item" href='https://chat.openai.com/c/ceac14a2-d105-45b0-bd6c-b50f7fcce0fa'> 
              <div class="works-img"><img src="img/works/html1.png" alt="html1" /></div>
              <p class="works-name">コーポレートサイト</p>
              <p class="works-info">HTML/CSS/JavaScript/jQuery/レスポンシブ対応</p>
            </a>
            <a class="works-item" href="works/works-2.html">
              <div class="works-img"><img src="img/works/html2.png" alt="html2" /></div>
              <p class="works-name">プロフィールサイト</p>
              <p class="works-info">HTML/CSS/JavaScript/jQuery</p>
            </a>
            <a class="works-item" href="works/works-3.html">
              <div class="works-img"><img src="img/works/wordpress1.png" alt="WordPress" /></div>
              <p class="works-name">美容室のHP</p>
              <p class="works-info">WordPress</p>
            </a>
            <a class="works-item works-item-row-end" href="works/works-6.html">
              <div class="works-img"><img src="img/works/wordpress2.png" alt="WordPress2" /></div>
              <p class="works-name">大学のHP</p>
              <p class="works-info">WordPress/PHP</p>
            </a>
          </div>
  )
}

export default Sites;