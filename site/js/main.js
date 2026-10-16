const LANG_KEY = "aov-lang";

function esc(value) {
  return String(value).replace(/[&<>"']/g, (ch) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
  }[ch]));
}

const PAGES = ["home", "transport", "garena", "guests", "lineup"];
let shownPage = "";

function pageId() {
  const hash = location.hash.slice(1);
  if (PAGES.includes(hash)) return hash;
  if (PAGES.includes(document.body.dataset.page)) return document.body.dataset.page;
  return "home";
}

function goTo(id) {
  if (!PAGES.includes(id)) return;
  if (location.hash.slice(1) !== id) location.hash = id;
  render();
}

function storageGet() {
  try { return localStorage.getItem(LANG_KEY); } catch (err) { return null; }
}

function storageSet(value) {
  try { localStorage.setItem(LANG_KEY, value); } catch (err) { /* private mode */ }
}

function currentLang() {
  return storageGet() === "en" ? "en" : "zh";
}

function text() {
  return CONTENT[currentLang()];
}

function setLang(lang) {
  storageSet(lang);
  render();
}

function render() {
  const c = text();
  const page = pageId();
  const changed = shownPage !== "" && shownPage !== page;
  shownPage = page;
  document.documentElement.lang = currentLang() === "en" ? "en" : "zh-Hant";
  document.title = "AOV 10th Event | VIP Guide";
  document.getElementById("bar").innerHTML = chrome(c, page);
  document.getElementById("main").innerHTML = pages[page](c);
  const close = document.getElementById("lightbox-close");
  close.textContent = c.close;
  close.setAttribute("aria-label", c.close);
  if (changed) window.scrollTo(0, 0);
}

function chrome(c, page) {
  const links = c.nav.map((item) => {
    const current = item.id === page ? ' aria-current="page"' : "";
    return `<a href="${esc(item.href)}" data-page="${esc(item.id)}"${current}>${esc(item.label)}</a>`;
  }).join("");
  return `
    <div class="bar-row">
      <button type="button" class="menu-btn" id="menu-btn" aria-expanded="false" aria-label="${esc(c.menuLabel)}">
        <span></span><span></span><span></span>
      </button>
      <button type="button" class="lang" id="lang">${esc(c.langLabel)}</button>
    </div>
    <nav class="nav" id="nav" inert>
      <div class="nav-inner">${links}</div>
    </nav>
  `;
}

function shell(kicker, title, lede, body) {
  return `
    <article class="wrap">
      <p class="kicker">${esc(kicker)}</p>
      <h1>${esc(title)}</h1>
      ${lede ? `<p class="lede">${esc(lede)}</p>` : ""}
      ${body}
    </article>
  `;
}

function home(c) {
  const h = c.home;
  const cards = h.cards.map((card) => `
    <a class="choice" href="${esc(card.href)}" data-page="${esc(card.href.slice(1))}">
      <span class="kicker">${esc(card.kicker)}</span>
      <strong>${esc(card.title)}</strong>
      <span class="hint">${esc(card.text)}</span>
    </a>
  `).join("");
  const times = schedule(h.timeline);
  const links = h.links.map((item) => `
    <a class="link-card" href="${esc(item.href)}" data-page="${esc(item.href.slice(1))}">
      <strong>${esc(item.title)}</strong>
      <span class="hint">${esc(item.text)}</span>
    </a>
  `).join("");
  return `
    <article class="wrap">
      <p class="kicker">${esc(h.kicker)}</p>
      <h1>${esc(h.title)}</h1>
      <div class="choices">${cards}</div>
      <section class="panel">
        <h2>${esc(h.dayTitle)}</h2>
        ${whenBlock(h.when)}
        ${times}
      </section>
      <div class="link-row">${links}</div>
    </article>
  `;
}

function whenBlock(when) {
  const lines = Array.isArray(when) ? when : [when];
  return `<p class="when">${lines.map((line) => `<span>${esc(line)}</span>`).join("")}</p>`;
}

function schedule(items) {
  const groups = [];
  items.forEach((item) => {
    const last = groups[groups.length - 1];
    if (!last || last.kind !== item.kind) {
      groups.push({ kind: item.kind, slot: item.slot, rows: [item] });
    } else {
      last.rows.push(item);
    }
  });
  let row = 1;
  const cells = [];
  groups.forEach((group) => {
    cells.push(`<span class="slot ${esc(group.kind)}" style="grid-row:${row} / span ${group.rows.length}">${esc(group.slot)}</span>`);
    group.rows.forEach((item) => {
      const rule = row > 1 ? " rule" : "";
      cells.push(`<span class="time${rule}" style="grid-row:${row}">${esc(item.time)}</span>`);
      cells.push(`<span class="label${rule}" style="grid-row:${row}">${esc(item.label)}</span>`);
      row += 1;
    });
  });
  return `<div class="schedule">${cells.join("")}</div>`;
}

