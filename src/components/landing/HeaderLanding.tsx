export const HeaderLanding = () => {
    return(
        <div className="bg-[#17494c]">
            <header className="flex justify-between max-w-4xl mx-auto text-white py-5 items-center">
                <h2 className="text-2xl">ZENDESK</h2>
                <menu>
                    <ul className="flex gap-16 items-center">
                        <li>Products</li>
                        <li>Pricing</li>
                        <li>Solutions</li>
                        <li>Demo</li>
                        <li>Resources</li>
                        <li className="bg-[#e4f0d3] p-3 text-[#17494c] font-bold">Free Trial</li>
                    </ul>
                </menu>
            </header>
        </div>
    );
}