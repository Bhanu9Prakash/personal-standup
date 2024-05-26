const express = require('express')
const connectDB = require('./config/database')
const path = require('path')

const app = express()
const PORT = process.env.PORT || 5000

// Connect to MongoDB
connectDB()

app.set('view engine', 'ejs')
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// Import routes
const authRoutes = require('./routes/auth')
const dailyReviewRoutes = require('./routes/dailyReview')
const goalSettingRoutes = require('./routes/goalSetting')

// Use routes
app.use('/api', authRoutes)
app.use('/api', dailyReviewRoutes)
app.use('/api', goalSettingRoutes)

// View routes
app.get('/', (req, res) => res.render('login'))
app.get('/signup', (req, res) => res.render('signup'))
app.get('/daily-review', (req, res) => res.render('dailyReview'))
app.get('/goal-setting', (req, res) => res.render('goalSetting'))

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`)
})
