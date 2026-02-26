import Pattern from "../svg/pattern";

const AddProject = () => {
  return (
    <section className="h-screen w-screen flex  justify-center items-center overflow-hidden bg-neutral-50">
        <div className="h-[500px] w-[800px] bg-white rounded-lg border bg-neutral-100">
            <section className="h-[500px] overflow-hidden relative w-[30%] border-r ">
                <Pattern className="opacity-10 h-[900px]" color="#262626"/>
            </section>
        </div>
    </section>
  );
};

export default AddProject;
