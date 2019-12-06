import React, { Component } from 'react'
import Menu from './Menu'
import Footer from './Footer';
import './../custom.css';

export class Sobre extends Component {
    render() {
        return (
            <div>
                <Menu />
                <div className="App-header">
            <h1 className="titulo">Padrão WCAG 2.0</h1>

            <section className="padrao"> 
                <ul>
                    <li>Colocar textos alternativos em conteúdo não-textual</li><br/>
                    <li>Alternativas para áudios e vídeos</li><br/>
                    <li>Organizar o código com boa estrutura lógica</li><br/>
                    <li>Não use cores muito parecidas e não reproduza mídia automaticamente</li><br/>
                    <li>Deixar todo o conteúdo acessível para usuários que usam somente o teclado (tab)</li><br/>
                    <li>Deixe o usuário ter controle sobre conteúdos que tenham tempo de aparição</li><br/>
                    <li>Nenhum conteúdo deve piscar mais de três vezes por segundo</li><br/>
                    <li>Criar mecanismos de navegação úteis e claros ('Skip to Content', 'Click Here')</li><br/>
                    <li>Colocar o idioma na página</li><br/>
                    <li>Mostrar de forma clara aonde o usuário se encontra na navegação</li><br/>
                    <li>Fornecer intruções claras ao usuário</li><br/>
                    <li>Por fim, use todas as boas práticas de programação para criar um código acessível</li><br/>
                </ul>
            </section>   
            </div>

            <Footer />
            </div>
        )
    }
}

export default Sobre

