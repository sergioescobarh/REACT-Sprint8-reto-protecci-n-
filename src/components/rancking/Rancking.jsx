import '../rancking/rancking.css'
function Rancking () {
    return (
        <div className='rancking-container'>
            <h2 className='title-rancking'>Rancking de clientes</h2>
            <div className="rancking-user_container">
                <h3 className='rancking-user_position'>1</h3>
                <img className='rancking-user_image' src="../../../assets/pagesImages/user.png" alt="user" />
                <p className='rancking-user_name'>Nombre usuario</p>
                <h3 className='rancking-user_sale'>60%</h3>
            </div>
            <div className="rancking-user_container">
                <h3 className='rancking-user_position'>2</h3>
                <img className='rancking-user_image' src="../../../assets/pagesImages/user.png" alt="user" />
                <p className='rancking-user_name'>Nombre usuario</p>
                <h3 className='rancking-user_sale'>50%</h3>
            </div>
            <div className="rancking-user_container">
                <h3 className='rancking-user_position'>3</h3>
                <img className='rancking-user_image' src="../../../assets/pagesImages/user.png" alt="user" />
                <p className='rancking-user_name'>Nombre usuario</p>
                <h3 className='rancking-user_sale'>40%</h3>
            </div>
        </div>
    )
};

export default Rancking;