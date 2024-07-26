export default function DropdownFeatures(){
    return<div className="outer-container bg-white text-medium-gray text-lg w-max p-5 border-solids rounded-xl shadow-xl ml-5">
        <div className="inner-container">
            <button className=' to-do flex items-center gap-4 hover:text-black active:font-semibold '>
                <img src="/proj-assets/images/icon-todo.svg" alt="To-do icon"></img>
                <a href='#' className="p-1">Todo List</a>
            </button>

            <button className=' to-do flex items-center gap-4 hover:text-black active:font-semibold '>
                <img src="/proj-assets/images/icon-calendar.svg" alt="Calendar Icon"></img>
                <a href='#' className="p-1">Calendar</a>
            </button>

            <button className=' to-do flex items-center gap-4 hover:text-black active:font-semibold '>
                <img src="/proj-assets/images/icon-reminders.svg" alt="Reminders Icon"></img>
                <a href='#' className="p-1">Reminders</a>
            </button>

            <button className=' to-do flex items-center gap-4 hover:text-black active:font-semibold '>
                <img src="/proj-assets/images/icon-planning.svg" alt="Planning Icon"></img>
                <a href='#' className="p-1">Planning</a>
            </button>
        </div>
    </div>
}