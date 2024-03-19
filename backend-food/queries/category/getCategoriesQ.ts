import CategoryModel from "../../models/category";

export const getCategoriesQ = async () => {
  const categories = await CategoryModel.find();
  const newCategories = categories.map((category) => {
    return {
      id: category.id,
      name: category.name,
    };
  });

  return newCategories;
};
