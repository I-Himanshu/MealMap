export interface Recipe {
    id: number; 
    title: string;
    isVegetarian: boolean;
    cuisine: string;
    kcal: string;
    ingredients: {
      [key: string]: string;
    };
    steps: string[];
    imageURL: string;
    createdAt: Date;
}
