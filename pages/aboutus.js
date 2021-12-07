import Layout from "../components/Layout";
import Link from 'next/link'
const aboutUs = () => {
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
    console.log(tz);
    return ( 
        <Layout>
            <div className="container">
                <h1>Nosotros</h1>
                <Link href="/">Home</Link>
            </div>
        </Layout>
        
     );
}
 
export default aboutUs;