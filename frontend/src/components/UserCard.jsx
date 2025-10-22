export default function UserCard({ name }) {
  return (
    <div style={{
      border: "1px solid #ddd",
      borderRadius: "10px",
      padding: "10px",
      margin: "10px 0",
      background: "#fafafa"
    }}>
      👤 {name}
    </div>
  );
}