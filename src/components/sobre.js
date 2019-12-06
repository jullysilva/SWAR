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
            <h1 className="titulo">Padrão WCAG</h1>
            <section className="padrao"> 
                <ul>
                    <section className="textinho"> 
                        Para que seu site seja acessível de acordo com o padrão WCAG, certifique-se que suas páginas possuam os seguintes requisitos:<br/><br/>
                    </section>
                    <li>Textos alternativos em conteúdos não-textuais</li><br/>
                    <li>Alternativas para áudios e vídeos</li><br/>
                    <li>Código organizado e com boa estrutura lógica</li><br/>
                    <li>Sem o uso de cores muito parecidas e nem reprodução automática de mídia</li><br/>
                    <li>Conteúdo acessível para usuários que usam somente o teclado (tab)</li><br/>
                    <li>Controle total do usuário sobre conteúdos que tenham tempo de aparição</li><br/>
                    <li>Nenhum conteúdo deve piscar mais de três vezes por segundo</li><br/>
                    <li>Mecanismos de navegação úteis e claros</li><br/>
                    <li>Idioma declarado no código da página</li><br/>
                    <li>Exibição clara de onde o usuário se encontra na navegação</li><br/>
                    <li>Intruções claras ao usuário</li><br/>
                    <section className="textinho"> 
                        Por fim, utilize todas as boas práticas de programação para criar uma página acessível a todos os usuários
                    </section>
                </ul>
            </section>  
            </div>

            <Footer />
            </div>
        )
    }
}

export default Sobre

