const fazerpipoca = (tempo) => {
        switch(tempo) {
            case 1: case 2 : case 3 : case 4 : case 5 : case 6 : case 7 :case 8 : case 9 :    
                return 'Tempo insuficiente';
            case 10:
                return 'Prato pronto, bom apetite!!!';
                    case 20 :
                    return 'A comida queimou';
                    case 30 : 
                    return 'kabumm';
            default : 
            return 'Prato inexistente';
    }
}
console.log(fazerpipoca(30));

const macarrao = (tempo) => {
    switch(tempo) {
        case 1: case 2 : case 3 : case 4 : case 5 : case 6 : case 7 :    
            return 'Tempo insuficiente';
        case 8:
            return 'Prato pronto, bom apetite!!!';
                case 16 :
                return 'A comida queimou';
                case 24 : 
                return 'kabumm';
        default : 
        return 'Prato inexistente';
}   
}
console.log(macarrao(24));

const carne = (tempo) => {
    switch(tempo) {
        case 1: case 2 : case 3 : case 4 : case 5 : case 6 : case 7 : case 7 :case 8 :
        case 9 :case 10 :case 11 :case 12 :case 13 : case 14 
            return 'Tempo insuficiente';
        case 8:
            return 'Prato pronto, bom apetite!!!';
                case 16 :
                return 'A comida queimou';
                case 24 : 
                return 'kabumm';
        default : 
        return 'Prato inexistente';
}   
}
console.log(macarrao(24));





console.log('Prato pronto, bom apetite!!!');
