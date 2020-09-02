import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:3333",
  headers: {
    "Content-type": "application/json",
    "authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1OTkwMTA2MTIsImV4cCI6MTU5OTA5NzAxMiwic3ViIjoiZTQzZmM2NDQtNzE2OS00YTRiLTg3OTAtMTBhYzk4YmRlYWM5In0.asogkVGVUBEVF6JpvfXfK72j4OAGJJ6QXBMLnQp0lKo"
  }
});