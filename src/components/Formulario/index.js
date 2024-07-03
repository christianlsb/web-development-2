import "./styles.css"

export function Form(){

    const handleSubmit = () => {
        alert("Mensagem enviada com sucesso!")  
      };
    

    return(
        <form onSubmit={handleSubmit} className="formulario">
            <p>
                Envie uma mensagem para nós!
            </p>
            <div>
                <label>Insira seu email:</label>
                <input type="email" required/>
            </div>
            <div>
                <label>Insira seu telefone:</label>
                <input type="tel" required/>
            </div>
            <div>
                <label>Escreva sua mensagem:</label>
                <textarea></textarea>
            </div>
            <button>
                Enviar
            </button>
        </form>
        
    )
}