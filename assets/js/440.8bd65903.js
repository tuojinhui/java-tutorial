(window.webpackJsonp=window.webpackJsonp||[]).push([[440],{473:function(a,s,t){"use strict";t.r(s);var n=t(27),e=Object(n.a)({},(function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"创建一个-url"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#创建一个-url"}},[a._v("#")]),a._v(" 创建一个 URL")]),a._v(" "),t("p",[a._v("创建 URL 对象最简单的方法就是用一个人类可读形式的字符串来创建；")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v('URL myURL = new URL("http://example.com/");\n')])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("p",[a._v("上面创建的 URL 对象代表一个绝对 URL。一个绝对的 URL 包含了到达问题资源所必需的所有信息。\n您还可以从相对 URL 地址创建 URL 对象。")]),a._v(" "),t("h2",{attrs:{id:"创建相对-url"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#创建相对-url"}},[a._v("#")]),a._v(" 创建相对 URL")]),a._v(" "),t("p",[a._v("相对 URL 只包含足够的信息来访问相对于另一个 URL（或在其上下文中）的资源。")]),a._v(" "),t("p",[a._v("相对 URL 规范通常在 HTML 文件中使用。例如，假设您编写了一个名为 JoesHomePage.html 的 HTML 文件。\n在这个页面中 PicturesOfMe.html 和 MyKids.html 是指向其他页面的链接，并且位于同一台计算机上，并位于同一目录中")]),a._v(" "),t("div",{staticClass:"language-html line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-html"}},[t("code",[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("a")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("href")]),t("span",{pre:!0,attrs:{class:"token attr-value"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')]),a._v("PicturesOfMe.html"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("Pictures of Me"),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("a")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("a")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("href")]),t("span",{pre:!0,attrs:{class:"token attr-value"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')]),a._v("MyKids.html"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("Pictures of My Kids"),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("a")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br")])]),t("p",[a._v("这些 URL 地址是相对 URL。也就是说，这些 url 是相对于它们被包含的文件指定的—— JoesHomePage.html。")]),a._v(" "),t("p",[a._v("在您的 Java 程序中，您可以根据相对 URL 规范创建 URL 对象。例如，假设您知道网站上有两个网址 example.com：")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("http://example.com/pages/page1.html\nhttp://example.com/pages/page2.html\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br")])]),t("p",[a._v("你可以基于公共基础对象 URL: http://example.com/pages/ ；来创建另外两个相对 URL 对象")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v('URL myURL = new URL("http://example.com/pages/");\nURL page1URL = new URL(myURL, "page1.html");\nURL page2URL = new URL(myURL, "page2.html");\n')])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br")])]),t("p",[a._v("这个代码片段使用 URL 构造器，它允许您从另一个 URL 对象（基础）和一个相对 URL 规范创建一个 URL 对象。\n这个构造函数的一般形式是：")]),a._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("URL")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("URL")]),a._v(" baseURL"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("String")]),a._v(" relativeURL"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("p",[a._v("如果 baseURL 为 null，那么这个构造函数 relativeURL 就像一个绝对的 URL 规范。\n相反，如果 relativeURL 是绝对 URL 规范，那么构造函数会忽略 baseURL。")]),a._v(" "),t("p",[a._v("这个构造函数对于在一个文件中创建命名锚（也称为引用）的 URL 对象也很有用。例如，\n假设 page1.html 文件在文件的底部有一个名为 BOTTOM 的命名锚。您可以使用相对 URL 构造器来为它创建一个 URL 对象：")]),a._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("URL")]),a._v(" page1BottomURL "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("URL")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("page1URL"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"#BOTTOM"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("h2",{attrs:{id:"其他-url-构造函数"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#其他-url-构造函数"}},[a._v("#")]),a._v(" 其他 URL 构造函数")]),a._v(" "),t("p",[a._v("URL 类为创建 URL 对象提供了两个额外的构造函数。当您使用 URL 时，这些构造函数是有用的，\n例如 HTTP URL，它们在 URL 的资源名称部分有主机名、文件名、端口号和引用组件。\n当您没有包含完整 URL 规范的字符串时，这两个构造函数是有用的，但是您确实知道 URL 的各种组件。")]),a._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("URL")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"http"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"example.com"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"/pages/page1.html"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("p",[a._v("这相当于")]),a._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("URL")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"http://example.com/pages/page1.html"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("p",[a._v("第一个参数是协议，第二个参数是主机名，最后一个是文件的路径名。请注意，文件名在开始处包含正斜杠。\n这表明文件名是从主机的根目录指定的。")]),a._v(" "),t("p",[a._v("最后的 URL 构造函数将端口号添加到前面构造函数中使用的参数列表中：")]),a._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("URL")]),a._v(" gamelan "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("URL")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"http"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"example.com"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("80")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"pages/page1.html"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("p",[a._v("这会创建一个以下的网址")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("http://example.com:80/pages/page1.html\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("p",[a._v("如果您使用这些构造函数之一构造一个 URL 对象，您可以通过使用 URL 对象的 "),t("code",[a._v("toString")]),a._v(" 方法或\n等效的 "),t("code",[a._v("toExternalForm")]),a._v(" 方法来获得包含完整 URL 地址的字符串。")]),a._v(" "),t("h2",{attrs:{id:"具有特殊字符的网址"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#具有特殊字符的网址"}},[a._v("#")]),a._v(" 具有特殊字符的网址")]),a._v(" "),t("p",[a._v("某些 URL 地址包含特殊字符，例如空格字符：")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("http://example.com/hello world/\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("p",[a._v("为了使这些字符合法，在将它们传递给 URL 构造函数之前，需要对它们进行编码。")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v('URL url = new URL("http://example.com/hello%20world");\n')])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("p",[a._v("在这个例子中对特殊字符进行编码很简单，因为只有一个字符需要编码，但对于有几个这些字符的 URL 地址，\n或者如果在编写代码时不确定哪些 URL 地址需要访问，您可以使用 java.net.URI 该类的多参数构造函数\n来为您自动处理编码。")]),a._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("URI")]),a._v(" uri "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("URI")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"http"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"example.com"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"/hello world/"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('""')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("p",[a._v("然后将 URI 转换为 URL。")]),a._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("URL")]),a._v(" url "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" uri"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("toURL")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("h2",{attrs:{id:"malformedurlexception"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#malformedurlexception"}},[a._v("#")]),a._v(" MalformedURLException")]),a._v(" "),t("p",[a._v("如果对构造函数的参数引用 null 或未知协议，那么四个 URL 构造函数中的每一个都会抛出一个 MalformedURLException 异常。\n通常，您希望通过在 tr/catch 对子中嵌入 URL 构造器语句来捕获和处理这个异常，如下所述：")]),a._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("try")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("URL")]),a._v(" myURL "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("URL")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("catch")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("MalformedURLException")]),a._v(" e"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// exception handler code here")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// ...")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br"),t("span",{staticClass:"line-number"},[a._v("6")]),t("br"),t("span",{staticClass:"line-number"},[a._v("7")]),t("br")])]),t("p",[a._v("有关处理异常的信息，请参阅 "),t("RouterLink",{attrs:{to:"/essential/exceptions/"}},[a._v("异常")]),a._v("。")],1),a._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[a._v("TIP")]),a._v(" "),t("p",[a._v("URLs 是“一次写入”对象。创建 URL 对象后，您不能更改其任何属性（协议，主机名，文件名或端口号）。")])])])}),[],!1,null,null,null);s.default=e.exports}}]);