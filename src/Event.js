import React, { useState } from 'react';

function Event() {
    // State variables to track user actions
    const [isInterested, setIsInterested] = useState(false);
    const [isRegistered, setIsRegistered] = useState(false);
    const [likes, setLikes] = useState(0);
    const [feedback, setFeedback] = useState("");

    // Event handlers
    const handleInterestClick = () => {
        setIsInterested(!isInterested);
    };

    const handleRegisterClick = () => {
        setIsRegistered(true);
        alert("You have successfully registered for this event!");
    };

    const handleLikeClick = () => {
        setLikes(likes + 1);
    };

    const handleFeedbackChange = (event) => {
        setFeedback(event.target.value);
    };

    const handleFeedbackSubmit = (event) => {
        event.preventDefault();
        alert(`Feedback submitted: ${feedback}`);
        setFeedback("");
    };

    return (
        <div>
            <h2>EventMaster: Annual Conference</h2>
            <p>Join us for a day of insightful talks and networking opportunities!</p>

            {/* Interest Button */}
            <button onClick={handleInterestClick}>
                {isInterested ? "Not Interested" : "Mark as Interested"}
            </button>

            {/* Register Button */}
            <button onClick={handleRegisterClick} disabled={isRegistered}>
                {isRegistered ? "Registered" : "Register"}
            </button>

            {/* Like Button */}
            <button onClick={handleLikeClick}>
                👍 Like {likes}
            </button>

            {/* Feedback Form */}
            <form onSubmit={handleFeedbackSubmit}>
                <label>
                    Feedback:
                    <input 
                        type="text" 
                        value={feedback} 
                        onChange={handleFeedbackChange} 
                        placeholder="Leave your feedback here"
                    />
                </label>
                <button type="submit">Submit Feedback</button>
            </form>
        </div>
    );
}

export default Event;
