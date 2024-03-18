import { useEffect, useState } from 'react';
import RecipieCart from './RecipieCart';


const RecipiesCart = () => {
    const [recipies, setRecipies] = useState([]);
    useEffect(() => {
        fetch('recipies.json')
        .then(res => res.json())
        .then(data => setRecipies(data))
    }, [])

    return (
            <div className='grid grid-cols-2 gap-6'>
                {
                    recipies.map(recipie => <RecipieCart key={recipie.id} recipie={recipie}></  RecipieCart>)
                }
            </div>
        
    );
};

export default RecipiesCart;