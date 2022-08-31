---
title: 'Ch6: 函數式程式設計'
sidebar_label: 'Ch6: 函數式程式設計'
sidebar_position: 6
---

## [什麼是函數式程式設計？][fp-wiki]

> functional programming 的 function 比較像是數學裡的 function: f(x)

## 定義：

參考至：[less-lee-medium][fp-less-lee-medium]

-   Function 必須作為一級公民。意即，
    -   可以像一般變數一般被當作參數傳入
    -   被當作結果輸出
    -   被任意 assign 給其他變數、被任意進行運算。

```ts
// 被當作參數傳入
function sayHi() {
	console.log('hello')
}

setTimeout(sayHi, 1000)

// after 1 second...
// [LOG]: "hello"
```

```ts
// 被當作結果輸出
function sum(x: number, y: number) {
	return x + y
}

function main() {
	const tea = 45
	const milk = 100

	const bill = sum(tea, milk)
	// 不會改變原本變數值
	console.log('$' + tea)
	console.log('$' + milk)
	console.log('$' + bill)
}

main()

// [LOG]: "tea: $45"
// [LOG]: "milk: $100"
// [LOG]: "sum: $145"
```

```ts
// 被任意 assign 給其他變數、被任意進行運算。

const sum = function (x: number, y: number) {
	return x + y
}

function main() {
	const tea = 45
	const milk = 100

	const getSum = sum

	const bill = getSum(tea, milk) + sum(tea, milk)

	console.log('tea: $' + tea)
	console.log('milk: $' + milk)
	console.log('bill: $' + bill)
}

main()

// [LOG]: "tea: $45"
// [LOG]: "milk: $100"
// [LOG]: "bill: $290"
```

> _函數式程式設計中的變數是**不會改變的**_

## 變數可變性？

-   以下問題都來自於可變變數：
    -   競爭條件(race condition)
    -   deadlock 條件(死結)
    -   平行更新問題(concurrent update problem)

> _如果沒有變數會被更新，就這些問題就不會發生_

## 總結

-   三種範式都是在限制我們寫程式的方式，哪些是**不該做的**。
-   軟體就是：_**循序**_、_**選擇**_、_**迭代 (iteration)**_ 和 _**間接(indirection)**_ 所組成的內容。沒有更多也沒有更少。

[fp-wiki]: https://zh.wikipedia.org/zh-tw/%E5%87%BD%E6%95%B0%E5%BC%8F%E7%BC%96%E7%A8%8B
[fp-less-lee-medium]: https://medium.com/%E4%B8%80%E5%80%8B%E5%B0%8F%E5%B0%8F%E5%B7%A5%E7%A8%8B%E5%B8%AB%E7%9A%84%E9%9A%A8%E6%89%8B%E7%AD%86%E8%A8%98/javascript-functional-programming-%E4%B8%80%E6%96%87%E5%88%B0%E5%BA%95%E5%85%A8%E7%B4%80%E9%8C%84-95ff19d9892
