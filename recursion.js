/** product: calculate the product of an array of numbers. */

function product(nums) {
	if (nums.length === 0) return 1;
	return nums[0] * product(nums.slice(1));
}

console.log(product([2, 3, 4])); // 24

/** longest: return the length of the longest word in an array of words. */

function longest(words) {
	if (words.length === 0) return 0;
	let restLongest = longest(words.slice(1));
	return Math.max(words[0].length, restLongest);
}

console.log(longest(["hello", "hi", "hola"])); // 5

/** everyOther: return a string with every other letter. */

function everyOther(str) {
	if (str.length === 0) return "";
	return str[0] + (str.length > 1 ? everyOther(str.slice(2)) : "");
}

console.log(everyOther("hello")); // "hlo"

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str) {
	if (str.length <= 1) return true;
	if (str[0] !== str[str.length - 1]) return false;
	return isPalindrome(str.slice(1, str.length - 1));
}

console.log(isPalindrome("tacocat")); // true
console.log(isPalindrome("tacodog")); // false

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, str, idx = 0) {
	if (arr.length === 0) return -1;
	if (arr[0] === str) return idx;
	return findIndex(arr.slice(1), str, idx + 1);
}

let animals = ["duck", "cat", "pony"];
console.log(findIndex(animals, "cat")); // 1
console.log(findIndex(animals, "porcupine")); // -1

/** revString: return a copy of a string, but in reverse. */

function revString(str) {
	if (str.length === 0) return "";
	return str[str.length - 1] + revString(str.slice(0, str.length - 1));
}

console.log(revString("porcupine")); // 'enipucrop'

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
	let strings = [];

	function gather(obj) {
		for (let key in obj) {
			if (typeof obj[key] === "string") {
				strings.push(obj[key]);
			} else if (typeof obj[key] === "object") {
				gather(obj[key]);
			}
		}
	}

	gather(obj);
	return strings;
}

let nestedObj = {
	firstName: "Lester",
	favoriteNumber: 22,
	moreData: {
		lastName: "Testowitz",
	},
	funFacts: {
		moreStuff: {
			anotherNumber: 100,
			deeplyNestedString: {
				almostThere: {
					success: "you made it!",
				},
			},
		},
		favoriteString: "nice!",
	},
};

console.log(gatherStrings(nestedObj)); // ["Lester", "Testowitz", "you made it!", "nice!"]

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val, left = 0, right = arr.length - 1) {
	if (left > right) return -1;

	let mid = Math.floor((left + right) / 2);

	if (arr[mid] === val) return mid;
	if (arr[mid] > val) return binarySearch(arr, val, left, mid - 1);
	return binarySearch(arr, val, mid + 1, right);
}

console.log(binarySearch([1, 2, 3, 4], 1)); // 0
console.log(binarySearch([1, 2, 3, 4], 3)); // 2
console.log(binarySearch([1, 2, 3, 4], 5)); // -1

module.exports = {
	product,
	longest,
	everyOther,
	isPalindrome,
	findIndex,
	revString,
	gatherStrings,
	binarySearch,
};
