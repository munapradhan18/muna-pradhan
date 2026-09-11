/**
 * Muna Pradhan — Literary Archive & Portfolio Interactive Logic
 */

document.addEventListener('DOMContentLoaded', () => {
  initProjectModals();
  initCommunicationModal();
  initResumeModal();
  initScrollSpy();
});

/* ==========================================================================
   PROJECT ARCHITECTURE DATA
   ========================================================================== */
const projectData = {
  aegismed: {
    title: 'AegisMed — Clinical Decision Support & Telemetry Intelligence',
    tag: 'Clinical AI Platform • v2.4',
    image: 'assets/aegismed.jpg',
    summary: 'A clinical reasoning co-pilot synthesizing real-time ICU telemetry, lab biomarker trajectories, and symptom progressions into transparent medical decision trees.',
    architecture: `
[Patient Telemetry / Bedside Monitors] ──(Biomarker Streams)──► [Edge Filter Gateway]
                                                                          │
[Clinical Knowledge Graph (UMLS/SNOMED)] ◄──► [Local LLM Reasoner (FastAPI)]
                                                      │
                                                      ▼
                                       [Diagnostic Explanation UI]
    `,
    highlights: [
      'Multi-modal biomarker correlation predicting acute sepsis onset up to 4.2 hours prior to conventional lab alerts.',
      'Transparent chain-of-thought provenance graphs allowing attending physicians to audit clinical reasoning pathways.',
      'HIPAA-compliant, zero-external-egress edge deployment architecture.'
    ],
    stack: ['Python 3.11', 'FastAPI', 'PyTorch', 'PostgreSQL', 'SNOMED-CT', 'React UI'],
    repoUrl: 'https://github.com/munapradhan18/aegismed'
  },
  chronodrift: {
    title: 'ChronoDrift — Temporal Physics & Spacetime Engine',
    tag: 'Game Engine Architecture • C++20',
    image: 'assets/chronodrift.jpg',
    summary: 'A high-performance temporal racing engine allowing deterministic spacetime rewinds, dynamic branch reconciliation, and sub-frame predictive collision handling.',
    architecture: `
[Input State Vector (120Hz)] ──► [Deterministic Ring Buffer Snapshot]
                                            │
                           [Temporal Branching Reconciliation]
                                            │
                                            ▼
                           [Vulkan / C++20 Render Pipeline (60+ fps)]
    `,
    highlights: [
      'Engineered lock-step deterministic rollback netcode supporting instant branch scrubbing across 12 concurrent entities.',
      'Custom linear algebra physics pipeline optimized with AVX-512 vector instructions for high-velocity particle drift dynamics.',
      'Real-time temporal distortion shaders compiled in SPIR-V with dynamic time-dilation curves.'
    ],
    stack: ['C++20', 'Vulkan API', 'GLSL Shaders', 'CMake', 'Deterministic Math'],
    repoUrl: 'https://github.com/munapradhan18/chronodrift-engine'
  },
  cinestream: {
    title: 'CineStream — Adaptive Bitrate Video Pipeline & Edge CDN',
    tag: 'Distributed Media Engine • Low Latency',
    image: 'assets/cinestream.jpg',
    summary: 'Distributed media ingestion, adaptive chunk transcoding, and peer-assisted edge routing network designed for sub-second video delivery under network jitter.',
    architecture: `
[Raw 4K Video Ingest] ──► [FFmpeg Hardware Transcoder (H.265/AV1)]
                                        │ (DASH / HLS Chunks)
                                        ▼
             [Edge Geo-Distributed Cache Nodes (Redis / Envoy)]
                                        │
                                        ▼
             [WebAssembly Adaptive Bitrate Video Player Client]
    `,
    highlights: [
      'Dynamic heuristic ABR algorithm reducing video buffer re-buffering events by 38% on fluctuating 4G/5G mobile links.',
      'Distributed chunk verification pipeline checking frame hashes with zero throughput degradation.',
      'Real-time telemetry map monitoring global pop latency across 14 geographical regions.'
    ],
    stack: ['Go', 'TypeScript', 'WebAssembly', 'FFmpeg', 'Redis', 'Envoy Gateway'],
    repoUrl: 'https://github.com/munapradhan18/cinestream-pipeline'
  },
  neurosync: {
    title: 'NeuroSync — Human-AI Neural Synchrony & Cognitive Load Interface',
    tag: 'HCI & Neuro-Cognitive Systems',
    image: 'assets/neurosync.jpg',
    summary: 'Real-time EEG telemetry decoding framework measuring developer cognitive friction, mental fatigue, and flow states during complex programming tasks.',
    architecture: `
[EEG 16-Channel Headset] ──► [WebSocket Packet Ingestion (1kHz)]
                                            │
                           [Bandpass Filter & Wavelet Extraction]
                                            │
                                            ▼
                        [Cognitive Load Classifier (Python / ONNX)]
                                            │
                                            ▼
                         [Adaptive IDE Flow State Dashboard]
    `,
    highlights: [
      'Decodes theta/alpha power ratios to compute real-time cognitive saturation metrics with 89.4% cross-validation accuracy.',
      'Adaptive prompt throttling: automatically modulates AI code suggestion verbosity when the user is in deep cognitive flow.',
      'WebGL 3D brain map rendering localized cortex excitation in real-time.'
    ],
    stack: ['Python', 'WebSockets', 'Three.js / WebGL', 'ONNX Runtime', 'FastAPI'],
    repoUrl: 'https://github.com/munapradhan18/neurosync'
  }
};

/* ==========================================================================
   PROJECT MODAL CONTROLLER
   ========================================================================== */
