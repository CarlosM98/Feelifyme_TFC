import { Link } from 'react-router-dom';

const NotFound = () => {

    return <div>
        <h1 className='titulo_notfound'>Uh!</h1>
        <p className='parrafo_notfound'>Parece que estás perdido</p>
        <Link data-cy='homeLink' to="/">Página principal</Link>
    </div>
}

export default NotFound;