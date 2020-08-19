(window.webpackJsonp=window.webpackJsonp||[]).push([[113],{558:function(a,t,s){"use strict";s.r(t);var v=s(27),_=Object(v.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"修改清单文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#修改清单文件"}},[a._v("#")]),a._v(" 修改清单文件")]),a._v(" "),s("p",[a._v("在创建 JAR 文件时，您可以使用 "),s("code",[a._v("m")]),a._v(" 命令行选项将自定义信息添加到清单。本节介绍 "),s("code",[a._v("m")]),a._v(" 选项。")]),a._v(" "),s("p",[a._v("Jar 工具会自动将默认清单 META-INF/MANIFEST.MF 放入您创建的任何 JAR 文件中。\n您可以通过修改默认清单来启用特殊的 JAR 文件功能，通常，修改默认清单涉及向清单中添加特殊用途的头文件，\n以允许 JAR 文件执行特定的所需功能。")]),a._v(" "),s("p",[a._v("要修改清单，您必须首先准备一个包含您希望添加到清单的信息的文本文件。然后使用 Jar 工具的 "),s("code",[a._v("m")]),a._v(" 选项将文件中的信息添加到清单。")]),a._v(" "),s("p",[s("strong",[a._v("警告：")]),a._v(" 您从中创建清单的文本文件必须以新行或回车符结束。如果最后一行不以新行或回车结束，则不会正确解析。")]),a._v(" "),s("p",[a._v("基本命令具有以下格式：")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("jar cfm jar-file manifest-addition input-file"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("s"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("ul",[s("li",[a._v("c : 创建 jar 文件")]),a._v(" "),s("li",[a._v("f : 输出到一个 jar 文件中")]),a._v(" "),s("li",[a._v("m : 希望把指定文件中的信息合并到默认清单文件中")]),a._v(" "),s("li",[a._v("jar-file : 输出的 jar 名称")]),a._v(" "),s("li",[a._v("manifest-addition : 指定文件名称或路径，该文件的内容要添加到 JAR 文件清单的内容中。（必须是 utf-8 编码）")]),a._v(" "),s("li",[a._v("input-file(s) : 空格分隔的一个或多个要加入到jar中的文件")])]),a._v(" "),s("p",[s("strong",[a._v("注意：")]),a._v(" 由于这里有两个文件路径，使用 f，m 的顺序要对应后面给出的文件路径顺序；\n这里的修改并不是修改已存在 jar 中的清单文件，而是在创建 jar 的时候对清单文件的定制")]),a._v(" "),s("p",[a._v("该命令的效果可以认定为：始终会生成一个默认的清单文件，然后你提供的文件与默认的存在相同的 key，则使用你文件中的内容；")]),a._v(" "),s("p",[a._v("本课的其余部分演示了您可能希望对清单文件进行的特定修改。")])])}),[],!1,null,null,null);t.default=_.exports}}]);