import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import RootLayout from './layouts/RootLayout';
import HomePage from './pages/HomePage';
import NotFound from './pages/NotFound';
import MovieDetail from './pages/MovieDetail';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import CategoriesPage from './pages/CategoriesPage';
import SearchPage from './pages/SearchPage';

import NowPlaying from './pages/NowPlaying';
import Popular from './pages/Popular';
import TopRated from './pages/TopRated';
import Upcoming from './pages/Upcoming';

const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout />,
        errorElement: <NotFound />,
        children: [
            {
                index: true,
                element: <HomePage />
            },
            {
                path: 'login',
                element: <LoginPage />
            },
            {
                path: 'signup',
                element: <SignupPage />
            },
            {
                path: 'search',
                element: <SearchPage />
            },
            {
                path: 'movies',
                element: <CategoriesPage />
            },
            {
                path: 'movies/now-playing',
                element: <NowPlaying />
            },
            {
                path: 'movies/popular',
                element: <Popular />
            },
            {
                path: 'movies/top-rated',
                element: <TopRated />
            },
            {
                path: 'movies/up-coming',
                element: <Upcoming />
            },
            {
                path: 'movies/:movieId',
                element: <MovieDetail />
            }
        ]
    }
]);

const queryClient = new QueryClient();

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <RouterProvider router={router} />
            <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
    );
}

export default App;
