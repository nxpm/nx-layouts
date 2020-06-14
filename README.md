# NX Layouts

Repo with some possible layouts for an [Nx Workspace](https://github.com/nrwl/nx).

The goal of this project is to show different layouts of a workspace, so the focus is on the structure of the apps/libs.

The projects here don't need to have any functionality implemented, but they should `build`, `test`, and `serve` without
errors or warnings.

Feel free to submit a PR to add your own layout, see 'Contributing' below. If you want to contribute a large PR or do
refactoring it's probably best to first open an issue to make sure your changes will be accepted.

## Layouts

### [nest-angular](nest-angular)

#### Nest API with Angular Admin

Layout that's suitable for mid-sized projects and is divided by feature.

## Contributing

To add a new layout follow the steps below:

```shell script
# We'll use yarn throughout this repo and the internal workspace should be called 'sandbox'.
$ yarn create nx-workspace sandbox --preset=empty --nx-cloud true --cli=nx
# Now we'll rename the folder we created to the name of your project.
$ mv sandbox <name-of-layout>
$ cd <name-of-layout>
# Now you can start layout out your project structure.
```

After this, you can install the Nx Plugins and start creating your layout:

```shell script
$ yarn add -D @nrwl/nest
$ nx generate @nrwl/nest:app <app-name>
$ nx generate @nrwl/nest:lib <lib-1-name>
$ nx generate @nrwl/nest:lib <lib-2-name>
$ nx generate @nrwl/nest:lib <lib-3-name>
```

Make sure to clear the README of your new layout and add the `Recipe` of how to get to this layout.

# MIT License
