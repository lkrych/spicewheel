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
