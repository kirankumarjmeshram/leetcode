/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let trie = new Trie();
    for(let str of strs) {
        trie.insert(str);
    }
    return trie.longestCommonPrefix();
};

class TrieNode{
    constructor() {
        this.children = {};
        this.isEnd = false;
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode();
    }

    insert(word) {
        let node = this.root;
        for(let char of word) {
            if(!node.children[char]){
                node.children[char] = new TrieNode();
            }
            node = node.children[char];
        }
        node.isEnd = true;
    }
    longestCommonPrefix(){
        let node = this.root;
        let prefix = "";

        while(Object.keys(node.children).length === 1 && !node.isEnd) {
            let char = Object.keys(node.children)[0];
            prefix += char;
            node = node.children[char]
        } 
        return prefix;
    }
}