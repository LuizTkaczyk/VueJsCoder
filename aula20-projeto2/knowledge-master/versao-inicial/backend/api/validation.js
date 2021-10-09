module.exports = app =>{

    //função que verifica se um valor existe ou não , caso não ele dá um erro
    function existsOrError(value, msg){
        if(!value) throw msg
        if(Array.isArray(value) && value.length === 0) throw msg
        if(typeof value === 'string' && !value.trim()) throw msg
    }


    //se não existir ele retorna um erro
    function notExistsOrError(value, msg){
        try{
            existsOrError(value, msg)
        }catch (msg){
            return
        }
    }

    // verifica se é igual ou não, exemplo, uma confirmação de senha
    function equalsOrError(valueA, valueB, msg){
        if(valueA !== valueB) throw msg
    }

    return {existsOrError, notExistsOrError, equalsOrError}
}