import docx
import sys

if hasattr(sys.stdout, 'reconfigure'):
    sys.stdout.reconfigure(encoding='utf-8')

doc = docx.Document(r"d:\Github\Lam_Trac_Nghiem\GDQP2_TN.docx")
for i, para in enumerate(doc.paragraphs):
    for run in para.runs:
        if run.bold:
            print(f"P{i} BOLD: {run.text}")
        if run.underline:
            print(f"P{i} UNDERLINE: {run.text}")
