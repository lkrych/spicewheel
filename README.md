# Welcome to SpiceWheel
### A front-end library for rapid image-grid prototyping in React
![Spicewheel](https://res.cloudinary.com/heab4q3lg/image/upload/h_600/v1496022931/spicewheel.jpg)

### What is it?

Responsive image grids are one of the most common features of modern websites. SpiceWheel makes it easy to rapidly prototype different styles of grids for your website. Here are some examples of image grids from Pinterest, Amazon, Unsplash and Banana Republic.

### Example Image Grids


![pinterest](https://res.cloudinary.com/heab4q3lg/image/upload/h_400/v1496024168/pinterest.png)


![amazon](https://res.cloudinary.com/heab4q3lg/image/upload/h_400/v1496024164/amazon.png)


![unsplash](https://res.cloudinary.com/heab4q3lg/image/upload/h_400/v1496024167/unsplash.png)


![banana republic](https://res.cloudinary.com/heab4q3lg/image/upload/h_400/v1496024167/br.png)

### How does it work?

1. Generate a SpiceRack.
2. Feed the SpiceRack to the Spicewheel function.

SpiceWheel is an opinionated library. If you want to use it, you need to do something that no modern front-end web developer has or will ever do (until now), use HTML tables. At SpiceWheel, we prefer to call these beautiful relics SpiceRacks.

Each row in a SpiceRack has information about an individual grid element. For SpiceWheel to interpret the SpiceRack correctly, the SpiceRack will need one column to hold the image that will be displayed, a label for the image, and optionally some additional information about the element.

Once the SpiceRack has been created, the developer can test to see if the spice rack looks like it is supposed to (in case, for instance you are dynamically creating the table by reading an array of JSON).

After verifying that the SpiceRack has been set up correctly, the developer can then use the Spicewheel function to turn the SpiceRack into a beautiful grid, or as we like to call it, a SpiceWheel.

* despite the trendy name, SpiceRacks are just HTML tables.

### SpiceWheel example

```
import React from 'react';
import { Spicewheel } from 'spicewheel';

class genericGrid extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    const SpiceRack =
      <table>
        <tr>
          <th>Image</th>
          <th>Label</th>
        </tr>
        <tr>
          <td>{this.props.image_urls}</td>
          <td>{this.props.image_labels}</td>
        </tr>
      </table>;
    return(
      Spicewheel(SpiceRack, "modern", 3)
    );
  }
}

```

### SpiceWheel Mockup
![SpiceWheel demo](https://res.cloudinary.com/heab4q3lg/image/upload/v1496033313/SpiceWheeldemo.png)

### Architecture and Technologies

This project will be implemented with the following technologies:
* JavaScript - React and Vanilla
* CSS - A few different grid styles
* HTML - For transcribing a SpiceRack into a SpiceWheel.

### Implementation Schedule

Day 1 (Mon 29): Finish proof-of-concept demo. Transform an html table into a responsive grid using Bootstrap to help with responsiveness.

Day 2 (Tue 30): Research and collect css styles to add to basic library.

Day 3 (Wed 31): Research and collect css styles to add to basic library.

Day 4 (Thu 1): As proof of product, rewrite table in FullStack project using SpiceWheel 😱

Day 5 (Fri 2): Research how to submit SpiceWheel to npm.

### Bonus features

1. Support more libraries than Bootstrap (Ex: Foundation, Gridly)
2. Add more styles to the basic library
3. Deploy the library to NPM so that other developers can use it!
