import { HtmlEditor, Image, Inject, Link, QuickToolbar, RichTextEditorComponent, Toolbar } from "@syncfusion/ej2-react-richtexteditor";
import { registerLicense } from "@syncfusion/ej2-base";
import { useEffect, useState } from "react";
import "./RTE.css";

// ✅ Register Syncfusion License
registerLicense("Ngo9BigBOggjHTQxAR8/V1NMaF1cXmhKYVF3WmFZfVtgfF9HZVZSQmYuP1ZhSXxWdkdiUH9WcXFRQ2FbVUc=");

interface UserDataProps {
    userData: { name: string; address: string; email: string; phone: string; userId: string };
    setUserData: React.Dispatch<React.SetStateAction<{ name: string; address: string; email: string; phone: string; userId: string }>>;
}

const RichTextEditor = ({ userData, setUserData }: UserDataProps) => {
    const [jsonContent, setJsonContent] = useState("");

    useEffect(() => {
        // ✅ Convert `userData` to formatted JSON
        setJsonContent(`<pre>${JSON.stringify(userData, null, 2)}</pre>`);
    }, [userData]);

    const handleChanges = (e: any) => {
        try {
            const data = JSON.parse(e.value);
            console.log(data);
            setJsonContent(e.value);
            setUserData(data);
        } catch (error) {
            console.log(error);
            setJsonContent(`<pre>${JSON.stringify(userData, null, 2)}</pre>`);
            alert("Invalid JSON format");
        }
    };

    return (
        <div className="RichTextEditor">
            <RichTextEditorComponent value={jsonContent}
                onChange={(e: any) => {
                    console.log(e);
                    handleChanges(e)
                }}>
                <Inject services={[Toolbar, Image, Link, HtmlEditor, QuickToolbar]} />
            </RichTextEditorComponent>
        </div>
    );
};

export default RichTextEditor;
