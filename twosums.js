/*
Given an array of integers, return indices of the two numbers such that they add up to a specific target.
You may assume that each input would have exactly one solution.
function takes two parameters, an array of numbers and a target number
 */

//simple with O(n^2) complexity:
const twoSum = function(nums, target) {
  for(let i = 0; i < nums.length -1; i++){
    for(let j = i+1; j < nums.length; j++){
        if(nums[i] + nums[j] === target) return [i, j];
    }
  }
};

//improved complexity:
const twoSum = function(nums, target) {
    const obj = {};
    for(let i = 0; i < nums.length; i++){
        obj[nums[i]] = i;
    }
    for(let i = 0; i < nums.length;i++){
        if(obj[target-nums[i]]){
            return [i, obj[target-nums[i]]]
        }
    }
};