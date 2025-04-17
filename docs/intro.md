---
sidebar_position: 1
---
# Set Up

# Project Lighthouse

This site will serve as standard documentation for the production and maintenence of any Project lighthouse assets (Dashboard, input files etc...)

# Tutorial Intro
Get data and transform data into this form:

| Assesment Criteria     | Value | Rating | 
| :------: | :------: | :------:|
| Budget Variance      | 95.4%      | Good |
| [ Description of Criteria ]  | [ Percentage/date/value ] | [ Good/Sastisfactory/Critical ]  |

Each page will have 3 associated data tables: **DevCoAssesmentAnaylsis**, **DevcoAssesmentInput** and **AddDataPoint**

Discover how each component works:
- [Traffic light indicators](./Indicators/indicators.md)



## Getting Started
Each sheet should have the following columns:
- Assesment Criteria
- Value
- Rating

In each sheet, create a new measure as follows:
```
Value rating = SELECTEDVALUE('DevCoAssessmentAnalysis(CE&O)'[Value])
```
This measure will help us display a metric based on the selected criteria.

Get started by **creating a new site**.

Or **try Docusaurus immediately** with **[docusaurus.new](https://docusaurus.new)**.

### What you'll need

- [Node.js](https://nodejs.org/en/download/) version 18.0 or above:
  - When installing Node.js, you are recommended to check all checkboxes related to dependencies.

## Generate a new site

Generate a new Docusaurus site using the **classic template**.

The classic template will automatically be added to your project after you run the command:

```bash
npm init docusaurus@latest my-website classic
```

You can type this command into Command Prompt, Powershell, Terminal, or any other integrated terminal of your code editor.

The command also installs all necessary dependencies you need to run Docusaurus.

## Start your site

Run the development server:

```bash
cd my-website
npm run start
```

The `cd` command changes the directory you're working with. In order to work with your newly created Docusaurus site, you'll need to navigate the terminal there.

The `npm run start` command builds your website locally and serves it through a development server, ready for you to view at http://localhost:3000/.

Open `docs/intro.md` (this page) and edit some lines: the site **reloads automatically** and displays your changes.
