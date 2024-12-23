export default function TodoItem({ item }) {
  return (
    <div className="item">
      <div className="itemName">
        {item}
        <span>
          <button className="deleteButton">Delete</button>
        </span>
      </div>
    </div>
  );
}
