import { use } from 'react'

import { ThemeContext, ThemeProvider } from '../../context/ThemeContext'

function Card() {
  const { theme, toggleTheme } = use(ThemeContext)

  return (
    <div
      className={`max-w-md mx-auto my-8 rounded-lg p-6 ${
        theme === 'light' ? 'bg-slate-200' : 'bg-slate-800'
      }`}
    >
      <p className={theme === 'light' ? 'text-slate-800' : 'text-slate-200'}>
        By default, Actions are submitted within a transition, keeping the
        current page interactive while the action is processing. Since Actions
        support async functions, we’ve also added the ability to use async/await
        in transitions. This allows you to show pending UI with the isPending
        state of a transition when an async request like fetch starts, and show
        the pending UI all the way through the update being applied.
      </p>
      <button
        onClick={toggleTheme}
        className='mt-6 px-4 py-2 bg-slate-600 text-white rounded-md outline-none'
      >
        {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
      </button>
    </div>
  )
}

function Theme() {
  return (
    <ThemeProvider>
      <Card />
    </ThemeProvider>
  )
}

export default Theme
