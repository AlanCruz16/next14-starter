import { auth, signIn } from "../../../lib/auth";
import { login } from "../../../lib/actions"

const LoginPage = async () => {
  const session = await auth();
  console.log(session);

  const handleGithubLogin = async () => {
    "use server"
    await signIn("github");
  };


  return (
    <div>
      <form action={handleGithubLogin}>
        <button>Login with Github</button>
      </form>
      <form action={login}>
        <input type="text" placeholder="username" name="username" />
        <input type="text" placeholder="password" name="password" />
        <button>Login with username and password</button>
      </form>
    </div>)
};
export default LoginPage;