// pages/index.js

export default function Home() {
  return (
    <div style={{
      backgroundColor: '#0078D4',
      height: '100vh',
      margin: 0,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      fontFamily: 'sans-serif',
      color: 'white',
      textAlign: 'center'
    }}>
      <style jsx>{`
        @keyframes liftCrane {
          0% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0); }
        }
        .crane {
          animation: liftCrane 1.5s infinite ease-in-out;
        }
      `}</style>

      <svg
        width="120"
        height="120"
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="crane"
      >
        <rect x="28" y="30" width="8" height="30" fill="#fff" />
        <rect x="20" y="50" width="24" height="6" fill="#fff" />
        <path d="M32 4 L32 30" stroke="#fff" strokeWidth="2"/>
        <path d="M32 4 L44 12" stroke="#fff" strokeWidth="2"/>
        <path d="M32 4 L20 12" stroke="#fff" strokeWidth="2"/>
        <path d="M20 12 L44 12" stroke="#fff" strokeWidth="2"/>
        <circle cx="32" cy="4" r="2" fill="#fff" />
        <rect x="30" y="30" width="4" height="8" fill="#fff" />
      </svg>

      <h1 style={{ fontSize: '1.5rem', marginTop: '20px' }}>
        We're building something great...
      </h1>
    </div>
  );
}
