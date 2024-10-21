export default async function Homepage() {
    return (
        <div className="container mx-auto p-2">
            <h2>Login to BlueSky</h2>
            <form action="" method="post" className="[&>*>*]:block">
                <div>
                    <label htmlFor="username">Hosting Provider</label>
                    <input
                        type="text"
                        name="username"
                        placeholder="https://bsky.social"
                        defaultValue="https://bsky.social"
                    />
                </div>
                <div>
                    <label htmlFor="username">Username or Email Address</label>
                    <input
                        type="text"
                        name="username"
                        placeholder="@bskyuser.bsky.social"
                    />
                </div>
                <div>
                    <label htmlFor="passsword">App Password</label>
                    <input
                        type="password"
                        name="password"
                        placeholder="abcd-1234-defg-5678"
                    />
                </div>
                <br />
                <button type="submit" className="w-full bg-blue-600">
                    Login
                </button>
            </form>
            <p>
                To ensure your account safety, please login using App Password instead of your actual password!
            </p>
            <p>
                To generate an App Password, head to Blue Sky Settings {`>`} App Passwords then generate them there.
            </p>
        </div>
    );
}
