import React from 'react';
import reviews from '../../../public/Reveiw.json'; // Adjust the path as needed
import Rating from 'react-rating';

const Review = () => {
  return (
    <section className="p-6 bg-softWhite dark:bg-navyBlue text-navyBlue dark:text-softWhite">
      <h2 className="text-2xl font-bold mb-4 text-center">Customer Reviews</h2>
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
        {reviews.map((review) => (
          <div key={review.id} className="p-4 bg-lightCyan dark:bg-cyan rounded shadow-lg">
            <h3 className="font-bold text-lg">{review.name}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">{new Date(review.date).toLocaleDateString()}</p>
            <p className="my-2">{review.comment}</p>
            <Rating
              readonly
              initialRating={review.rating}
              emptySymbol={<svg className="w-5 h-5 text-gray-300" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927C9.436 1.778 10.564 1.778 10.951 2.927L12.345 6.88L16.763 7.423C18.017 7.574 18.513 9.093 17.657 9.999L14.834 12.914L15.577 17.301C15.812 18.561 14.465 19.393 13.371 18.794L10 16.923L6.629 18.794C5.535 19.393 4.188 18.561 4.423 17.301L5.166 12.914L2.343 9.999C1.487 9.093 1.983 7.574 3.237 7.423L7.655 6.88L9.049 2.927Z"/></svg>}
              fullSymbol={<svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927C9.436 1.778 10.564 1.778 10.951 2.927L12.345 6.88L16.763 7.423C18.017 7.574 18.513 9.093 17.657 9.999L14.834 12.914L15.577 17.301C15.812 18.561 14.465 19.393 13.371 18.794L10 16.923L6.629 18.794C5.535 19.393 4.188 18.561 4.423 17.301L5.166 12.914L2.343 9.999C1.487 9.093 1.983 7.574 3.237 7.423L7.655 6.88L9.049 2.927Z"/></svg>}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Review;
