## Api Testing

API Testing is a type of software testing that verifies whether Application Programming Interfaces (APIs) work correctly, securely, and efficiently. It checks the request and response, data formats (JSON, XML), status codes, error handling, performance, and security of the API.

## Login Info

```bash
 Email : user@gmail.com
 Password : 12345678
```

## API Endpoints Authentication

### Base URL

```bash
const api = axios.create({
    baseURL: "https://apitest.softvencefsd.xyz/api",
    headers: { "Content-Type": "application/json" },
});
```

### Login

- `POST /api/auth/login`

### Register

- `POST /api/register`

### ReResend OTP

- `POST /api/resend_otp`

### Logout

- `POST /api/logout`

### Verify OTP

- `POST /api/verify_otp`

### Forgot Password

- `POST /api/forgot-password`

### Forgot Verify OTP

- `POST /api/forgot-verify-otp`

### Reset Password

- `POST /api/reset-password`

### User Detail

- `GET /api/user-detail`
