#!/usr/bin/env bash
# Build public/resume.pdf from resume.tex in the resume repository, with the
# email address replaced by LinkedIn so the public PDF carries no address.
#
# Usage: scripts/build-resume-pdf.sh /path/to/resume-repo
# Needs xelatex (TeX Live) and pdftotext (poppler-utils).
set -euo pipefail

src="${1:?usage: $0 /path/to/resume-repo}"
out="$(cd "$(dirname "$0")/.." && pwd)/public/resume.pdf"
work="$(mktemp -d)"
trap 'rm -rf "$work"' EXIT

cp -r "$src/deedy-resume-openfont.cls" "$src/fonts" "$src/resume.tex" "$work/"

python3 - "$work/resume.tex" <<'PY'
import pathlib, sys

path = pathlib.Path(sys.argv[1])
text = path.read_text()
old = "sanketdasgupta@gmail.com  •  India  •  \\href{https://github.com/SanketDG}{github.com/SanketDG}  •  "
new = "India  •  \\href{https://github.com/SanketDG}{github.com/SanketDG}  •  \\href{https://www.linkedin.com/in/sanketdg}{linkedin.com/in/sanketdg}  •  "
if text.count(old) != 1:
    sys.exit("The contact line in resume.tex has changed; update this script.")
path.write_text(text.replace(old, new))
PY

(cd "$work" && xelatex -interaction=nonstopmode -halt-on-error resume.tex >/dev/null)

if pdftotext "$work/resume.pdf" - | grep -q "@"; then
  echo "An email address is still in the PDF; not publishing it." >&2
  exit 1
fi

cp "$work/resume.pdf" "$out"
echo "Wrote $out"
