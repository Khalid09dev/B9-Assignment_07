import propTypes from 'prop-types';
import noodles from '../../assets/noodles.png'
// import vegan from '../../assets/vegitables.png'
import timer from '../../assets/time.png'
import calorie from '../../assets/calorie.png'



const RecipieCart = ({recipie}) => {
    const {preparing_time, short_description, calories, recipe_name} = recipie;

    function foodPrepare() {
        const foodPrepare = document.getElementById('food-preparing');
        foodPrepare.classList.remove('hidden')
    }

    return (
        <div>

                <div className='border p-6 rounded-2xl'>
                    <img src={noodles} alt="#" />
                    <h5 className='pt-6 text-[#282828] lexend text-xl font-semibold'>{recipe_name}</h5>
                    <p className='text-base text-[#878787] font-normal pt-4 pb-4'>{short_description}</p>
                    <hr />
                    <h4 className='pt-6 text-[#282828] lexend text-[18px] font-medium'>Ingredients: <span id='ingredients-num'>1</span></h4>
                    <ul id='recipie-list' className='pt-4 pb-4 text-[#878787] fira text-[18px] font-normal'>

                    </ul>
                    <hr />
                    <div className='flex text-[#150B2BB2] gap-4 pt-6 pb-6 fira text-base font-normal'>
                        <div className='flex gap-1'><img src={timer} alt="#" /><span>{preparing_time}</span></div>
                        <div className='flex gap-1'><img src={calorie} alt="#" /><span>{calories}</span></div>
                    </div>
                    <button onClick={foodPrepare} className='text-[#150B2B] lexend text-[15px] font-medium px-6 py-3 bg-[#0BE58A] rounded-[40px] hover:bg-gray-400 duration-150'>Want to Cook</button>
                </div>
        </div>
    );
};

RecipieCart.propTypes = {
    recipie: propTypes.object.isRequired
}
export default RecipieCart;