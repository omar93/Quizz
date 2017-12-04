Skip to content
This repository
Search
Pull requests
Issues
Marketplace
Explore
 @omar93
 Sign out
 Watch 2
  Star 1  Fork 6 thajo/AjaxAssignment
 Code  Issues 5  Pull requests 0  Projects 0  Wiki  Insights
Branch: master Find file Copy pathAjaxAssignment/data/data.json
0d58adb  on Nov 30, 2015
@LokeCarlsson LokeCarlsson Question with ID 32456 have the wrong answer, the correct answer is alt3
2 contributors @thajo @LokeCarlsson
RawBlameHistory     
62 lines (61 sloc)  1.17 KB
{
	"questions": [
		{
			"id" : 1,
			"question": "What is 1+1?",
			"answer" : "2"
		},
		{
			"id" : 21,
			"question": "What is 2 + 8?",
			"alternatives": {
				"alt1": 2,
				"alt2": 8,
				"alt3": 10,
				"alt4": 28
			},
			"answer" : "alt3"
		},
		{
			"id" : 321,
			"question": "Which year did javascript first appeared?",
			"answer" : "1995"
		},
		{
			"id" : 6,
			"question": "How do you comfort a JavaScript bug?",
			"alternatives": {
				"alt1": "You make another!",
				"alt2": "You console it!",
				"alt3": "You don´t!"
			},
			"answer" : "alt2"
		},
		{
			"id" : 32,
			"question": "On which javascript engine does node.js run?",
			"answer" : "V8"
		},
		{
			"id" : 32456,
			"question": "What is the result of: Array(16).join('lol' - 2) + ' Batman!';",
			"alternatives": {
				"alt1": "lol",
				"alt2": "Error",
				"alt3": "NaNNaNNaNNaNNaNNaNNaNNaNNaNNaNNaNNaNNaNNaNNaN Batman!"
			},
			"answer" : "alt3"
		},
		{
			"id" : 326,
			"question": "Which Swedish bird likes javascript in the browser?",
			"alternatives": {
				"alt1": "Måsvingen",
				"alt2": "Hakparamesen",
				"alt3": "DOMherren",
				"alt4": "Kokokolongöken"
			},
			"answer" : "alt3"
		}
	]
}
© 2017 GitHub, Inc.
Terms
Privacy
Security
Status
Help
Contact GitHub
API
Training
Shop
Blog
About