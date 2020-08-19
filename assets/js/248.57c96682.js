(window.webpackJsonp=window.webpackJsonp||[]).push([[248],{764:function(t,s,a){"use strict";a.r(s);var n=a(27),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"检查清单"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#检查清单"}},[t._v("#")]),t._v(" 检查清单")]),t._v(" "),a("p",[t._v("初次编写时，许多程序尚未国际化。这些程序可能是作为原型开始的，或者可能不打算在国际范围内发行。如果必须国际化现有程序，请执行以下步骤：")]),t._v(" "),a("h2",{attrs:{id:"识别国际化相关数据"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#识别国际化相关数据"}},[t._v("#")]),t._v(" 识别国际化相关数据")]),t._v(" "),a("p",[t._v("文本消息是随语言环境变化最明显的数据形式，但是其他类型可能会因为地区语言而异，下面列出了随语言环境变化相关的数据示例：")]),t._v(" "),a("ul",[a("li",[t._v("文本消息")]),t._v(" "),a("li",[t._v("GUI 组件上的标签")]),t._v(" "),a("li",[t._v("在线帮助")]),t._v(" "),a("li",[t._v("声音")]),t._v(" "),a("li",[t._v("色彩")]),t._v(" "),a("li",[t._v("图形")]),t._v(" "),a("li",[t._v("icons")]),t._v(" "),a("li",[t._v("日期")]),t._v(" "),a("li",[t._v("时间")]),t._v(" "),a("li",[t._v("数值")]),t._v(" "),a("li",[t._v("货币")]),t._v(" "),a("li",[t._v("尺寸")]),t._v(" "),a("li",[t._v("电话号码")]),t._v(" "),a("li",[t._v("荣誉称号和个人头衔")]),t._v(" "),a("li",[t._v("邮政地址")]),t._v(" "),a("li",[t._v("页面布局")])]),t._v(" "),a("h2",{attrs:{id:"隔离资源包中的可翻译文本"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#隔离资源包中的可翻译文本"}},[t._v("#")]),t._v(" 隔离资源包中的可翻译文本")]),t._v(" "),a("p",[t._v("翻译成本很高。通过隔离必须在 ResourceBundle 对象中翻译的文本，可以帮助降低成本。可翻译文本包括状态消息、错误消息、日志文件条目和 GUI 组件标签。此文本被硬编码为尚未国际化的程序。您需要查找向最终用户显示的所有硬编码文本。例如，您应该清理代码，例如：")]),t._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" buttonLabel "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"OK"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("JButton")]),t._v(" okButton "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("JButton")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("buttonLabel"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("p",[t._v("你应该将 buttonLabel 的值提取到语言语言属性文件中去。")]),t._v(" "),a("h2",{attrs:{id:"处理复合消息"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#处理复合消息"}},[t._v("#")]),t._v(" 处理复合消息")]),t._v(" "),a("p",[t._v("复合消息包含可变数据。在消息「磁盘包含 1100 个文件」中，整数 1100 可能有所不同。这个消息很难翻译，因为整数在句子中的位置在所有语言中并不相同。以下消息是不可翻译的，因为句子元素的顺序是通过连接硬编码的：")]),t._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Integer")]),t._v(" fileCount"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" diskStatus "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"The disk contains "')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" fileCount"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("toString")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('" files"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("p",[t._v("只要有可能，就应该避免构造复合消息，因为它们很难翻译。但是，如果您的应用程序需要复合消息，您可以使用"),a("RouterLink",{attrs:{to:"/i18n/format/numberintro.html"}},[t._v("格式化中数字和货币")]),t._v("  技术来处理它们。")],1),t._v(" "),a("h2",{attrs:{id:"格式化日期和时间"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#格式化日期和时间"}},[t._v("#")]),t._v(" 格式化日期和时间")]),t._v(" "),a("p",[t._v("日期和时间格式因地区和语言而异。如果您的代码包含如下语句，则需要对其进行更改：")]),t._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Double")]),t._v(" amount"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("TextField")]),t._v(" amountField"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" displayAmount "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" amount"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("toString")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\namountField"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setText")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("displayAmount"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br")])]),a("p",[t._v("如果使用日期格式的类，则您的应用程序可以在世界各地正确显示日期和时间。有关示例和说明，请参见 "),a("RouterLink",{attrs:{to:"/i18n/format/dateintro.html"}},[t._v("格式化中日期和时间")]),t._v(" 部分 。")],1),t._v(" "),a("h2",{attrs:{id:"使用-unicode-字符属性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用-unicode-字符属性"}},[t._v("#")]),t._v(" 使用 Unicode 字符属性")]),t._v(" "),a("p",[t._v("下面的代码尝试验证字符是字母：")]),t._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("char")]),t._v(" ch"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 此代码不正确")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ch "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'a'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" ch "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'z'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ch "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'A'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" ch "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Z'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("p",[t._v("请注意这样的代码，因为它不适用于英语以外的语言")]),t._v(" "),a("p",[t._v("字符比较方法使用 Unicode 标准来标识字符属性。因此，您应该将以前的代码替换为以下内容：")]),t._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("char")]),t._v(" ch"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Character")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("isLetter")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ch"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("p",[t._v("有关 Character 比较方法的更多信息，请参阅  "),a("RouterLink",{attrs:{to:"/i18n//text/charintro.html"}},[t._v("检查字符属性")])],1),t._v(" "),a("h2",{attrs:{id:"正确比较字符串"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#正确比较字符串"}},[t._v("#")]),t._v(" 正确比较字符串")]),t._v(" "),a("p",[t._v("对文本进行排序时，经常比较字符串。如果显示文本，则不应使用 String 类的比较方法。尚未国际化的程序可能会比较字符串，如下所示：")]),t._v(" "),a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" target"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" candidate"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("target"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("equals")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("candidate"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("target"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("compareTo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("candidate"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br")])]),a("p",[t._v("String.equals 和 String.compareTo 方法执行二进制比较，在大多数语言中排序时无效。相反，您应该使用 Collator 类，该类在比 "),a("RouterLink",{attrs:{to:"/i18n/text/collationintro.html"}},[t._v("较字符串部分中进行了介绍")]),t._v("。")],1),t._v(" "),a("h2",{attrs:{id:"转换非-unicode-文本"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#转换非-unicode-文本"}},[t._v("#")]),t._v(" 转换非 Unicode 文本")]),t._v(" "),a("p",[t._v("Java 编程语言中的字符以 Unicode 编码。如果您的应用程序处理非 Unicode 文本，则可能需要将其转换为 Unicode。有关更多信息，请参见 "),a("RouterLink",{attrs:{to:"/i18n/text/convertintro.html"}},[t._v("转换非 Unicode 文本部分")])],1)])}),[],!1,null,null,null);s.default=e.exports}}]);