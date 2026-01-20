# NoNameScript (NNS) - 2026 Remaster

![mIRC](https://img.shields.io/badge/Platform-mIRC_7.x+-red.svg)
![Status](https://img.shields.io/badge/Status-Stable-success.svg)
![License](https://img.shields.io/badge/License-Legacy-blue.svg)

A legendary mIRC script from the golden era of IRC, fully remastered and patched to run stably on modern mIRC versions (2026 / mIRC v7.x+).

## 📋 Overview

NoNameScript (NNS) was one of the most feature-rich scripting suites for mIRC. However, modern updates to the mIRC client and Windows OS architectures rendered much of the original code unstable, specifically regarding binary DLL plugins and deprecated graphical commands.

This **2026 Remaster** audits the entire codebase, implementing safeguards and rewrites to breathe new life into the script while maintaining maximum compatibility.

## 🚀 Key Features & Updates

### 1. Modern Theme Engine
The original styling engine (1700+ lines) relied on the now-removed `drawfill` command. It has been replaced with a **brand new, lightweight engine** written from scratch that:
- Parses legacy `.nnt` theme files completely natively.
- Uses modern `drawrect` calls for rendering.
- Maps legacy color palettes to the modern mIRC environment.

### 2. "Safe Mode" Architecture
Modern mIRC is incompatible with Windows XP-era 32-bit DLLs. This release implements intelligent wrappers ensuring **zero crashes**:
- **MDX (Multiversion Dialog Xtension)**: Automatically disabled on modern clients. Dialogs degrade gracefully to standard Windows controls.
- **DCX (Dialog Control Xtension)**: Usage patched to prevent docking bar crashes.
- **NNScript.dll**: System calls hooking into memory/CPU are bypassed to prevent Access Violations on modern kernels.

### 3. Stability Fixes
- **Startup Protection**: Fixed "Not connected" loops during initial load.
- **Deprecated Syntax**: Removed obsolete usages of `drawfill` and invalid `$dll()` calls.
- **Treebar Logic**: Patched to prevent loading failures when DLLs are missing or incompatible.

### 4. Linux/Wine Enhanced Support
Running mIRC on Linux via Wine often breaks Windows Management Instrumentation (WMI) calls.
- **WMI Crash Protection**: The system information module (`sysinfo.nns`) has been completely rewritten to check for WMI availability before execution. It now fails gracefully instead of crashing the script.
- **Modernized /sysinfo**: The `/sysinfo` command now behaves like modern IRC clients (HexChat), posting information directly to the active window with smart anti-flood delays.
- **Legacy Dialog**: The original system information dialog is still preserved and accessible via `/sysconfig`.

## 🛠️ Installation

1.  **Prerequisite**: A clean install of [mIRC](https://www.mirc.com/).
2.  **Clone/Download**: Extract this repository into your mIRC root directory (e.g., `C:\Program Files (x86)\mIRC\`).
3.  **Launch**: Run `mirc.exe`.
4.  **Auto-Detect**: The script will detect your mIRC version on startup.
    -   *If mIRC < 7.0*: Legacy mode attempts to load DLLs (Use at own risk).
    -   *If mIRC >= 7.0*: **Safe Mode** engages automatically.

## ⚠️ Compatibility Notes

To guarantee stability, the following compromises were made for the 2026 edition:
| Feature | Status | Reason |
| :--- | :--- | :--- |
| **Chat Essentials** | ✅ **Active** | Core scripting logic is pure MSL and works perfectly. |
| **Theme Colors** | ✅ **Active** | Rewritten engine handles colors/fonts. |
| **System Info** | ✅ **Patched** | Rewritten for Wine compatibility; MDX removed. |
| **Skinned Dialogs** | ❌ **Disabled** | MDX.dll is incompatible with Unicode mIRC. |
| **Docked Bars** | ❌ **Disabled** | DCX.dll causes immediate crashes on load. |
| **RSS Parsing** | ❌ **Disabled** | DOMXML.dll is unstable. |

## 📜 Credits

-   **Original Authors**: greeny & mute
-   **2026 Project Lead & Remaster**: Ender
    -   *Led the modernization initiative, detailed system auditing, and theme engine redesign.*
-   **Assistance**: GitHub Copilot

---

*This project is a preservation effort to keep classic IRC history alive on modern machines.*