function initProjectModals() {
  const modal = document.getElementById('project-modal');
  const modalTitle = document.getElementById('project-modal-title');
  const modalBody = document.getElementById('project-modal-body');

  document.querySelectorAll('[data-project]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const id = btn.getAttribute('data-project');
      const data = projectData[id];
      if (!data) return;

      modalTitle.textContent = data.title;
      modalBody.innerHTML = `
        <div style="display: flex; flex-direction: column; gap: 16px;">
          <div style="display: flex; align-items: center; justify-content: space-between; border-bottom: 1px solid var(--border-light); padding-bottom: 8px;">
            <span style="font-family: var(--font-mono); font-size: 11px; font-weight: 700; color: var(--accent-pink-deep); text-transform: uppercase;">
              ● ${data.tag}
            </span>
            <a href="${data.repoUrl}" target="_blank" rel="noopener noreferrer" style="font-family: var(--font-mono); font-size: 11px; color: var(--accent-crimson); font-weight: 600;">
              GitHub Repository ↗
            </a>
          </div>

          <p style="font-size: 14px; line-height: 1.6; color: var(--ink-body);">${data.summary}</p>

          <div>
            <h4 style="font-family: var(--font-mono); font-size: 12px; color: var(--ink-title); text-transform: uppercase; margin-bottom: 6px;">System Topology &amp; Architecture</h4>
            <pre style="background: var(--bg-surface-subtle); border: 1px solid var(--border-light); padding: 12px; border-radius: var(--radius-sm); font-family: var(--font-mono); font-size: 11px; color: var(--ink-title); overflow-x: auto; line-height: 1.4;">${data.architecture.trim()}</pre>
          </div>

          <div>
            <h4 style="font-family: var(--font-mono); font-size: 12px; color: var(--accent-pink-deep); text-transform: uppercase; margin-bottom: 6px;">Key Engineering Milestones</h4>
            <ul style="padding-left: 20px; font-size: 13px; line-height: 1.6; color: var(--ink-body);">
              ${data.highlights.map(h => `<li>${h}</li>`).join('')}
            </ul>
          </div>

          <div>
            <h4 style="font-family: var(--font-mono); font-size: 12px; color: var(--ink-muted); text-transform: uppercase; margin-bottom: 6px;">Verified Stack</h4>
            <div style="display: flex; flex-wrap: wrap; gap: 6px;">
              ${data.stack.map(s => `<span class="tech-tag">${s}</span>`).join('')}
            </div>
          </div>
        </div>
      `;
      modal.classList.add('open');
    });
  });

  // Close triggers
  document.querySelectorAll('.modal-close, .modal-overlay').forEach(el => {
    el.addEventListener('click', (e) => {
      if (e.target === el || e.target.classList.contains('modal-close')) {
        document.querySelectorAll('.modal-overlay').forEach(m => m.classList.remove('open'));
      }
    });
  });

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      document.querySelectorAll('.modal-overlay').forEach(m => m.classList.remove('open'));
    }
  });
}

/* ==========================================================================
   RESUME MODAL CONTROLLER
   ========================================================================== */
function initResumeModal() {
  const resumeModal = document.getElementById('resume-modal');
  document.querySelectorAll('[data-open-resume]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      if (resumeModal) resumeModal.classList.add('open');
    });
  });
}

/* ==========================================================================
   COMMUNICATION MODAL CONTROLLER
   ========================================================================== */
function initCommunicationModal() {
  const commModal = document.getElementById('comm-modal');
  document.querySelectorAll('[data-open-comm]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      if (commModal) commModal.classList.add('open');
    });
  });

  const form = document.getElementById('comm-form');
  if (form) {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const formData = new FormData(form);
      const senderName = formData.get('senderName');
      const senderEmail = formData.get('senderEmail');
      const message = formData.get('message');
      const subject = encodeURIComponent(`Portfolio inquiry from ${senderName}`);
      const body = encodeURIComponent(`Name / Organization: ${senderName}\nEmail: ${senderEmail}\n\n${message}`);
      const status = document.getElementById('comm-status');
      const submitButton = form.querySelector('button[type="submit"]');

      if (status) {
        status.style.display = 'block';
        status.textContent = 'Sending message...';
      }
      if (submitButton) submitButton.disabled = true;

      try {
        const response = await fetch('https://formsubmit.co/ajax/munapradhanm97@gmail.com', {
          method: 'POST',
          headers: {
            Accept: 'application/json'
          },
          body: new URLSearchParams({
            name: senderName,
            email: senderEmail,
            message,
            _replyto: senderEmail,
            _subject: `Portfolio inquiry from ${senderName}`,
            _template: 'table',
            _captcha: 'false'
          })
        });

        const result = await response.json().catch(() => ({}));
        if (!response.ok || result.success === false) {
          throw new Error(result.message || 'Message service unavailable');
        }

        if (status) status.textContent = 'Message sent successfully. Thank you for contacting Muna.';
        form.reset();
        setTimeout(() => {
          if (commModal) commModal.classList.remove('open');
          if (status) status.style.display = 'none';
        }, 2200);
      } catch (error) {
        if (status) status.textContent = 'Opening your email app instead...';
        window.location.href = `mailto:munapradhanm97@gmail.com?subject=${subject}&body=${body}`;
      } finally {
        if (submitButton) submitButton.disabled = false;
      }
    });
  }
}

/* ==========================================================================
   SCROLLSPY FOR NAVBAR
   ========================================================================== */
function initScrollSpy() {
  const sections = document.querySelectorAll('section[id], header[id]');
  const navLinks = document.querySelectorAll('.nav-item');

  window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY + 100;
    sections.forEach(sec => {
      const top = sec.offsetTop;
      const height = sec.offsetHeight;
      const id = sec.getAttribute('id');
      if (scrollPos >= top && scrollPos < top + height) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }, { passive: true });
}
