---
title: 正则表达式
---

既然作为前端，那就拿 `JavaScript` 语言作为例子，记录一下学习内容。

## 创建方式

- 字面值形式: `rtrim = /ab+c/g`
- new 形式创建: `var replaceRegexp = RegExp("ab+c", 'g')`;

这两种创建方式的区别是，如果你的正则表达式是可以确定的，那么使用字面值形式性能会更好，但是如果你的正则是动态创建的，那么只能选择构造函数的形式了。而在具体的使用上，二者是没有差别的。

## 书写规则

字面值形式的，记得表达式前后加上/符号。

- \: 转义字符，普通字符前面加上\可以代表特殊意义的字符。特殊意义的字符，也可以将其转换为普通字符。 当使用 new RegExp-("pattern")方法的时候不要忘记将\它自己进行转义，因为\在字符串里面也是一个转义字符。
- ^: 匹配输入的开始。匹配行首的字符。
- \*: 匹配前一个字符 0 次或者是多次。
- +: 匹配前面一个字符 1 次或者多次，和{1,}有相同的效果。
- ?: 匹配前面一个字符 0 次或者 1 次，和{0,1}有相同的效果。
- .: （小数点）匹配任何除了新一行开头字符的任何单个字符。
- (x): 匹配‘x’并且记住匹配项。这个被叫做捕获括号。可以通过数组得到匹配的对象。
- (?:x): 匹配'x'但是不记住匹配项。这种被叫做非捕获括号。
- x(?=y): 匹配'x'仅仅当'x'后面跟着'y'.这种叫做正向肯定查找。
- x(?!y): 匹配'x'仅仅当'x'后面不跟着'y',这个叫做正向否定查找。
- x|y: 匹配‘x’或者‘y’。
- {n}: n 是一个正整数，匹配了前面一个字符刚好发生了 n 次。
- {n,m}: n 和 m 都是正整数。匹配前面的字符至少 n 次，最多 m 次。如果 n 或者 m 的值是 0， 这个值被忽略。
- [xyz]: 一个字符集合。匹配方括号的中任意字符。你可以使用破折号（-）来指定一个字符范围。对于点（.）和星号（*）这样的特殊符号在一个字符集中没有特殊的意义。他们不必进行转意，不过转意也是起作用的。
- [^xyz]: 一个反向字符集。也就是说， 它匹配任何没有包含在方括号中的字符。你可以使用破折号（-）来指定一个字符范围。任何普通字符在这里都是起作用的。
- [\b]: 匹配一个退格(U+0008)。（不要和\b混淆了。）
- \b: 匹配一个词的边界。一个词的边界就是一个词不被另外一个词跟随的位置或者不是另一个词汇字符前边的位置。注意，一个匹配的词的边界并不包含在匹配的内容中。换句话说，一个匹配的词的边界的内容的长度是 0。（不要和[\b]混淆了）
- \B: 匹配一个非单词边界。他匹配一个前后字符都是相同类型的位置：都是单词或者都不是单词。一个字符串的开始和结尾都被认为是非单词。
- \cX: 当 X 是处于 A 到 Z 之间的字符的时候，匹配字符串中的一个控制符。
- \d: 匹配一个数字。等价于[0-9]。
- \D: 匹配一个非数字字符。等价于 0-9。
- \f: 匹配一个换页符 (U+000C)。
- \n: 匹配一个换行符 (U+000A)。
- \r: 匹配一个回车符 (U+000D)。
- \s: 匹配一个空白字符，包括空格、制表符、换页符和换行符。
- \S: 匹配一个非空白字符。
- \t: 匹配一个水平制表符 (U+0009)。
- \v: 匹配一个垂直制表符 (U+000B)。
- \w: 匹配一个单字字符（字母、数字或者下划线）。等价于[A-Za-z0-9_]。
- \W: 匹配一个非单字字符。等价于 A-Za-z0-9\_。
- \n: 当 n 是一个正整数，一个返回引用到最后一个与有 n 插入的正值表达式(counting left parentheses)匹配的副字符串。
- \0: 匹配 NULL (U+0000) 字符， 不要在这后面跟其它小数，因为 \0 是一个八进制转义序列。
- \xhh: 匹配带有两位小数代码（hh）的字符。
- \uhhhh: 匹配带有四位小数代码（hh）的字符。

如果需要记住匹配项，需要使用括号，这样才能通过数组查找到。

## 使用括号

`/Chapter (\d+)\.\d*/`这部分中的(\d+)部分是会被记忆的，是可以作为一个字符串被使用。

## 可使用的方法

在 RegExp 对象的方法中有：

- **exec**: A RegExp method that executes a search for a match in a string. It returns an array of information.
- **test**: A RegExp method that tests for a match in a string. It returns true or false.

在 String 对象的方法中有:

- **match**:A String method that executes a search for a match in a string. It returns an array of information or null on a mismatch.
- **replace**:A String method that executes a search for a match in a string, and replaces the matched substring with a replacement substring.
- **search**: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match.
- **split**: A String method that uses a regular expression or a fixed string to break a string into an array of substrings.

### exec

这是 RegExp 对象的一个方法，传入一个字符串，默认返回一个数组，包含匹配结果，以及匹配的一些信息。如果是带记忆信息的，数组的长度会变化。没有匹配的时候，返回 null.

### test

这是 RegExp 对象的一个方法，传入一个字符串，默认返回 true 或者 false.

## 参考资料

- [正则表达式 30 分钟入门](https://deerchao.cn/tutorials/regex/regex.htm)
- [JavaScript Regular Expression Cheatsheet](https://www.debuggex.com/cheatsheet/regex/javascript)
- [正则大全](https://any86.github.io/any-rule/)
