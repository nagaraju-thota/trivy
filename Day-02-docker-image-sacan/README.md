# Day 2 – Docker Image Scanning

## 🎯 Goal

Learn how to identify vulnerabilities inside Docker images using Trivy and understand how image scanning can be used as a security gate in CI/CD.

## 📚 Topics

* Docker container images
* Container image layers
* Operating system packages
* Application dependencies
* CVEs inside images
* HIGH vs CRITICAL vulnerabilities
* Trivy image scanning
* Exit codes
* CI/CD security gates

## 🛠️ Hands-on

### Build Docker Image

```bash
docker build -t myapp:1.0 .
```

### Scan Docker Image

```bash
trivy image myapp:1.0
```

### Scan HIGH and CRITICAL

```bash
trivy image --severity HIGH,CRITICAL myapp:1.0
```

### Fail the Scan

```bash
trivy image \
  --severity HIGH,CRITICAL \
  --exit-code 1 \
  myapp:1.0
```

### Inspect Image Layers

```bash
docker history myapp:1.0
```

### CI/CD Integration

Integrated the Trivy Docker image scan into a GitHub Actions pipeline.

The pipeline performs:

```text
Checkout Code
     ↓
Build Docker Image
     ↓
Install Trivy
     ↓
Scan Docker Image
     ↓
Check HIGH/CRITICAL
     ↓
Pass / Fail Pipeline
```

## 🧠 What I Learned

* Learned how Docker images are structured.
* Understood Docker image layers.
* Learned that OS packages can contain vulnerabilities.
* Learned that application dependencies can contain vulnerabilities.
* Understood CVEs reported by Trivy.
* Understood HIGH and CRITICAL severity levels.
* Learned how to scan Docker images using Trivy.
* Learned how to filter vulnerabilities using `--severity`.
* Understood how `--exit-code 1` can be used to fail a pipeline.
* Learned how Trivy can act as a security gate in CI/CD.

## ✅ Outcome

I can now build a Docker image, scan it using Trivy, identify HIGH and CRITICAL vulnerabilities, and configure the scan to fail a CI/CD pipeline when blocking vulnerabilities are detected.
