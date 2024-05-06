
class Transferir {
    static execute(contaOrigem, contaDestino, valor){
        if(!contaOrigem instanceof Conta || !contaDestino instanceof Conta){
            throw new Error("Precisam ser derivadas de 'Conta'")
        }
        try{
            contaOrigem.sacar(valor)
            contaDestino.depositar(valor)

        } catch(e){
            console.log("deu ruim", e.mensage)
        }
    }
   
}


class Cliente {
    constructor(nome, documento) {
        if (this.constructor === Cliente) {
            throw new Error("Cliente é uma classe abstrata");
        }
        this.nome = nome;
        this.documento = documento;
    }
}

//Agora surgiu a necessidade de Cliente ser Pessoa Física ou Juridica.

//Pessoa Física tem documento CPF e Juridica tem documento CNPJ

class Fisica extends Cliente {
    constructor(nome, documento, cpf){
        super(nome, documento)
        this.cpf = cpf
        this.tipo = "cpf"
    }
}

class Juridica extends Cliente {
    constructor(nome, documento, cnpj){
        super(nome, documento)
        this.cnpj = cnpj
        this.tipo = "cnpj"
    }
}



class Conta {
    constructor(cliente, numero) {
        if (this.constructor === Conta) {
            throw new Error("Conta é uma classe abstrata");
        }
        if (cliente !== undefined && numero !== undefined) {
            this.cliente = cliente;
            this.numero = numero;
            this.saldo = 0;
        }
    }

    get dadosCLiente(){
        return `${this.cliente.nome}, documento:${this.cliente.documento}, ${this.cliente.tipo}`
    }

    depositar(valor) {
        this.saldo += valor;
        console.log(`Saldo atual: ${this.saldo}`);
    }
    sacar() {
        throw new Error("Método sacar() precisa ser implementado");
    }


}

class ContaCorrente extends Conta {
    constructor(cliente, numero, limite) {
        super(cliente, numero);
        this.limite = limite;
    }
    sacar(valor) {
        if (this.limite < valor) {
            this.saldo -= valor;
            console.log(`Saldo atual: ${this.saldo}`);
        } else {
            console.log("Limite indisponível");
        }
    }
}

class ContaPoupanca extends Conta {
    constructor(cliente, numero, aniversario) {
        super(cliente, numero);
        this.aniversario = aniversario;
    }
    sacar(valor) {
        this.saldo -= valor;
        console.log(`Saldo atual: ${this.saldo}`);
    }
}

const maSoft = new Juridica("Matheus", 157, 8852)
const rafael = new Fisica("Rafael", 581, 100003)

const cc1 = new ContaPoupanca(rafael, 1234, "13/12")
const cc2 = new ContaPoupanca(maSoft, 54656, "10/06")


/* const contaMatheus = new ContaPoupanca(matheus, 7, "07/05");
const contaMaria = new ContaPoupanca(maria, 5, "10/03");
const contaMariaCo = new ContaCorrente(maria, 5, 1000); */



console.log(maSoft);
console.log(rafael);
console.log(cc1)

console.log(cc1.dadosCLiente)
console.log(cc2.dadosCLiente)

