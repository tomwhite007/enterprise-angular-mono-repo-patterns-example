# enterprise-angular-mono-repo-patterns-example

This workspace is a composite copy of the examples in the book, Enterprise Angular Monorepo Patterns from Nrwl,
built as an exercise to demonstrate how the tooling works.

## Background

I've presented an [Angular Meetup](https://www.meetup.com/angular-sussex/events/269952520/) on the benefits of Enterprise Angular Monorepo Patterns, so it makes sense to link back to it for more info here.

[Slide Deck showing the benefits and a quick introduction to Enterprise Angular Monorepo Patterns](https://docs.google.com/presentation/d/1onEJciG3Yxb5PoOxl9ZyYCcdc-FykPEoDl4utx4k7WU/edit?usp=sharing)

[YouTube video of the original Angular meetup about the benefits of monorepos](https://youtu.be/PLGnU2em7GI?t=2330)

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
