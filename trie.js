class TrieNode{

    constructor() {
        this.children = {}; //empty obj
        this.isEndOfWord = false; //mark as end as we said before
    }

}

class Trie {

    constructor(){
        this.root = new TrieNode();
    }

    insert(word){
        let currentNode = this.root;

        for(let i = 0; i < word.length; i++){
            const char = word[i];

            if(!currentNode.children[char]){ //if not current node has children starting with char
                currentNode.children[char] = new TrieNode();
            }

            currentNode = currentNode.children[char];
        }
        currentNode.isEndOfWord = true;
    }

    search(word){
        let currentNode = this.root;
        for(let i = 0; i < word.length; i++){
            const char = word[i];

            if(!currentNode.children[char]){ //if not current node has children starting with char
                return false;
            }

            currentNode = currentNode.children[char];
        }

        return currentNode.isEndOfWord;
    }
}

const trie = new Trie();
trie.insert("app");
trie.insert("apple");
trie.insert("apply");
trie.insert("banana");

console.log(trie.search("banana"));