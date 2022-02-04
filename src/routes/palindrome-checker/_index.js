class Palindrome {
	constructor(text, caseSensitive, ignoreWhitespace){
		this.text = text; //The text to test
		this.caseSensitive = caseSensitive; //Whether case sensitivity should be considered
		this.ignoreWhitespace = ignoreWhitespace; //Whether whitespaces should be ignored
		this.textCloned = text; //We are not going to mess with the original text so we use this
		this.solve();
		this.explain();
	}

	static reverseText = str =>{
		// Step 1. Use the split() method to return a new array
		var splitString = str.split(''); // var splitString = "hello".split("");
		// ["h", "e", "l", "l", "o"]

		// Step 2. Use the reverse() method to reverse the new created array
		var reverseArray = splitString.reverse(); // var reverseArray = ["h", "e", "l", "l", "o"].reverse();
		// ["o", "l", "l", "e", "h"]

		// Step 3. Use the join() method to join all elements of the array into a string
		var joinArray = reverseArray.join(''); // var joinArray = ["o", "l", "l", "e", "h"].join("");
		// "olleh"

		//Step 4. Return the reversed string
		return joinArray; // "olleh"
	}

	solve = ()=>{
		if (!this.caseSensitive){
			this.textCloned = this.textCloned.toLowerCase();
		}
		if (this.ignoreWhitespace){
			this.textCloned = this.textCloned.replaceAll(" ","");
		}

		if (this.textCloned === Palindrome.reverseText(this.textCloned))
			this.palindrome = true;
		else
			this.palindrome = false;
	}



	explain = ()=>{
		let sentence;
		let wordOrPhrase = (this.text.split(" ").length > 1) ? "Phrase" : "Word";
		switch (this.palindrome){
			case true:
				sentence = 
`
<pre>
	<span style="color:green">${wordOrPhrase}</span> : ${this.text}
	<span style="color:green">case sensitive</span> : ${this.caseSensitive}
	<span style="color:green">ignore whitespaces</span> : ${this.ignoreWhitespace}
	--------------------------------------------
${this.ignoreWhitespace ? `Since the <i style="color:green">ignore whitespaces</i> option is turned on, all whitespaces will be stripped from your ${wordOrPhrase}.
It will then become [${this.text.replaceAll(" ","")}].`: ''
}
${this.caseSensitive ? '' : `The <i style="color:green">case sensitive</i> option is turned off, so we will convert all letters to lowercase to make it easy to compare.
Then your ${wordOrPhrase} will now become [${this.text.toLowerCase()}].`
}

1.We will start by putting your word in a container called A.
A = [${this.textCloned}]

2.We then create another empty container called B.
B = []

3.We start reading the letters in container A and putting it in container B . We start with the last letter '${this.textCloned.slice(-1)}'.
[${this.textCloned.slice(0,-1)}${`<span style="color:red">${this.textCloned.slice(-1)}</span>`}]
B = [${this.textCloned.slice(-1)}]

4. We then move to the letter before '${this.textCloned.slice(-1)}' which is '${this.textCloned[this.textCloned.length - 2]}'.
[${this.textCloned.slice(0, this.textCloned.length - 2)}<span style="color:red">${this.textCloned[this.textCloned.length - 2]}</span>${this.textCloned.slice(-1)}]
B = [${this.textCloned.slice(-1)}${this.textCloned[this.textCloned.length - 2]}]

5.We continue to repeat this process till we get to the first letter '${this.textCloned[0]}'.
Now,  B = [${this.textCloned}]

6.We then compare both containers A and B.
A = [${this.text}] B= [${Palindrome.reverseText(this.textCloned)}].

7.As we can see, both containers A and B are the same.
So, '${this.text}' is palindrome.😄    
</pre>`;

		this.explanation = sentence;
		break;

		case false:

		sentence =

`
<pre>
	<span style="color:green">${wordOrPhrase}</span> : ${this.text}
	<span style="color:green">case sensitive</span> : ${this.caseSensitive}
	<span style="color:green">ignore whitespaces</span> : ${this.ignoreWhitespace}
	--------------------------------------------
${this.ignoreWhitespace ? `Since the <i style="color:green">ignore whitespaces</i> option is turned on, all whitespaces will be stripped from your ${wordOrPhrase}.
It will then become [${this.text.replaceAll(" ","")}].`: ''
}
${this.caseSensitive ? '' : `The <i style="color:green">case sensitive</i> option is turned off, so we will convert all letters to lowercase to make it easy to compare.
Then your ${wordOrPhrase} will now become [${this.text.toLowerCase()}].`
}

1.We will start by putting your word in a container called A.
A = [${this.textCloned}]

2.We then create another empty container called B.
B = []

3.We start reading the letters in container A and putting it in container B . We start with the last letter '${this.textCloned.slice(-1)}'.
[${this.textCloned.slice(0,-1)}${`<span style="color:red">${this.textCloned.slice(-1)}</span>`}]
B = [${this.textCloned.slice(-1)}]

4. We then move to the letter before '${this.textCloned.slice(-1)}' which is '${this.textCloned[this.textCloned.length - 2]}'.
[${this.textCloned.slice(0, this.textCloned.length - 2)}<span style="color:red">${this.textCloned[this.textCloned.length - 2]}</span>${this.textCloned.slice(-1)}]
B = [${this.textCloned.slice(-1)}${this.textCloned[this.textCloned.length - 2]}]

5.We continue to repeat this process till we get to the first letter '${this.textCloned[0]}'.
Now,  B = [${Palindrome.reverseText(this.textCloned)}]

6.We then compare both containers A and B.
A = [${this.text}] B= [${Palindrome.reverseText(this.textCloned)}].

7.As we can see, both containers A and B are different.
So, '${this.text}' is not palindrome.😄    
</pre>
`
	this.explanation = sentence;

		}
	}


}


export default Palindrome;