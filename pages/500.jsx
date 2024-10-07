import ErrorPage from '../components/ErrorPage';
const UnkownPage = () => {
    return <ErrorPage code={500} message={"Oh. Parece que hay un error interno del servidor 500. ¡Inténtelo de nuevo más tarde!"} />
}

export default UnkownPage;
