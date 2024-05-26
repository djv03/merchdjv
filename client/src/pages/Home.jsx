
import Layout from '../components/Layout'
import { useAuth } from '../context/auth'
const Home = () => {
    const [auth,setAuth]=useAuth();
    return (
        <Layout title={"shop amazing- merchdjv"}>
            <h1>homeee</h1>
            <pre>{JSON.stringify(auth,null,4)}</pre>
        </Layout>
    )
}

export default Home