import { Link } from 'react-router-dom';

export const AppBar = () => {

    return (
        <section>
            <div>
                <nav>
                    <div>
                        <Link to="/"> 
                            Home
                        </Link> 
                    </div>
                    <div>
                        <Link to="/register">
                            <p>Registration</p>
                        </Link> 
                        <Link to="/login"> 
                            <p>Log in</p>
                         </Link> 
                    </div>
                </nav>
            </div>
        </section>
    )
}