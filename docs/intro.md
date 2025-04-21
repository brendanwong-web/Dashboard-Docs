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

