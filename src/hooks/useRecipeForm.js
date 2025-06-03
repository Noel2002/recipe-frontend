import React from 'react';

const useRecipeForm = () => {
    const [recipe, setRecipe] = React.useState({
        name: "",
        owner: "",
        category: "breakfast",
        date: "",
        image: "",
        tag: [],
        content: ""
    });

    const setName = (name) => {
        setRecipe((prev) => ({ ...prev, name }));
    };
    const setOwner = (owner) => {
        setRecipe((prev) => ({ ...prev, owner }));
    };
    const setCategory = (category) => {
        setRecipe((prev) => ({ ...prev, category }));
    };
    const setDate = (date) => {
        setRecipe((prev) => ({ ...prev, date }));
    };
    const setImage = (image) => {
        setRecipe((prev) => ({ ...prev, image }));
    };
    const addTag = (tag) => {
        setRecipe((prev) => ({ ...prev, tag: [...prev.tag, tag] }));
    };
    const removeTag = (tag) => {
        setRecipe((prev) => ({ ...prev, tag: prev.tag.filter(t => t !== tag) }));
    };
    
    const setContent = (content) => {
        setRecipe((prev) => ({ ...prev, content }));
    };

    return {
        recipe,
        setName,
        setOwner,
        setCategory,
        setDate,
        setImage,
        addTag,
        removeTag,
        setContent
    };
}