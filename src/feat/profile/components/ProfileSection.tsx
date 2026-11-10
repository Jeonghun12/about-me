import { profile } from '../../../data/profile';
import styles from './ProfileSection.module.css';

function StrengthIcon({ index }: { index: number }) {
  return (
    
      <svg 
        viewBox="0 0 28 28" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="1.4" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        aria-hidden="true"
      >
    {index === 0 ? 
      <>
        <ellipse cx="14" cy="6" rx="9" ry="4"/>
        <path d="M5 6v15c0 5 18 5 18 0V6M5 13c0 5 18 5 18 0M5 19c0 5 18 5 18 0"/>
      </> 
      : index === 1 ? 
        <>
          <path d="m14 3 11 6-11 6L3 9l11-6ZM3 14l11 6 11-6M3 19l11 6 11-6"/>
        </>
      : 
      <>
        <path d="m8 7-6 7 6 7m12-14 6 7-6 7M16 3l-4 22"/>
      </>
    }
  </svg>
  
  );
}

export function ProfileSection({ showContacts = false }: { showContacts?: boolean }) {
  
  
  return (
  
  <section 
    id="profile" 
    aria-labelledby="profile-title" 
    className={`container ${styles.profile}`}
  >
    <div className={styles.portrait}>
      <img 
        src={profile.image} 
        alt={profile.imageAlt} 
        width="320" 
        height="320" 
      />
    </div>
    <div className={styles.copy}>
      <p className="eyebrow">Profile</p>
      <h1 id="profile-title">{profile.title}</h1>
      <p className={styles.description}>{profile.description}</p>
      <ul className={styles.strengths}>
        {profile.strengths.map((strength, index) => 
            <li key={strength}><StrengthIcon index={index}/>
              <span>{strength}</span>
            </li>
          )
        }
      </ul>
      {showContacts && 
        <div className={styles.contacts}>
          {profile.email ? 
            <a 
              className="text-link" 
              href={`mailto:${profile.email}`}>
                Email ↗
            </a> 
          : <span>Email <small>준비 중</small></span>            
          }
          {profile.github ? 
            <a 
              className="text-link" 
              href={profile.github}>
                  GitHub ↗
            </a> 
          : <span>GitHub <small>준비 중</small></span>
          }
        </div>
       }

       
    </div>
  </section>
  
);
}
