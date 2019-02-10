class Stack {
  constructor() {
    this.items = [];
    this.tos = -1;
  }

    load(item){
        ++this.tos;
        this.items.push(item);
    }

    unload(){
      this.tos--;
      this.items.pop();
    }

    peek(){
      return this.items[this.tos];
    }

}

const st = new Stack();
const tokens = '([{}])';
const openingDelimiters = '([{';
const closingDelimiters = ')]}';
for(let i = 0; i < tokens.length; i++){
  // st.load(tokens[i]);
  if(st.peek() === undefined){
    st.load(tokens[i]);
  }else if(tokens[i] === openingDelimiters[0]
    || tokens[i] === openingDelimiters[1]
    || tokens[i] === openingDelimiters[2]){
    st.load(tokens[i]);
  }else if((tokens[i] === closingDelimiters[0] && st.peek() === openingDelimiters[0])
   ||(tokens[i] === closingDelimiters[1] && st.peek() === openingDelimiters[1])
   ||(tokens[i] === closingDelimiters[2] && st.peek() === openingDelimiters[2])){
     st.unload();
   }else{
     st.load(tokens[i]);
   }
}

if(st.peek() === undefined){
  console.log('Balanced');
}else{
  console.log('Unbalanced');
}
