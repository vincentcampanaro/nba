# NBA Data Analysis

## Introduction
This project involves extensive data analysis of NBA statistics, leveraging Python libraries and SQL for data manipulation and visualization. The analysis covers various aspects like player performance, trends, and efficiency, providing insights into the evolving dynamics of the NBA from 1996 to 2023.

## Import Libraries
The project utilizes several Python libraries:
- `pandas` for data manipulation.
- `langdetect` for language detection.
- `BeautifulSoup` from `bs4` for web scraping.
- `numpy`, `matplotlib`, and `seaborn` for data analysis and visualization.
- `sqlalchemy` for SQL database interaction.
- `requests` for HTTP requests.

```python
import pandas as pd
import langdetect
from bs4 import BeautifulSoup
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns
from sqlalchemy import create_engine
import requests
```

## Database Connection
We connect to a MySQL database using SQLAlchemy to retrieve NBA statistics.

```python
conn_string = "mysql+pymysql://[credentials]"
engine = create_engine(conn_string)
```

## Data Analysis Overview

### Data Retrieval
- SQL queries to fetch data from the database.

### Data Cleaning
- Dropping irrelevant columns and sorting.

### Exploratory Data Analysis
- Statistical descriptions and correlations.

### Insights
- Observations about rebounds, assists, and net ratings.

### Trend Analysis
- Player height, age, and performance trends over seasons.

## Specific Analyses

### Correlation Analysis
- Exploring relationships between different player stats.

### Trends in NBA Teams
- Analysis of player height, age, and scoring trends.

### Efficiency Analysis
- Evaluating player performance based on size and position.

## Visualization

Data visualizations using Matplotlib and Seaborn to illustrate trends and correlations.

## Advanced Analysis

### Player Performance by Age
- Grouping data by age for performance metrics.

### Efficiency Analysis on Player Size
- Comparing performance metrics across different player heights.

### Assist and Shooting Percentage Trends
- Analyzing trends over seasons.

## Front End Development
Developing a web interface using Flask and integrating it with the analysis.

## Conclusion
This project provides a comprehensive analysis of NBA data, uncovering insights and trends that are valuable for basketball enthusiasts and analysts.
