In software engineering teams, developers never push code directly to `main` or production. Instead, we use structured **branching strategies** and **Pull Requests (PRs)** to ensure code quality, peer reviews, and stable deployments.

This guide will teach you step-by-step how to set up team branches, create feature branches, write clean `feat(scope): description` commits, and open a professional Pull Request.

---

## 🌳 1. Branch Strategy: Which Branch to Use Where?

In a standard team environment, your repository has **3 primary permanent branches** plus **temporary workflow branches**:

```
 [ main ]       <-- Production Ready (Live Website for real users)
    ▲
    │ (Promoted after QA testing)
 [ test ]       <-- Staging / QA Testing (Internal test environment)
    ▲
    │ (Merged after sprint approval)
  [ dev ]       <-- Development Branch (Integration branch for developers)
    ▲
    ├─► fix/auth-logout          (Temporary work branch)
    └─► feat/env-api-config      (Temporary work branch)
```

### 📌 Branch Responsibilities Table

| Branch Name | Purpose | Who pushes to it? | Deploy Environment |
| :--- | :--- | :--- | :--- |
| **`main`** | **Production Code** (100% stable, live code) | Never directly! Merged from `test`/`staging` via release PR. | Production (`https://expensetracker.com`) |
| **`test`** (or `staging`) | **QA & Testing** (Used by QA testers to test integrated features) | Merged from `dev` when a release candidate is ready. | Staging (`https://test.expensetracker.com`) |
| **`dev`** (or `development`)| **Developer Hub** (All working features combine here) | Merged from `feat/*`, `fix/*`, `refactor/*` via approved PRs. | Dev Server (`https://dev.expensetracker.com`) |
| **`feat/*`** | **New Features** (e.g. `feat/expense-filters`) | You (the intern / developer building a feature) | Local machine (`http://localhost:5173`) |
| **`fix/*`** | **Bug Fixes** (e.g. `fix/auth-logout`) | Developers fixing specific bugs | Local machine (`http://localhost:5173`) |
| **`refactor/*`** | **Code Cleanup** (e.g. `refactor/pascalcase-components`) | Developers cleaning or restructuring code | Local machine (`http://localhost:5173`) |
| **`hotfix/*`** | **Urgent Production Fixes** (Created out of `main`) | Senior Devs fixing critical live crashes | Local / Staging |

---

## 🛠️ 2. Step 1: How to Create `dev` and `test` Branches out of `main`

