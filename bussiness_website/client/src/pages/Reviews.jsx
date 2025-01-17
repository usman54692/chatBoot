// ReviewsPage.js
import React, { useState, useEffect } from 'react';

const ReviewsPage = () => {
    const [reviews, setReviews] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [reviewsPerPage] = useState(5); // Change this to adjust the number of reviews per page

    useEffect(() => {
        // Simulated fetch request for reviews data
        const fetchReviews = async () => {
            const data = [
                { title: "Great Product!", body: "I really loved this product. Highly recommend!", author: "John Doe", rating: 5 },
                { title: "Not bad", body: "The product was okay, but could be improved.", author: "Jane Smith", rating: 3 },
                { title: "Excellent", body: "Exceeded my expectations in every way!", author: "Alice Brown", rating: 5 },
                { title: "Wouldn't buy again", body: "Quality was lacking and delivery was late.", author: "Bob White", rating: 2 },
                { title: "Pretty good", body: "Good value for money, but not perfect.", author: "Charlie Green", rating: 4 },
                { title: "Amazing!", body: "Absolutely love it! Will buy again.", author: "Dave Black", rating: 5 },
                { title: "Disappointing", body: "Not what I expected at all.", author: "Eve Purple", rating: 2 },
                { title: "Satisfied", body: "Decent product for the price.", author: "Frank Blue", rating: 4 },
                { title: "Great Product!", body: "I really loved this product. Highly recommend!", author: "John Doe", rating: 5 },
                { title: "Not bad", body: "The product was okay, but could be improved.", author: "Jane Smith", rating: 3 },
                { title: "Excellent", body: "Exceeded my expectations in every way!", author: "Alice Brown", rating: 5 },
                { title: "Wouldn't buy again", body: "Quality was lacking and delivery was late.", author: "Bob White", rating: 2 },
                { title: "Pretty good", body: "Good value for money, but not perfect.", author: "Charlie Green", rating: 4 },
                { title: "Amazing!", body: "Absolutely love it! Will buy again.", author: "Dave Black", rating: 5 },
                { title: "Disappointing", body: "Not what I expected at all.", author: "Eve Purple", rating: 2 },
                { title: "Satisfied", body: "Decent product for the price.", author: "Frank Blue", rating: 4 },
                { title: "Great Product!", body: "I really loved this product. Highly recommend!", author: "John Doe", rating: 5 },
                { title: "Not bad", body: "The product was okay, but could be improved.", author: "Jane Smith", rating: 3 },
                { title: "Excellent", body: "Exceeded my expectations in every way!", author: "Alice Brown", rating: 5 },
                { title: "Wouldn't buy again", body: "Quality was lacking and delivery was late.", author: "Bob White", rating: 2 },
                { title: "Pretty good", body: "Good value for money, but not perfect.", author: "Charlie Green", rating: 4 },
                { title: "Amazing!", body: "Absolutely love it! Will buy again.", author: "Dave Black", rating: 5 },
                { title: "Disappointing", body: "Not what I expected at all.", author: "Eve Purple", rating: 2 },
                { title: "Satisfied", body: "Decent product for the price.", author: "Frank Blue", rating: 4 },
            ];
            setReviews(data);
        };

        fetchReviews();
    }, []);

    // Pagination logic
    const indexOfLastReview = currentPage * reviewsPerPage;
    const indexOfFirstReview = indexOfLastReview - reviewsPerPage;
    const currentReviews = reviews.slice(indexOfFirstReview, indexOfLastReview);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-2xl font-bold mb-4 text-center text-white">Customer Reviews</h1>
            <div className="space-y-4">
                {currentReviews.map((review, index) => (
                    <div key={index} className="p-4 border rounded-lg shadow-md bg-white text-center">
                        <h2 className="text-lg font-semibold mb-2">{review.title}</h2>
                        <p className="text-gray-600 mb-2">{review.body}</p>
                        <div className="text-sm text-gray-500 mb-2">- {review.author}</div>
                        <div className="text-yellow-500 mt-2">
                            {"★".repeat(review.rating)}
                            {"☆".repeat(5 - review.rating)}
                        </div>
                    </div>
                ))}
            </div>

            {/* Pagination controls */}
            <div className="flex justify-center mt-6 space-x-2">
                <button
                    onClick={() => paginate(1)}
                    className={`px-3 py-1 rounded-md ${currentPage === 1 ? 'bg-gray-400' : 'bg-blue-500 text-white hover:bg-blue-700'}`}
                    disabled={currentPage === 1}
                >
                    First
                </button>
                {Array.from({ length: Math.ceil(reviews.length / reviewsPerPage) }, (_, i) => i + 1).map((number) => (
                    <button
                        key={number}
                        onClick={() => paginate(number)}
                        className={`px-3 py-1 rounded-md ${currentPage === number ? 'bg-blue-500 text-white' : 'bg-gray-300 hover:bg-gray-400'}`}
                    >
                        {number}
                    </button>
                ))}
                <button
                    onClick={() => paginate(Math.ceil(reviews.length / reviewsPerPage))}
                    className={`px-3 py-1 rounded-md ${currentPage === Math.ceil(reviews.length / reviewsPerPage) ? 'bg-gray-400' : 'bg-blue-500 text-white hover:bg-blue-700'}`}
                    disabled={currentPage === Math.ceil(reviews.length / reviewsPerPage)}
                >
                    Last
                </button>
            </div>
        </div>
    );
};

export default ReviewsPage;
