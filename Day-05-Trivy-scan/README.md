Trivy + GitHub Actions Demo (Day 5)

Minimal project used to demonstrate integrating Trivy image scanning into a GitHub Actions CI/CD pipeline as a security gate.

Structure
.
├── .github/
│   └── workflows/
│       └── trivy-scan.yml   # CI pipeline: build -> test -> Trivy scan -> gate
├── Dockerfile                # Builds the app into a container image
├── .dockerignore
├── index.js                  # Minimal Node.js HTTP server
├── package.json
└── README.md
How the pipeline works
Code is pushed to main or a pull request is opened.
GitHub Actions checks out the repo, installs dependencies, and runs tests.
The Docker image is built and tagged with the commit SHA.
Trivy scans the built image for HIGH/CRITICAL vulnerabilities.
If Trivy finds any (that have a fix available), exit-code: '1' fails the job and blocks the pipeline from continuing to push/deploy.
If the scan passes, the (commented-out) push/deploy steps can run.