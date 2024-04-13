

function Loading() {

    return (
        <div className="fixed inset-0 flex justify-center items-center transition-colors visible bg-black/20">
            <div className="bg-transparent rounded-xl p-6 transition-all scale-100 opacity-100">
                <div className='flex items-center justify-center min-h-screen'>
                    <div className="border-top-color:transparent w-14 h-14 border-4 border-black rounded-full animate-spin"></div>
                    <p className="ml-2 ">cargando...</p>
                </div>

            </div>
        </div >
    )

}

export default Loading;