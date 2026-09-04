# Trivy Day 3 – Dependency, Filesystem & Secret Scanning

## 🎯 Goal

Integrate Trivy with GitHub Actions to automate security scanning of project files, dependencies, secrets, and configuration files.

## 📚 What I Learned

* Dependency scanning
* Filesystem scanning
* Secret scanning
* Misconfiguration scanning
* SBOM basics
* Trivy integration with GitHub Actions

## 🛠️ Hands-on

### Filesystem Scanning

```bash
trivy fs .
```

### Dependency Scanning

```bash
trivy fs --scanners vuln .
```

### Secret Scanning

```bash
trivy fs --scanners secret .
```

### Misconfiguration Scanning

```bash
trivy fs --scanners misconfig .
```

### Multiple Scanner Types

```bash
trivy fs --scanners vuln,misconfig,secret .
```

## 🔄 GitHub Actions Integration

The workflow automatically runs on:

* Push to `main`
* Manual workflow execution

## 🔍 Scanners Used

| Scanner     | Purpose                                       |
| ----------- | --------------------------------------------- |
| `vuln`      | Detects known vulnerabilities in dependencies |
| `secret`    | Detects potential exposed secrets             |
| `misconfig` | Detects security misconfigurations            |

## 📦 SBOM Basics

SBOM stands for **Software Bill of Materials**.

It provides a list of software components and dependencies used in an application.

## 🔐 Vulnerable Practice

A deliberately vulnerable practice project was used to understand how Trivy detects:

* Vulnerable dependencies
* Potential exposed secrets
* Security misconfigurations

## ✅ Outcome

Integrated Trivy with GitHub Actions to automate dependency, secret, and misconfiguration scanning.
