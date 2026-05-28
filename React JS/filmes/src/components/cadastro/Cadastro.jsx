import "./Cadastro.css";
import { useState } from "react";
import Botao from "../botao/Botao";


// Destructuring nas props:
// const Cadastro = ({ 
//     cadastro, tituloCadastro, valor, setValor, estilo, 
//     valorSelect, setValorSelect, listaGeneros 
//   }) => {}

const Cadastro = (props) => {


    return (
        <section className={`section_cadastro--${props.temadatela} section_cadastro`}>
            <form className={`layout_grid form_cadastro form_cadastro--${props.temadatela}`}>
                <h1>{props.tituloCadastro}</h1>
                <hr />
                <div className="campos_cadastro">
                    <div className={`campo_cad_nome campo_cad_nome--${props.temadatela}`}>
                        <label htmlFor="nome">Nome</label>
                        <input type="text" name="nome" placeholder={`Digite o nome do ${props.placeholder}`} 
                        //O valor do input vem de props (estado do componente pai)
                        value={props.valor}
                        // Atualiza o estado do pai ao digitar
                        onChange={(e) => props.setValor(e.target.value)}
                        />
                    </div>
                    <div className={`campo_cad_genero campo_cad_genero--${props.temadatela}`} style={{ display: props.visibilidade }}>
                        <label htmlFor="genero">Gênero</label>
                        <select value={props.generoSelecionado} onChange={(e) => props.setGeneroSelecionado(e.target.value)}>
                            <option value="" disabled>Selecione</option>
                            {props.lista && props.lista.length > 0 ? (
                            props.lista.map((item) => (
                            <option key={(props.tipoLista == "filme") ? item.idFilme : item.idGenero} className="opcoes-generos" value={item.idGenero}>{item.nome}</option>
                             ) ) ) : (<></>) }
                        </select>
                    </div>
                    <div className={`campo_cad_genero campo_cad_genero--${props.temadatela}`} style={{ display: props.visibilidade }}>
                        <label htmlFor="imagem" className={`label_image label_image--${props.temadatela}`}> Selecionar Imagem </label>
                        <input className={`input_image input_image--${props.temadatela}`} type="file" id="imagem" onChange={(e) => props.setImagem(e.target.files[0])} style={ {display: "none"} }/>
                    </div>
                    <Botao tipoBotao="button" nomeDoBotao={(props.editar) == false ? "Cadastrar" : "Editar"} funcBotao={() => (props.editar) == false ? props.funcCadastro() : props.funcEditar()} />
                    <button className="botao_cancelar" type="button" onClick={props.funcCancelarEdicao} style={{ display: props.cancelarVisibilidade }}>Cancelar</button>
                </div>
            </form>
        </section>
    )
}

export default Cadastro;