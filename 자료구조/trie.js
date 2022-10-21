class Node {
  constructor(value = "") {
    this.value = value;
    this.children = new Map();
  }
}

class Trie {
  constructor() {
    this.root = new Node();
  }

  insert(string) {
    let currentNode = this.root;
    for (const char of string) {
      if (!currentNode.children.has(char)) {
        currentNode.children.set(char, new Node(currentNode.value + char));
      }
      currentNode = currentNode.children.get(char);
    }
  }

  has(string) {
    let currentNode = this.root;

    for (const char of string) {
      if (!currentNode.children.has(char)) {
        return false;
      }
      currentNode = currentNode.children.get(char);
    }
    return true;
  }

  search(string) {
    let currentNode = this.root;
    const values = [];
    const queue = [];
    for (const char of string) {
      currentNode = currentNode.children.get(char);
    }
    values.push(currentNode.value);
    queue.push(...currentNode.children);
    while (queue.length) {
      const { value, children } = queue.shift()[1];
      //console.log(children);
      values.push(value);
      queue.push(...children);
    }
    console.log(`${string}의 검색결과: ${values}`);
  }
}

const trie = new Trie();
trie.insert("cat");
trie.insert("can");
trie.insert("cans");
trie.insert("cats");
trie.insert("cake");

trie.search("ca");
trie.search("cat");
