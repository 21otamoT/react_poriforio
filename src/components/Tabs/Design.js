import '../../css/tabContent.css';

const Design = () => {
  return(
    <div className="tab-contents">
      <a class="works-item" href="works/works-4.html">
        <div class="works-img"><img src="img/works/photoshop.png" alt="Photoshop" /></div>
        <p class="works-name">ITスクールのバナー</p>
        <p class="works-info">Photoshop</p>
      </a>
      <a class="works-item" href="works/works-7.html">
        <div class="works-img"><img src="img/works/photshop2.png" alt="Photoshop" /></div>
        <p class="works-name">ITスクールのバナー</p>
        <p class="works-info">Photoshop</p>
      </a>
      <a class="works-item" href="works/works-8.html">
        <div class="works-img"><img src="img/works/samurai_kadai_002.png" alt="Figma" /></div>
        <p class="works-name">ITスクールのバナー</p>
        <p class="works-info">Figma</p>
      </a>
      <a class="works-item works-item-row-end" href="works/works-5.html">
        <div class="works-img"><img src="img/works/xd.png" alt="Figma" /></div>
        <p class="works-name">ITスクールのLP</p>
        <p class="works-info">Figma</p>
      </a>
    </div>
  )
}
export default Design