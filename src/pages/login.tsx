import { useNavigate } from "react-router-dom";

const Login = () => {

  const [form, setForm] = useState({
    email: "",
    password: "",
  })

  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLFormElement>) => {
    setForm({...form, [e.target.name]: e.target.value})
  }

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try{
      const res = await fetch(`${import.meta.env.VITE_SERVER_URL}/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      })

      const data = await res.json();


      if (res.ok){
        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify(data.user));
        navigate("/");
      }else{
        alert("Login failed")
      }

    }catch(error){
      alert("Error when logging in")
      console.error(error)
    }finally{
      setLoading(false)
    }
  }

  return (
    <div>login</div>
  )
}

export default Login