const nums = [1,2,3,4,5,6,7];
const part = nums.slice(2,5);
console.log(part);
const remove = nums.splice(2,5,77);// splice(start,parts to cut,inject/add)
const join = nums.join(" ami ");
console.log(remove);
console.log(nums);
console.log(join);