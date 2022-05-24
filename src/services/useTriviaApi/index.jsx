import { options } from '../../utils'
export function createURL (amount, category, difficulty) {
  const categoryKey = Object.keys(options.themes).find((key) => {
    return options.themes[key] === category
  })

  return `https://opentdb.com/api.php?amount=${amount}&category=${categoryKey}&difficulty=${difficulty}&type=multiple`
}
