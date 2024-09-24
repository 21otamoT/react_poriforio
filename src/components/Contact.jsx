import "../css/contact.css";
// import x from "../img/icons8-x-100.png";

const Contact = () => {
  return (
    <section className="container" id="contact">
      <h2>お問い合わせ</h2>
      {/* <div className="contact-list">
        <div>
          <p>
            お問い合わせは、<span className="line">メールまたはSNS</span>
            にてお願いいたします。
          </p>
          <h3>メール</h3>
          <p>yukihio76@gmail.com</p>
          <h3>SNS</h3>
          <a href="https://twitter.com/otamoT10010">
            <img src={x} alt="エックス（旧ツイッター）" />
            <p>X(旧Twitter)</p>
          </a>
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSexU622SxdyBUvMUau0z5JNubhHCEM2Kwdf3nX9mytPVjEqHg/viewform?embedded=true"
            width="100%"
            height="807"
            frameborder="0"
            marginheight="0"
            marginidth="0"
          >
            読み込んでいます…
          </iframe>
        </div>
      </div> */}
      <form action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSctvBkaACZqbCmBxZKA0ITt0LL7P1EhHxq1WnoqtODdMLN5MA/formResponse">
        <div>
          <label className="label">
            email: <span className="required">必須</span>
            <br />
            <input className="input" type="text" name="entry.1237066179" />
          </label>
        </div>
        <div>
          <label className="label">
            名前:
            <br />
            <input className="input" type="text" name="entry.1568719626" />
          </label>
        </div>
        <div>
          <label className="label">
            お問い合わせ内容: <span className="required">必須</span>
            <br />
            <textarea rows={20} name="entry.723858400"></textarea>
          </label>
        </div>
        <div className="btn">
          <button type="submit">送信</button>
        </div>
      </form>
    </section>
  );
};
export default Contact;
