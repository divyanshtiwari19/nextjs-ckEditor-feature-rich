import CKeditor from "../components/editor/CkEditor"


export default function Home() {
  return (
    <main className="main">
      <h1>CKEditor5 Example App in Next.js</h1>
      {/* <MyEditor
        data={"<p>Hello world!</p>"}
        onChange={(event, editor) => {
          console.log(editor.getData());
        }}
      /> */}

      <div className="ckeditor-h-30">
        <CKeditor
          name="description"
          value={"<p>Hello world!</p>"}
        // onChange={(data) => {
        //   if (data && data !== "") {
        //     setValue("description", data);
        //     clearErrors("description");
        //   } else {
        //     setError("description", { required: true });
        //   }
        // }}
        />
      </div>
    </main>
  );
}