const TAXI_ICON = `<svg class="way-icon" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M9.4 1.8h5.2c.3 0 .5.2.5.5v1.6c0 .3-.2.5-.5.5H9.4c-.3 0-.5-.2-.5-.5V2.3c0-.3.2-.5.5-.5z"/><path fill="currentColor" fill-rule="evenodd" d="M2.2 13.6V11c0-.3.1-.6.4-.9l2.2-2.4c.3-.3.7-.5 1.1-.5h2.2L9.4 5.2c.2-.4.6-.6 1-.6h3.4c.4 0 .8.2 1 .6l1.1 2h2.2c.5 0 1 .3 1.2.8l1.4 2.8c.2.4.3.8.3 1.2v2H2.2zm6.2-4.4 1-1.7h4.2l.8 1.7H8.4z"/><path fill="currentColor" fill-rule="evenodd" d="M6.1 17.6a2.15 2.15 0 1 0 0-4.3 2.15 2.15 0 0 0 0 4.3zm0-1.2a.95.95 0 1 0 0-1.9.95.95 0 0 0 0 1.9zM17.5 17.6a2.15 2.15 0 1 0 0-4.3 2.15 2.15 0 0 0 0 4.3zm0-1.2a.95.95 0 1 0 0-1.9.95.95 0 0 0 0 1.9z"/></svg>`;

const MRT_ICON = `<svg class="way-icon" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" fill-rule="evenodd" d="M12 2.2c-4.2 0-7.6.5-7.6 3.8v9.2c0 1.7 1.4 3.1 3.1 3.1L6.2 19.8v.5h2.1l1.7-1.9h3.9l1.7 1.9h2.1v-.5l-1.3-1.5c1.7 0 3.1-1.4 3.1-3.1V6c0-3.3-3.4-3.8-7.6-3.8zM6.2 9.8V6.2h4.6v3.6H6.2zm7 0V6.2h4.6v3.6h-4.6zM7.6 16.6a1.45 1.45 0 1 1 0-2.9 1.45 1.45 0 0 1 0 2.9zm8.8 0a1.45 1.45 0 1 1 0-2.9 1.45 1.45 0 0 1 0 2.9z"/></svg>`;

function stepHtml(step) {
  if (typeof step === "string") return esc(step);
  return `${esc(step.before)}<strong>${esc(step.strong)}</strong>${esc(step.after || "")}`;
}

function transport(c) {
  const t = c.transport;
  const steps = t.steps.map((step) => `<li><span>${stepHtml(step)}</span></li>`).join("");
  return shell(t.kicker, t.title, t.lede, `
    <section class="panel">
      <h2>${esc(t.name)}</h2>
      <p class="address">${esc(t.address)}</p>
      <a class="button" href="${t.mapUrl}" target="_blank" rel="noopener noreferrer">${esc(t.map)}</a>
      <h3 class="way-title">${esc(t.howTitle)}</h3>
      <ol class="ways">
        <li>
          ${TAXI_ICON}
          <div>
            <strong>${esc(t.taxiTitle)}</strong>
            <p>${esc(t.taxi)}</p>
          </div>
        </li>
        <li>
          ${MRT_ICON}
          <div>
            <strong>${esc(t.mrtTitle)}</strong>
            <ol class="steps">${steps}</ol>
          </div>
        </li>
      </ol>
    </section>
  `);
}

function factList(facts) {
  return facts.map((fact) => `
    <div>
      <dt>${esc(fact.k)}</dt>
      <dd>${fact.pending ? `<span class="pending">${esc(fact.v)}</span>` : esc(fact.v)}</dd>
    </div>
  `).join("");
}

function seatBlock(seats) {
  const rows = seats.rows.map((row) => `<li${seats.pending ? ' class="pending"' : ""}>${esc(row)}</li>`).join("");
  return `
    <div class="seats">
      <h3>${esc(seats.title)}</h3>
      <p>${esc(seats.summary)}</p>
      <ul>${rows}</ul>
    </div>
  `;
}

function boxBlock(boxes) {
  const items = boxes.items.map((item) => `
    <li>
      <strong>${esc(item.code)}</strong>
      <span>${esc(item.kind)}</span>
      <em>${esc(item.who)}</em>
    </li>
  `).join("");
  return `
    <div class="seats">
      <h3>${esc(boxes.title)}</h3>
      <p>${esc(boxes.note)}</p>
      <ul class="boxes">${items}</ul>
    </div>
  `;
}

