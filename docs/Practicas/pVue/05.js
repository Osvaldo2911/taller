var app=new Vue({
    el: '#aplicacion',
    data: { 
      nombre: '',
      apellido: ''
    },
    computed:{
     nombreCompleto: function () {
        return this.nombre + ' ' + this.apellido;
     }
    }
})