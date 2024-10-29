import { useEffect, useState } from "react";

export default function ReviewsForm() {
  const [title, setTitle] = useState("");
  const [reviewtext, setReviewText] = useState("");
  const [rating, setRating] = useState("");

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
      console.log("New post created: ", data);
    }
  }
  const reviewData = {
    title,
    reviewtext,
    rating,
  };

  return (
    <form className="form-grid" onSubmit={handleSubmit}>
      <label htmlFor="title">Title:</label>
      <input
        id="title"
        name="title"
        type="text"
        value={title}
        aria-label="title"
        placeholder="Write a review title..."
        onChange={(e) => setTitle(e.target.value)}
      />
      <label htmlFor="reviewtext">Write your review..</label>
      <textarea
        id="reviewtext"
        name="reviewtext"
        type="text"
        value={reviewtext}
        aria-label="reviewtext"
        placeholder="Write a review..."
        onChange={(e) => setReviewText(e.target.value)}
      />
      <label htmlFor="rating">Choose a rating:</label>
      <select
        onChange={(e) => setRating(e.target.value)}
        id="rating"
        name="rating"
      >
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>

      <div>
        <button type="submit">Save</button>
      </div>
    </form>
  );
}
