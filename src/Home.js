import BlogList from "./BlogList";
import useFetch from "./useFetch";
const Home = () => {

    
    const { data: blogs, isPending, error } = useFetch('http://localhost:8000/blogs');

    return (                                                   /* anonymous function -> without () brackets or with ()=>{} */
        <div className="home">
            { error && <div>{ error }</div>}
            { isPending && <div>Loading...</div>}
            {blogs && <BlogList blogs={blogs} title="All blogs"/>}
        </div>
     );
}
 
export default Home;