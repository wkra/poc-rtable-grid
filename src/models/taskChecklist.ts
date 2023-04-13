export interface TaskChecklist {
  status: boolean
  description: string
  comment: string
}

const taskChecklist = () => {
  return [
    'Support for endless/infinity scroll',
    'Support for server-side filtering (search), sorting',
    'Adjustable width of columns',
    'Multiple sorting',
    'Ease of styling (how much effort is needed to style the grid according to the styleguide)',
    'Pricing',
    'Child rows (grouping)',
    'Ease and performance of cell updates (status in Units)',
    'Support for polling and updates (Units)',
    'Nice to have: Vue3 support',
    'Nice to have: TypeScript support'
  ].map((item) => {
    return {
      status: false,
      description: item,
      comment: ''
    }
  })
}

export default taskChecklist
