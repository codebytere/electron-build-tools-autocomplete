const completionSpec: Fig.Spec = {
  name: "e",
  description: "Electron build tool",
  subcommands: [{
    name: ["init", "new"],
    description: "Create a new build configuration",
    args: [{
      name: "name",
    }],
    options: [{
      name: ["--root", "-r"],
      description: "The root directory for the source checkout",
      args: [{
        name: "path"
      }]
    }, {
      name: ["-i", "--import"],
      description: "Import build settings from $root/src/electron/build/args/$import.gn"
    }, {
      name: ["--out", "-o"],
      description: "Built files will be placed in $root/src/out/$out",
      args: [{
        name: "name"
      }]
    }, {
      name: ["-f", "--force"],
      description: "Overwrite existing build config"
    }, {
      name: "--asan",
      description: "When building, enable clang's address sanitizer",
    }, {
      name: "--tsan",
      description: "When building, enable clang's thread sanitizer",
    }, {
      name: "--msan",
      description: "When building, enable clang's memory sanitizer",
    }, {
      name: "--lsan",
      description: "When building, enable clang's leak sanitizer",
    }, {
      name: "--bootstrap",
      description: "Run `e sync` and `e build` after creating the build config."
    }, {
      name: "--goma",
      description: "Use Electron's custom deployment of Goma. The 'cluster' mode is only available to maintainers",
      args: [{
        suggestions: ["cache-only", "cluster", "none"]
      }]
    }, {
      name: "--use-https",
      description: "During `e sync`, set remote origins with https://github... URLs instead of git@github...",
    }, {
      name: "--fork",
      description: "A fork repo for electron",
      args: [{
        name: "username/electron"
      }]
    }],
  }, {
    name: "sync",
    description: "Get or update source code",
    options: [{
      name: ["--3", "--three-way"],
      description: "Apply Electron patches using a three-way merge"
    }]
  }, {
    name: ["build", "make"],
    description: "Build Electron and other things",
    args: [{
      name: "target",
      description: "The ninja build target",
      isOptional: true
    }, {
      name: "ninjaArguments",
      description: "Arguments to pass to ninja",
      isOptional: true
    }],
    options: [{
      name: "--list-targets",
      description: "Show all supported build targets"
    }, {
      name: "--gen", 
      description: "Force a re-run of `gn gen` before building"
    }, {
      name: ["-t" ,"--target"],
      description: "Forces a specific ninja target",
      args: [{
        name: "target",
      }]
    }, {
      name: "--no-goma", 
      description: "Build without goma"
    }]
  }, {
    name: ["start", "run"],
    description: "Run the Electron executable",
    args: [{
      name: "/path/to/app",
      isOptional: true
    }]
  }, {
    name: "node",
    description: "Run the Electron build as if it were a Node.js executable",
    args: [{
      name: "/path/to/app",
      isOptional: true
    }]
  }, {
    name: "debug",
    description: "Run the Electron build with a debugger (gdb or lldb)",
  }, {
    name: "use",
    description: "Use build config <name> when running other `e` commands",
    args: [{
      name: "name",
      description: "The name of the build config to use"
    }]
  }, {
    name: ["remove", "rm"],
    description: "Remove build config <name> from list",
    args: [{
      name: "name",
      description: "The name of the build config to remove"
    }]
  }, {
    name: "show",
    description: "Show info about the current build config",
    args: [{
      name: "name",
      description: "The name of the build config to remove"
    }]
  }, {
    name: "test",
    description: "Run Electron's spec runner",
    options: [{
      name: "--node", 
      description: "Run node spec runner"
    }, {
      name: "--nan",
      description: "Run nan spec runner"
    }, {
      name: "--runners",
      requiresEquals: true,
      args: [{
        name: "runner",
        description: "The subset of spec suite to run",
        suggestions: ["main", "remote", "native"]
      }]
    }]
  }, {
    name: "pr",
    description: "Open a GitHub URL where you can PR your changes",
    options: [
      {
        name: ["--source", "-s"],
        description: "Where the changes are coming from",
        args: [{
          name: "source_branch"
        }]
      }, {
        name: ["--target", "-t"],
        description: "Where the changes are going to",
        args: [{
          name: "target_branch"
        }]
      }, {
        name: ["--backport", "-b"],
        description: "Pull request being backported",
        args: [{
          name: "pull_request",
          description: "The pull request number - e.g. 12345"
        }]
      }
    ]
  }],
};

export default completionSpec;