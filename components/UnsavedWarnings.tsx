import { useEffect } from "react";

const UnsavedChangesWarning = ({ isTrueLeave }: { isTrueLeave: boolean }) => {
    useEffect(() => {
        const handleMouseLeave = (event: MouseEvent) => {
            if (!isTrueLeave && event.clientY <= 0) {
                alert("⚠️ You have unsaved changes!");
            }
        };

        const handleBeforeUnload = (event: BeforeUnloadEvent) => {
            if (!isTrueLeave) {
                event.preventDefault();
                event.returnValue = "";
            }
        };

        document.addEventListener("mouseleave", handleMouseLeave);
        window.addEventListener("beforeunload", handleBeforeUnload);

        return () => {
            document.removeEventListener("mouseleave", handleMouseLeave);
            window.removeEventListener("beforeunload", handleBeforeUnload);
        };
    }, [isTrueLeave]);

    return null;
};

export default UnsavedChangesWarning;
