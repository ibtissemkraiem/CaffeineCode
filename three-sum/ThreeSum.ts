function threeSum(nums: number[]): number[][] {

    nums.sort((a,b)=>a-b);
    const res:number[][]=[];
    for(let i =0 ; i<nums.length ; i++){
        //check the similarity
        if(i>0 && nums[i]===nums[i-1]) continue;
        //iandj
        let j:number = i+1;
        let k:number =nums.length-1;


        while(j<k){
            const sum : number = nums[i] + nums[j]+nums[k];
            //sum>0 => left 
            if(sum>0){
                k--;
            }
            //if sum<0 => right
            else if(sum<0){
                j++;
                  while(j < k && nums[j] === nums[j-1]){
                    j++;
            
            }
        }
        else{
            res.push([nums[i],nums[j],nums[k]]);
            j++;
            while(j<k && nums[j]===nums[j-1]){
                j++;
            }
        }
    }
    }
    return res;


};