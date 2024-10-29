import { useEffect, useState } from "react";

export default function ReviewsForm({ saveReview, review }) {
  const [title, setTitle] = useState("");
  const [reviewtext, setReviewText] = useState("");
  const [rating, setRating] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (review?.title) {
      // if review, set the states with values from the review object.
      // The review object is a prop, passed from UpdatePage
      setTitle(review.title);
      setReviewText(review.reviewtext);
      setRating(review.rating);
    }
  }, [review]); // useEffect is called every time post changes.

  function handleSubmit(event) {
    event.preventDefault();
    const formData = {
      // create a new objebt to store the value from states / input fields
      title: title,
      rating: rating,
      review: reviewtext,
    };

    const validForm = formData.title && rating && reviewtext; // will return false if one of the properties doesn't have a value
    if (validForm) {
      // if all fields/ properties are filled, then call saveReview
      saveReview(formData);
    } else {
      // if not, set errorMessage state.
      setErrorMessage("Please, fill in all fields.");
    }
  }

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
      <label htmlFor="text">Write your review..</label>
      <input
        id="title"
        name="title"
        type="text"
        value={title}
        aria-label="title"
        placeholder="Write a review..."
        onChange={(e) => setTitle(e.target.value)}
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
      <div className="error-message">
        <p>{errorMessage}</p>
      </div>

      <div className="btns">
        <button>Save</button>
      </div>
    </form>
  );
}
