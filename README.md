# SWAR
Projeto de desenvolvimento Front-End React dado pelo Programa LevelUp, fornecido pela PUC Minas 2019, juntamente com a Empresa SQUADRA

## Framework

[React-Bootstrap](https://react-bootstrap.github.io/)

O SWAR temo objetivo, renderizar interfaces que não atendem ao padrão WCAG 2.0 de acessibilidade. Abrangendo um maior numero de usuários, idependentemente se possui ou não algum tipo de defiência. Queremos atingir o ápice do UX, não só pensando em um tipo de usuário, mas sim no usuário como oum todo. 

### Como irá funcionar: 

O usuário vai inserir a URL da página que quer reformular, o SWAR irá receber a estrutura HTML do site e conforme vericação na estrutura, será necessário inserir atributos ou tags que são exigências base do A - nível inicial do padrão WCAG.

Se caso a estrutura possuir imagem, será retornado ao usuário uma caixa para que ele possa preencher, fazendo uma descrição da imagem, isso será aplicado a qualquer tipo de imagem.

A estrutura que será modificada usará o CSS padrão fornecido pelo SWAR, gerado conforme padrão de acessibilidade.

Assim que terminado tais tarefas - é claro que o usuário não saberá o que estará acontecendo por trás - será retornado para o usuário um URL que manda para a nova página reformulada.

É claro que uma página temporária, ou seja, só para um acesso melhor.


### link usado para verificação de cor voltado para acessibilidade
[Contrast Checker](https://contrastchecker.com/)


### Resumo dos requisitos do WCAG 2.0 Nível A

1.1 - Colocar textos alternativos em conteúdo não-textual
1.2 - Alternativas para áudios e vídeos
1.3 - Organizar o código com boa estrutura lógica
1.4 - Não use cores muito parecidas e não reproduza mídia automaticamente

2.1 - Deixar todo o conteúdo acessível para usuários que usam somente o teclado (tab)
2.2 - Deixe o usuário ter controle sobre conteúdos que tenham tempo de aparição
2.3 - Nenhum conteúdo deve piscar mais de três vezes por segundo
2.4 - Criar mecanismos de navegação úteis e claros ('Skip to Content', 'Click Here')

3.1 - Colocar o idioma na página
3.2 - Mostrar de forma clara aonde o usuário se encontra na navegação
3.3 - Fornecer intruções claras ao usuário

4.1 - Por fim, use todas as boas práticas de programação para criar um código acessível
