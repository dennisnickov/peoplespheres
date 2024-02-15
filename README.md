## Changes:
- Add and Update Product now working
- If not specifically checked, Featured is checked automatically if Rating > 8
- If Expiration Date specified, checking if it’s at least 30 days in the future
- Form validation shown only after pressing Submit, not allowing submission if validation errors present
- Wrote missing unit tests for products and categories actions and reducers, as well as the form validators
- Refactored class components into functional components
- Fixed bug where the id of a new product is a string so it can’t be viewed or edited
- Fixed bug where Featured checkbox was throwing a warning
- Fixed bug with application not starting, resolved with —openssl-legacy-provider
- Fixed error in console regarding process not being defined because of outdated react-scripts package
- Fixed all warnings in the console
- Improvements in the code style, syntax and naming conventions

## Suggested refactoring:
- Re-arrange Redux code following the ducks pattern: actions, action creators and reducers for each domain (products, categories) in a single file
- Implement Redux Toolkit in order to reduce Redux boilerplate
- Try migrating to newer dependency versions as some are outdated and have issues
- Can restructure components folder structure, for instance move ProductForm and validators, which are shared components, out of the Update folder