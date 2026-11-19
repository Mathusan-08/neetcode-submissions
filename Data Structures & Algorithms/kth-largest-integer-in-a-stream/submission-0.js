class KthLargest {
    /**
     * @param {number} k
     * @param {number[]} nums
     */
    constructor(k, nums) {
        this.k = k;
        this.nums = [];
        for(let i =0; i < nums.length; i++){
            this.add(nums[i]);
        }
    }

    removeMin(){
         let minimum = this.nums[0];
            this.nums[0] = this.nums.pop();
            let index = 0;
            while(true){
                let smallestindex = index;
                let leftindex = (2*index)+1;
                let rightindex = (2*index)+2;
                if(leftindex < this.nums.length && this.nums[leftindex] < this.nums[smallestindex]){
                    smallestindex = leftindex;
                }
                if(rightindex < this.nums.length && this.nums[rightindex] < this.nums[smallestindex]){
                    smallestindex = rightindex;
                }
                if(index === smallestindex){
                    break;
                }
                else{
                     [this.nums[index],this.nums[smallestindex]] = [this.nums[smallestindex],this.nums[index]];
                }
                index = smallestindex;
            }

    }

    /**
     * @param {number} val
     * @return {number}
     */
    add(val) {
        this.nums.push(val);
        let index = this.nums.length-1;
        while(true){
            if(index === 0){
                break;
            }
            let parentindex = Math.floor((index-1)/2);
            if(val >= this.nums[parentindex]){
                break;
            }
            else{
                [this.nums[parentindex],this.nums[index]] = [this.nums[index],this.nums[parentindex]];
            }
            index = parentindex;
        }
        if(this.nums.length > this.k){
            this.removeMin();
        }


        return this.nums[0];
    }
}
