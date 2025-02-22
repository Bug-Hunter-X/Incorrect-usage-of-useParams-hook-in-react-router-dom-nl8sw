import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/users/:id" element={<User />} />
      </Routes>
    </BrowserRouter>
  );
}

function Home() {  return <h1>Home</h1>;}

function About() { return <h1>About</h1>;}

function User() { 
  const params = useParams();
  return <h1>User {params.id}</h1>;
}