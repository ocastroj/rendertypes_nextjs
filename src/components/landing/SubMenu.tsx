import Link from "next/link";

export const SubMenu = () => {
    return(
        <div className="flex justify-end text-white px-5 bg-[#17494c] pt-5">
            <ul className="text-xs space-x-4">
                <Link href="#">Sign In</Link>
                <Link href="#">Product Support</Link>
                <Link href="#">Company</Link>
                <Link href="#">Contact Us</Link>
                <Link href="#">English</Link>
            </ul>
        </div>
    );
}