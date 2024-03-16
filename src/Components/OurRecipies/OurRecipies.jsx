import noodles from '../../assets/noodles.png'
import vegan from '../../assets/vegitables.png'
import timer from '../../assets/time.png'
import calorie from '../../assets/calorie.png'

function OurRecipies() {
    return (
        <section>
            <h3 className="text-[#150B2B] lexend text-[35px] font-semibold text-center pt-24">Our Recipes</h3>
            <p className="text-[#150B2BB2] text-center lexend text-base font-normal pt-5 pb-12">Discover culinary wonders in Our Recipes, brimming with delectable dishes, cooking tips, and <br /> inspiration for every palate and occasion.</p>

            <div className='flex justify-center gap-6'>
                <div className='border p-6 rounded-2xl'>
                    <img src={noodles} alt="#" />
                    <h5 className='pt-6 text-[#282828] lexend text-xl font-semibold'>Spaghetti Bolognese</h5>
                    <p className='text-base text-[#878787] font-normal pt-4 pb-4'>Classic Italian pasta dish with savory meat <br /> sauce.</p>
                    <hr />
                    <h4 className='pt-6 text-[#282828] lexend text-[18px] font-medium'>Ingredients: 6</h4>
                    <ul className='pt-4 pb-4 text-[#878787] fira text-[18px] font-normal'>
                        <li>500g ground beef</li>
                        <li>1 onion, chopped</li>
                        <li>2 cloves garlic, minced</li>
                    </ul>
                    <hr />
                    <div className='flex text-[#150B2BB2] gap-4 pt-6 pb-6 fira text-base font-normal'>
                        <div className='flex gap-1'><img src={timer} alt="#" /><span>30 munites</span></div>
                        <div className='flex gap-1'><img src={calorie} alt="#" /><span>600 calories</span></div>
                    </div>
                    <button className='text-[#150B2B] lexend text-[15px] font-medium px-6 py-3 bg-[#0BE58A] rounded-[40px]'>Want to Cook</button>
                </div>
                <div className='border p-6 rounded-2xl'>
                    <img src={vegan} alt="#" />
                    <h5 className='pt-6 text-[#282828] lexend text-xl font-semibold'>Spaghetti Bolognese</h5>
                    <p className='text-base text-[#878787] font-normal pt-4 pb-4'>Classic Italian pasta dish with savory meat <br /> sauce.</p>
                    <hr />
                    <h4 className='pt-6 text-[#282828] lexend text-[18px] font-medium'>Ingredients: 6</h4>
                    <ul className='pt-4 pb-4 text-[#878787] fira text-[18px] font-normal'>
                        <li>500g ground beef</li>
                        <li>1 onion, chopped</li>
                        <li>2 cloves garlic, minced</li>
                    </ul>
                    <hr />
                    <div className='flex text-[#150B2BB2] gap-4 pt-6 pb-6 fira text-base font-normal'>
                        <div className='flex gap-1'><img src={timer} alt="#" /><span>30 munites</span></div>
                        <div className='flex gap-1'><img src={calorie} alt="#" /><span>600 calories</span></div>
                    </div>
                    <button className='text-[#150B2B] lexend text-[15px] font-medium px-6 py-3 bg-[#0BE58A] rounded-[40px]'>Want to Cook</button>
                </div>
                <div></div>
                <div></div>
            </div>
        </section>
    )
}
export default OurRecipies;