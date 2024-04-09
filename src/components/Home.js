import Navbar from "./Navbar";
import Note from "./Note";
function Home() {

    return (
        <>
            <Navbar />
            <div className="container my-4">
                <Note />
            </div>
        </>
    );
}

export default Home;