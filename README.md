# React skeleton 

this is a minimal boilerplate for a new project , with the ability to be deployed to heroku (also from gitlab)



This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).](https://marmelab.com/admin-on-rest/index.html) , but is ejected.



Use `yarn start` to run locally

Use `yarn add` instead of `npm save`



## Heroku 

In principle , i just build the react app in heroku, ( no server running) and serve the application statically bu nginx

### Buildpacks  : 

- heroku/nodejs
- https://github.com/mgmco/heroku-buildpack-nginx.git ( add it in heroku should be last)
  - [Heroku Buildpack Nginx - Documentation](https://elements.heroku.com/buildpacks/mgmco/heroku-buildpack-nginx) use configuration from here 



```shell
heroku buildpacks:set heroku/nodejs
heroku buildpacks:add https://github.com/mgmco/heroku-buildpack-nginx.git
heroku config:set ROOT_DIRECTORY=build
heroku config:set FORCE_HTTPS=true
heroku config:set REDIRECT_NOT_FOUND_TO=/index.html
```

