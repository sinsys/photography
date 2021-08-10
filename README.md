# Donovan Photography

## Description
This is a photography website meant to serve two purposes.  
>   
> - It is both a front end client for portfolio / marketing purposes.  
> - It is a platform to distribute photos and images to clients   
>    


- [Donovan Photography](#donovan-photography)
  - [Description](#description)
  - [Get started (dev)](#get-started-dev)
  - [Building and running in production mode](#building-and-running-in-production-mode)
  - [Single-page app mode](#single-page-app-mode)
  - [Architecture](#architecture)
    - [Frontend](#frontend)
    - [Hosting](#hosting)
    - [Database](#database)
    - [Storage](#storage)
    - [Users](#users)
  - [Deployment](#deployment)
  - [Contribution](#contribution)
  - [Attributions](#attributions)

## Get started (dev)

Install the dependencies...

```bash
cd svelte-app
npm install
```

...then start [Rollup](https://rollupjs.org):

```bash
npm run dev
```

Navigate to [localhost:5000](http://localhost:5000). You should see your app running. Edit a component file in `src`, save it, and reload the page to see your changes.

By default, the server will only respond to requests from localhost. To allow connections from other computers, edit the `sirv` commands in package.json to include the option `--host 0.0.0.0`.

If you're using [Visual Studio Code](https://code.visualstudio.com/) we recommend installing the official extension [Svelte for VS Code](https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode). If you are using other editors you may need to install a plugin in order to get syntax highlighting and intellisense.

## Building and running in production mode

To create an optimised version of the app:

```bash
npm run build
```

You can run the newly built app with `npm run start`. This uses [sirv](https://github.com/lukeed/sirv), which is included in your package.json's `dependencies` so that the app will work when you deploy to platforms like [Heroku](https://heroku.com).


## Single-page app mode

By default, sirv will only respond to requests that match files in `public`. This is to maximise compatibility with static fileservers, allowing you to deploy your app anywhere.

If you're building a single-page app (SPA) with multiple routes, sirv needs to be able to respond to requests for *any* path. You can make it so by editing the `"start"` command in package.json:

```js
"start": "sirv public --single"
```

## Architecture

### Frontend

Frontend is built from scratch in Svelte using minimal external dependencies.
> [Svelte](https://svelte.dev/docs)

### Hosting

AWS hosts the service using Route 53 <tbd>. It is deployed via a CI/CD process with AWS Amplify.
> [See Deployment](#Deployment)

### Database

Dynamo DB will be used as a storage mechanism for relating S3 contents to Cognito user pools <tbd>
> [Dynamo DB](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Introduction.html)

### Storage

Amazon S3 will serve as a mechanism to store photos uploaded for clients <tbd>
> [Amazon S3](https://docs.aws.amazon.com/AmazonS3/latest/API/Welcome.html)

### Users

Cognito will serve as an authentication protocol to grant access to purchased content <tbd>
> [Cognito](https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-identity-pools.html)

## Deployment

Deployment of the application is driven through a CI/CD system to AWS Amplify. <tbd status>

## Contribution

Want to use this? Like the style? Want to work together? Contact below.

## Attributions

Author - [Nicholas Hazel](https://github.com/sinsys)