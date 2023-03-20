import FeedbackItem from "./FeedbackItem";

function FeedbackList({ feedback }) {
  if (!feedback || feedback.length === 0) {
    return <p>No feedback, sorry</p>;
  }
  return (
    <div className="feedback-list">
      {feedback.map((item) => {
        return <FeedbackItem key={item.id} item={item} />;
      })}
    </div>
    // <div className="feedback-list">
    //   {feedback.map((item) => {
    //     console.log(item.rating);
    //     <div>{item.rating}</div>;
    //   })}
    // </div>
  );
}

export default FeedbackList;
