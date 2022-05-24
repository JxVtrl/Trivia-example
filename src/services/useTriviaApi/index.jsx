import { options } from '../useTriviaOptions'
export function createURL(amount, category, difficulty) {
    const categoryKey = Object.keys(options.themes).find(key => options.themes[key] === category)

    return `https://opentdb.com/api.php?amount=${amount}&category=${categoryKey}&difficulty=${difficulty}&type=multiple`
}
