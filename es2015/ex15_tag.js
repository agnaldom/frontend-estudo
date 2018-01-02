function tag(strings, ...values) {
    console.log(strings);
    console.log(values);
    return 'Outro Valor'
}
var aluno = 'Gui';
var status = 'Aprovado';
console.log(tag `${aluno} está ${status}`);
