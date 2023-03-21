import FeedbackItem from "./FeedbackItem";

function FeedbackList({ feedback, handleDelete }) {
  if (!feedback || feedback.length === 0) {
    return <p>No feedback, sorry</p>;
  }
  return (
    <div className="feedback-list">
      {feedback.map((item) => {
        return (
          <FeedbackItem handleDelete={handleDelete} key={item.id} item={item} />
        );
      })}
    </div>
  );
}

export default FeedbackList;