function figureList(images, zoom) {
  const items = images.map((image) => `
    <figure class="${image.wide ? "wide" : ""}">
      <button type="button" class="zoom" data-src="${esc(image.src)}" data-alt="${esc(image.alt)}" data-cap="${esc(image.cap)}">
        <img src="${esc(image.src)}" alt="${esc(image.alt)}">
      </button>
      <figcaption>${esc(image.cap)}</figcaption>
    </figure>
  `).join("");
  return `<p class="zoom-hint">${esc(zoom)}</p><div class="figures">${items}</div>`;
}

function zoomButton(image, label) {
  return `<button type="button" class="text-zoom" data-src="${esc(image.src)}" data-alt="${esc(image.alt)}" data-cap="">${esc(label)}</button>`;
}

function galleryButton(images, label) {
  return `<button type="button" class="text-zoom" data-gallery="${esc(JSON.stringify(images))}">${esc(label)}</button>`;
}

function markGates(value) {
  const images = text().gate5 || [];
  return esc(value).replace(/Gate (\d+)/g, (match, num) => {
    if (num === "5" && images.length) {
      return `<button type="button" class="text-zoom gate" data-gallery="${esc(JSON.stringify(images))}">Gate 5</button>`;
    }
    return `<strong class="gate">Gate ${num}</strong>`;
  });
}

function summaryBlock(block) {
  if (block.kind === "place") {
    return `<div><dt>${esc(block.k)}</dt><dd>${esc(block.v)}（<a href="#${esc(block.page)}" data-page="${esc(block.page)}">${esc(block.link)}</a>）</dd></div>`;
  }
  if (block.kind === "text") {
    return `<div><dt>${esc(block.k)}</dt><dd>${esc(block.v)}</dd></div>`;
  }
  if (block.kind === "list") {
    const items = block.items.map((item) => `<li>${markGates(item)}</li>`).join("");
    const extra = block.images && block.link
      ? `<p class="map-link">${galleryButton(block.images, block.link)}</p>`
      : "";
    return `<div><dt>${esc(block.k)}</dt><dd><ul class="plain">${items}</ul>${extra}</dd></div>`;
  }
  if (block.kind === "seat") {
    const places = (block.places || []).map((place) => `<li>${esc(place)}</li>`).join("");
    const list = places ? `<ul class="plain seat-places">${places}</ul>` : "";
    return `<div><dt>${esc(block.k)}</dt><dd>${esc(block.before)}${zoomButton(block.image, block.link)}${esc(block.after)}${list}</dd></div>`;
  }
  const head = block.headers.map((header) => `<th>${esc(header)}</th>`).join("");
  const rows = block.rows.map((row) => `<tr>${row.map((cell) => `<td>${esc(cell)}</td>`).join("")}</tr>`).join("");
  const link = block.images ? galleryButton(block.images, block.link) : zoomButton(block.image, block.link);
  const label = block.k ? `<dt>${esc(block.k)}</dt>` : "";
  return `
    <div>
      ${label}
      <dd>
        <table class="guest-table"><thead><tr>${head}</tr></thead><tbody>${rows}</tbody></table>
        <p class="fine"><svg class="food" viewBox="0 0 24 24" aria-hidden="true"><path d="M7 3v7a2 2 0 0 1-2 2H4v9h2v-9h1a2 2 0 0 0 2-2V3H7zm3.2 0v6.2A3.2 3.2 0 0 1 8.4 12V21h2V12a3.2 3.2 0 0 1-1.2-2.5V3h1zm4.3 0c.2 3.4 2.2 4.4 2.2 7.2V21h2V3h-4.2z"/></svg>${esc(block.note)}</p>
        <p class="map-link">${link}</p>
      </dd>
    </div>
  `;
}

function photoRow(images) {
  if (!images || !images.length) return "";
  const items = images.map((image) => `
    <figure class="${image.wide ? "wide" : ""}">
      <button type="button" class="zoom" data-src="${esc(image.src)}" data-alt="${esc(image.alt)}" data-cap="">
        <img src="${esc(image.src)}" alt="${esc(image.alt)}">
      </button>
    </figure>
  `).join("");
  return `<div class="figures">${items}</div>`;
}

function renderSummary(event) {
  return `
    <section class="panel">
      <h2>${esc(event.title)}</h2>
      <dl class="brief">${event.summary.map(summaryBlock).join("")}</dl>
      ${photoRow(event.photos)}
    </section>
  `;
}

