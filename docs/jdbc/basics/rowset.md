# 使用 RowSet 对象

JDBC RowSet 对象以一种比结果集更灵活、更容易使用的方式保存表格数据。

Oracle 已经为一些比较流行的 RowSet 用途定义了五个 RowSet 接口，这些 RowSet 接口都有标准参考。在本教程中，您将学习如何使用这些参考实现。

提供这些版本的 RowSet 接口及其实现是为了方便程序员。程序员可以自由地编写自己版本的 `javax.sql.RowSet` 接口，扩展五个 RowSet 接口的实现，或者编写自己的实现。然而，许多程序员可能会发现标准参考实现已经符合他们的需求，因此会原封不动地使用它们。

本节介绍 RowSet 接口和以下扩展该接口的接口。

- `JdbcRowSet`
- `CachedRowSet`
- `WebRowSet`
- `JoinRowSet`
- `FilteredRowSet`

涵盖以下主题：

- RowSet 对象可以做什么？
- RowSet 对象的种类

## RowSet 对象可以做什么？

所有的 RowSet 对象都是从 ResultSet 接口派生出来的，因此共享它的功能。JDBC RowSet 对象的特殊之处在于它们增加了这些新功能。

- 作为 JavaBeans 组件的功能
- 增加滚动性或更新性

###  作为 JavaBeans 组件的功能

所有 RowSet 对象都是 JavaBeans 组件。这意味着它们具有以下特点。

- Properties / 属性
- JavaBeans 通知机制

#### Properties / 属性

所有的 RowSet 对象都有属性。属性是一个字段，它有相应的 getter 和 setter 方法。属性被暴露给构建工具（如 IDE JDveloper 和 Eclipse 自带的工具），使您能够可视化地操作 bean。有关更多信息，请参见 [JavaBeans](/javabeans/) 中的属性一节。

#### JavaBeans 通知机制

RowSet 对象使用 JavaBeans 事件模型，在该模型中，当某些事件发生时，注册的组件会得到通知。对于所有RowSet 对象，有三个事件会触发通知：

- 游标移动
- 行的更新、插入或删除。
- 更改整个 RowSet 的内容

事件的通知会发送到所有的监听器，这些监听器是已经实现了 RowSetListener 接口的组件，并且已经将自己添加到 RowSet 对象的组件列表中，当这三个事件中的任何一个发生时，都会被通知。

监听器可以是一个 GUI 组件，如柱状图。如果条形图正在跟踪 RowSet 对象中的数据，那么每当数据发生变化时，监听器就会想知道新的数据值。因此，监听器将实现 RowSetListener 方法来定义当一个特定事件发生时它将做什么。然后还必须将该监听器添加到 RowSet 对象的监听器列表中。下面这行代码将条形图组件 bg 注册到 RowSet 对象 rs 中。

```java
rs.addListener(bg);
```

现在，每当游标移动、某行改变或所有 rs 获得新数据时，bg 都会得到通知。

###  增加滚动性或更新性

有些 DBMS 不支持可滚动的结果集（可滚动 / scrollable），有些不支持可更新的结果集（可更新 / updatable）。如果该 DBMS 的驱动程序没有添加滚动或更新结果集的功能，您可以使用 RowSet 对象来实现。RowSet 对象默认是可滚动和可更新的，因此通过用结果集的内容填充 RowSet 对象，可以有效地使结果集可滚动和可更新。

## RowSet 对象的种类

一个 RowSet 对象被认为是连接或断开的。连接的 RowSet 对象使用 JDBC 驱动程序与关系数据库建立连接，并在其整个生命周期内维护该连接。断开连接的 RowSet 对象与数据源建立连接，只是为了从 ResultSet 对象读取数据或将数据写回数据源。在从其数据源读取数据或向其数据源写入数据之后，RowSet 对象就会与其断开连接，从而成为 "断开连接"。在其生命周期的大部分时间里，断开连接的 RowSet 对象与其数据源没有任何联系，并独立运行。接下来的两节将告诉您，**连接或断开连接对于 RowSet 对象的作用意味着什么**。

### 连接的 RowSet 对象

标准的 RowSet 实现中只有一个是连接的 RowSet 对象。JdbcRowSet。JdbcRowSet 对象总是连接到数据库，它与ResultSet 对象最为相似，并且经常被用作包装器，以使原本不可滚动和只读的 ResultSet 对象可滚动和更新。

作为一个 JavaBeans 组件，JdbcRowSet 对象可以被用于，例如，在一个 GUI 工具中选择一个 JDBC 驱动程序。JdbcRowSet 对象可以这样使用，因为它实际上是获得其与数据库连接的驱动程序的包装器。

### 断开的 RowSet 对象

其他四个实现是断开的 RowSet 实现。断开连接的 RowSet 对象拥有连接的 RowSet 对象的所有功能，另外它们还拥有只有断开连接的 RowSet 对象才有的附加功能。例如，无需维护与数据源的连接，使得断开连接的 RowSet 对象比 JdbcRowSet 对象或 ResultSet 对象更轻量级。断开的 RowSet 对象也是可序列化的，可序列化和轻量级的结合使它们成为通过网络发送数据的理想选择。它们甚至可以用于向瘦客户机（如 PDA 和移动电话）发送数据。

CachedRowSet 接口定义了所有断开连接的 RowSet 对象可用的基本功能。其他三个接口是 CachedRowSet 接口的扩展，它们提供了更多的专业功能。下面的信息显示了它们之间的关系。

CachedRowSet 对象具有 JdbcRowSet 对象的所有功能，此外它还可以做以下事情：

- 获取数据源的连接并执行查询
- 从产生的 ResultSet 对象中读取数据，并用该数据填充自己。
- 在数据断开的情况下操纵数据并对数据进行更改。
- 重新连接到数据源，将更改写回数据源。
- 检查与数据源的冲突，并解决这些冲突。

WebRowSet 对象具有 CachedRowSet 对象的所有功能，此外它还可以做以下事情：

- 将自己写成一个 XML 文档
- 读取一个描述 WebRowSet 对象的 XML 文档。

JoinRowSet 对象具有 WebRowSet 对象的所有功能（因此也具有 CachedRowSet 对象的功能），此外它还可以做以下事情：无需连接到数据源就能形成相当于 SQL JOIN 的功能。

FilteredRowSet 对象同样具有 WebRowSet 对象的所有功能（因此也是一个 CachedRowSet 对象），另外它还可以做以下事情：应用过滤标准，使只有选定的数据可见。这相当于在 RowSet 对象上执行一个查询，而无需使用查询语言或连接到数据源。