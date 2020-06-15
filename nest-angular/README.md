# nest-angular

In this layout the apps are leading, and the libs follow that structure.

It's a great fit for projects that have 2 or 3 apps with different stacks and don't expect to add much more.

The downsides show when you want to add a second app that needs to share code from one of the others.

The API consists of a few 'base' libraries (`core`, `data`, `auth`) and is extended by adding 'feature' libs.

The Admin consists of a few 'base' libraries (`data`, `ui`) and is extended by adding 'feature' libs.

### Recipe

Nest API

```shell script
yarn add -D @nrwl/nest
# This is the NestJS APi that includes the libs
nx g @nrwl/nest:app api
# Core library for any shared things and initializations
nx g @nrwl/nest:lib core --directory api
# All data access is handled by this library
nx g @nrwl/nest:lib data --directory api
# Authentication service, models, strategy
nx g @nrwl/nest:lib auth --directory api
# A feature called 'project'
nx g @nrwl/nest:lib project --directory api
```

Angular Admin

```shell script
yarn add -D @nrwl/angular
# This is the main Angular app that lazy-loads the libs
nx g @nrwl/angular:app admin --style scss --routing
# All data access is handled by this library
nx g @nrwl/angular:lib data --directory admin
# All UI components are handled by this library
nx g @nrwl/angular:lib ui --directory admin
# A feature called 'project'
nx g @nrwl/angular:lib project --directory admin
```