function renderEvent(event, zoom) {
  if (event.summary) return renderSummary(event);
  const times = event.times.map((item) => `
    <li><span class="time">${esc(item.time)}</span><span>${esc(item.label)}</span></li>
  `).join("");
  return `
    <section class="panel">
      <p class="kicker">${esc(event.kicker)}</p>
      <h2>${esc(event.title)}</h2>
      <p class="place-name">${esc(event.place)}</p>
      <ol class="times">${times}</ol>
      <dl class="facts">${factList(event.facts)}</dl>
      ${event.seats ? seatBlock(event.seats) : ""}
      ${event.boxes ? boxBlock(event.boxes) : ""}
      ${figureList(event.images, zoom)}
    </section>
  `;
}

function guide(block, c) {
  return shell(block.kicker, block.title, block.intro, block.events.map((event) => renderEvent(event, c.zoom)).join(""));
}

function artistCard(artist) {
  const en = currentLang() === "en" && artist.en ? `<p class="en-name">${esc(artist.en)}</p>` : "";
  const links = (artist.links || []).map((item) =>
    `<a href="${esc(item.href)}" target="_blank" rel="noopener noreferrer">${esc(item.label)}</a>`
  ).join("");
  return `
    <article class="artist">
      <img src="${esc(artist.photo)}" alt="${esc(artist.name)}">
      <div>
        <h3>${esc(artist.name)}</h3>
        ${en}
        <p class="role">${esc(artist.role)}</p>
        <p>${esc(artist.bio)}</p>
        <p class="artist-links">${links}</p>
      </div>
    </article>
  `;
}

function lineup(c) {
  const l = c.lineup;
  const by = (group) => l.artists.filter((artist) => artist.group === group).map(artistCard).join("");
  return shell(l.kicker, l.title, l.lede, `
    <section>
      <h2>${esc(l.finalsTitle)}</h2>
      <div class="artists">${by("finals")}</div>
    </section>
    <section>
      <h2>${esc(l.concertTitle)}</h2>
      <h3 class="group-label">${esc(l.hosts)}</h3>
      <div class="artists">${by("hosts")}</div>
      <h3 class="group-label">${esc(l.performers)}</h3>
      <div class="artists">${by("show")}</div>
    </section>
  `);
}

const pages = {
  home,
  transport,
  garena: (c) => guide(c.garena, c),
  guests: (c) => guide(c.guests, c),
  lineup,
};

let gallery = [];
let galleryIndex = 0;

function ensureGalleryControls() {
  const box = document.getElementById("lightbox");
  if (box.querySelector("#lightbox-prev")) return;
  box.insertAdjacentHTML("beforeend", `
    <button type="button" id="lightbox-prev" class="lightbox-nav" hidden>‹</button>
    <button type="button" id="lightbox-next" class="lightbox-nav" hidden>›</button>
  `);
  box.querySelector("#lightbox-prev").addEventListener("click", () => stepGallery(-1));
  box.querySelector("#lightbox-next").addEventListener("click", () => stepGallery(1));
}

function showGalleryImage() {
  const item = gallery[galleryIndex];
  const img = document.getElementById("lightbox-img");
  img.src = item.src;
  img.alt = item.alt || "";
  const many = gallery.length > 1;
  document.getElementById("lightbox-prev").hidden = !many;
  document.getElementById("lightbox-next").hidden = !many;
}

function stepGallery(step) {
  galleryIndex = (galleryIndex + step + gallery.length) % gallery.length;
  showGalleryImage();
}

function openLightbox(button) {
  ensureGalleryControls();
  gallery = button.dataset.gallery
    ? JSON.parse(button.dataset.gallery)
    : [{ src: button.dataset.src, alt: button.dataset.alt }];
  galleryIndex = 0;
  document.getElementById("lightbox-cap").textContent = button.dataset.cap || "";
  showGalleryImage();
  document.getElementById("lightbox").showModal();
}

document.getElementById("bar").addEventListener("click", (event) => {
  if (event.target.closest("#lang")) {
    setLang(currentLang() === "en" ? "zh" : "en");
    return;
  }
  const menuBtn = event.target.closest("#menu-btn");
  if (!menuBtn) return;
  const nav = document.getElementById("nav");
  const open = !nav.classList.contains("open");
  nav.classList.toggle("open", open);
  nav.inert = !open;
  menuBtn.setAttribute("aria-expanded", open ? "true" : "false");
});

document.addEventListener("click", (event) => {
  const link = event.target.closest("a[data-page]");
  if (!link) return;
  event.preventDefault();
  goTo(link.dataset.page);
});

window.addEventListener("hashchange", render);

document.getElementById("main").addEventListener("click", (event) => {
  const button = event.target.closest(".zoom, .text-zoom");
  if (button) openLightbox(button);
});

const lightbox = document.getElementById("lightbox");
document.getElementById("lightbox-close").addEventListener("click", () => lightbox.close());
lightbox.addEventListener("click", (event) => {
  if (event.target === lightbox) lightbox.close();
});

render();
