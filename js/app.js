const datos = [
    { nombre: 'Alexis', apellido: 'Guanoluisa', hobbie: 'Cantar', lugarNacimiento: 'Quito' }
]

const app = Vue.createApp({
    methods:{
        agregarDatos(){
            console.log(this.nombre)
            console.log(this.apellido)
            console.log(this.hobbie)
            console.log(this.lugarNacimiento)
            const newData={
                nombre: this.nombre,
                apellido: this.apellido,
                hobbie: this.hobbie,
                lugarNacimiento: this.lugarNacimiento
                
            } 
            this.listarDatos.unshift(newData) 
            this.nombre=null
            this.apellido=null
            this.hobbie=null
            this.lugarNacimiento=null

        }
    },
    data(){
        return{
            listarDatos:datos,
            nombre:null,
            apellido:null,
            hobbie:null,
            lugarNacimiento:null
        }

    }
})

app.mount('#miFormulario')