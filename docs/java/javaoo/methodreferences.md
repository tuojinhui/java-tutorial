# Lambda 表达式-方法引用
[[toc]]

您使用 lambda 表达式创建匿名方法。然而，有时，lambda 表达式只能调用现有方法。在这些情况下，通过名称来引用现有的方法往往更为清楚。方法引用使您能够做到这一点; 对于已经有名称的方法，它们是紧凑的，易于阅读的 lambda 表达式。

再次考虑 Lambda 表达式中讨论的 Person 类 ：

```java
public class Person {
    public enum Sex {
        MALE, FEMALE
    }

    String name;
    LocalDate birthday;
    Sex gender;
    String emailAddress;
    int age;

    public Person(String name, LocalDate birthday, Sex gender, String emailAddress, int age) {
        this.name = name;
        this.birthday = birthday;
        this.gender = gender;
        this.emailAddress = emailAddress;
        this.age = age;
    }

    public int getAge() {
        return this.age;
    }

    @Override
    public String toString() {
        return "Persion{" +
                "name='" + name + '\'' +
                ", birthday=" + birthday +
                ", gender=" + gender +
                ", emailAddress='" + emailAddress + '\'' +
                ", age=" + age +
                '}';
    }

    public void printPerson() {
        System.out.println(this.toString());
    }

    public Sex getGender() {
        return gender;
    }

    public String getEmailAddress() {
        return emailAddress;
    }
    public LocalDate getBirthday() {
        return birthday;
    }
    public static int compareByAge(Person a, Person b) {
        return a.birthday.compareTo(b.birthday);
    }
}
```

假设您的社交网络应用程序的成员包含在一个数组中，并且您想按年龄排序数组。您可以使用以下代码

```java
    Person[] rosterAsArray = roster.toArray(new Person[roster.size()]);

    class PersonAgeComparator implements Comparator<Person> {
        public int compare(Person a, Person b) {
            return a.getBirthday().compareTo(b.getBirthday());
        }
    }
    Arrays.sort(rosterAsArray, new PersonAgeComparator());
```

此调用的方法签名 sort 如下：

```java
static <T> void sort(T[] a, Comparator<? super T> c)
```

请注意，该接口 Comparator 是一个功能接口。因此，您可以使用 lambda 表达式，而不是定义然后创建实现 Comparator 以下功能的类的新实例：

```java
Arrays.sort(rosterAsArray,
            (Person a, Person b) -> {
                return a.getBirthday().compareTo(b.getBirthday());
            }
);
```

然而，这种比较两个 Person 实例的出生日期的方法已经存在 Person.compareByAge。您可以在 lambda 表达式的正文中调用此方法：

```java
Arrays.sort(rosterAsArray,
    (a, b) -> Person.compareByAge(a, b)
);
```
方法引用 Person::compareByAge 在语义上与 lambda 表达式  `(a, b) -> Person.compareByAge(a, b)` 相同。每个都有以下特点：

* 它的形参列表是 `Comparator<Person>.compare` 带来的 `(Person, Person)`。(形参一样)
* 它的身体调用方法 Person.compareByAge。

## 方法引用的方式

有以下四种方式


| 方式                             | 例                                   |
|----------------------------------|--------------------------------------|
| 引用静态方法                     | ContainingClass::staticMethodName    |
| 引用特定对象的实例方法           | containingObject::instanceMethodName |
| 引用特定类型的任意对象的实例方法 | ContainingType::methodName           |
| 引用构造函数                     | ClassName::new                       |

### 引用静态方法
方法引用 `Person::compareByAge` 是对静态方法的引用。

### 引用特定对象的实例方法

以下是对特定对象的实例方法的引用的示例：

```java
class ComparisonProvider {
    public int compareByName(Person a, Person b) {
        return a.getName().compareTo(b.getName());
    }

    public int compareByAge(Person a, Person b) {
        return a.getBirthday().compareTo(b.getBirthday());
    }
}

ComparisonProvider myComparisonProvider = new ComparisonProvider();
Arrays.sort(rosterAsArray, myComparisonProvider::compareByName);
```

不要奇怪，方法引用就是使用 「::」 来引用
方法引用 `myComparisonProvider::compareByName` 调用 `compareByName` 作为 myComparisonProvider 对象一部分的方法

JRE 推断方法类型参数，在这种情况下是 (Person, Person)。

### 引用特定类型的任意对象的实例方法

以下是对特定类型的任意对象的实例方法的引用的示例：

```java
String[] stringArray = { "Barbara", "James", "Mary", "John",
    "Patricia", "Robert", "Michael", "Linda" };

Arrays.sort(stringArray, String::compareToIgnoreCase);

// 这里根据 定义的变量 stringArray 去推导目标类型参数值，如果不符合后面传入的方法引用所对应的类型，将报错
```

该方法参考等效 lambda 表达式 `String::compareToIgnoreCase` 将有正式的参数列表 `(String a, String b)`，其中 a 和 b 是用于更好地描述这个例子中的任意名称。方法引用将调用该方法 `a.compareToIgnoreCase(b)`。

### 引用构造函数

您可以使用名称以静态方法的方式引用构造函数 new。以下方法将元素从一个集合复制到另一个集合：

```java
    public static <T, SOURCE extends Collection<T>, DEST extends Collection<T>>
    DEST transferElements(
            SOURCE sourceCollection,
            Supplier<DEST> collectionFactory) {

        DEST result = collectionFactory.get();
        for (T t : sourceCollection) {
            result.add(t);
        }
        return result;
    }
```

功能接口 Supplier 包含一个不带参数并返回对象的 get 方法。因此，您可以使用 lambda 表达式调用 transferElements 方法，如下所示：

```java
Set<Person> rosterSetLambda =
        transferElements(roster, () -> { return new HashSet<>(); });
```

您可以使用构造函数引用代替 lambda 表达式，如下所示：

```java
Set<Person> rosterSetLambda =
        transferElements(roster, HashSet::new);
```

Java 编译器推断您要创建一个 HashSet 包含 Person 类型元素的集合。或者，您可以指定如下：

```java
Set<Person> rosterSetLambda =
        transferElements(roster, HashSet<Person>::new);
```

以上语法在 Idea 中已经支持了。在尝试的过程中看到了提示
