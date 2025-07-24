export default function Home() {
  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>Welcome to ErrandShoppers</h1>
      <p>Click below to sign in with Microsoft</p>
      <a href="/api/login">
        <button>Login with Microsoft</button>
      </a>
    </div>
  );
}