*(Note: Usually, a Lead Developer does this setup once when creating the repository. Here is how it's done step-by-step!)*

### Step 1.1: Ensure your `main` branch is up to date
Open your terminal inside your project folder (`Expense-Tracker-FE`):

```bash
# 1. Switch to main branch
git checkout main

# 2. Pull the latest code from remote repository (GitHub)
git pull origin main
```

### Step 1.2: Create and push the `dev` branch
```bash
# 1. Create a new branch named 'dev' starting from 'main' and switch to it
git checkout -b dev

# 2. Push the new 'dev' branch to GitHub
git push -u origin dev
```
*(The `-u` flag links your local `dev` branch to `origin/dev` on GitHub so future `git push` commands are simple!)*

### Step 1.3: Create and push the `test` branch
```bash
# 1. Switch back to main
git checkout main

# 2. Create a new branch named 'test' starting from 'main'
git checkout -b test

# 3. Push 'test' branch to GitHub
git push -u origin test
```

🎉 **Result:** Your repository now has 3 active permanent branches on GitHub: `main`, `test`, and `dev`!

---

## 🌿 3. Step 2: How to Create a Feature or Fix Branch out of `dev`

Whenever you start a new task (e.g. fixing the logout bug or setting up `.env`), **ALWAYS start by creating a branch out of `dev`**.

### Branch Naming Standards:
- New features: `feat/scope-description` (e.g. `feat/auth-login`, `feat/expense-filters`)
- Bug fixes: `fix/scope-description` (e.g. `fix/auth-logout`, `fix/table-delete`)
- Refactoring: `refactor/scope-description` (e.g. `refactor/pascalcase-components`)

### Step-by-Step Commands:

```bash
# 1. Switch to dev branch
git checkout dev

# 2. Make sure your local dev branch has the latest team changes
git pull origin dev

# 3. Create your work branch off dev and switch to it
git checkout -b fix/auth-logout
```

💡 **Check your current branch anytime with:**
```bash
git branch
```
*(The branch with an asterisk `*` next to it is your active working branch!)*

---

## 💻 4. Step 3: Making Changes, Committing & Pushing

Now, open your code editor and write your changes in `src/components/Logout.jsx`!

### Step 4.1: Check your modified files
```bash
git status
```
Output:
```
On branch fix/auth-logout
Changes not staged for commit:
  modified:   src/components/Logout.jsx
```

### Step 4.2: Stage modified files
```bash
# Stage a specific file
git add src/components/Logout.jsx

# Or stage all modified files in project
git add .
```

### Step 4.3: Write Conventional Commit Messages (`type(scope): description`)
Always use standard `type(scope): description` formatting:
- `feat(scope): description` — for new features
- `fix(scope): description` — for bug fixes
- `refactor(scope): description` — for code restructuring without changing behavior
- `style(scope): description` — for CSS / styling tweaks
- `docs(scope): description` — for documentation updates

#### Examples:
```bash
# Bug fix commit
git commit -m "fix(auth): add missing useNavigate hook in Logout component"

# Feature commit
git commit -m "feat(api): setup VITE_API_URL environment variable"

# Refactor commit
git commit -m "refactor(components): rename dashboard to PascalCase Dashboard"
```

### Step 4.4: Push your branch to GitHub
```bash
git push -u origin fix/auth-logout
```

---

## 🚀 5. Step 4: How to Create a Pull Request (PR) into `dev`

Once your branch is pushed to GitHub, it's time to open a **Pull Request (PR)** so your team lead or senior developer can review your code!

### Step-by-Step GitHub PR Instructions:

1. Open your repository page on **GitHub** (`https://github.com/YourUsername/Expense-Tracker-FE`).
2. You will see a yellow banner at the top: **"fix/auth-logout had recent pushes"** with a green button: **`Compare & pull request`**. Click it!  
   *(If you don't see the banner, click on the **Pull requests** tab -> Click **New pull request**).*

3. **CRITICAL STEP - Select Branch Directions:**
   - **Base branch (target):** Select **`dev`** 👈 *(Do NOT target `main` directly!)*
   - **Compare branch (source):** Select **`fix/auth-logout`**

   ```
   base: dev  ◄─── compare: fix/auth-logout
   ```

4. **Fill out a Professional PR Title & Description Template:**

---

### 📝 Professional Pull Request (PR) Template

**PR Title:** `fix(auth): resolve Logout button ReferenceError crash`

```markdown
## 📌 Summary
Fixed runtime `ReferenceError` when clicking the Logout button in the sidebar.

## 🛠️ Changes Made
- `fix(auth)`: Imported `useNavigate` from `react-router-dom` in `src/components/Logout.jsx`.
- `fix(auth)`: Initialized `const navigate = useNavigate()` hook.
- `fix(auth)`: Added `e.preventDefault()` to prevent default form submission reloading page.
- `fix(auth)`: Redirected user to home page `/` upon successful API logout.

## 🧪 How to Test
1. Start the dev server (`npm run dev`).
2. Log in and navigate to `/dashboard`.
3. Click the **Logout** button in the sidebar.
4. Verified user is redirected back to `/` without console errors.

## 📷 Screenshots / Video (Optional)
*(Attach screenshot or GIF showing working logout)*
```

5. **Assign Reviewers & Submit:**
   - Under **Reviewers** on the right sidebar, tag your Senior Developer or Mentor.
   - Click **`Create pull request`**! 🎉

---

## 🔄 6. Handling Code Review Feedback & Updating PRs

What if your reviewer requests a change? *(e.g. "Please add error handling for API failures")*.

**You do NOT need to close the PR or open a new one!** Simply make the fix on your same local branch, commit using `fix(scope): description` or `refactor(scope): description`, and push:

```bash
# 1. Make sure you are on your work branch
git checkout fix/auth-logout

# 2. Edit code to address review comment...

# 3. Stage and commit using type(scope): description
git add .
git commit -m "refactor(auth): add try-catch block to logout request"

# 4. Push to GitHub
git push origin fix/auth-logout
```

GitHub will **automatically update your open PR** with the new commit! Once approved, the reviewer will click **`Merge Pull Request`** into `dev`.

---

## 🔄 7. Real-World Practical Scenario Example

Here is a complete real-world cheat sheet for a daily task:

```bash
# ==========================================
# MORNING: Start a new task off dev
# ==========================================
git checkout dev                  # Switch to dev
git pull origin dev               # Get latest team updates
git checkout -b feat/env-api      # Create feat/ branch

# (Write code in src/api/config.js and .env ...)

# ==========================================
# AFTERNOON: Stage, Commit & Push
# ==========================================
git status                        # Check modified files
git add .                         # Stage all files
git commit -m "feat(api): setup VITE_API_URL env variable helper"
git push -u origin feat/env-api

# Open GitHub -> Create PR from 'feat/env-api' INTO 'dev'

# ==========================================
# AFTER MERGE: Cleanup local machine
# ==========================================
git checkout dev                  # Switch back to dev
git pull origin dev               # Pull your newly merged PR
git branch -d feat/env-api        # Delete old local branch
```

---

## 🎯 Summary Checklist

- [ ] Permanent branches: `main` (Production), `test` (QA/Staging), `dev` (Development).
- [ ] Temporary branches: `feat/scope-name`, `fix/scope-name`, `refactor/scope-name`.
- [ ] Always pull latest `dev` before creating a new branch (`git checkout dev && git pull origin dev`).
- [ ] Write commits using `feat(scope): description`, `fix(scope): description`, `refactor(scope): description`.
- [ ] Create Pull Requests **targeting `dev`** (Base: `dev`).
- [ ] Delete feature branches locally and on GitHub after merging.

**Mastering this workflow makes your commits & PRs clean and industry-standard! Keep practicing!** 🌟
