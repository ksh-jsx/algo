//일반 트리는 그래프와 같은 구조이므로 생략..이진트리만 구현하겠음

//배열 이진트리
const tree = [
  undefined,
  9, //1
  3,
  8, //1*2, 1*2+1
  2,
  5,
  undefined,
  7, //2*2, 2*2+1, 3*2+1, 3*2+1
  undefined,
  undefined,
  undefined,
  4,
]; // 트리 크기만큼 0으로 채워두고 위치에 값 교체식으로 구현하면 될듯

//연결리스트 이진 트리
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class Tree {
  constructor(node) {
    this.root = node;
  }

  display() {
    const queue = new Queue();
    queue.enqueue(this.root);
    while (queue.size) {
      const currentNode = queue.dequeue();
      console.log(currentNode.value);
      if (currentNode.left) queue.enqueue(currentNode.left);
      if (currentNode.right) queue.enqueue(currentNode.right);
    }
  }
}

const tree2 = new Tree(new Node(9));
tree.root.left = new Node(3);
tree.root.right = new Node(8);
tree.root.left.left = new Node(4);
tree.root.left.right = new Node(6);
