### `Easy Peasy`

We need any state management library to store the state to accomplish "Persisting measurements for future visits to the app". I chose Easy peasy, because it is extending redux and user friendly to manage the states. 

### `Material ui core and icons`

To do Add and delete operation on the test data, we need mutiple components and I am familiar with material UI, So I chose the same. The Editable tabele of Material-table is extended from material UI

### `moment`

It is for easy time conversions

### Task
1. Create a React Single Page App with 3 “pages”.
	3 react components are created
2. Each page should be reachable by a unique route.
	React router is used to navigate through this 3 pages. Breadcrumbs also added to have a control on navigation between screens.
3. First page is a landing page which contains links to the other pages.
	Buttons are used to navigate to other 2 screens.
4. The second page should contain a representation of the Test Data (e.g. list of components for each record).
	Data is represented in the editable table with pagination.
5. The third page should summarize the rendering performance of the Test Data.
	I have used axios to make a call to get the json data from given test data link. The start time and end time of the data rendering is captured.
	
### Extension

• Multiple alternative views of the test data (e.g. table, list, grid, graph, etc.)
	The test data is represtented in the editable table with pagination.
• Multiple alternative views of the performance data (e.g. table, list, grid, graph, etc.)
	2 typesperformance measurements are made. One is based on the data rendering time and other is the loading time of the screen captured usin
	React Profiler
• Storing multiple measurements, along with functionality to select, remove, aggregate, etc., said measurements.
	As the material table itself having the feature of add, edit and delete all these time measurements are taken and stored in state.
• Persisting measurements for future visits to the app (i.e. measurements are not lost on refresh).
	It is done using easy-peasy.
• Adding a measurement detail page with routing to each measurement.
	Yes, each page will have a detail page with the same information.
• Adding unit tests to ensure the validity of your code.
	Used react testing library to write test cases.
• Making the app responsive such that it functions correctly and intuitively for various screen sizes.
	Material UI and bootstrap is used to ensure the responsiveness.
• Integrating a CSS framework for consistent design
	Implemented the same.