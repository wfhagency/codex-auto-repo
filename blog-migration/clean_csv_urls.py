#!/usr/bin/env python3
"""
Script to clean WordPress export CSV files by replacing staging URLs with production URLs.
This handles Elementor data embedded in CSV fields.
"""

import csv
import json
import re
import sys
from pathlib import Path


def replace_urls_in_text(text, old_domain, new_domain):
    """Replace all occurrences of old domain with new domain in text."""
    if not text:
        return text

    # Handle non-string types
    if not isinstance(text, str):
        return text

    # Replace URLs with different protocols and formats
    result = text

    # Regular URLs
    result = result.replace(f'https://{old_domain}', f'https://{new_domain}')
    result = result.replace(f'http://{old_domain}', f'https://{new_domain}')
    result = result.replace(f'//{old_domain}', f'//{new_domain}')

    # JSON-escaped URLs (e.g., "url":"https:\/\/domain.com\/...")
    old_escaped = old_domain.replace('.', r'\.')
    new_escaped = new_domain.replace('.', r'\.')
    result = result.replace(old_escaped, new_escaped)

    # JSON-escaped URLs with forward slashes
    old_json_escaped = 'https:\\/\\/' + old_domain.replace('.', '\\.')
    new_json_escaped = 'https:\\/\\/' + new_domain.replace('.', '\\.')
    result = result.replace(old_json_escaped, new_json_escaped)

    # Also handle the domain itself in various formats
    result = result.replace(old_domain, new_domain)

    return result


def process_csv_file(input_file, output_file, old_domain, new_domain):
    """
    Process CSV file and replace all staging URLs with production URLs.

    Args:
        input_file: Path to input CSV file
        output_file: Path to output CSV file
        old_domain: Old domain to replace (e.g., 'netwiseglobal71867.e.wpstage.net')
        new_domain: New domain (e.g., 'netwiseglobal.com')
    """
    print(f"Processing: {input_file}")
    print(f"Replacing: {old_domain} → {new_domain}")

    # Read the CSV file
    with open(input_file, 'r', encoding='utf-8-sig') as f:
        # Detect delimiter (semicolon or comma)
        sample = f.read(1024)
        f.seek(0)
        delimiter = ';' if ';' in sample else ','

        reader = csv.DictReader(f, delimiter=delimiter)
        rows = list(reader)
        # Filter out None fieldnames (from trailing delimiters)
        fieldnames = [fn for fn in reader.fieldnames if fn is not None]

    # Process each row
    processed_rows = []
    url_count = 0

    for row in rows:
        processed_row = {}
        for key, value in row.items():
            # Skip None keys (from trailing delimiters)
            if key is None:
                continue

            if value:
                old_value = value
                # Replace URLs in all fields
                new_value = replace_urls_in_text(value, old_domain, new_domain)

                if old_value != new_value:
                    url_count += value.count(old_domain)

                processed_row[key] = new_value
            else:
                processed_row[key] = value

        processed_rows.append(processed_row)

    # Write the cleaned CSV
    with open(output_file, 'w', encoding='utf-8', newline='') as f:
        writer = csv.DictWriter(f, fieldnames=fieldnames, delimiter=delimiter)
        writer.writeheader()
        writer.writerows(processed_rows)

    print(f"✓ Processed {len(processed_rows)} posts")
    print(f"✓ Replaced {url_count} URL occurrences")
    print(f"✓ Saved to: {output_file}\n")

    return len(processed_rows), url_count


def main():
    # Configuration
    OLD_DOMAIN = 'netwiseglobal71867.e.wpstage.net'
    NEW_DOMAIN = 'netwiseglobal.com'

    # File paths
    script_dir = Path(__file__).parent
    root_dir = script_dir.parent

    files_to_process = [
        {
            'input': root_dir / 'Lewiatan-Produkcja.csv',
            'output': script_dir / 'Lewiatan-Produkcja-cleaned.csv'
        },
        {
            'input': root_dir / 'Lewiatan-Stage.csv',
            'output': script_dir / 'Lewiatan-Stage-cleaned.csv'
        }
    ]

    print("=" * 70)
    print("WordPress CSV URL Cleaner")
    print("=" * 70)
    print()

    total_posts = 0
    total_urls = 0

    for file_config in files_to_process:
        input_file = file_config['input']
        output_file = file_config['output']

        if not input_file.exists():
            print(f"⚠ Warning: {input_file} not found, skipping...")
            continue

        posts, urls = process_csv_file(input_file, output_file, OLD_DOMAIN, NEW_DOMAIN)
        total_posts += posts
        total_urls += urls

    print("=" * 70)
    print(f"Summary:")
    print(f"  Total posts processed: {total_posts}")
    print(f"  Total URLs replaced: {total_urls}")
    print("=" * 70)
    print()
    print("✓ Cleaning complete! Files are ready for import.")
    print(f"  Files saved in: {script_dir}")


if __name__ == '__main__':
    main()
