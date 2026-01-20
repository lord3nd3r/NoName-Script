================================================================================
                           NoNameScript (NNS) 2026
                   Modernization & Compatibility Patch Report
================================================================================

DATE:       January 19, 2026
VERSION:    5.0 (2026 Remaster)
MAINTAINER: Ender
TARGET:     mIRC v7.x+ (2026 Edition)
STATUS:     STABLE / SAFE MODE

================================================================================
1. EXECUTIVE SUMMARY
================================================================================
This release represents a comprehensive overhaul of the legacy NoNameScript core
to ensure stability and functionality on modern mIRC versions (2026+). 

The primary focus of this update was "Safety First." Legacy DLLs (MDX, DCX, 
NNScript.dll) written for Windows XP/98 era systems have been neutralized via 
version-sensing wrappers. This prevents the "hard crashes" associated with 
loading 32-bit legacy plugins in the modern 64-bit/Unicode mIRC environment.

The Theme Engine has been completely rewritten from scratch to remove dependencies
on deprecated graphical commands (specifically `drawfill`) while preserving 
directory structure compatibility.

================================================================================
2. CRITICAL SYSTEMS OVERHAUL
================================================================================

[A] THEME ENGINE REWRITE (scripts/thmengine.nns)
--------------------------------------------------------------------------------
The original 1700+ line theme engine was retired. It relied heavily on complex
parser logic and the `drawfill` command, which has been removed from mIRC.

*   NEW ENGINE: A lightweight (~150 line) renderer.
*   MECHANISM: 
    - Parses `.nnt` theme files directly.
    - Maps legacy color definitions to standard mIRC palette via `writeini`.
    - Uses `drawrect` (filled rectangles) instead of `drawfill` for UI painting.
*   COMPATIBILITY: 
    - Full support for Scheme0 and Scheme1 theme formats.
    - Defines missing aliases (`thmecho`, `thmhl`, `thmls`) to prevent 
      "Unknown Command" errors during startup.
    - Renders preview windows (`@Loading`) without crashing.

[B] DLL SAFETY SYSTEM (The "Safe Mode")
--------------------------------------------------------------------------------
Modern mIRC environments are often incompatible with legacy binary DLLs. We have
implemented a "Version Guard" system in the low-level wrapper aliases.

AFFECTED MODULES:
1.  MDX (Multiversion Dialog Xtension) -> `scripts/aliases.nns`
    -   Action: Disabled for $version >= 7.0.
    -   Result: Dialogs will render with standard Windows controls instead of 
        skinned lists. Prevents `Sendmessage` crashes.

2.  DCX (Dialog Control Xtension) -> `scripts/nnscript.nns`
    -   Action: Disabled for $version >= 7.0.
    -   Result: Advanced docking bars and custom treebars are disabled. 
        The script falls back to standard mIRC window management.

3.  NNScript.dll -> `scripts/aliases.nns`
    -   Action: Disabled for $version >= 7.0.
    -   Result: Prevents system info calls (CPU/RAM) that may trigger 
        access violations on modern Windows kernels.

4.  DOMXML.dll -> `scripts/rss.nns`
    -   Action: Disabled for $version >= 7.0.
    -   Result: RSS parsing is disabled to prevent XML parser locks.

================================================================================
3. FILE MODIFICATION MANIFEST
================================================================================

1.  /scripts/thmengine.nns
    -   STATUS: REWRITTEN.
    -   CHANGES: Replaced entire file. Implemented new `thmload` logic.

2.  /scripts/aliases.nns
    -   STATUS: PATCHED.
    -   CHANGES: 
        -   Added `mdx` version guard.
        -   Added `nndll` version guard.
        -   Added `thmecho`, `thmls`, `thmhl` aliases.

3.  /scripts/nnscript.nns
    -   STATUS: PATCHED.
    -   CHANGES: Added `dcx` version guard.

4.  /scripts/startup.nns
    -   STATUS: PATCHED.
    -   CHANGES: Modified treebar loading routine to verify DLL safety before execution.

5.  /scripts/rss.nns
    -   STATUS: PATCHED.
    -   CHANGES: Added `dom` version guard for XML parsing.

================================================================================
4. KNOWN LIMITATIONS & LEGACY DEPRECATION
================================================================================
Due to the disabling of legacy DLLs, the following visual features are inactive
in this version:

*   Skinned Dialogs: Settings windows will look like standard Windows dialogs
    rather than having colorful backgrounds or custom icons inside headers.
*   Docked Bars: The "Switchbar" and "Treebar" replacements provided by DCX
    will not load. mIRC's native Treebar/Switchbar should be used instead.
*   System Stats: /sysinfo commands relying on memory reading/CPU reading 
    may return null or skipped data.

================================================================================
5. INSTALLATION & VERIFICATION
================================================================================
1.  Ensure all files in this directory are active.
2.  Start mIRC.
3.  The script should load without "Insufficient Parameters" or "Unknown Command" errors.
4.  Verification Command:
    Type: `//echo -a $version`
    If output is > 7.0, Safe Mode is active.

================================================================================
END OF REPORT
================================================================================
