const SocialSignup = () => {
    return (
        <div className="social-login">
            <span className="divider">O CONTINUAR CON:</span>

            <div className="social-buttons">
                <button>
                    <img src="./src/assets/google.svg" alt="Google icon" width="20" height="20" />
                    Google
                </button>
                <button>
                    <img src="./src/assets/facebook.svg" alt="Facebook icon" width="20" height="20" />
                    Facebook
                </button>
                <button>
                    <img src="./src/assets/apple.svg" alt="Apple icon" width="20" height="20" />
                    Apple
                </button>
            </div>
        </div>
    );
};

export default SocialSignup;