import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import {
  About,
  Cocktail,
  Error,
  HomeLayout,
  Landing,
  NewsLetter,
  SinglePageError,
} from './pages'
import { loader as cocktailSearchLoader } from './pages/Landing'
import { loader as singleCocktailLoader } from './pages/Cocktail'
import { action as newsLetterAction } from './pages/NewsLetter'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
    },
  },
})

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
        errorElement: <Error />,
        loader: cocktailSearchLoader(queryClient),
      },
      {
        path: '/cocktail/:id',
        element: <Cocktail />,
        loader: singleCocktailLoader(queryClient),
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'newsletter',
        element: <NewsLetter />,
        action: newsLetterAction,
      },
    ],
  },
])
const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen="true" />
    </QueryClientProvider>
  )
}

export default App
