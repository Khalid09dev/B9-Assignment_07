import profile from '../../assets/profile.png'
import search from '../../assets/search.png'

function Navbar() {
    return (
        <nav className='flex justify-around items-center pt-8 pb-16'>
            <div>
            <h2 className='text-[#150B2B] lexend text-[32px] font-bold'>Recipe Calories</h2>
            </div>
            <div>
            <ul className='flex items-center text-[#150B2BB2] lexend text-base font-normal gap-12'>
                <li><a href="#">Home</a></li>
                <li><a href="#">Recipies</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Search</a></li>
            </ul>
            </div>
            <div className='flex items-center gap-3'>
            <div className='flex items-center relative'>
                <img className='relative left-11 select-none h-6 w-6' draggable="false" src={search} alt="#" /><input className='py-[10px] pr-6 pl-12 lexend bg-[#150B2B0D] lexend text-base font-normal rounded-[40px]' type="text" placeholder='Search'/>
            </div>
            <img draggable="false" src={profile} alt="#" />
            </div>
        </nav>
    )
}
export default Navbar;