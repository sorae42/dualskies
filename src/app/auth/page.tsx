// serve as the landing page and redirect if needed
export default async function LoginProcessor() {
    return (
        <div className="container mx-auto p-2">
            <h2>Login to BlueSky</h2>
            <form action="/auth/passive" method="POST" className="[&>*>*]:block">
                <div>
                    <label htmlFor="service">Hosting Provider</label>
                    <input
                        type="text"
                        name="service"
                        placeholder="https://bsky.social"
                        defaultValue="https://bsky.social"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="username">Username or Email Address</label>
                    <input
                        type="text"
                        name="username"
                        placeholder="@bskyuser.bsky.social"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="passsword">App Password</label>
                    <input
                        type="text"
                        name="password"
                        placeholder="abcd-1234-defg-5678"
                        required
                    />
                </div>
                <br />
                <button type="submit" className="w-full bg-blue-600">
                    Login
                </button>
            </form>
            <p>
                To ensure your account safety, please login using App Password
                instead of your actual password!
            </p>
            <p>
                To generate an App Password, head to Blue Sky Settings {`>`} App
                Passwords then generate them there.
            </p>
        </div>
    );
}
