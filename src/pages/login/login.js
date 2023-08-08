

export default function Login() {


    return (
        <section>
            <form >
      <label>
        {' '}
        email
        <input
          type="text"
          name="email"
          placeholder="email"           
          required
        />
      </label>

      <label>
        password
        <input
          type="tel"
          name="password"
          placeholder="password"            
          required
        />
      </label>
      <button type="submit">submit</button>
    </form>
        </section>
    )
}