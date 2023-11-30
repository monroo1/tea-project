import { memo } from "react";
import { FirstScreen } from "@/widgets/FirstScreen/ui/FirstScreen";
import { AboutUs } from "@/widgets/AboutUs";
import { Advantages } from "@/widgets/Advantages";
import { SubmitApplication } from "@/widgets/SubmitApplication";

export const MainPage = memo(() => {
    return (
        <>
            <FirstScreen />
            <AboutUs />
            <SubmitApplication />
            <Advantages />
        </>
    );
});
