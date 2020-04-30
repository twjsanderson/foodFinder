1. How long did you spend on the coding assignment? What would you add to your solution if you had more time? If you didn't spend much time on the coding test then use this as an opportunity to explain what you would add.

- I spent about 2 days on this project. I would have preferred to add pictures and proper pagination to the app. As well, it would have been great to add google maps so people could actually see where they were in relation to each restaurant. I would have also optimized the loading of resources, added caching and created proper SEO for each public page. Most importantly I would have translated all Class based components into Functional components with Hooks. I would have also pulled Cuisine Types and Ratings of each restaurant from the Yelp API to round out the experience for users. Unfortunately, the Opentable API did NOT have this data available.

2. What was the most useful feature that was added to the latest version of your chosen language? Please include a snippet of code that shows how you've used it.

- The most useful feature of javaScript I used in this project are chained ternary statements which make conditional rendering very easy.

Code Snippet from list.container.js:

                ```javascript
                <ul>
                    {
                        this.props.refined.length > 0 ?
                            this.props.refined.map(restaurant => {
                                return (
                                    <ListView 
                                        key={restaurant.id}
                                        restaurant={restaurant} 
                                        refined={true} 
                                        restaurantDetails={this.restaurantDetails}
                                    />
                                )
                            }) : this.props.restaurants.length > 0 ? 
                                this.props.restaurants.map(restaurant => {
                                    return (
                                        <ListView 
                                            key={restaurant.id}
                                            restaurant={restaurant} 
                                            refined={false} 
                                            restaurantDetails={this.restaurantDetails}
                                        />
                                    )
                                }) : 
                                <h4 className='text-center p-2 mr-5 text-primary'>Start by entering your city name!</h4>
                    }
                </ul>
                ```

3. How would you track down a performance issue in production? Have you ever had to do this?

- To start I would look at the console in whatever browser I was using to try and rerpoduce performance issues under different use cases, then I would run an automated perfomance test like (lighthouse), then refer to react dev tools and maybe redux dev tools if it was setup in the app. 

- I would go into the dev branch to check out the tests and assess how comprehensive they were. I would also check the time and space complexity of any algorithms used in the code. I would also assess the number of calls being made to API's and assess properties like their RTS.  

- I have had to do this with apps in production and while conducting integration tests with beta applications.

4. How would you improve the API that you just used?

- Increase the data it offers for each restaurant and add real pictures to accompany the data. I would also allow for larger pulls of data instead of blocks of 25, 50, 100, etc.

- I would also create a query for names after cities have been chosen instead of just city ids.

5. Please describe yourself using JSON.

- I usually use axios or fetch in React to handle JSON/JSONP. I usually start by console logging the json to see exactly what is in it and then I decide how to store it, where to store it and how to handle errors.