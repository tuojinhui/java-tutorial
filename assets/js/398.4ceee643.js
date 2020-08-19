(window.webpackJsonp=window.webpackJsonp||[]).push([[398],{584:function(s,a,t){"use strict";t.r(a);var n=t(27),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"管理源文件和类文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#管理源文件和类文件"}},[s._v("#")]),s._v(" 管理源文件和类文件")]),s._v(" "),t("p",[s._v("Java 平台的许多实现都依赖分层文件系统来管理源文件和类文件，尽管 「Java 语言规范并」不要求这样做。战略如下。")]),s._v(" "),t("p",[s._v("将类、接口、枚举或注释类型的源代码放在一个文本文件中，该文件的名称是类型的简单名称，其扩展名是 .java。例如：")]),s._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//in the Rectangle.java file")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("package")]),s._v(" graphics"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Rectangle")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n   "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("p",[s._v("然后，将源文件放在名称反映类型所属包的名称的目录中：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("."),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("graphics"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("Rectangle.java\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("假定 Microsoft Windows 文件名分隔符反斜杠（对于 UNIX，使用正斜杠），包成员的限定名称和文件的路径名是并行的。")]),s._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" name – graphics"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Rectangle")]),s._v("\npathname "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("to")]),s._v(" file – graphics\\"),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Rectangle")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("java\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("正如您应该记得的，按照惯例，一家公司使用其反向因特网域名作为其包名。示例公司的互联网域名 example.com 将在其所有包名称之前 com.example。\n包名称的每个组件都对应一个子目录。所以，如果公司有一个 com.example.graphics 包含 Rectangle.java 源文件的包，\n它将包含在一系列子目录中，如下所示：")]),s._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("\\com\\example\\graphics\\"),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Rectangle")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("java\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("编译源文件时，编译器会为其中定义的每种类型创建一个不同的输出文件。输出文件的基本名称是类型的名称，其扩展名是 .class。例如，如果源文件是这样的")]),s._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//in the Rectangle.java file")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("package")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token namespace"}},[s._v("com"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("example"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("graphics")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Rectangle")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Helper")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br")])]),t("p",[s._v("那么编译的文件将位于：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("父目录 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("com"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("example"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("graphics"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("Rectangle.class\n父目录 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("com"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("example"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("graphics"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("Helper.class\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("像 .java 源文件一样，编译的 .class 文件应该在一系列反映包名称的目录中。\n但是，.class 文件的路径不必与 .java 源文件的路径相同。您可以分别安排源和目录目录，如下所示：")]),s._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token generics"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("path_one"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\\sources\\com\\example\\graphics\\"),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Rectangle")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("java\n\n"),t("span",{pre:!0,attrs:{class:"token generics"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("path_two"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\\classes\\com\\example\\graphics\\"),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Rectangle")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[s._v("通过这样做，您可以将 classes 目录提供给其他程序员，而不会泄露您的源代码。\n您还需要以这种方式管理源文件和类文件，以便编译器和 Java 虚拟机（JVM）可以找到您的程序使用的所有类型。")]),s._v(" "),t("p",[s._v("classes 目录的完整路径 "),t("code",[s._v("<path_two>\\classes")]),s._v("，称为类路径，并用 CLASSPATH 系统变量设置。\n编译器和 JVM .class 通过将包名称添加到类路径来构建文件的路径。例如，如果")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("path_two"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("classes\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("是你的类路径，包名是")]),s._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[s._v("com"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("example"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("graphics"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("那么编译器和 JVM 寻找 files 中的 .class")]),s._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token generics"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("<")]),s._v("path_two"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(">")])]),s._v("\\classes\\com\\example\\graphics"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("类路径可能包含多个路径，用分号（Windows）或冒号（UNIX）分隔。默认情况下，编译器和 JVM 搜索当前目录以及包含 Java 平台类的 JAR 文件，\n以便这些目录自动位于类路径中。")]),s._v(" "),t("h2",{attrs:{id:"设置-classpath-系统变量"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#设置-classpath-系统变量"}},[s._v("#")]),s._v(" 设置 CLASSPATH 系统变量")]),s._v(" "),t("p",[s._v("要显示当前 CLASSPATH 变量，请在 Windows 和 UNIX（Bourne shell）中使用这些命令：")]),s._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("In")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Windows")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("   "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("C")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("\\"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" set CLASSPATH\n"),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("In")]),s._v(" UNIX"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("      "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),s._v(" echo $CLASSPATH\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("要删除 CLASSPATH 变量的当前内容，请使用以下命令：")]),s._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("In")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Windows")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("   "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("C")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("\\"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" set CLASSPATH"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("In")]),s._v(" UNIX"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("      "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),s._v(" unset CLASSPATH"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" export CLASSPATH\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("要设置 CLASSPATH 变量，请使用这些命令（例如）：")]),s._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("In")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Windows")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("   "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("C")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("\\"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" set CLASSPATH"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("C")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("\\users\\george\\java\\classes\n"),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("In")]),s._v(" UNIX"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("      "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),s._v(" CLASSPATH"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("home"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("george"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("java"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("classes"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" export CLASSPATH\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])])])}),[],!1,null,null,null);a.default=e.exports}}]);