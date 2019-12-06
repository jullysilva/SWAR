import React, { Component } from 'react'
import { Form, Button } from 'react-bootstrap';
import './../custom.css';

export class ConteudoPrincipal extends Component {

    showFile = async (e) => {
        e.preventDefault()
        const reader = new FileReader()
        reader.onload = async (e) => {
            const text = (e.target.result)
            localStorage.setItem('texto',text);
            alert('Arquivo armazenado com sucesso!')
        };
        reader.readAsText(e.target.files[0])
    }

    analisarArquivo() {
        let str = localStorage.getItem('texto');
        let linhas = str.split("\n");

        alert('Primeiro, vamos verificar a presença de imagens sem descrição alternativa.')
        this.verificarImagens(linhas) // verifica imagens

        alert('Agora, vamos verificar se os links da página possuem descrições claras.')
        this.verificarLinks(linhas) // verifica links

        alert('Em seguida, vamos verificar se o código possui a descrição do idioma da página.')
        this.verificarLang(linhas) // verifica lang

        //this.verificarTamanhoLetra(linhas) // verifica tamanho da letra
    }

    verificarImagens= (linhas) =>{
        let cont = 0;

        for (let i = 0; i < linhas.length; i++) {
            if ( (linhas[i].includes('<img')) && (!linhas[i].includes('alt=')) ) {
                alert('Atenção! Detectamos uma possível imagem sem texto alternativo na sua página.\nPor favor, verifique a linha ' + (i+1) + '.');
                cont++;
            }
        }

        if (cont === 0)
            alert('Parabéns! Sua página não possui nenhuma imagem sem texto alternativo.');
        else {
            if (cont === 1)
                alert('Foi encontrada ' + cont + ' imagem sem texto alternativo no total.');
            else
                alert('Foram encontradas ' + cont + ' imagens sem texto alternativo no total.');
        }
    } // fim do verificarImagens

    verificarLinks= (linhas) =>{
        let cont = 0;
        
        for (let i = 0; i < linhas.length; i++) {
            if ( (linhas[i].includes('Clique aqui')) || (linhas[i].includes('clique aqui')) || (linhas[i].includes('Click here')) || (linhas[i].includes('click here')) ) {
                alert('Atenção! Detectamos um possível link sem descrição clara na sua página.\nPor favor, verifique a linha ' + (i+1) + '.');
                cont++;
            }
        }

        if (cont === 0)
            alert('Parabéns! Sua página não possui nenhum link sem descrição clara.');
        else {
            if (cont === 1)
                alert('Foi encontrado ' + cont + ' link sem descrição clara no total.');
            else
                alert('Foram encontrados ' + cont + ' links sem descrição clara no total.');
        }
    } // fim do verificarLinks

    verificarLang= (linhas) =>{
        let possuiLang = false;

        let i = 0;
        while ( (!possuiLang) && (i < linhas.length) ) {
            if ( (linhas[i].includes('lang=')) )
                possuiLang = true;
            i++;
        }

        if (possuiLang)
            alert('Parabéns! Seu código possui a descrição do idioma da página.');
        else
            alert('Atenção! Não detectamos a presença de uma descrição do idioma da página no seu código.');
    } // fim do verificarLang

    verificarTamanhoLetra= (linhas) =>{
        let cont = 0;
        let tamanho;

        for (let i = 0; i < linhas.length; i++) {
            if (linhas[i].includes('font-size:')) {
                tamanho = linhas[i].replace('font-size:', '');
                tamanho = tamanho.replace('px;', '');

                if (tamanho < 18) {
                    alert('Atenção! Detectamos um possível texto com tamanho de fonte menor que 18.\nPor favor, verifique a linha ' + (i+1) + '.');
                    cont++;
                }
            }
        }

        if (cont === 0)
            alert('Parabéns! Este CSS não possui nenhum texto com tamanho de fonte menor que 18.');
        else {
            if (cont === 1)
                alert('Foi encontrado ' + cont + ' texto com tamanho de fonte menor que 18.');
            else
                alert('Foram encontrados ' + cont + ' textos com tamanho de fonte menor que 18.');
        }
    } // fim do verificarTamanhoLetra
      
    render() {
        return (
            <div>
                <div className="container">
                        <div className="box">
                            <h2>Seja bem-vindo ao SWAR!</h2>
                            <br/>
                            O SWAR (Smart Web Accessibility Renderizer) é uma ferramenta que auxilia o desenvolvedor web no momento de tornar o seu site mais acessível.
                            <br/>
                            Para usar o SWAR é muito simples! Basta selecionar o seu arquivo (ou arrastá-lo para a área em branco) e clicar no botão "Analisar o arquivo".
                            <br/>
                            Então, será exibido na tela os resultados encontrados com a análise.
                        </div>
                </div>

                <Form onSubmit={this.onSubmit}>
                    <Form.Group controlId="formBasicEmail">
                        <h3>Insira o arquivo HTML</h3>
                        <input type="file" id="input" size="lg" onChange={(e) => this.showFile(e)} />
                    </Form.Group>
                    <Button variant="success" type="submit" size="lg" onClick={() => this.analisarArquivo()}>
                        Analisar o arquivo
                    </Button>
                </Form>  
            </div>
        )
    }
}

export default ConteudoPrincipal
