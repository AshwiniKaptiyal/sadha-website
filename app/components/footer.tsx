import Image from "next/image";

export default function Footer() {
  return (
    <footer
      id="SITE_FOOTER"
      className="SITE_FOOTER"
      tabIndex={-1}
      style={{ textAlign: "center", padding: "40px 0" }}
    >
      {/* Social Icons */}
      <ul
        aria-label="Social Bar"
        style={{
          listStyle: "none",
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          padding: 0,
          marginBottom: "20px",
        }}
      >
        <li>
          <a
            href="https://www.facebook.com/ggphotocinema"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Facebook"
          >
      <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"  // Use black by default
      width="24"
      height="24"
    >
      <path d="M13.5 3h2.5V0h-3C11.57 0 10 1.57 10 3.5v2H7v3h3v9h3v-9h2.5l.5-3H13V3.5C13 3.22 13.22 3 13.5 3z"/>
    </svg>
          </a>
        </li>

        <li>
          <a
            href="https://www.twitter.com/ggphotocinema"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Twitter"
          >
      <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      width="24"
      height="24"
    >
      <path d="M23 3a10.9 10.9 0 01-3.14.86 4.48 4.48 0 001.94-2.48 9.07 9.07 0 01-2.88 1.1A4.52 4.52 0 0016.67 2c-2.5 0-4.52 2.02-4.52 4.52 0 .35.04.69.11 1.02-3.76-.19-7.1-1.99-9.33-4.73a4.48 4.48 0 00-.61 2.27c0 1.57.8 2.96 2.02 3.77a4.51 4.51 0 01-2.05-.57v.06c0 2.18 1.55 4 3.61 4.42a4.52 4.52 0 01-2.04.08c.58 1.81 2.28 3.13 4.29 3.17A9.07 9.07 0 010 19.54 12.79 12.79 0 006.92 21c8.3 0 12.85-6.87 12.85-12.83 0-.2 0-.39-.01-.58A9.18 9.18 0 0023 3z"/>
    </svg>
          </a>
        </li>

        <li>
          <a
            href="https://instagram.com/ggphotocinema"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Instagram"
          >
     <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      width="24"
      height="24"
    >
      <path d="M12 2.16c3.2 0 3.584.012 4.85.07 1.17.054 1.97.24 2.43.403a4.92 4.92 0 011.79 1.03c.51.51.88 1.11 1.03 1.79.163.46.35 1.26.403 2.43.058 1.266.07 1.65.07 4.85s-.012 3.584-.07 4.85c-.054 1.17-.24 1.97-.403 2.43a4.92 4.92 0 01-1.03 1.79 4.92 4.92 0 01-1.79 1.03c-.46.163-1.26.35-2.43.403-1.266.058-1.65.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.054-1.97-.24-2.43-.403a4.92 4.92 0 01-1.79-1.03 4.92 4.92 0 01-1.03-1.79c-.163-.46-.35-1.26-.403-2.43C2.172 15.584 2.16 15.2 2.16 12s.012-3.584.07-4.85c.054-1.17.24-1.97.403-2.43a4.92 4.92 0 011.03-1.79 4.92 4.92 0 011.79-1.03c.46-.163 1.26-.35 2.43-.403C8.416 2.172 8.8 2.16 12 2.16zm0-2.16C8.736 0 8.332.012 7.052.07c-1.28.058-2.16.24-2.91.513a6.92 6.92 0 00-2.52 1.49A6.92 6.92 0 00.13 4.592c-.273.75-.455 1.63-.513 2.91C-.012 8.332 0 8.736 0 12s.012 3.668.07 4.948c.058 1.28.24 2.16.513 2.91a6.92 6.92 0 001.49 2.52 6.92 6.92 0 002.52 1.49c.75.273 1.63.455 2.91.513C8.332 23.988 8.736 24 12 24s3.668-.012 4.948-.07c1.28-.058 2.16-.24 2.91-.513a6.92 6.92 0 002.52-1.49 6.92 6.92 0 001.49-2.52c.273-.75.455-1.63.513-2.91C23.988 15.668 24 15.264 24 12s-.012-3.668-.07-4.948c-.058-1.28-.24-2.16-.513-2.91a6.92 6.92 0 00-1.49-2.52 6.92 6.92 0 00-2.52-1.49c-.75-.273-1.63-.455-2.91-.513C15.668.012 15.264 0 12 0zM12 5.838a6.162 6.162 0 106.162 6.162A6.169 6.169 0 0012 5.838zm0 10.162a4 4 0 114-4 4 4 0 01-4 4zm6.406-11.845a1.44 1.44 0 11-1.44-1.44 1.44 1.44 0 011.44 1.44z"/>
    </svg>
          </a>
        </li>
      </ul>

      {/* Copyright */}
      <p style={{ fontSize: "16px", lineHeight: "1.5em" }}>
        © 2026 by Great Genius Photo &amp; Cinema
      </p>
    </footer>
  );
}
