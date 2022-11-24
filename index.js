
/**
 * Recebe um array com os nomes de pessoas e retorna um array invertido
 *
 * @param {*} people : Um array contendo um conjunto de nomes
 * @returns Um array com os nomes invertidos
 */
function invert(people){

    let peopleInvertido = people.reverse();

    return peopleInvertido;

    
}

/**
 * Essa função recebe um array de notas e retorna uma média
 *
 * @param {*} grades : Um array de notas
 * @returns Uma média a partir do array de notas
 */
function mean(grades){

    var n1 = grades[0];
    var n2 = grades[1];
    var n3 = grades[2];
    var media = (n1 + n2 + n3) / 3;

    return media;
}

/**
 * Função recebe uma média e informa textualmente se um estudante está aprovado ou não
 *
 * @param {*} mean : Um número que representa uma média
 * @returns Uma string dizendo se um estudante está aprovado ou não
 */
function isApproved(mean){

    if(mean>=7){
        resultado = "aprovado";
    }else{
        resultado = "reprovado";
    }

    return resultado;
}

/**
 * Recebe uma data no formato de string e transforma em um formato textual
 *
 * @param {*} strDate : Uma string no formato de data
 * @returns Uma descrição da data informada
 */
function wide(strDate){

    var t = strDate.split("/");
    var mes = t[1];

    switch(mes){
    case '01':
        mes = ' de Janeiro de ';
        break;

    case '02':
        mes = ' de fevereiro de ';
        break;

    case '03':
        mes = '  de março de ';
        break;
        
    case '04':
        mes = ' de abril de ';
        break;
    case '05':
        mes = ' de maio de ';
        break;
    case '06':
        mes = ' de junho de';
        break;
    case '07':
        mes = ' de julho de ';
        break;
    case '08':
        mes = ' de agosto de ';
        break;
    case '09':
        mes = ' de setembro de ';
        break;
    case '10':
        mes = ' de outubro de ';
        break;
        case '11':
        mes = 'de novembro de ';
        break;
    case '12':
        mes = ' de dezembro de ';
        break;
        default:

    }
    var data = t[0] + mes + t[2];
    if (strDate === "") {
        return "";
    } else {
        return data;
    }
     }

    

// Trecho utilizado pelos testes
exports._test = {
    invert: invert,
    mean: mean,
    isApproved: isApproved,
    wide: wide
}