{
    inputs = {
        nixpkgs-24-11.url = "github:NixOS/nixpkgs/nixos-24.11";
        nixpkgs-unstable.url = "github:NixOS/nixpkgs/nixos-unstable";
        flake-utils.url = "github:numtide/flake-utils";
    };

    outputs = {
        self,
        nixpkgs-unstable,
        nixpkgs-24-11,
        flake-utils,
    }:
    flake-utils.lib.eachDefaultSystem
    (
        system: let
            pkgs-unstable = import nixpkgs-unstable {
                inherit system;
                config.allowUnfree = true;
            };

            pkgs-24-11 = import nixpkgs-24-11 {
                inherit system;
                config.allowUnfree = true;
            };

            pkgs-unstable-inputs = with pkgs-unstable; [
            ];

            pkgs-24-11-inputs = with pkgs-24-11; [
                nodejs_20
            ];

            inputs = pkgs-unstable-inputs ++ pkgs-24-11-inputs;

            shellHooks = ''
                echo ""
                echo -e "\033[0;32mNode\033[0m version \033[0;33m`node --version`\033[0m"
            '';
        in {
            devShells = {
                default = pkgs-24-11.mkShellNoCC {
                    name = "Cennets Birthday 2025";

                    buildInputs = inputs;
                    shellHook = shellHooks;
                };
            };
            formatter = pkgs-24-11.alejandra;
        }
    );
}
