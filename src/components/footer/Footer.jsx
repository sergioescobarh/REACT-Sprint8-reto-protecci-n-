import '../footer/footer.css'
function Footer() {
    return (
        <footer className="footer">
            <div class="footerInformation">
                <div className="follow-me">
                    <h4 className="follow-me__title">Síguenos</h4>
                    <ul className="follow-me__icon">
                        <li><i className="fa-brands fa-instagram"></i></li>
                        <li><i className="fa-brands fa-facebook"></i></li>
                        <li><i className="fa-brands fa-spotify"></i></li>
                        <li><i className="fa-brands fa-youtube"></i></li>
                    </ul>
                </div>

                <div className="contact">
                    <h4 className="contact__title">Contáctanos</h4>
                    <ul className="contact__icon">
                        <li><i className="fa-solid fa-comment-dots"></i></li>
                        <li><i className="fa-brands fa-whatsapp"></i></li>
                    </ul>
                    <textarea className="contact__suggestion" name="" id="" cols="30" rows="2"
                        placeholder="Déjanos tu sugerencia"></textarea>
                </div>

                <div className="container-us-brands">
                    <div className="us">
                        <h4 className="us__title">Sobre nosotros</h4>
                        <p>TEAL GROUP</p>
                        <p>Cultura</p>
                        <p>Trabaja con nosotros</p>
                    </div>

                    <div className="brands">
                        <h4 className="brands__title">Marcas</h4>
                        <p>ORIGINAL</p>
                        <p>BASICS</p>
                        <p>CLASSICS</p>
                        <p>SKETCHES</p>
                    </div>
                </div>

                <div class="copyright">
                    <p>©Copyright 2022 TEAL all rights reserved</p>
                    <p>TEAL SAS | NUM-NUM</p>
                </div>
            </div>
        </footer>
    )
};

export default Footer;