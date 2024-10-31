import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ReviewsForm() {
  const [reviewTitle, setTitle] = useState("");
  const [reviewtext, setReviewText] = useState("");
  const [rating, setRating] = useState("");
  const navigate = useNavigate();
  const uid = localStorage.getItem("uid");
  const url =
    "https://umusic-c7d05-default-rtdb.europe-west1.firebasedatabase.app/reviews.json";

  async function handleSubmit(event) {
    event.preventDefault();
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(reviewData),
    });
    if (response.ok) {
      const data = await response.json();
      navigate(-1);
      console.log("New post created: ", data);
    }
  }

  const reviewData = {
    date: new Date().toLocaleDateString("en-US"),
    uid: uid,
    reviewTitle,
    reviewtext,
    rating,
  };

  return (
    <section className="reviews-form-container">
      <form className="reviews-form" onSubmit={handleSubmit}>
        <label htmlFor="title">Title:</label>
        <input
          id="title"
          className="reviews-form-title"
          name="title"
          type="text"
          value={reviewTitle}
          aria-label="title"
          placeholder="Write a review title..."
          onChange={(e) => setTitle(e.target.value)}
        />
        <label htmlFor="reviewtext">Write your review..</label>
        <textarea
          id="reviewtext"
          className="reviews-form-reviewtext"
          name="reviewtext"
          type="text"
          value={reviewtext}
          aria-label="reviewtext"
          placeholder="Write a review..."
          onChange={(e) => setReviewText(e.target.value)}
        />
        <label htmlFor="rating">Choose a rating:</label>
        <select
          className="reviews-form-rating"
          onChange={(e) => setRating(e.target.value)}
          id="rating"
          name="rating"
        >
          <option value="0">0</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>

        <div>
          <button className="reviews-form-btn" type="submit">
            Save
          </button>
        </div>
      </form>
    </section>
  );
}
