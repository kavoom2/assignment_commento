export default function Ads({ title, contents, img }) {
  return (
    <div className="container-ads">
      <div className="header">sponsored</div>
      <div className="section">
        <div className="img-container">
          <img src={`https://cdn.comento.kr/assignment/${img}`} alt={img} />
        </div>
        <div className="article">
          <div className="title">{title}</div>
          <div className="contents">{contents}</div>
        </div>
      </div>
    </div>
  );
}
