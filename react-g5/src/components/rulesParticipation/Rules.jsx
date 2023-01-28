import "../rulesParticipation/rules.css";
function Rules() {
    return (
        <div className="rules-container">
            <div className="rules-container-image">
                <img className="rules-image" src="../../../assets/pagesImages/rules.png" alt="" />
            </div>
            <div className="rules-container_description">
                <h2 className="rules-title">¿Cómo participar?</h2>
                <p className="rules-description">
                    <ol>
                        <li>
                        Para participar, los interesados deben registrarse en esta página web y proporcionar información personal veraz y precisa.
                        </li>
                        <li>
                        Cada compra realizada en nuestra tienda en línea TEAL durante el período del concurso, contará como una entrada para el sorteo.
                        </li>
                        <li>
                        Los participantes pueden ganar hasta un 60% de descuento en la nueva colección con acceso exclusivo, en función del número de compras realizadas.
                        </li>
                        <li>
                        El sorteo se llevará a cabo el 20 de febrero de 2023 y el ganador será notificado a través de correo electrónico o teléfono.
                        </li>
                        <li>
                        El premio no es canjeable por dinero en efectivo.
                        </li>
                        <li>
                        El personal de TEAL y sus familiares directos no están elegibles para participar en el concurso.
                        </li>
                        <li>
                        Al registrarse para el concurso, los participantes aceptan los términos y condiciones del mismo.
                        </li>
                        <li>
                        Al participar en este concurso, los participantes aceptan permitir que TEAL publique su nombre y fotografía en caso de ser el ganador del concurso.
                        </li>
                    </ol>
                </p>
            </div>
        </div>
    );
}

export default Rules;
