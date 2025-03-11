export const MainContent = () => {
    return(
    <div className="bg-[#17494c]">
        <main className="flex justify-between max-w-4xl mx-auto text-white py-20 items-center">

        <div className="w-1/2">
            <h2 className="text-6xl font-bold leading-16">
                <span className="text-[#cc9fb6]">Champions </span><br/> 
                <span className="text-[#fed6aa]">of </span>
                <span className="text-[#00a665] border-b-2 border-white">customer </span><br/>
                <span className="text-[#31aabd] border-b-2 border-white">service.</span>
            </h2>
        </div>
        <div className="w-1/2">
            <div>
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. At omnis unde impedit eveniet explicabo accusantium.
                </p>
            </div>
            <div className="flex mt-5 gap-10">
                <button className="bg-[#e4f0d3] p-3 text-[#17494c] font-semibold">Free Trial</button>
                <button className="p-3 font-semibold border-2 border-white text-white">View Demo</button>
            </div>
        </div>
        </main>
    </div>);
}