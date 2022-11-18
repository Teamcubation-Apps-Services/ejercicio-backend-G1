require("dotenv").config();
import app from "./app";

const PORT = process.env.PORT;

app.listen(PORT || 4000, () => console.log(`Server listening on port ${PORT}`));
