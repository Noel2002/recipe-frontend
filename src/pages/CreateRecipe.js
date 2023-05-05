import React, { useState } from 'react'
import NavigationBar from '../features/NavigationBar/NavigationBar'
import Section from '../components/Section/Section'
import styles from './createRecipe.module.css';
import {addDoc, collection} from '@firebase/firestore'
import {db} from '../firebase/config'

const CreateRecipe = () => {
    const [step, setStep] = useState({description:"", cover:""});
    const [tag, setTag] = useState("");
    const [ingredient, setIngredient] = useState("");
    const [recipe, setRecipe] = useState({
        name: "",
        description: "",
        cover: "",
        owner: "",
        date: "",
        tags: [],
        ingredients: [],
        steps: []
    });

    const handleChange = (event)=>{
        setRecipe({...recipe, [event.target.name]: event.target.value});
        // console.log(event.target.name + " Input changed!!");
    }
    const handleTagChange = (event) =>{
        setTag(event.target.value);
    }
    const handleIngredientChange = (event) =>{
        setIngredient(event.target.value);
    }
    const handleStepChange = (event)=>{
        setStep({...step, [event.target.name]: event.target.value});
    }
    const handleAddTag = (event) =>{
        event.preventDefault();
        console.log("Tag: ", tag);
        if(tag.length > 0){
            let newTags = recipe.tags
            newTags.push(tag)
            setRecipe({...recipe, tags: newTags});
            setTag("");
        }
        console.log(recipe);

    }
    const handleAddIngredient = (event) =>{
        event.preventDefault();
        console.log("Ingridient: ", ingredient);
        if(ingredient.length > 0){
            let newIngredients = recipe.ingredients
            newIngredients.push(ingredient)
            setRecipe({...recipe, ingredients: newIngredients});
            setIngredient("");
        }
        console.log(recipe);

    }
    const handleAddStep = (event) =>{
        event.preventDefault();
        console.log("Step: ", step);
        if(step.description && step.cover && step.description.length>0 && step.cover.length>0 ){
            let newSteps = recipe.steps
            newSteps.push(step)
            setRecipe({...recipe, steps: newSteps});
            setStep({description:"", cover: ""});
        }
        console.log(recipe);

    }
    const handleTagRemove = (event,tag)=>{
        event.preventDefault();
        let newTags = recipe.tags.filter( item => item !== tag)
        setRecipe({...recipe, tags: newTags});
    }
    const handleIngredientRemove = (event,ingredient)=>{
        event.preventDefault();
        let newIngredients = recipe.ingredients.filter( item => item !== ingredient)
        setRecipe({...recipe, ingredients: newIngredients});
    }
    const handleStepRemove = (event,step)=>{
        event.preventDefault();
        let newSteps = recipe.steps.filter( item => item !== step)
        setRecipe({...recipe, steps: newSteps});
    }
    const handleSubmit = async (event)=>{
        event.preventDefault();
        const docRef = await addDoc(collection(db, 'recipes'), recipe);
        setRecipe({
            name: "",
            description: "",
            cover: "",
            owner: "",
            date: "",
            tags: [],
            ingredients: [],
            steps: []
        });
        alert("Recipe added successfully! ID: ", docRef.id);
    }
  return (
    <>
        <div className={`container mini-section`}>
                <NavigationBar theme='dark'/>
        </div>
        <Section>
            {/* <button onClick={addRecipes}>add recipes</button> */}
            <form>
                <label>
                    Recipe name
                    <input className={styles.input} type='text' name='name' onChange={handleChange} value={recipe.name}/>
                </label>
                <br />
                <label>
                    Cover
                    <input className={styles.input} type='text' name='cover' onChange={handleChange} value={recipe.cover}/>
                </label>
                <br />
                <label>
                    Owner
                    <input className={styles.input} type='text' name='owner' onChange={handleChange} value={recipe.owner}/>
                </label>
                <br />
                <label>
                    category
                    <input className={styles.input} type='text' name='category' onChange={handleChange} value={recipe.category}/>
                </label>
                <br />
                <label>
                    Date
                    <input className={styles.input} type='date' name='date' onChange={handleChange} value={recipe.date}/>
                </label>
                <br />
                <label>
                    tags
                    <input className={styles.input} type='text' name='tags' onChange={handleTagChange} value={tag}/>
                </label>
                <br />
                <button onClick={handleAddTag}>add tag</button>
                {
                    recipe.tags.map((tag) => (
                        <div>
                            <span>{tag}</span>
                            <button onClick={(event)=> handleTagRemove(event, tag)}>X</button>
                        </div>
                        
                    ))
                }
                <br />
                <label>
                    Ingridient
                    <input className={styles.input} type='text' name='ingredient' onChange={handleIngredientChange} value={ingredient}/>
                </label>
                <br />
                <button onClick={handleAddIngredient}>add ingredient</button>
                {
                    recipe.ingredients.map((ingredient) => (
                        <div>
                            <span>{ingredient}</span>
                            <button onClick={(event)=> handleIngredientRemove(event, ingredient)}>X</button>
                        </div>
                        
                    ))
                }
                <br />
                <label>
                    Description
                    <textarea className={styles.textarea} name='description' onChange={handleChange} value={recipe.description}/>
                </label>
                <br />
                <h2>
                    Steps
                </h2>
                <label>
                    Description
                    <textarea className={styles.textarea} name='description' onChange={handleStepChange} value={step.description}/>
                </label>
                <br />
                <label>
                    Cover
                    <input className={styles.input} type='text' name='cover' onChange={handleStepChange} value={step.cover}/>
                </label>
                <button onClick={handleAddStep}>add step</button>
                {
                    recipe.steps.map((step) => (
                        <div>
                            <p>{step.description}</p>
                            <p>{step.cover}</p>
                            <button onClick={(event)=> handleStepRemove(event, step)}>X</button>
                        </div>
                    ))
                }

                <button onClick={handleSubmit}>Submit</button>
            </form>
        </Section>
    </>
    
  )
}

export default CreateRecipe