import { useNavigate } from "react-router-dom";
import ReviewsForm from "./ReviewsForm";
import { auth } from "../firebase-config";

export default function CreateReviewsPage() {
  const navigate = useNavigate();

  async function createReview(newReview) {
    newReview.uid = auth.currentUser.uid; // authenticated user id

    const url = `https://umusic-c7d05-default-rtdb.europe-west1.firebasedatabase.app/reviews.json`;
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(newReview),
    });
    if (response.ok) {
      const data = await response.json();
      console.log("New review created: ", data);
      navigate("/Reviews");
    } else {
      console.log("Sorry, something went wrong");
    }
  }

  return (
    <section>
      <div>
        <h1>Create New Review</h1>
        <ReviewsForm savePost={createReview} />
      </div>
    </section>
  );
}
