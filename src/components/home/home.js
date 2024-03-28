import "./home.css"

const Home = ({ list }) => {
    return <div className="Home">
        Home Content
        <ol>
            {
                list.map(item => {
                    return <li>{item}</li>;
                })
            }
        </ol>
    </div>;
}

export default Home;