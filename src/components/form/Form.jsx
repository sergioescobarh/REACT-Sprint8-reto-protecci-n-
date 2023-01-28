import '../form/form.css'
function Form() {
    return (
        <form className="form">
            <h2 className="form-title">¡PARTICIPA YA!</h2>
            <div className="form-div">
                <label htmlFor="" className="form-label">Nombre completo</label>
                <input type="text" className="form-input" />
            </div>
            <div className="form-div">
                <label htmlFor="" className="form-label">Número telefónico</label>
                <input type="text" className="form-input" />
            </div>
            <div className="form-div">
                <label htmlFor="" className="form-label">Correo electrónico</label>
                <input type="text" className="form-input" />
            </div>
            <div className="form-div">
                <label htmlFor="" className="form-label">Seleccione el producto de su interés</label>
                <select className='form-input' name="types-products" id="types-products">
                    <option value="" selected disabled>Seleccione el producto</option>
                    <option value="product-1">Camiseta Thermal</option>
                    <option value="product-2">Sudadera Thermal</option>
                    <option value="product-3">Hoddie Thermal</option>
                    <option value="product-4">Crewneck Thermal</option>
                </select>
            </div>
            <input type="submit" className="form-btn" />
        </form>
    )
};

export default Form;