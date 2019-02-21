class Node{
  constructor(value){
    this.data = value;
    this.left = null;
    this.right = null;
  }
}

class Tree{
  constructor(){
    this.root = null;
  }  

  add(value){
    let node = new Node(value);
    if(!this.root){
      this.root = node;
    }else {
      let locationToInsert = traverse(value);  
    }

  }

  traverse(value){
    // this function searches for suitable place to insert given value
  }

}