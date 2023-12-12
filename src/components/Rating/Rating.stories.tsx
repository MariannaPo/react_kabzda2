import React, {useState} from "react";
import {action} from '@storybook/addon-actions';
import Rating, {RatingValuesType} from "./Rating";
export default {
    title: 'Rating',
    component: Rating,
};
export const EmptyStar = () => <Rating value={0} onClick={z=>z}/>;
export const Star1 = () => <Rating value={1} onClick={z=>z}/>;
export const Star2 = () => <Rating value={2} onClick={z=>z}/>;
export const Star3 = () => <Rating value={3} onClick={z=>z}/>;
export const Star4 = () => <Rating value={4} onClick={z=>z}/>;
export const Star5 = () => <Rating value={5} onClick={z=>z}/>;

export const StarRating = () => {
    const [rating, setRating] = useState<RatingValuesType>(3)
    return <Rating
        value={rating} onClick={setRating}/>;
};

