import { sample_foods, sample_tags } from "../data";

export const getAll = async() => sample_foods

export const search = async searchTerm => 
    sample_foods.filter(item => item.name.toLowerCase().includes(searchTerm.toLowerCase()))

export const getAllTags = async()=>sample_tags 

export const getAllByTag = async tag =>
    {
        if(tag === 'All') return await getAll()
        return sample_foods.filter(food => food.tags.includes(tag))
    }