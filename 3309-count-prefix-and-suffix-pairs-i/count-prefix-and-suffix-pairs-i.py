class Solution:
    def countPrefixSuffixPairs(self, words: List[str]) -> int:

        class TrieNode:
            def __init__(self):
                self.children = {}
                self.count = 0

        root = TrieNode()
        ans = 0

        for word in words:
            node = root

            for i in range(len(word)):
                ch = word[i]

                if ch not in node.children:
                    node.children[ch] = TrieNode()

                node = node.children[ch]

                prefix_length = i + 1

                if word[-prefix_length:] == word[:prefix_length]:
                    ans += node.count

            node.count += 1

        return ans