export default function CreateItemModal({slug}) {
    return(
        <button className="w-[15rem] h-[4rem] rounded-md mx-auto bg-gradient-to-br from-slate-300 to-cyan-300 hover:to-cyan-500 active:shadow-slate-600 active:shadow-inner">
            Add New {slug}
        </button>
    )
}