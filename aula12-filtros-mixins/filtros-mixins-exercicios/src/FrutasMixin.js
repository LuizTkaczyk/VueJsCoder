export default{
    //usando mixins de Frutas.vue
    data() {
        return {
            fruta:'',
            frutas:['banana', 'maçã', 'laranja']
        }
    },
    methods: {
        add(){
            //método para adicionar mais frutas no array frutas
            this.frutas.push(this.fruta)
            this.fruta ='' 
        }
    },
}