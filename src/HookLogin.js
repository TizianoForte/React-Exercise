import { useLogin } from "./useLogin";

export function HookLogin() {
  const { data, onInput } = useLogin();

  console.log(data);
  return (
    <form>
      <label>
        username
        <input name="username" value={data.username} onChange={onInput} />
      </label>
      <label>
        password
        <input
          name="password"
          type="password"
          value={data.password}
          onChange={onInput}
        />
      </label>
      <label>
          remember me
        <input
          name="remember"
          type="checkbox"
          checked={data.remember}
          onChange={onInput}
        />
      </label>
    </form>
  );
}