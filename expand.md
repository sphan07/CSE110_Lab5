1.Why is it important to put thought into your IDs & Classes when it comes to technology intersections? (e.g. how HTML, CSS, and JS intersect)<br>
Thoughtful naming helps you avoid conflicts as ids are unique, targeting specfic elements while classes are reusable, allowing you to use it for multiple elments in case they share similar behaviors. 
For example, if you create a button, you might want to use an id but then a class for funciton purposes.

<br>
2.What are Data attributes? Why might they be useful? How do you access them? What are the implications of using Data attributes when it comes to things like microdata?<br>
Data attributes are custom HTML properties that allow you to store extra information in elementa. They are using prefixed with data, like "data-price". It helps organize and make the code less clutter. However, mircodata is meant for machines which would not work for them while working for us.

<br>
3.What is a DOM fragment? Why are they powerful?<br>
A DOM fragment stands for Docmuent Fragment, it stores the base of a document structure that is made out of nodes, like a container. They are powerful as it allows you to make efficent updates without making immediate DOM updates.

<br>
4.What is the point of a “Virtual DOM”? What do you gain? What do you lose?<br>
The point of a virtual dom is that its similar to a UI draft while it uses frameworks like React that lets it change without changing too much of the actual DOM. Changes are only applied when there is a process that shows the necessary alterations.
Due to that you gain performance as you don't need to keep using the real DOM while due to it not being the DOM you may lose mempry as it requires extra memory.

<br>
5.In JavaScript, usually you can reference every attribute of an element with a dot selector followed by the attribute name, except for the class attribute, which is className. Why is this so?<br>
The class attribute is used in JavaScript in order to define classes for OOP programming, so to avoid conflicts className is used instead for the DOM property.

<br>
6.What is the difference between using addEventListener() and something like onClick() ? What are the advantages / disadvantages of both?<br>
addEventListener() gives you the ability to put multiple event listensers to one element and event, however, this is not the case for onClick() where you are only able to use one event. The advantage is that addEvent Listener is flexible however it may be complicated than onClick() which is more simplistic but doesn't let you use more than one, leading to many event handlers at once.
