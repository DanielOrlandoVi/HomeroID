import "./Card.css"
import FotoHomero from "./assets/FotoHomero.jpg"
function Card(){

    return(
    <div className="Card">
        <h2 >MEXICO</h2>
        <div className="Contenedor">
            <div className="FotoHomero">
                <img src={FotoHomero} alt="Foto de Homero"/> 
            </div>

            <div className="DatosHomero">
                <p className="nombre">HOMER SANCHEZ</p>
                <p className="etiqueta">NAME</p>
                <p className="nacionalidad">MEXICANA</p>
                <p className="etiqueta">NATIONALITY</p>
                <p className="fecha">20 MARCH</p>
                <p className="etiqueta">DATE OF ISSUE</p>
                <p className="lugar">MEXICO</p>
                <p className="etiqueta">AUTHORITY</p>            
                
            </div>
        </div>
        
    </div>
    );
}
export default Card;
