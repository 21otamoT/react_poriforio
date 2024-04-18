import '../css/contact.css'

const Contact = () => {
  return(
    <section className="container" id='contact'>
      <h2>お問い合わせ</h2>
      <div className="contact-list">
          <div>
            {/* <p>
              お問い合わせは、<span className="line">メールまたはSNS</span>にてお願いいたします。
            </p>
            <h3>メール</h3>
            <p>yukihio76@gmail.com</p> */}
            {/* <h3>SNS</h3>
            <a href="https://twitter.com/otamoT10010">
              <img src="img/icons8-x-100.png" alt="エックス（旧ツイッター）" />
              <p>X(旧Twitter)</p>
            </a> */}
            <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSexU622SxdyBUvMUau0z5JNubhHCEM2Kwdf3nX9mytPVjEqHg/viewform?embedded=true" width="100%" height="807" frameborder="0" marginheight="0" marginidth="0">読み込んでいます…</iframe>
          </div>
      </div>
    </section>
  )
}
export default Contact
