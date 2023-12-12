function Node(data){
    // constructor(data){
        this.data = data
        this.next = null
    // }
}
class List{
    constructor(){
        this.head = null
        this.size = 0
    }
    add(data){
        const node = new Node(data)
        if (!this.head){
            this.head = node
        }
        else {
            let current = this.head
            while(current.next){
                current = current.next
            }
            current.next = node
        }
        this.size ++

    }
    show(){
        let current = this.head
        console.log(this.size, current)
        while(current){
            console.log(current.data)
            current = current.next

        }
    }
}

let list = new List()
list.add(11)
list.add(12)
list.add(22)
list.add(33)
list.add(44)
list.show()
