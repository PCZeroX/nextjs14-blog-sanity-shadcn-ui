const getData = async () => {
  const query = `
    *[_type == 'blog'] | order(_createdAt desc) {
    title,
      smallDescription,
      "currentSlug": slug.current
    }
  `;

  return query;
};

const HomePage = () => {
  return (
    <main>
      <p>Home Page</p>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id, at?
        Debitis molestiae natus eligendi ea ex et, iusto perspiciatis nostrum,
        fugit cupiditate beatae. Necessitatibus ut beatae numquam optio. Nobis,
        ex.
      </p>
    </main>
  );
};

export default HomePage;
