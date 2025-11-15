function hashStringToInt(s,tableSize){
    let hash = 17;

    for(let i = 1; i < s.length; ++i){
        hash = (13 * hash * s.charCodeAt(i)) % tableSize;
    }

    return hash;
}

class HashTable{

    table = new Array(100);

    setItem = (key, value) => {
        const idx = hashStringToInt(key, this.table.length);

        if (!this.table[idx]) {
            this.table[idx] = [];
        }

        // Update existing key
        for (let pair of this.table[idx]) {
            if (pair[0] === key) {
                pair[1] = value;
                return;
            }
        }

        // Add new key/value pair
        this.table[idx].push([key, value]);
    };
    getItem = key => {
        const idx = hashStringToInt(key,this.table.length);
        if (!this.table[idx]){
            return null;
        }
        return this.table[idx].find(x => x[0] === key)[1];
    };

}

const myHashtable = new HashTable();
myHashtable.setItem('firstName','Chrysa');
myHashtable.getItem('firstName');
myHashtable.setItem('lastName','Kazakou');
console.log(myHashtable.getItem('firstName'));
console.log(myHashtable.getItem('lastName'));