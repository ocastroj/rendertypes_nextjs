import { HeaderLanding } from "@/components/landing/HeaderLanding";
import { MainBody } from "@/components/landing/MainBody";
import { MainContent } from "@/components/landing/MainContent";
import { SubMenu } from "@/components/landing/SubMenu";
import { TopBanner } from "@/components/landing/TopBanner";

const SSR = () => {
    return(
        <div>
            <TopBanner/>
            <SubMenu/>
            <HeaderLanding/>
            <MainContent />
            <MainBody/>
        </div>
    )
}

export default SSR;

// colores
// primary : #03363e
// secondary: #17494c
// terciary: #e4f0d3