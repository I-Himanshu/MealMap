# MealMap

MealMap is a dynamic recipe discovery and meal planning web application built with Angular. It empowers users to explore a wide variety of recipes, create personalized meals, and manage their own culinary preferences. This project serves as a comprehensive tool for learning advanced UI/UX design concepts while deepening expertise in Angular development.

## Features

- **Recipe Discovery**: Browse through an extensive collection of recipes from both Indian and international cuisines.
- **Filter & Search**: Easily filter recipes by cuisine, dietary preferences (vegetarian or non-vegetarian), and calorie count.
- **Create Custom Meals**: Users can create their own custom meals by selecting ingredients, adding cooking instructions, and saving the recipes.
- **Recipe Management**: Add, edit, or delete recipes directly through an intuitive user interface.
- **Meal Planner**: Plan daily or weekly meals by selecting recipes from the library or creating new ones.
- **Nutritional Information**: View detailed nutritional data such as calories, ingredients, and more for each recipe.
- **Dynamic Routing**: Smooth navigation between the recipe list and detailed views using Angular's dynamic routing.
- **Responsive Design**: Optimized for both desktop and mobile devices, ensuring a seamless experience across all platforms.
- **Indian & International Cuisines**: Focus on Indian cuisine with additional recipes from around the world for a diverse experience.

# Main Tech Stacks

1. **Frontend Framework**:
   - **Angular**: A powerful framework for building single-page applications (SPAs) using TypeScript. It provides features like two-way data binding, dependency injection, and modular development.

2. **Routing**:
   - **@angular/router**: Manages navigation between different views or components in the application.

3. **State Management**:
   - **RxJS**: A library for reactive programming using Observables, allowing for easy composition of asynchronous or callback-based code.

4. **Styling**:
   - **CSS**: Standard stylesheets are used for styling the Angular components.
   - **Angular Animations**: Built-in support for creating animations in Angular applications.

5. **Backend( for dynamic routing )**:
   - **Express**: A minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.

6. **Server-Side Rendering (SSR)**:
   - **@angular/platform-server**: Allows Angular applications to be rendered on the server side, improving performance and SEO.

7. **Testing( built in)**:
   - **Karma**: A test runner for JavaScript that allows running tests in multiple browsers.
   - **Jasmine**: A behavior-driven development framework for testing JavaScript code.

8. **Development Tools**:
   - **@angular/cli**: A command-line interface for Angular, providing tools for creating and managing Angular projects.

9. **TypeScript**:
   - **TypeScript**: A superset of JavaScript that adds static typing, allowing for more robust and maintainable code.

## Additional Libraries

- **zone.js**: A library that helps Angular know when to trigger change detection, making it easy to manage asynchronous operations.

# Summary

This tech stack provides a solid foundation for building dynamic, responsive web applications with a focus on performance, user experience, and maintainability. It leverages the latest features of Angular along with industry-standard tools and libraries for backend and testing functionalities.


## Project Structure
```bash
MealMap/
├── angular.json
├── package.json
├── package-lock.json
├── README.md
├── server.ts
├── src
│   ├── app
│   │   ├── app.component.css
│   │   ├── app.component.html
│   │   ├── app.component.ts
│   │   ├── app.config.server.ts
│   │   ├── app.config.ts
│   │   ├── app.routes.ts
│   │   ├── dashboard/
│   │   │   ├── dashboard.component.css
│   │   │   ├── dashboard.component.html
│   │   │   └── dashboard.component.ts
│   │   ├── models/
│   │   │   └── recipe.model.ts
│   │   ├── recipe-detail/
│   │   │   ├── recipe-detail.component.css
│   │   │   ├── recipe-detail.component.html
│   │   │   └── recipe-detail.component.ts
│   │   ├── recipe-form/
│   │   │   ├── recipe-form.component.css
│   │   │   ├── recipe-form.component.html
│   │   │   └── recipe-form.component.ts
│   │   ├── services/
│   │   │   └── recipe.service.ts
│   │   └── utils/
│   │       └── constants.ts
│   ├── assets/
│   │   ├── ChipsSandwich.png
│   │   ├── maggi.png
│   │   ├── NutellaDosa.png
│   │   └── PavBhajiOmelette.png
│   ├── favicon.ico
│   ├── index.html
│   ├── main.server.ts
│   ├── main.ts
│   └── styles.css
├── test.html
├── tsconfig.app.json
├── tsconfig.json
└── tsconfig.spec.json
```
## Installation

1. Clone the repository  
   `git clone https://github.com/I-himanshu/MealMap.git`

2. Navigate to the project directory  
   `cd MealMap`

3. Install dependencies  
   `npm install`

4. Run the development server  
   `ng serve`

5. Open your browser and go to  
   `http://localhost:4200`

## Usage

- The dashboard will display a list of recipes with minimal details such as an image, name, and kcal count.
- Use the filters to browse recipes by cuisine and dietary preference.
- Click on any recipe to view more details on a separate page.

## Future Scope

- **User Accounts**: Create and manage user accounts to save favorite recipes, meal plans, and personalized preferences.
- **Recipe Rating**: Rate and review recipes to provide feedback to other users and enhance community engagement.
- **Social Sharing**: Allow users to share their favorite recipes or meal plans on social media or with friends via a link.
- **Shopping List Generator**: Automatically generate shopping lists based on selected recipes or meal plans.
- **Ingredient Substitution Suggestions**: Offer ingredient alternatives to accommodate dietary restrictions or preferences.
- **Smart Recommendations**: Implement AI-based recipe recommendations based on user behavior, past meals, or nutritional goals.
- **Seasonal Recipes**: Suggest seasonal or trending recipes based on local ingredients and current food trends.
- **Offline Access**: Allow users to download and access recipes offline for convenience.
- **Voice-Guided Cooking**: Integrate voice-assistant features to guide users step by step while cooking.


## License

This project is licensed under the MIT License.
