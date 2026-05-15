"use client";

import styles from "./page.module.css";

export default function ContactForm() {
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const lines = [
      `Name: ${form.get("name") || ""}`,
      `E-Mail: ${form.get("email") || ""}`,
      `Telefon: ${form.get("phone") || ""}`,
      "",
      "Nachricht:",
      String(form.get("message") || ""),
    ];
    const subject = encodeURIComponent("Anfrage über die Bäckerei-Meyer-Website");
    const body = encodeURIComponent(lines.join("\n"));
    window.location.href = `mailto:deine-app@proton.me?subject=${subject}&body=${body}`;
  }

  return (
    <form className={styles.contactForm} onSubmit={handleSubmit} noValidate>
      <div className={styles.formRow}>
        <label htmlFor="name" className={styles.formLabel}>
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          className={styles.formInput}
          required
          aria-required="true"
          autoComplete="name"
        />
      </div>
      <div className={styles.formRow}>
        <label htmlFor="email" className={styles.formLabel}>
          E-Mail
        </label>
        <input
          id="email"
          name="email"
          type="email"
          className={styles.formInput}
          required
          aria-required="true"
          autoComplete="email"
        />
      </div>
      <div className={styles.formRow}>
        <label htmlFor="phone" className={styles.formLabel}>
          Telefon
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          className={styles.formInput}
          autoComplete="tel"
        />
      </div>
      <div className={styles.formRow}>
        <label htmlFor="message" className={styles.formLabel}>
          Nachricht
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          className={styles.formTextarea}
          required
          aria-required="true"
        />
      </div>
      <button type="submit" className={styles.formSubmit}>
        Nachricht senden
      </button>
    </form>
  );
}
