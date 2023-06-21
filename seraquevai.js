function mostra(frase) {
    console.log(frase)
}
mostra('teste')

let meuGosto = "computadores"
let minhaIdade = 24;
const nascimento = "fortaleza";
const meuNome = "Raul";


mostra(`Ola, me chamo ${meuNome}, sou de ${nascimento}, tenho ${minhaIdade} anos e gosto de ${meuGosto}`)

// ou
function caracteristicas(minhaIdade, meuNome, localNascimento, meusGostos) {
    return `Ola, tenho ${minhaIdade}, me chamo ${meuNome}, nasci em ${localNascimento}, gosto de ${meuGosto}`
}
mostra(caracteristicas(24, 'raul', 'fortaleza', 'computadores'))



console.log("foi :/")




