# Welcome to SpiceWheel
### A front-end library for rapid image-grid prototyping in React
![spiceWheel](https://res.cloudinary.com/heab4q3lg/image/upload/h_600/v1496022931/spicewheel.jpg)

### What is it?

Responsive image-grids are a common feature in web applications. SpiceWheel makes it easy to rapidly prototype these components. Here are some examples of image grids from Pinterest, Amazon, Unsplash and Banana Republic.

[Check out the demo page!](https://lkrych.github.io/spicewheel/) We're sorry but our site is down right now. It will be up soon!
![Image of demo page](https://res.cloudinary.com/heab4q3lg/image/upload/v1496611597/Spicewheel-splash.png)

### Example Image Grids


![pinterest](https://res.cloudinary.com/heab4q3lg/image/upload/h_400/v1496024168/pinterest.png)


![amazon](https://res.cloudinary.com/heab4q3lg/image/upload/h_400/v1496024164/amazon.png)


![unsplash](https://res.cloudinary.com/heab4q3lg/image/upload/h_400/v1496024167/unsplash.png)


![banana republic](https://res.cloudinary.com/heab4q3lg/image/upload/h_400/v1496024167/br.png)

### How does it work?

1. Generate a SpiceRack.
2. Feed the SpiceRack to the spiceWheel function.

SpiceWheel is an opinionated library. If you want to use it, you need to do something that no modern front-end web developer has ever done, use HTML tables. At SpiceWheel, we prefer to call these beautiful relics SpiceRacks.

Each row in a SpiceRack has information about an individual grid element. For SpiceWheel to interpret the SpiceRack correctly, the SpiceRack will need one column to hold the image that will be displayed (or an image URL), a label for the image, and optionally, additional information about the element.

![SpiceRack](https://res.cloudinary.com/heab4q3lg/image/upload/v1496085498/spicerack.png)
* despite the trendy name, SpiceRacks are just HTML tables.

Once the SpiceRack has been created, the developer can test to see if the spice rack looks like it is supposed to (in case, for instance you are dynamically creating the table by reading an array of JSON and you've formatted the JSON incorrectly) by displaying the raw HTML table in the browser.

After verifying that the SpiceRack has been set up correctly, the developer can then use the spiceWheel function to turn the SpiceRack into a beautiful grid, or as we like to call it, a SpiceWheel.


### Why are you insisting that we use this silly fossil of HTML?

The purpose is two-fold. The first is that we want to make sure that the developer that is using SpiceWheel has set up their JSON in the proper format. SpiceWheel won't work if you've inputted the data into the SpiceRack incorrectly. Laying your information out in a SpiceRack ensures that you have checked that you are serving your backend information correctly. In the future we will support inputting raw JSON into the SpiceWheel, but right now, we like using SpiceRacks because they ensure consistency and because we want to make HTML tables feel like they are less alone in the world.

### SpiceWheel example

```JavaScript
import React from 'react';
import {spiceWheel} from 'spice-wheel';

//Roll your own React Component for holding the SpiceRack
class GenericGrid extends React.Component {
  constructor(props){
    super(props);
  }

  render(){

    const tableRows = this.state.sampleJSON.map((jsonObject,idx) => (
      <tr key={idx}>
        <td>{jsonObject.image}</td>
        <td>{jsonObject.label}</td>
      </tr>)
    );

    const SpiceRack =
      <table className="spicerack">
        <thead>
          <tr>
            <th>Image</th>
            <th>Label</th>
          </tr>
        </thead>
        <tbody>
          {tableRows}
        </tbody>
      </table>;

    return(
      spiceWheel(SpiceRack, "modern", 3)
    );
  }
}

```
The SpiceWheel function takes each individual row and converts the data in the rows into list items. While it is doing this, it is injecting CSS into the classes of the list components.  The end result looks something like this.

``` HTML
<ul class="style-ul">
  <li class="style-li">
    <img src="Image" class="style-img">
    <p class="style-p">Label</p>
  </li
  <li class="style-li">
    <img src="Image" class="style-img">
    <p class="style-p">Label</p>
  </li
  <li class="style-li">
    <img src="Image" class="style-img">
    <p class="style-p">Label</p>
  </li
</ul>
```
### How can I contribute?

I'm glad you asked, SpiceWheel derives its power from injecting Sass modules into the resulting list. These modules are easy to construct, and are incredibly flexible. A basic module looks like this:

```CSS
.basic-wrapper {
  margin: 0;
  .basic-img-grid {
    li {
      display: inline-block;
      overflow: hidden;
      margin-bottom: 1vw;
      font-family: 'Open Sans', sans-serif;
    }
    img {
      object-fit: cover;
    }
  }
}
```

I would love it if you would contribute more styles to the library! Feel free to fork the repo and play around with it. Make some styles and experiment with the power of SpiceWheel. There is a lot to be done and I will be actively contributing to the library for the foreseeable future. I look forward to working with you!

### Architecture and Technologies

This project will be implemented with the following technologies:
* JavaScript - React and Vanilla.
* CSS3
* HTML - For transcribing a SpiceRack into a SpiceWheel.

### Implementation Schedule

Day 1 (Mon 29): Finish proof-of-concept demo. Transform an html table into a responsive grid.
  * Write SpiceWheel function: To convert an html table I will access React Component properties.
  * Write Simple SpiceWheel stylesheet: Will style the new html elements to be responsive grid.  Grid will be unordered list that uses bootstrap/or simply vw units in CSS.

Day 2 (Tue 30): Research and collect CSS styles to add to basic library. Start setting up SpiceWheel website.
  * Focus on e-commerce example. Start setting up front-end site that demonstrates the functionality of spice-wheel.

Day 3 (Wed 31): Keep working on SpiceWheel website
  * Make sure that all the relevant information is presented on the SpiceWheel site.

Day 4 (Thu 1): Create a couple of demos using the new styles collected on Tuesday and Wednesday Present them on the site. As proof of product, rewrite table in FullStack project using SpiceWheel 😱

Day 5 (Fri 2): Research how to submit SpiceWheel to npm.

### Bonus features


1. Add more styles to the basic library
2. Deploy the library to npm so that other developers can use it!
3. Support JSON usage instead of SpiceRack usage.

<div>Icons made by <a href="http://www.freepik.com" title="Freepik">Freepik</a> from <a href="http://www.flaticon.com" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
<div>By Facebook - facebook.github.io/react, Public Domain, https://en.wikipedia.org/w/index.php?curid=52974893</div>
