class BST{
    constructor() {
        this.root = null;
    }

    insert(data){
        if(this.root){
            this.root.insert(data);
        }
        else{
            this.root = new Node(data);
        }
    }

    delete(data){
        if(this.root){
            this.root.delete(data);
        }
    }
}

class Node{
    constructor(data) {
        this.left = null;
        this.right = null;
        this.data = null;
    }

    findMin(){ //recursive
        if(this.left){
            return this.left.findMin();
        }
        else
            return this.data;
    }

    insert(data){
        if(this.data == data){
            throw new Error("Cannot insert node cause it already exists");
        }
        else if(this.data > data){
            if(this.left){
                this.left.insert(data);
            }
            else{
                this.left = new Node(data);
            }
        }
        else{
            if(this.right){
                this.right.insert(data);
            }
            else{
                this.right = new Node(data);
            }
        }
    }

    delete(node){
        if(data < this.data && this.left){
            this.left = this.left.delete(node);
        }
        else if(data > this.data && this.right){
            this.right = this.right.delete(node);
        }
        else{
            if(this.data == data){
                if(this.right && this.left){
                    let minVal = this.right.findMin();
                    this.data = minVal;
                    this.right = this.right.delete(minVal);
                }
            }
            else if(this.left){
                return this.left;
            }
            else if(this.right){
                return this.right;
            }
            else
                return null;
        }
    }
}
