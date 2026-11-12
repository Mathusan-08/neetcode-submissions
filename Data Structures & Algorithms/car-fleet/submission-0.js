class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        let cars = new Map();
        for(let i =0; i < position.length; i++){
            cars.set(position[i],speed[i])
        }
        const sortedcars = new Map([...cars].sort((a, b) => b[0] - a[0]));
        let fleets = 0;
        let fleettime = 0;
        for(const car of sortedcars.keys()){
            let time = (target - car)/sortedcars.get(car);
            if(time > fleettime){
                fleets++;
                fleettime = time;
            }

        }
        return fleets;

    }
}
