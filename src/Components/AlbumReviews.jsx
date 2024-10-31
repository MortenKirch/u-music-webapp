import image from "../images/image-placeholder.png"



export default function AlbumReviews() {
  return <>
  
  <div className="reviews-section-new">
        <div className="review-controls-new"></div>

        <div className="review-list-new">
          <div className="review-box-new">
            <div className="review-header-new">
              <img
                src={image}
                alt="Profile"
                className="reviewer-pic-new"
              />
              <div className="name-rating-container">
                <div className="review-rating-display-new">
                  <p className="reviewer-name-new">
              
                  </p>
                  <p className="review-rating-new">Rating: 3.5/10</p>
                </div>
              </div>
            </div>
            <div className="review-content-new">
              <h4>Overskrift</h4>
              <p>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua."
              </p>
            </div>
            <div className="review-actions-new">
              <div className="heart-reply-new">
                <button className="heart-button-new">❤️</button>
                <span className="reply-thread-new">See thread</span>
              </div>
            </div>
          </div>
        </div>
      </div>
  </>;
}
