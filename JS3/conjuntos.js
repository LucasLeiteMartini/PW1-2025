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

    
}