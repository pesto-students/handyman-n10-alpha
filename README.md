# The Crew

![The Crew](/apps/the-crew-ui/src/assets/icons/the-crew.svg)

## Table of Contents

[Introduction](##Introduction)\
[Installation](##Installation)\
[Features](##Features)\
[Technology Stack](##Technologies-used-to-build-this-project)\
[Authors](##Contributors-✨)\
[Contributing](##Contributing)\
[License](##License)

## Introduction

The Crew is a platform that helps in finding the basic necessity services available in one’s localities such as plumbing, electrical works, beautician,salon or carpentry work. A dedicated platform designed for a service provider makes it handy to market the services and also can manage his work online, as well as for customer to book and avail any service at any given point of time. The Crew is a responsive platform, hence users can access it across all devices. Our goal is to make the best user experience UI design and easy to use.

Live demo [here](https://alpha-the-crew.netlify.app)

### Sample creds

<!-- Customer -->

username : customer@thecrew.com  
password: Password@123

## Installation

- Clone this repository to your local machine
- Use the `yarn` command to install dependencies
- Inside the root directory:
  - Run command `yarn start the-crew-ui` to open the app in your browser of choice
  - Run command `yarn start the-crew-api` to start the backend service.
- Several environment variables are needed to run the app. Below are listed:

```plaintext
// port number where backend will host
NX_PORT= // optional (defaults to 3000)

// frontend url
NX_CORS_ORIGINS=http://localhost:4200,http://localhost:4000 // must be comma separated

NX_JWT_SECRET= // required
NX_COOKIE_SECRETS= // optional (must be comma separated)
NX_JWT_ISSUER= // optional (defaults to nestjs)
NX_ACCESS_TOKEN_EXPIRE= // optional (defaults to 24h)
NX_REFRESH_TOKEN_EXPIRE= // optional (defaults to 7d)
NX_COOKIE_EXPIRE= // optional (defaults to 7d)

NX_TYPEORM_DB_TYPE= // optional (defaults to postgres)
NX_TYPEORM_PORT= // optional (defaults to 5432)
NX_TYPEORM_HOST= // required
NX_TYPEORM_USERNAME= // required
NX_TYPEORM_PWD= // required
NX_TYPEORM_DB= // required

// backend url with which the frontend will interact
NX_API_URL=http://localhost:3000/api // required
NX_CONVENIENCE_FEE=39 // required (must be number)

NX_GOOGLE_AUTH_CLIENT_ID= // required
NX_STRIPE_PRIVATE_KEY = // required
```

## Features

- List of locations where The Crew is operated currently.
- Types of services provided such as Carpentry, plumbing, salon etc and options to search.
- List of services with details available, FAQs and most recent reviews.
- Services can be added to cart for later booking.
- Review and rate for obtained service.
- Bookings (ongoing and history)
- Select existing address or create new address while booking a service.
- Onboarding the user as a customer or service provider (professional).

## Code Features

- [Nx](https://nx.dev) Monorepo workspace
- NestJS backend framework
- React functional components used with hooks
- Material-UI styled components
- Global state management using Redux (Redux Toolkit)
- Login using email & password and Google SSO
- Payment gateway integration (Stripe)
- Frontend is hosted on Netlify
- Backend is hosted on Heroku
- DB hosted on AWS RDS

## Technologies used to build this project

![NestJS](https://img.shields.io/badge/nestjs-%23E0234E.svg?style=for-the-badge&logo=nestjs&logoColor=white)  
![Postgres](https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white)  
![React JS](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)  
![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white)  
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)  
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)  
![SASS](https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white)

## Other Libraries/Platforms Used

![Material UI](https://camo.githubusercontent.com/2c2e3cab0541596a12e216df86e68fa554256f25826b55a068993a3edfbcd0e8/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4d6174657269616c2d2d55492d3030383143423f7374796c653d666f722d7468652d6261646765266c6f676f3d6d6174657269616c2d7569266c6f676f436f6c6f723d7768697465)  
![Heroku](https://img.shields.io/badge/heroku-%23430098.svg?style=for-the-badge&logo=heroku&logoColor=white)  
![Netlify](https://img.shields.io/badge/netlify-%23000000.svg?style=for-the-badge&logo=netlify&logoColor=#00C7B7)

## Contributors ✨

[Akshay Mahajan](https://github.com/androizer)  
[Sri Vithal Sai Krishna](https://github.com/krishnavithal)

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.\

Our commit messages are formatted according to [Conventional Commits](https://conventionalcommits.org/), hence this repository has [commitizen](https://github.com/commitizen/cz-cli) support enabled. Commitizen can help you generate your commit messages automatically.

And to use it, simply call git commit. The tool will help you generate a commit message that follows the below guidelines.

### Commit Message Format

Each commit message consists of a header, a body and a footer. The header has a special format that includes a type, an optional scope and a subject:

```plaintext
<type>(<scope>): <subject>
<BLANK LINE>
<body>
<BLANK LINE>
<footer>
```

## License

[MIT](/LICENSE)
