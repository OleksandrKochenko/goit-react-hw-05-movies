import TrendingList from 'components/trending-list';

const Home = () => {
  return (
    <div>
      <h2 style={{ margin: '0 10px' }}>Trending today</h2>
      <TrendingList />
    </div>
  );
};

export default Home;
