export default function Feed({
  categoryName,
  id,
  user_id,
  created_at,
  title,
  contents,
  handleHistoryEvent,
}) {
  return (
    <div className="container-feed" onClick={handleHistoryEvent}>
      <div className="category">
        <span className="category-name">{categoryName}</span>
        <span className="category-id">{id}</span>
      </div>
      <div className="info">
        <span className="info-userId">{user_id}</span>
        <span className="info-createdAt">{created_at}</span>
      </div>
      <div className="title">{title}</div>
      <div className="contents">{contents}</div>
    </div>
  );
}
