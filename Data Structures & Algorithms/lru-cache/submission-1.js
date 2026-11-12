class Node {
    constructor(key, value) {
        this.key = key;
        this.value = value;
        this.prev = null;
        this.next = null;
    }
}

class LRUCache {
    /**
     * @param {number} capacity
     */
    constructor(capacity) {
        this.cache = new Map();
        this.capacity = capacity;

        this.left = new Node(0, 0);
        this.right = new Node(0, 0);
    
        this.left.next = this.right;
        this.right.prev = this.left;
    }


    remove(node){
        node.next.prev = node.prev;
        node.prev.next = node.next;

    }

    insert(node){
        let previous = this.right.prev;
        let next = this.right;

        node.next = next;
        node.prev = previous

        previous.next = node;
        next.prev = node;
        
    }
    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        if(this.cache.has(key)){
            let node = this.cache.get(key)
            this.remove(node);
            this.insert(node);
            return node.value;
        }
        return -1;
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        if (this.cache.has(key)) {
            let node = this.cache.get(key);
            node.value = value;
            this.remove(node);
            this.insert(node);
            return;
        }
        let node = new Node(key,value)
        this.cache.set(key,node);
        this.insert(node);
        if(this.cache.size > this.capacity){
            let lru = this.left.next;
            this.remove(lru);
            this.cache.delete(lru.key);
        }

    }
}
