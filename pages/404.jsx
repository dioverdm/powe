import ErrorPage from '../components/ErrorPage';
const UnkownPage = () => {
    let messages = [
        '¿Te has perdido, chico?',
        '¡Rayos! Este camino sin salida.',
        '¡Los Aurores bloquearon este camino, Harry!'
    ];

    return <ErrorPage code={404} message={messages[Math.floor(Math.random()*messages.length)] || "Página no encontrada."} />
}

export default UnkownPage;

