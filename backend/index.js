const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const {connectDB} = require('./database/db_connect');
const router = require('./Routes/inventoryRoutes');
dotenv.config();
const port = process.env.PORT ||3001

const app = express();

const allOrigins = ["https://zuvees-project-frontend.vercel.app",
                    "https://zuvees-project-frontend-murali-madhav-cs-projects.vercel.app/",
                    "https://zuvees-project-frontend-git-main-murali-madhav-cs-projects.vercel.app",
                    "https://zuvees-project-frontend-2af1tlopb-murali-madhav-cs-projects.vercel.app"]

app.use(cors(
    {
        origin: allOrigins
    }
));
app.use(express.json());


connectDB();

app.use('/api',router)

app.get('/', (req, res) => {
    try {
        res.send("Hello world!!!");
    } catch (ee) {
        console.log(ee.message);
        res.status(400).send(ee);
    }
});


app.listen(port, () => {
    console.log(`Server is running on port http://localhost:3000`);
});
















// The error indicates a CORS (Cross-Origin Resource Sharing) issue, which happens because your backend (on http://localhost:3000) is being accessed by your frontend (on http://localhost:3001), and the backend does not allow this cross-origin request.
