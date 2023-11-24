import { memo } from "react";
import { FirstScreen } from "@/widgets/FirstScreen/ui/FirstScreen";
import { AboutUs } from "@/features/AboutUs";
import { Advantages } from "@/features/Advantages";
import { SubmitApplication } from "@/features/SubmitApplication";

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
