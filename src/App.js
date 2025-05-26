import { lazy, Suspense } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "./App.css";
import { ThemeProvider } from "./ThemeContext";
import ThemeToggle from "./themetoggle/ThemeToggle";
import { AuthProvider } from "./AuthContext";
import Login from "./protectedcomponent/pages/Login";
import ProtectedRoutes from "./protectedcomponent/ProtectedRoutes";
import Dashboard from "./protectedcomponent/pages/Dashboard";
import Home from "./lazyloading/Home";
import DynamicFormValidation from "./dynamicForm/DynamicFormValidation";

const About = lazy(() => import("./lazyloading/About"));

const Contact = lazy(() => import("./lazyloading/Contact"));
function App() {
  return (
    <>
      <h1>Welcom to Machine coding</h1>
      {/* <MyComponent /> */}

      {/* Toggle Theme */}
      {/* <ThemeProvider>
        <div className="app">
          <h1>Theme Toggle using context API</h1>
        </div>
        <ThemeToggle />
      </ThemeProvider> */}

      {/* protected Routes */}
      {/* <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route
              path="/dashboard"
              element={
                <ProtectedRoutes>
                  <Dashboard />
                </ProtectedRoutes>
              }
            />
          </Routes>
        </AuthProvider>
      </BrowserRouter> */}

      {/* Lazy Loading */}

      {/* <BrowserRouter>
        <nav style={{ display: "flex", gap: "1rem", marginBottom: "20px" }}>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/about"
            element={
              <Suspense
                fallback={
                  <div
                    style={{
                      textAlign: "center",
                      marginTop: "50px",
                      fontSize: "24px",
                    }}
                  >
                    ⏳ Loading component...
                  </div>
                }
              >
                {" "}
                <About />
              </Suspense>
            }
          />
          <Route
            path="/contact"
            element={
              <Suspense
                fallback={
                  <div
                    style={{
                      textAlign: "center",
                      marginTop: "50px",
                      fontSize: "24px",
                    }}
                  >
                    ⏳ Loading component...
                  </div>
                }
              >
                <Contact />
              </Suspense>
            }
          />
        </Routes>
      </BrowserRouter> */}

      {/* form validation */}
      <DynamicFormValidation />
    </>
  );
}

export default App;
