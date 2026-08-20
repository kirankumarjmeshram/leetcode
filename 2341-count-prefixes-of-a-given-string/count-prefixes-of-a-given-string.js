/**
 * @param {string[]} words
 * @param {string} s
 * @return {number}
 */
var countPrefixes = function(words, s) {
    let trie = new Trie();
    for(let word of words){
        trie.insert(word);
    }
    return trie.countPrefixes(s);
};

class TrieNode{
    constructor() {
        this.children = {};
        this.count = 0;
    }
}

class Trie{
    constructor(){
        this.root = new TrieNode();
    }

    insert(word) {
        let node = this.root;
        for(let char of word) {
            if(!node.children[char]) {
                node.children[char] = new TrieNode()
            }
            node = node.children[char];
        }
        node.count++;
    }

    countPrefixes(s) {
        let node = this.root
        let count = 0;
        for(let char of s) {
            if(!node.children[char]) {
                break
            }
            node =  node.children[char];
            count += node.count
        }
        return count;
    }
}