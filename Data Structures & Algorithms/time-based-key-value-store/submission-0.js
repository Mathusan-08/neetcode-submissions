class TimeMap {
    constructor() {
        this.keyStore = new Map();
    }

    /**
     * @param {string} key
     * @param {string} value
     * @param {number} timestamp
     * @return {void}
     */
    set(key, value, timestamp) {
        if(!this.keyStore.has(key)){
            this.keyStore.set(key,{
                timestamps:[timestamp],
                values:[value]
            });
        }
        else{
            let history = this.keyStore.get(key);
            history.timestamps.push(timestamp);
            history.values.push(value);
        }

    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    get(key, timestamp) {
        if(!this.keyStore.has(key)){
            return "";
        }
        let history = this.keyStore.get(key);
        let result =-1;
        let arr = history.timestamps;
        let arr2 = history.values;
        let left =0;
        let right = arr.length-1;
        while(left <= right){
            let mid = left + Math.floor((right-left)/2);
            if(arr[mid] === timestamp){
                return arr2[mid];
            }
            else if(arr[mid] < timestamp){
                left = mid+1;
                result = mid;
            }
            else{
                right = mid-1
            }
        }
        if(result === -1){
            return "";
        }
        else{
            return arr2[result];
        }
        

    }
}
