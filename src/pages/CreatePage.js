import React from 'react'
import PageWrapper from '../components/hoc/PageWrapper'
import Markdown from 'markdown-to-jsx'
import MarkdownRenderer from '../components/MarkdownRenderer'
import { addRecipe } from '../firebase/services/recipeService';
import { useNavigate } from 'react-router-dom';

const CreatePage = () => {
    const [showPreview, setShowPreview] = React.useState(false);
    const [recipe, setRecipe] = React.useState({
        name: "",
        owner: "",
        category: "breakfast",
        date: "",
        cover: "",
        tags: [],
        content: "",
        description: ""
    });

    const [currentTag, setCurrentTag] = React.useState("");

    const navigate = useNavigate();

    const setName = (name) => {
        setRecipe((prev) => ({ ...prev, name }));
    }
    const setOwner = (owner) => {
        setRecipe((prev) => ({ ...prev, owner }));
    }
    const setCategory = (category) => {
        setRecipe((prev) => ({ ...prev, category }));
    }
    const setDate = (date) => {
        setRecipe((prev) => ({ ...prev, date }));
    }
    const setCover = (cover) => {
        setRecipe((prev) => ({ ...prev, cover }));
    }
    const addTag = () => {
        setRecipe((prev) => ({ ...prev, tags: [...prev.tags, currentTag] }));
        setCurrentTag("");
    }
    const removeTag = (tag) => {
        setRecipe((prev) => ({ ...prev, tags: prev.tags.filter(t => t !== tag) }));
    }

    const setContent = (content) => {
        setRecipe((prev) => ({ ...prev, content }));
    }
    const setDescription = (description) => {
        setRecipe((prev) => ({ ...prev, description }));
    }


    const handlePreview = (event) => {
        event.preventDefault();
        setShowPreview(true);
    }
    const handleSubmit = async(e) => {
        e.preventDefault();
        const docId = await addRecipe(recipe);
        if (!docId) {
            alert("Recipe with this name already exists");
            return;
        }
        console.log("Recipe submitted:", recipe);
        navigate(`/recipe/${recipe.name}`);
        
    }
  return (
    <PageWrapper>
        <form className=' flex-1 flex flex-col gap-6 font-montserrat'>
            <div className=' mb-8'>
                <h1 className=' text-xl font-bold mb-4'>Create a New Recipe</h1>
                <p className=' font-light font-montserrat'>
                    Lorem20 ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut 
                    labore et dolore magna aliqua.                      
                </p>
            </div>

            <div className=' flex gap-8'>
                <span className=' w-full flex flex-col gap-3'>
                    <label className=' w-full font-semibold' htmlFor='category'>Recipe name</label>                
                    <input 
                        type="text" 
                        className=' w-full mb-4 p-2 border border-gray-400 rounded-md'
                        placeholder='Please enter recipe name ...'
                        value={recipe.name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </span>
                <span className=' w-full flex flex-col gap-3'>
                    <label className=' w-full font-semibold' htmlFor='owner'>Owner/Author</label>        
                    <input 
                        id='owner'
                        type="text" 
                        className=' w-full mb-4 p-2 border border-gray-400 rounded-md'
                        placeholder='Please enter recipe owner ...'
                        value={recipe.owner}
                        onChange={(e) => setOwner(e.target.value)}
                    />
                </span>
            </div>

            <div className=' flex gap-8'>
                <span className=' w-full flex flex-col gap-3'>
                    <label className=' w-full font-semibold' htmlFor='category'>Category</label>                
                    <select 
                        id="category" 
                        className=' w-full mb-4 p-2 border border-gray-400 rounded-md'
                        value={recipe.category}
                        onChange={(e) => setCategory(e.target.value)}
                    >
                        <option value="breakfast">Breakfast</option>
                        <option value="lunch">Lunch</option>
                        <option value="dinner">Dinner</option>
                        <option value="drinks">Drinks</option>
                        <option value="vegetarian">Vegetarian</option>
                        <option value="dessert">Dessert</option>
                    </select>
                </span>
                <span className=' w-full flex flex-col gap-3'>
                    <label className=' w-full font-semibold' htmlFor='date'>Date</label>        
                    <input 
                        id='date'
                        type="date" 
                        className=' w-full mb-4 p-2 border border-gray-400 rounded-md'
                        placeholder='Select date'
                        value={recipe.date}
                        onChange={(e) => setDate(e.target.value)}
                    />
                </span>
            </div>

            <div className=' flex gap-8'>
                <span className=' w-full flex flex-col gap-3'>
                    <label className=' w-full font-semibold' htmlFor='image'>Cover image URL</label>                
                    <input 
                        id='image'
                        type="text" 
                        className=' w-full mb-4 p-2 border border-gray-400 rounded-md'
                        placeholder='Please enter cover image URL ...'
                        value={recipe.cover}
                        onChange={(e) => setCover(e.target.value)}
                    />
                </span>
                <span className=' w-full flex flex-col gap-3'>
                    <label className=' w-full font-semibold' htmlFor='tag'>Tag</label>
                    <div className=' flex gap-4'>
                        <input 
                            id='tag'
                            type="text" 
                            className=' w-full mb-4 p-2 border border-gray-400 rounded-md'
                            placeholder='Please enter a tag ...'
                            value={currentTag}
                            onChange={(e) => setCurrentTag(e.target.value)}
                        />
                        <button 
                            className=' bg-black py-2 px-6 text-white h-fit'
                            onClick={(e) => {
                                e.preventDefault();
                                if (currentTag.trim() !== "") {
                                    addTag();
                                }
                            }}
                        >
                            Add
                        </button>
                    </div>       
                    <div>
                        {recipe.tags.length > 0 && (
                            <div className=' flex gap-2 flex-wrap'>
                                {recipe.tags.map((tag, index) => (
                                    <span 
                                        key={index} 
                                        className=' bg-blue-200 px-3 py-1 rounded-md text-sm'
                                    >
                                        {tag}
                                        <button 
                                            className=' ml-2 text-red-500'
                                            onClick={() => removeTag(tag)}
                                        >
                                            x
                                        </button>
                                    </span>
                                ))}
                            </div>
                        )}
                    </div>
                </span>
            </div>

            <span className=' w-full flex flex-col gap-3'>
                <label className=' w-full font-semibold' htmlFor='content'>Recipe Description</label>
                <textarea 
                    id='description'
                    className=' border border-gray-400 rounded-md p-2 w-full h-20'
                    placeholder='Write your recipe here...'
                    value={recipe.description}
                    onChange={(e) => setDescription(e.target.value)}
                >
                </textarea>
            </span>

            <span className=' w-full flex flex-col gap-3'>
                <label className=' w-full font-semibold' htmlFor='content'>Recipe Content</label>
                <textarea 
                    id='content'
                    className=' border border-gray-400 rounded-md p-2 w-full h-96'
                    placeholder='Write your recipe here...'
                    value={recipe.content}
                    onChange={(e) => setContent(e.target.value)}
                >
                </textarea>
            </span>
            <div className=' flex justify-end gap-4'>
                <button
                    className=' py-2 px-8 border border-black text-black'
                    onClick={handlePreview}
                >
                        Preview
                </button>
                <button 
                    type='submit' 
                    className=' py-2 px-8 bg-[var(--clr-neutral-light)] text-[var(--clr-neutral-dark)]'
                    onClick={handleSubmit}
                >
                    Submit
                </button>
            </div>
        </form>
        
        {showPreview && (
            <PreviewDialog 
                content={recipe.content} 
                onClose={() => setShowPreview(false)} 
            />
        )}
    </PageWrapper>
  )
}

const PreviewDialog = ({content, onClose}) => {
    return (
        <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center'>
            <div className='bg-white rounded-md w-3/4 h-3/4 overflow-y-auto'>
                <div className=' container py-12'>
                    <button className='absolute top-2 right-2' onClick={onClose}>Close</button>
                    <MarkdownRenderer content={content} />
                </div>
            </div>
        </div>
    )
}

export default CreatePage