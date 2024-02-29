function Livro({dadosJSON}){
    return(
        <>
            {
                dadosJSON.map((livro)=>(
                    <div className='cardBook'> 
                        <h3>{livro.titulo}</h3>
                        <p>{livro.autor}</p>
                        <img src={livro.imagem} width={200} alt='Imagem do livro'/>
                        <p>
                            {livro.descricao}
                        </p>
                    </div> 
                ))
            }
        </>
    );  
};

export default Livro;
