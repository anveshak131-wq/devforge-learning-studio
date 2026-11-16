import { GuidedProject } from '../../types';

export const R_EDA_HEALTHCARE_PROJECT: GuidedProject = {
  id: 'project-r-eda-healthcare',
  title: 'Exploratory Data Analysis & Healthcare Disparities',
  slug: 'r-eda-healthcare-disparities',
  language: 'r',
  difficulty: 'Beginner',
  tier: 2,
  priceInr: 99,
  estimatedHours: 2,
  xpReward: 50,
  tagline: 'Wrangle messy public health datasets using dplyr pipelines, impute missing values, and calculate demographic metrics.',
  description: 'Master the core tidyverse data science stack in R. You will ingest tabular public health records, clean missing values, build multi-stage dplyr pipelines (filter, mutate, group_by, summarise), and compute statistical summaries analyzing healthcare costs across socioeconomic brackets.',
  previewType: 'console',
  whatYouWillBuild: [
    'A tidyverse data cleaning pipeline with dplyr pipes (%>%)',
    'Conditional value mutation and categorical binning',
    'Summary statistics tables (mean, median, IQR, standard deviation)',
    'Outlier detection identifying extreme spending anomalies'
  ],
  skillsLearned: [
    'Tidyverse syntax and pipe operators (%>%)',
    'Data transformation (mutate, filter, select, summarise)',
    'Summary statistics and statistical aggregation',
    'Missing data imputation strategies'
  ],
  milestones: [
    {
      id: 'r-eda-m1',
      stepNumber: 1,
      title: 'Milestone 1: Tidyverse Data Pipeline & Summary Statistics',
      instructionMarkdown: `
### Milestone 1: dplyr Data Cleaning Pipeline
Write an R script:
- Loads library \`dplyr\`.
- Takes a patient data frame with columns: \`age\`, \`region\`, \`charges\`, \`smoker\`.
- Creates a pipeline that:
  - Filters out records where \`charges <= 0\`.
  - Mutates a new column \`age_group = ifelse(age >= 50, "Senior", "Adult")\`.
  - Groups by \`region\` and \`smoker\`.
  - Summarises: \`avg_charge = mean(charges)\`, \`median_charge = median(charges)\`, \`patient_count = n()\`.
      `,
      starterCode: `library(dplyr)

# Sample data frame
patients <- data.frame(
  age = c(25, 54, 32, 61, 45, 29),
  region = c("north", "south", "north", "east", "south", "east"),
  charges = c(1200, 8500, 2400, 11200, 4300, -50),
  smoker = c("no", "yes", "no", "yes", "no", "no")
)

# Build pipeline here
summary_df <- patients %>%
  # Filter, mutate, group_by, summarise
  identity()

print(summary_df)
`,
      solutionCode: `library(dplyr)

patients <- data.frame(
  age = c(25, 54, 32, 61, 45, 29),
  region = c("north", "south", "north", "east", "south", "east"),
  charges = c(1200, 8500, 2400, 11200, 4300, -50),
  smoker = c("no", "yes", "no", "yes", "no", "no")
)

summary_df <- patients %>%
  filter(charges > 0) %>%
  mutate(age_group = ifelse(age >= 50, "Senior", "Adult")) %>%
  group_by(region, smoker) %>%
  summarise(
    avg_charge = mean(charges),
    median_charge = median(charges),
    patient_count = n(),
    .groups = "drop"
  )

print(summary_df)
`,
      hints: [
        'Use filter(charges > 0) to eliminate negative values.',
        'Use group_by(region, smoker) followed by summarise(avg_charge = mean(charges)).'
      ],
      testCases: [
        {
          id: 'r-eda-tc1',
          description: 'Script uses dplyr pipe, filter, mutate, group_by, and summarise',
          testFn: `(() => {
            return code.includes('filter') && code.includes('mutate') && code.includes('group_by') && code.includes('summarise');
          })()`,
          expectedMessage: 'Must use dplyr pipeline with filter, mutate, group_by, and summarise'
        }
      ]
    }
  ]
};

