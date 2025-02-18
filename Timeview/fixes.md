## call backend from frontend with vite poxy

https://vite.dev/config/server-options#server-proxy

vite.config.js

```js
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000/api', // Adjust based on your backend
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
```

app.js

```js
app.use('/api/v1/bookings', bookingRoutes);
app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/courses', courseRoutes);
app.use('/api/v1/consultants', consultantRoutes);
```

courseRouter.js

````js
router.get('/', getAllCourses);```
````

BookingConsult.tsx

```tsx
 fetchConsultants()
    .then((data) => {
      if (Array.isArray(data)) {
        setConsultants(data);
      } else {
        console.error("Expected an array but got:", data);
        setConsultants([]); // Fallback to an empty array
      }
    })
    .catch((error) => {
      console.error("Error fetching consultants:", error);
      setConsultants([]); // Fallback to an empty array
    });

  fetchCourses()
    .then((data) => {
      if (Array.isArray(data)) {
        setCourses(data);
      } else {
        console.error("Expected an array but got:", data);
        setCourses([]); // Fallback to an empty array
      }
    })
    .catch((error) => {
      console.error("Error fetching courses:", error);
      setCourses([]); // Fallback to an empty array
    });
}, []);
```

```tsx
<select onChange={(e) => setConsultantID(e.target.value)}>
  <option value=''>Select Consultant</option>
  {updatedConsultants.map((consultant: any) => (
    <option
      key={consultant.id}
      value={consultant.id}
    >
      {consultant.username}
    </option>
  ))}
</select>

    <option value="">Select Course</option>
        {courses.map((course: any, index) => (
          <option key={index} value={course.id}>{course.courseCode}</option>
        ))}
```

- i did a test

```ts
const API_URL = '/api/v1'; //import.meta.env.VITE_API_BASE_URL;

const api = axios.create({
  baseURL: API_URL, // Set the base URL for all requests
});

export const fetchData = async () => {
  try {
    const response = await axios.post(`${API_URL}/test`, {
      message: 'Hello from client',
    });
    console.log(response.data); // Log response from backend
    return response.data; // Return the data.
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};
```
