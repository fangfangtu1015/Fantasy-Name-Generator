// Race Page Components - Reusable D&D 5e Character Generator for all race pages
// Include this script after character-generator.js on race-specific pages

const RacePageComponents = {
  // Toast notification (replaces alert)
  showToast(message, duration = 1500) {
    const toast = document.createElement('div');
    toast.textContent = message;
    toast.style.cssText = 'position:fixed;bottom:2rem;right:2rem;background:var(--accent);color:white;padding:0.75rem 1.25rem;border-radius:8px;font-size:0.9rem;z-index:9999;animation:fadeIn 0.2s;box-shadow:0 4px 12px rgba(0,0,0,0.2);';
    document.body.appendChild(toast);
    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transition = 'opacity 0.3s';
      setTimeout(() => toast.remove(), 300);
    }, duration);
  },

  // Render Character Card UI
  renderCharCard(char, portraitPrompt) {
    return `
      <div class="char-card">
        <div class="char-card-header">
          <h3>${char.name}</h3>
        </div>

        <div class="char-card-grid">
          <div class="char-stat">
            <div class="char-stat-label">Race</div>
            <div class="char-stat-value">${char.race}</div>
          </div>
          <div class="char-stat">
            <div class="char-stat-label">Class</div>
            <div class="char-stat-value">${char.class} (Lv.${char.level})</div>
          </div>
          <div class="char-stat">
            <div class="char-stat-label">Alignment</div>
            <div class="char-stat-value">${char.alignment}</div>
          </div>
          <div class="char-stat">
            <div class="char-stat-label">Background</div>
            <div class="char-stat-value">${char.background}</div>
          </div>
          <div class="char-stat">
            <div class="char-stat-label">Faction</div>
            <div class="char-stat-value">${char.faction}</div>
          </div>
          <div class="char-stat">
            <div class="char-stat-label">Hit Die / ASI</div>
            <div class="char-stat-value">${char.hitDie} / ${char.asi}</div>
          </div>
        </div>

        <div class="char-section">
          <h4>Racial Traits</h4>
          <div>${char.racialTraits.map(t => `<span class="trait-tag">${t}</span>`).join('')}</div>
        </div>

        <div class="char-section">
          <h4>Class Features</h4>
          <div>${char.classFeatures.map(f => `<span class="trait-tag">${f}</span>`).join('')}</div>
        </div>

        <div class="char-section">
          <h4>Personality</h4>
          <div class="personality-grid">
            <div class="personality-item">
              <strong>Trait</strong>
              <p>"${char.personality}"</p>
            </div>
            <div class="personality-item">
              <strong>Ideal</strong>
              <p>${char.ideal}</p>
            </div>
            <div class="personality-item">
              <strong>Bond</strong>
              <p>${char.bond}</p>
            </div>
            <div class="personality-item">
              <strong>Flaw</strong>
              <p>${char.flaw}</p>
            </div>
          </div>
        </div>

        <div class="char-section">
          <h4>Voice & Manner</h4>
          <p class="voice-text">${char.voice}</p>
        </div>

        <div class="char-section">
          <h4>Backstory Hook</h4>
          <p class="backstory-text">${char.backstory}</p>
        </div>

        <div class="char-section">
          <h4>Name Etymology</h4>
          <div class="etymology-box">
            <code>${char.name}</code> = ${char.etymology}
          </div>
        </div>

        <div class="char-section">
          <h4>Portrait Prompt (Midjourney / Stable Diffusion)</h4>
          <div class="portrait-prompt-box">
            <pre id="portrait-prompt-text">${portraitPrompt}</pre>
          </div>
        </div>

        <div class="char-actions">
          <button onclick="RacePageComponents.copyText(\`${char.name.replace(/`/g, '\\`')}\n${portraitPrompt.replace(/`/g, '\\`')}\`)">Copy Name + Prompt</button>
          <button onclick="RacePageComponents.copyText(exportAsText(${JSON.stringify(char).replace(/"/g, '&quot;')}))">Export Full Card (Text)</button>
          <button onclick="speakName('${char.name.replace(/'/g, "\\'")}')">Hear Name</button>
          <button onclick="RacePageComponents.copyText('${char.name.replace(/'/g, "\\'")}')">Copy Name</button>
        </div>
      </div>
    `;
  },

  // Copy text with toast
  copyText(text) {
    navigator.clipboard.writeText(text).then(() => {
      this.showToast('Copied to clipboard!');
    }).catch(() => {
      this.showToast('Failed to copy', 2000);
    });
  },

  // Generate single character
  generateCharacter(raceFilter, options = {}) {
    const charOptions = {
      race: raceFilter || undefined,
      subrace: options.subrace || undefined,
      class: options.class || undefined,
      style: options.style || 'Tolkien-esque',
      level: options.level || 3,
      background: options.background || undefined,
      gender: Math.random() > 0.5 ? 'male' : 'female'
    };
    const artStyle = options.artStyle || 'Classic Fantasy';

    const char = generateCharacterCard(charOptions);
    const portraitPrompt = generatePortraitPrompt(char, artStyle);

    return { char, portraitPrompt };
  },

  // Generate batch characters
  generateBatchChars(raceFilter, count, options = {}) {
    const charOptions = {
      race: raceFilter || undefined,
      subrace: options.subrace || undefined,
      class: options.class || undefined,
      style: options.style || 'Tolkien-esque',
      level: options.level || 3,
      background: options.background || undefined
    };
    const artStyle = options.artStyle || 'Classic Fantasy';

    return generateBatch({ ...charOptions, count, artStyle });
  }
};

// Export for window access
if (typeof window !== 'undefined') {
  window.RacePageComponents = RacePageComponents;

  // Global convenience wrappers used by template pages
  window.generateCharacter = function(race, gender, className, style, level, background, artStyle) {
    return RacePageComponents.generateCharacter(race, {
      class: className,
      style: style || 'Tolkien-esque',
      level: level || 3,
      background: background,
      gender: gender === 'random' ? (Math.random() > 0.5 ? 'male' : 'female') : gender,
      artStyle: artStyle || 'Classic Fantasy'
    });
  };

  window.generateBatchChars = function(race, count, className, style, level, background, artStyle) {
    return RacePageComponents.generateBatchChars(race, count, {
      class: className,
      style: style || 'Tolkien-esque',
      level: level || 3,
      background: background,
      artStyle: artStyle || 'Classic Fantasy'
    });
  };

  window.renderCharCard = function(result) {
    return RacePageComponents.renderCharCard(result.char, result.portraitPrompt);
  };

  window.copyText = function(text) {
    RacePageComponents.copyText(text);
  };

  window.showToast = function(msg, dur) {
    RacePageComponents.showToast(msg, dur);
  };
}
