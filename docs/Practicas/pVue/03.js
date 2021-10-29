var app=new Vue({
    el: '#aplicacion',
    data:{ 
      actividad: '',
      actividades: []
    },
    methods: {
      actualizarLista: function() {
        this.actividades.push(this.actividad);
        this.actividad = '';
      }
    }
  })