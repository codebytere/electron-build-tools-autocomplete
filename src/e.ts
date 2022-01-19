const completionSpec: Fig.Spec = {
  name: "e",
  description: "Electron build tool",
  subcommands: [
    {
      name: ["init", "new"],
      description: "Create a new build configuration",
      args: {
        name: "name",
      },
      options: [
        {
          name: ["--root", "-r"],
          description: "The root directory for the source checkout",
          args: {
            name: "path",
          },
        },
        {
          name: ["-i", "--import"],
          description:
            "Import build settings from $root/src/electron/build/args/$import.gn",
        },
        {
          name: ["--out", "-o"],
          description: "Built files will be placed in $root/src/out/$out",
          args: {
            name: "name",
          },
        },
        {
          name: ["-f", "--force"],
          description: "Overwrite existing build config",
        },
        {
          name: "--asan",
          description: "When building, enable clang's address sanitizer",
        },
        {
          name: "--tsan",
          description: "When building, enable clang's thread sanitizer",
        },
        {
          name: "--msan",
          description: "When building, enable clang's memory sanitizer",
        },
        {
          name: "--lsan",
          description: "When building, enable clang's leak sanitizer",
        },
        {
          name: "--bootstrap",
          description:
            "Run `e sync` and `e build` after creating the build config",
        },
        {
          name: "--goma",
          description:
            "Use Electron's custom deployment of Goma. The 'cluster' mode is only available to maintainers",
          args: {
            suggestions: ["cache-only", "cluster", "none"],
          },
        },
        {
          name: "--use-https",
          description:
            "During `e sync`, set remote origins with https://github... URLs instead of git@github",
        },
        {
          name: "--fork",
          description: "A fork repo for electron",
          args: {
            name: "username/electron",
          },
        },
      ],
    },
    {
      name: "sync",
      description: "Get or update source code",
      icon: "♾️",
      options: [
        {
          name: ["--3", "--three-way"],
          description: "Apply Electron patches using a three-way merge",
        },
      ],
    },
    {
      name: ["build", "make"],
      description: "Build Electron and other things",
      icon: "🛠️",
      args: [
        {
          name: "target",
          description: "The ninja build target",
          isOptional: true,
        },
        {
          name: "ninjaArguments",
          description: "Arguments to pass to ninja",
          isOptional: true,
        },
      ],
      options: [
        {
          name: "--list-targets",
          description: "Show all supported build targets",
        },
        {
          name: "--gen",
          description: "Force a re-run of `gn gen` before building",
        },
        {
          name: ["-t", "--target"],
          description: "Forces a specific ninja target",
          args: {
            name: "target",
          },
        },
        {
          name: "--no-goma",
          description: "Build without goma",
        },
      ],
    },
    {
      name: ["start", "run"],
      description: "Run the Electron executable",
      args: {
        name: "/path/to/app",
        isOptional: true,
      },
    },
    {
      name: "node",
      description: "Run the Electron build as if it were a Node.js executable",
      args: {
        name: "/path/to/app",
        isOptional: true,
      },
    },
    {
      name: "debug",
      description: "Run the Electron build with a debugger (gdb or lldb)",
    },
    {
      name: "use",
      description: "Use build config <name> when running other `e` commands",
      args: {
        name: "name",
        description: "The name of the build config to use",
      },
    },
    {
      name: ["remove", "rm"],
      description: "Remove build config <name> from list",
      args: {
        name: "name",
        description: "The name of the build config to remove",
      },
    },
    {
      name: "show",
      description: "Show info about the current build config",
      subcommands: [
        {
          name: "current",
          description: "Name of the current build config",
          options: [
            {
              name: ["--filepath", "-f"],
              description: "Config filepath",
            },
            {
              name: ["--git", "-g"],
              description: "Human-readable git status (tag, branch, commit)",
            },
          ],
        },
        {
          name: ["configs", "ls"],
          description: "Installed build config",
        },
        {
          name: "depotdir",
          description: "Path of the depot-tools directory",
        },
        {
          name: "env",
          description: "Environment variables set when building Electron",
          options: [
            {
              name: "--json",
              description: "Output as JSON",
            },
          ],
        },
        {
          name: ["exec", "exe"],
          description: "Electron executable's path",
        },
        {
          name: "root",
          description:
            "Show path of the top directory - home of the .gclient file",
        },
        {
          name: "src",
          description:
            'Path of the named (default:electron) src directory e.g. "/$root/src/electron"',
          args: {
            name: "name",
            description: "The name of the src directory",
          },
        },
        {
          name: "out",
          description: 'Show outdir name, e.g. "Testing"',
          options: [
            {
              name: "--path",
              description: 'Outdir path, e.g. "/$root/src/out/Testing"',
            },
          ],
        },
        {
          name: "stats",
          description: "Show build statistics",
        },
        {
          name: "goma",
          description: "Watch Goma at work at http://localhost:8088",
        },
        {
          name: "gomadir",
          description: "Show path of the goma directory",
        },
        {
          name: "gomagn",
          description: "Show path of the goma.gn file",
        },
      ],
    },
    {
      name: "test",
      description: "Run Electron's spec runner",
      options: [
        {
          name: "--node",
          description: "Run node spec runner",
        },
        {
          name: "--nan",
          description: "Run nan spec runner",
        },
        {
          name: "--runners",
          requiresEquals: true,
          args: {
            name: "runner",
            description: "The subset of spec suite to run",
            suggestions: ["main", "remote", "native"],
          },
        },
      ],
    },
    {
      name: "pr",
      description: "Open a GitHub URL where you can PR your changes",
      options: [
        {
          name: ["--source", "-s"],
          description: "Where the changes are coming from",
          args: {
            name: "source_branch",
          },
        },
        {
          name: ["--target", "-t"],
          description: "Where the changes are going to",
          args: {
            name: "target_branch",
          },
        },
        {
          name: ["--backport", "-b"],
          description: "Pull request being backported",
          args: {
            name: "pull_request",
            description: "The pull request number - e.g. 12345",
          },
        },
      ],
    },
    {
      name: "patches",
      description:
        "Refresh the patches in $root/src/electron/patches/$basename",
      args: {
        name: "target",
        description:
          "The patch directory target - either 'all' or a directory listed in e show --list-targets",
      },
    },
    {
      name: "open",
      description:
        "Open a GitHub URL for the given commit hash / pull # / issue #",
      args: [
        {
          name: "sha1",
          description: "A git commit sha",
        },
        {
          name: "issue_number",
          description: "A GitHub issue number - e.g. 12345",
        },
        {
          name: "pr_number",
          description: "A GitHub PR number - e.g. 12345",
        },
      ],
    },
    {
      name: "load-xcode",
      description:
        "Loads required versions of Xcode and the macOS SDK and symlinks them",
    },
    {
      name: ["auto-update", "check-for-updates"],
      description:
        "Check for build-tools updates or enable/disable automatic updates",
    },
    {
      name: ["cherry-pick", "auto-cherry-pick"],
      description:
        "Opens a PR to electron/electron that backport the given CL into our patches folder",
      args: [
        {
          name: "patch_url",
          description: "The url for the patch to apply",
        },
        {
          name: "target_branch",
          description: "The branch to apply the patch to",
        },
        {
          name: "additional_branches",
          description:
            "Additional branches to apply the patch to in comma-separated format",
          isOptional: true,
        },
      ],
      options: [
        {
          name: "--security",
          description: "Whether this backport is for security reasons",
        },
      ],
    },
    {
      name: "update-goma",
      description: "Ensure a fresh copy of Goma is installed",
    },
    {
      name: "sanitize-config",
      description:
        "Update and overwrite an existing config to conform to latest build-tools updates",
      args: {
        name: "name",
        description: "The configuration name",
      },
    },
    {
      name: "npm",
      description:
        "Run a command that eventually spawns the electron NPM package but override the Electron binary that is used to be your local from-source electron",
    },
    {
      name: ["depot-tools", "d"],
      description:
        "Run a command from the depot-tools directory with the correct configuration",
    },
  ],
};

export default completionSpec;
