


class Usuarios {

    constructor() {
        this.personas = [];
    }

    agregarPersona(id, nombre, sala) {

        let persona = { id, nombre, sala };

        this.personas.push(persona);

        return this.personas;
    }

    getPersona(id) {

        let persona = this.personas.find(p => p.id === id);

        return persona;
    }

    getPersonas() {
        return this.personas;
    }

    getPersonaPorSala(sala) {
        
        let personasEnSala = this.personas.filter(p => p.sala === sala);

        return personasEnSala;
    }

    borrarPersona(id) {

        let personaBorrada = this.getPersona(id);
    
        this.personas = this.personas.filter(p => p.id != id);

        return personaBorrada;

    }

}

module.exports = {
    Usuarios,
}