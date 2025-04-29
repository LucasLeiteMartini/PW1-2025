class integerSet {
    constructor(maxTam){
        this.maxTam = maxTam
        this.array = new Array(maxTam).fill(false)
    }

    adiciona(num){
        if(num >= 0 && num <= this.maxTam){
            this.array[num] = true
        }
    }

    remove(num){
        if(num >= 0 && num <= this.maxTam){
            this.array[num] = false
        }
    }

    uniao(set){
        const setResultado = new integerSet(this.maxTam)
        for(let i=0; i <= this.maxTam; i++){
            if(this.array[i] || set.array[i]){
                setResultado.array[i] = true
            }
        }
        return setResultado.toString()
    }

    intersecao(set){
        const setResultado = new integerSet(this.maxTam)
        for(let i=0; i <= this.maxTam; i++){
            if(this.array[i] && set.array[i]){
                setResultado.array[i] = true
            }
        }
        return setResultado.toString()
    }

    diferenca(set){
        const setResultado = new integerSet(this.maxTam)
        for(let i=0; i <= this.maxTam; i++){
            if(this.array[i] !== set.array[i]){
                setResultado.array[i] = true
            }
        }
        return setResultado.toString()
    }


    toString(){
        let result = ''
        for(let i=0; i <= this.maxTam; i++){
            if(this.array[i]){
                result += `${i}, `
            }
        }
        return result
    }

}

(function (){
    const set1 = new integerSet(10)
    set1.adiciona(1)
    set1.adiciona(3)
    set1.adiciona(5)
    set1.adiciona(7)
    set1.adiciona(9)

    const set2 = new integerSet(10)
    set2.adiciona(0)
    set2.adiciona(1)
    set2.adiciona(2)
    set2.adiciona(3)
    set2.adiciona(4)
    set2.adiciona(5)
    set2.adiciona(6)
    set2.adiciona(7)
    set2.adiciona(8)
    set2.adiciona(9)

    console.log("Conjunto 1: " + set1.toString())
    console.log("Conjunto 2: " + set2.toString())

    console.log("\nUnião entre os dois conjuntos: " + set1.uniao(set2))
    console.log("\nInteserção entre os dois conjuntos: " + set1.intersecao(set2))
    console.log("\nDiferença entre os dois conjuntos: " + set1.diferenca(set2))


    set1.remove(1)
    set1.remove(9)
    console.log("\nConjunto 1 após remoção: " + set1.toString())


    set2.remove(0)
    set2.remove(3)
    set2.remove(5)
    set2.remove(8)
    console.log("Conjunto 2 após remoção: " + set2.toString())
})();