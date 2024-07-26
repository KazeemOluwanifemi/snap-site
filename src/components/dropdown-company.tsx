export default function DropdwonCompany(){
    return<div className="outer-container bg-white text-medium-gray text-lg w-max p-5 border-solids rounded-xl shadow-xl ml-5">
    <div className="inner-container">
        <button className='history flex items-center hover:text-black active:font-semibold'>
            <a href='#' className="p-1">History</a>
        </button>

        <button className='our-team flex items-center hover:text-black active:font-semibold'>
            <a href='#' className="p-1">Our Team</a>
        </button>

        <button className='blog flex items-center hover:text-black active:font-semibold '>
            <a href='#' className="p-1">Blog</a>
        </button>
    </div>
</div>
}