export const R_REGRESSION_DIAGNOSTICS_PROJECT: GuidedProject = {
  id: 'project-r-regression-diagnostics',
  title: 'Multiple Regression & Residual Diagnostics Model',
  slug: 'r-regression-diagnostics',
  language: 'r',
  difficulty: 'Intermediate',
  tier: 3,
  priceInr: 149,
  estimatedHours: 3,
  xpReward: 75,
  tagline: 'Fit multiple linear regression models with interaction terms and validate statistical assumptions.',
  description: 'Go beyond black-box machine learning by mastering statistical inference in R. You will fit multiple linear regression models using lm(), interpret coefficient estimates, p-values, and R-squared, and perform rigorous residual diagnostics evaluating normality and homoscedasticity.',
  previewType: 'console',
  whatYouWillBuild: [
    'A Multiple Linear Regression model fitting predictors and interaction terms',
    'Summary coefficient extractor parsing t-statistics, p-values, and R²',
    'Residual calculation assessing model error distributions',
    'Variance Inflation Factor (VIF) collinearity evaluator'
  ],
  skillsLearned: [
    'Linear modeling with R\'s lm() function',
    'Statistical hypothesis testing and p-value interpretation',
    'R-squared and Adjusted R-squared metrics',
    'Residual diagnostics and model validation'
  ],
  milestones: [
    {
      id: 'r-reg-m1',
      stepNumber: 1,
      title: 'Milestone 1: Linear Model Fitting & Statistical Extraction',
      instructionMarkdown: `
### Milestone 1: Regression Model Fitting
Write an R script:
- Fits a multiple regression model predicting \`price\` from \`sqft\`, \`bedrooms\`, and their interaction \`sqft:bedrooms\` using \`lm(price ~ sqft * bedrooms, data = housing)\`.
- Extracts:
  - Model summary via \`summary(model)\`.
  - R-squared value via \`summary(model)$r.squared\`.
  - Residual standard error via \`summary(model)$sigma\`.
- Prints formatted summary metrics.
      `,
      starterCode: `# Housing sample dataset
housing <- data.frame(
  sqft = c(1200, 1500, 1800, 2200, 2600, 3100),
  bedrooms = c(2, 3, 3, 4, 4, 5),
  price = c(220000, 280000, 315000, 410000, 480000, 590000)
)

# Fit model and extract r.squared
model <- lm(price ~ sqft * bedrooms, data = housing)
# Extract and print summary metrics
`,
      solutionCode: `# Housing sample dataset
housing <- data.frame(
  sqft = c(1200, 1500, 1800, 2200, 2600, 3100),
  bedrooms = c(2, 3, 3, 4, 4, 5),
  price = c(220000, 280000, 315000, 410000, 480000, 590000)
)

model <- lm(price ~ sqft * bedrooms, data = housing)
mod_summary <- summary(model)
r_sq <- mod_summary$r.squared
rse <- mod_summary$sigma

cat("R-Squared:", round(r_sq, 4), "\\n")
cat("Residual Std Error:", round(rse, 2), "\\n")
`,
      hints: [
        'Use lm(price ~ sqft * bedrooms, data = housing) to include interaction terms.',
        'Access r.squared from summary(model)$r.squared.'
      ],
      testCases: [
        {
          id: 'r-reg-tc1',
          description: 'Script fits model using lm() and extracts r.squared from summary',
          testFn: `(() => {
            return code.includes('lm(') && code.includes('r.squared') && code.includes('summary(');
          })()`,
          expectedMessage: 'Must fit model with lm() and access summary()$r.squared'
        }
      ]
    }
  ]
};

export const R_TIMESERIES_FORECAST_PROJECT: GuidedProject = {
  id: 'project-r-timeseries-forecast',
  title: 'Time-Series Demand Forecasting & Seasonal Decomposition',
  slug: 'r-timeseries-forecasting',
  language: 'r',
  difficulty: 'Advanced',
  tier: 4,
  priceInr: 249,
  estimatedHours: 4,
  xpReward: 100,
  tagline: 'Decompose temporal signals into trend, seasonal, and random components with autoregressive forecasting.',
  description: 'Learn temporal data science. You will transform sequential records into R time-series objects (ts), decompose fluctuations into underlying long-term trends and repeating seasonality using stl(), evaluate autocorrelations (ACF/PACF), and generate predictive forecasts with 95% confidence intervals.',
  previewType: 'console',
  whatYouWillBuild: [
    'Time series object creation with frequency and start parameters',
    'Seasonal and Trend decomposition using Loess (stl/decompose)',
    'Autocorrelation function (ACF) and partial autocorrelation (PACF) evaluation',
    'Forecast projection generating point estimates and 80%/95% confidence bounds'
  ],
  skillsLearned: [
    'R time-series data structures (ts)',
    'Seasonal decomposition algorithms (STL)',
    'Stationarity and autocorrelation analysis',
    'Probabilistic forecasting confidence intervals'
  ],
  milestones: [
    {
      id: 'r-ts-m1',
      stepNumber: 1,
      title: 'Milestone 1: Time Series Creation & Seasonal Decomposition',
      instructionMarkdown: `
### Milestone 1: Seasonal Decomposition
Write an R script:
- Converts a monthly revenue vector into a \`ts\` object with \`frequency = 12\` and \`start = c(2023, 1)\`.
- Decomposes the series using \`decompose()\` or \`stl(..., s.window = "periodic")\`.
- Extracts and outputs:
  - Seasonal component: \`decomp$seasonal\`.
  - Trend component: \`decomp$trend\`.
      `,
      starterCode: `# Monthly sales data over 2 years (24 months)
monthly_sales <- c(
  120, 115, 135, 150, 170, 210, 230, 220, 190, 160, 140, 250,
  130, 125, 145, 165, 185, 225, 245, 235, 205, 175, 155, 270
)

# Convert to ts and perform decomposition
sales_ts <- ts(monthly_sales, start = c(2023, 1), frequency = 12)
decomp <- decompose(sales_ts)
# Print seasonal and trend
`,
      solutionCode: `monthly_sales <- c(
  120, 115, 135, 150, 170, 210, 230, 220, 190, 160, 140, 250,
  130, 125, 145, 165, 185, 225, 245, 235, 205, 175, 155, 270
)

sales_ts <- ts(monthly_sales, start = c(2023, 1), frequency = 12)
decomp <- decompose(sales_ts)

cat("Seasonal component (first 6 months):\\n")
print(head(decomp$seasonal, 6))
cat("Trend component (first 6 valid points):\\n")
print(head(na.omit(decomp$trend), 6))
`,
      hints: [
        'Use ts(monthly_sales, start = c(2023, 1), frequency = 12).',
        'Use decompose(sales_ts) or stl(sales_ts, s.window = "periodic").'
      ],
      testCases: [
        {
          id: 'r-ts-tc1',
          description: 'Script creates ts object and executes decompose',
          testFn: `(() => {
            return code.includes('ts(') && code.includes('decompose') || code.includes('stl');
          })()`,
          expectedMessage: 'Must create ts object and decompose seasonality and trend'
        }
      ]
    }
  ]
};
