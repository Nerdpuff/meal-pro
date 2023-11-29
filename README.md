# MealPro

## Structure

This app uses routing so is split by feature (aka page).

Shared components (pipes, services, etc) live at the root in [/shared](/src/app/shared/).

Pipes, services, etc that are specific to a route/page are embedded with their route/page.

## Learnings

Service - A singleton that allows for data to be shared between components.
Pipe - Allows you to 'transform' HTML values
