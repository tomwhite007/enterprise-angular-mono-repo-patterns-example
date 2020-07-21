# enterprise-angular-mono-repo-patterns-example

This workspace is a copy of the example in the book, Enterprise Angular Monorepo Patterns from Nrwl,
built as an exercise to demonstrate how the tooling works.

## Steps to create

```
npx create-nx-workspace@latest
```

...then selected 'Empty Workspace'

```
ng add @nrwl/angular
```

...add Angular core files to package.json

Then after that, I used the Nx Console to add apps and libs

## Visualizing the Dependency Graph

```
npm run dep-graph
```
