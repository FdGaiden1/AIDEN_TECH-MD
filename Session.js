app.use(
	cors({
		origin: ['http://localhost:3000', 'https://chat-app-0iem.onrender.com'],
		methods: ['POST', 'PUT', 'GET', 'OPTIONS', 'HEAD', 'DELETE', 'PATCH'],
		credentials: true,
	})
)
app.use(
	session({
		secret: EXPRESS_SESSION_SECRET,
		resave: false,
		saveUninitialized: false,
		cookie: {
			sameSite: 'none',
			secure: true,
		},
	})
)
