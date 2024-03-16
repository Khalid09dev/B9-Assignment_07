import './Banner.css'

function Banner() {

    return (
        <div className='banner bg-no-repeat mx-auto bg-center'>
            <h1 className='text-white text-center lexend text-[50px] pt-28 font-bold'>Discover an exceptional cooking <br /> class tailored for you!</h1>
            <p className='text-white text-center lexend text-[18px] font-normal pt-6 pb-10'>Learn and Master Basic Programming, Data Structures, Algorithm, OOP, Database and solve 500+ coding <br /> problems to become an exceptionally well world-class Programmer.</p>
            <div className='flex justify-center gap-6 pb-32'>
            <button className='text-[#150B2B] lexend text-base font-semibold bg-[#0BE58A] px-7 py-4 rounded-[30px] hover:bg-red-300 duration-150'>Explore Now</button>
            <button className='text-white lexend text-base font-semibold px-7 py-4 rounded-[30px] border hover:bg-slate-800 duration-150'>Our Feedback</button>
            </div>
        </div>
    )
}
export default Banner;