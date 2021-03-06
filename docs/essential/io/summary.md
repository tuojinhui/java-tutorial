# 总结

该 `java.io` 包包含许多类，您的程序可用于读取和写入数据。大多数类实现顺序访问流。
顺序访问流可以分为两组：读写字节和读取和写入 Unicode 字符的字符串。
每个顺序访问流都有一个专长，例如从文件读取或写入文件，过滤数据作为其读取或写入，或序列化对象。

该 `java.nio.file` 包为文件和文件系统 I / O 提供广泛的支持。这是一个非常全面的 API，但关键入口点如下：

* Path 有几个操作路径的方法。
* Files 类有文件操作方法，如移动，复制，删除，也可用于读取和设置文件属性的方法。
* FileSystem 有各种用于获取有关文件系统的信息的方法。

有关 NIO.2 的更多信息，请参见 [java.net](https://community.oracle.com/community/java) 上的
 [OpenJDK：NIO 项目网站](http://openjdk.java.net/projects/nio/) 。
 本网站包含 NIO.2 提供的功能的资源，这些功能超出了本教程的范围，如多播，异步 I / O 以及创建自己的文件系统实现。
