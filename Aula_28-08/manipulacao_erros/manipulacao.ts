class EmailInvalidoError extends Error {
    constructor(message: string) {
        super(message);
        this.name = 'InvalidEmailError';  // Nome do erro customizado
    }
}


function verificarEmail(email: string): void {
    if (!email.includes('@')) {
        throw new EmailInvalidoError('Email invalido! Não há o caractere "@"');
    }

    console.log('Email válido!');
}

try {
    verificarEmail('usuario.com');
} catch (error) {
    if (error instanceof EmailInvalidoError) {
        console.error(error.message);
    }
}