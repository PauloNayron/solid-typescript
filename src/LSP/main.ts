class A {
    getNome() {
        console.log('Meu nome é A');
    }
}

class B extends A {
    override getNome() {
        console.log('Meu nome é B');
    }
}

var objeto1 = new A;
var objeto2 = new B;

function imprimeNome(objeto: A)
{
    return objeto.getNome();
}

imprimeNome(objeto1); // Meu nome é A
imprimeNome(objeto2); // Meu nome é B