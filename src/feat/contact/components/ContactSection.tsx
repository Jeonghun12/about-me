import { profile } from '../../../data/profile';
import styles from './ContactSection.module.css';

export function ContactSection() {
  const contacts = [{ label: 'Email', href: profile.email ? `mailto:${profile.email}` : undefined }, { label: 'GitHub', href: profile.github }];
  return <section id="contact" aria-labelledby="contact-title" className={styles.section}><div className={`container ${styles.inner}`}>
    <h2 id="contact-title">함께 이야기해요<span>.</span></h2><div className={styles.links}>{contacts.map(contact => contact.href ? <a key={contact.label} className="text-link" href={contact.href}>{contact.label} <span aria-hidden="true">↗</span></a> : <span key={contact.label} className={styles.pending}>{contact.label}<span>준비 중</span></span>)}</div>
  </div></section>;
}
