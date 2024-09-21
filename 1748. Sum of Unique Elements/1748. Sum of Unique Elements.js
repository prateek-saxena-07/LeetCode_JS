/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function(nums) {
    let freq={};
    for(let i=0;i<nums.length;i++)
    {
        if(!freq[nums[i]])
        {
            freq[nums[i]]=0;
        }
        freq[nums[i]]++
    }
let sum=0;
    for(let i=0;i<nums.length;i++)
    {
        if(freq[nums[i]]==1)
        {
            sum+=nums[i];
        }
    }

    return sum;
};
