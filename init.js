import app from "./app"

const PORT = 8080;

const handleListening = () => console.log(`✅Hello nodeJS world! with port number ${PORT}`);

app.listen(PORT, handleListening);