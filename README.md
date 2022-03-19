# JC_UFOs
Module 13: Mapping Earthquakes with JS & APIs

# Overview of the analysis:

This UFO Sightings webpage intends to show through a dynamic table an in-depth analysis of UFO sightings by allowing users to filter for multiple criteria at the same time: date, city, state, country, and shape.

1 part is accomplished through this analysis:

- D1: Filter UFO sightings on multiple criteria

# Resources:
 
 **Data source** All data used and queries used in this analysis are available in the [Static Folder](https://github.com/juanitacosmica/JC_UFOs/static)

  **Software** JavaScript, HTML, CSS, Bootstrap3.


# Results:

We are showcasing a table with the data fetched from the [data.js](https://github.com/juanitacosmica/JC_UFOs/static/js) once the user filters for:

- Date
- City
- State
- Country
- Shape

As shown in the image below, we also give the user an example on what format to use when entering the data to filter for:

![Filters](/Resources/D1_img1.png)

After the user inputs the parameters, the table will show the data accordingly:

![Fetched Data](/Resources/D1_img2.png)

When we want to filter for different data, the user can either delete and re-enter whatever parmeters, or refresh the webpage, or click on the top left corner on "UFO Sightings" and the filters will be cleared out and ready for another use!

![Clear Filters Hack](/Resources/D1_img3.png)

To make all this possible, we updated the code in the [index.html file](https://github.com/juanitacosmica/JC_UFOs) to create more table filters, for: date, city, state, country, and shape (also removed the Filter Table button):

![Show Html Filters Script](/Resources/D1_img4.png)

And using JavaScript, we used a function in the [app.js file](https://github.com/juanitacosmica/JC_UFOs/static/js) to save the element, value, and id of the filter that was changed. Also we created a new function to loop through the dataset to keep only the results that match the user search criteria. The webpage will be updated with the search criteria after pressing "Enter".

![Show JavaScript1](/Resources/D1_img5.png)
![Show JavaScript2](/Resources/D1_img6.png)

All script screenshots results are avaialble for viewing on the [Resources Folder](https://github.com/juanitacosmica/JC_UFOs/Resources).

# Summary:

Being able to create a webpage to have user inputting parameters to fetch data and visuallize it in tables is a big step forward. For this particular challenge building the HTML using bootstrap and styling and also being able to add an image was very interesting. 2 things to point out:

## Drawback:

  1. For the reset button instead of being located up above where the user would not even notice it while being down looking at the filters and table with data, should be under the filtering table; also, the Filter Table Button was quite nicer to have instead of being removed.

## Recommendations:

  1. Having drop-down menus in case the users do not know the options, ie. what if they come to search for UFO data in other countries but this is only fetching for the US? Easier if upfront they see what is available from a drop down menu.

  2. Adding a button for the user to manipulate the styling of the webpage would be fun, this styling was a Dark mode type of view, but having a button to turn it into a lighter mode should be good too!

People call me JC, the short for [Juanita C. Nunez](https://www.linkedin.com/in/juanitacamargonunez/). Contact me for any questions! I love networking, so here you go  my [LinkedIn] (https://www.linkedin.com/in/juanitacamargonunez/) :)