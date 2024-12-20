import { Star, StarHalf, Star as StarOutline } from 'lucide-react'; // Подключаем иконки
import classes from './classes.module.css';

type RatingProps = {
  rating: number;
};

export const Rating = ({ rating }: RatingProps) => {
  const stars = Array.from({ length: 5 }, (_, i) => {
    if (rating >= i + 1) return 'full'; 
    if (rating > i && rating < i + 1) return 'half'; 
    return 'empty'; 
  });

 
  
  return (
    <div className={classes.ratingContainer}>
      {stars.map((type, index) => (
        <span key={index} className={classes.star}>
          {type === 'full' && <Star fill='#ffcc00' />}
          {type === 'half' && <StarHalf fill='#ffcc00'/>}
          {type === 'empty' && <StarOutline />}
        </span>
      ))}
    </div>
  );
};
