# Local Agent Finder - Coding Exercise

Welcome to our coding exercise! This test is designed to understand your thought process, problem-solving approach, and ability to provide improvement recommendations. We view this exercise as a way for you to express your technical and creative skills.

The exercise consists of two parts:

1. **Code Improvement**
2. **Application Architecture Analysis**

## Code Improvement

In this part, we've provided a code snippet which you're encouraged to improve as you see fit. Once you've made your changes, please raise a Pull Request. When improving the code, please be mindful of the following aspects:

- **Code Readability**: Add comments where it makes sense to improve the clarity, structure and readability of the code.
- **Functionality and Scalability**: Look at the code from both a functionality, testability and scalability perspective. Your changes should make the code more efficient and adaptable.
- **Pull Request Description**: Summarize your changes in the Pull Request description, providing high-level reasoning behind your decisions.

Remember, this part is not a test to assess whether you can merely fix the code, but an opportunity to demonstrate how you would improve it, considering modern frameworks and best engineering practices.

## Application Architecture Analysis

For this component we've provided a [high level explanation and diagram](architecture.md) of how some applications are currently being built and deployed. We're interested in your insights and suggestions for improving our Front End architecture, along with our build and deployment practices.

Feel free to summarize your thoughts or even provide your own diagram. You can put your response or new diagram in the repo, under the `Docs` folder.

We're eager to see your unique perspective on potential improvements. Good luck, and we look forward to reviewing your exercise!

# Notes

1. Added source mapping to enable debugging
2. Added to Linting to help start re-factoring
3. Reordered functions so they are declared before called
   1. Readability
4. Fixed Callback error in agentResultsService()
   1. Included all matches in collection - no just 1st
5. Separate handling of data into a utility services (agentService and questionService)
   1. Used classes, which offer a good way (via oop - ES6) to encapsulate data and methods
   2. Instances can be used elsewhere
   3. Often, easier to test
6. Separate data
7. Form Validation
8. Error Boundary
9. State management
10. Styling
