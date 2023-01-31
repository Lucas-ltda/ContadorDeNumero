function contar() {
    let ini = document.querySelector('input#Inicio')
    let fim = document.querySelector('input#Fim')
    let passo =  document.querySelector('input#Passo')
    let res = document.querySelector('div#res')

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0 ) {
        window.alert('[ERRO] Informações faltando')
    } else{
        res.innerHTML = 'Contando : <br>'

        ini = Number(ini.value)
        fim = Number(fim.value)
        passo = Number(passo.value)

        if (ini < fim /*contagem crescente*/) {
            for (let c  = 0; c <= fim ; c +=passo) {
                res.innerHTML += `${c} \u{1F449}`
            }
        }else{//contagem decrescente
            for (let c  = 0; c <= fim ; c -=passo) {
                res.innerHTML += `${c} \u{1F449}`
            }
        }
        res.innerHTML +=`\u{1F3C1}` // += dps do inner para que ele se repita
    }
}