import React, { useState, useEffect } from 'react';
import { gamesApi } from '../api/api';
import GameCard from '../Components/GameCard/GameCard';
import SearchBar from '../Components/SearchBar/SearchBar';
import CategoryFilter from '../Components/CategoryFilter/CategoryFilter';
import Pagination from '../Components/Pagination/Pagination';
import Loader from '../Components/Loader/Loader';
import './HomePage.css';

const HomePage = () => {
  const [games, setGames] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  // Filters
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  // Fetch categories on mount
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const data = await gamesApi.getCategories();
        setCategories(data);
      } catch (err) {
        console.error('Error fetching categories:', err);
      }
    };

    fetchCategories();
  }, []);

  // Fetch games when filters change
  useEffect(() => {
    const fetchGames = async () => {
      setLoading(true);
      setError(null);

      try {
        const params = {
          page,
          limit: 8,
          ...(search && { search }),
          ...(selectedCategory && { category: selectedCategory }),
        };

        const data = await gamesApi.getAll(params);
        setGames(data.games);
        setTotalPages(data.totalPages);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchGames();
  }, [search, selectedCategory, page]);

  const handleSearch = (searchTerm) => {
    setSearch(searchTerm);
    setPage(1); // Reset to first page on search
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setPage(1); // Reset to first page on category change
  };

  const handlePageChange = (newPage) => {
    setPage(newPage);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (loading && games.length === 0) {
    return <Loader />;
  }

  return (
    <div className="home-page">
      <section className="hero-section">
        <h1>Discover Amazing Games</h1>
        <p>Find and download the best games for free</p>
        <SearchBar onSearch={handleSearch} />
      </section>

      <div className="home-content">
        <aside className="sidebar">
          <CategoryFilter
            categories={categories}
            selectedCategory={selectedCategory}
            onCategoryChange={handleCategoryChange}
          />
        </aside>

        <main className="games-grid-container">
          {error ? (
            <div className="error-message">
              <p>Error loading games: {error}</p>
              <button onClick={() => window.location.reload()}>Try Again</button>
            </div>
          ) : (
            <>
              <div className="games-header">
                <h2>
                  {selectedCategory ? `${selectedCategory} Games` : 'All Games'}
                </h2>
                <span className="games-count">{games.length} games found</span>
              </div>

              {games.length === 0 ? (
                <div className="no-games">
                  <p>No games found matching your criteria.</p>
                  <button onClick={() => {
                    setSearch('');
                    setSelectedCategory('');
                  }}>
                    Clear Filters
                  </button>
                </div>
              ) : (
                <>
                  <div className="games-grid">
                    {games.map((game) => (
                      <GameCard key={game._id} game={game} />
                    ))}
                  </div>

                  {totalPages > 1 && (
                    <Pagination
                      currentPage={page}
                      totalPages={totalPages}
                      onPageChange={handlePageChange}
                    />
                  )}
                </>
              )}
            </>
          )}
        </main>
      </div>
    </div>
  );
};

export default HomePage;

