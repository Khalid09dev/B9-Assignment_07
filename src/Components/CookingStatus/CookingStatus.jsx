
const CookingStatus = () => {

    return (
        <div>
                <div className="border pt-8 rounded-xl">
                    <div className="px-20">
                    <h3 className="text-[#282828] text-center lexend text-2xl font-semibold pb-4">Want to cook: <span id="wanna-cook">11</span></h3>
                    <hr />
                    <ul className='flex text-[#878787] fira text-base font-medium pt-6 pb-4'>
                        <li>Name</li>
                        <li className="pl-24 pr-12">Time</li>
                        <li>Calories</li>
                    </ul>
                    </div>

                    <div id="food-preparing" className="hidden">
                    <ul className="flex gap-6 items-center text-[#282828B2] fira text-base font-normal py-4 bg-slate-50">
                        <li className="pl-6">1</li>
                        <li>Chicken Caesar <br /> Salad</li>
                        <li>20 <br /> minutes</li>
                        <li>400 <br /> calories</li>
                        <button className="text-[#150B2B] lexend text-base font-medium bg-[#0BE58A] py-[6px] px-4 rounded-3xl mr-6">Preparing</button>
                    </ul>
                    </div>

                    <h2 className="text-[#282828] lexend text-center text-2xl font-semibold pb-4 pt-8">Currently cooking: 0</h2>
                    <hr />
                    <ul className='flex text-[#878787] fira text-base font-medium pt-6 pb-4'>
                        <li>Name</li>
                        <li className="pl-36 pr-20">Time</li>
                        <li>Calories</li>
                    </ul>
                    <div className="flex justify-end text-[#282828CC]  lexend text-base font-medium gap-5 pt-4">
                        <span>Total Time = <br /> 45 minutes</span> <br />
                        <span>Total Calories = <br /> 1050 calories</span>
                    </div>
                </div>
        </div>
    );
};

export default CookingStatus;