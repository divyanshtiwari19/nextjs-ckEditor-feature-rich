import React, { useState, useEffect, useRef } from "react";

const CKeditor = ({ onChange, name, value }) => {
    const [editorLoaded, setEditorLoaded] = useState(false);
    const [content, setContent] = useState("<p></p>");

    const editorRef = useRef();
    const { CKEditor, DecoupledEditor } = editorRef.current || {};

    useEffect(() => {
        editorRef.current = {
            CKEditor: require("@ckeditor/ckeditor5-react").CKEditor,
            DecoupledEditor: require("@divyansh/ckeditor5-35.4.0-aw0tyn5lwrbh"),
        };
        setEditorLoaded(true);
    }, []);

    return (
        <>
            {editorLoaded ? (
                <CKEditor
                    className="ckEditorStyling"
                    // type=""
                    name={name}
                    editor={DecoupledEditor}
                    data={content}
                    // onChange={(event, editor) => {
                    //     const data = editor.getData();
                    //     onChange(data);
                    // }}
                    onChange={(event, editor) => {
                        const data = editor.getData();
                        setContent(data)
                    }}
                />
            ) : (
                <div className="flex justify-between items-center">Editor loading</div>
            )}
            <div dangerouslySetInnerHTML={{ __html: content }}></div>
        </>
    );
};
export default CKeditor;
