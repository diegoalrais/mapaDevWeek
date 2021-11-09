// Buscar itens da tela
const itensPerguntasERespostas = document.querySelectorAll('.item')
console.log(itensPerguntasERespostas)

//entender que o item foi clicado
itensPerguntasERespostas.forEach(function(item){
    item.addEventListener('click', function(){

       //Verificar se a item clicado está ativo
        const estaAtiva = item.classList.contains('ativo')

        //Eu preciso fechar todas
        itensPerguntasERespostas.forEach(function(item){
            item.classList.remove('ativo')
        })

        //Se a pergunta não está ativa 
            if(!estaAtiva) {
                // Abrir a resposta atual 
                item.classList.add('ativo')
            //Se a pergunta está ativa
            } else {
                //Desativar(Renomeia a classe ativa)
                item.classList.remove('ativo')
            }           
    })
})