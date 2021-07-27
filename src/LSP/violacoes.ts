// Sobrescrevendo um método que não faz nada...
class ContratoDeTrabalho {
    remuneracao() {
        // faz alguma coisa
    }
}

class Voluntario extends ContratoDeTrabalho {
    remuneracao() {
        // não faz nada
    }
}




// Lançando uma exceção inesperada...
class MusicPlay {
    play(file: File) {
        // toca a música
    }
}

class Mp3MusicPlay extends MusicPlay
{
    play(file: File) {
        if (file.type !== 'mp3') {
            throw new Error('Só são permitido arquivos do tipo mp3');
        }
        // toca a música
    }
}




// Retornando valores de tipos diferentes...
class Auth
{
    checkCredentials(login: string, password: string) {
        // faz alguma coisa
        return true;
    }
}

class AuthApi extends Auth
{
    // @ts-ignore
    override checkCredentials(login: string, password: string) {
        // faz alguma coisa
        return {'auth': true, 'status': 200};
    }
}