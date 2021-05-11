export default function Comment({ user_name, contents, created_at }) {
  return (
    <div className="container-comment">
      <div className="header">{user_name}</div>
      <div className="contents">{contents}</div>
      <div className="footer">{created_at.slice(0, 10)}</div>
    </div>
  );
}
