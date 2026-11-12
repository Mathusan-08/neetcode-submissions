function canfinish(piles,h,k){
        let hours =0;
        for(let pile of piles){
            hours += Math.ceil(pile/k);
        }
        return hours <=h;
}

class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let result =0;
        let left = 1;
        let right = Math.max(...piles);
        while(left <= right){
            let mid = left + Math.floor((right-left)/2);
            
            if(canfinish(piles,h,mid)){
                result = mid;
                right = mid-1;
            }
            else{
                left = mid+1;
            }
        }
    return result;
    }
    
}
