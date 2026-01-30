const PROJECTS = [{"title": "Durban Port Structural Repairs for M&L Sheds", "client": "Transnet SOC Ltd", "value": "R51 500 000", "date": "Completed", "desc": "Provision of Professional Engineering and Management Services for M&L Sheds Structural Repairs", "category": "building", "categoryLabel": "Building"}, {"title": "Hammanskraal Multi-Purpose Centre", "client": "City of Tshwane", "value": "R57 000 000", "date": "Completed", "desc": "Provision of Professional Civil & Structural Engineering Services for multipurpose community centre", "category": "building", "categoryLabel": "Building"}, {"title": "Refurbishment of various PRASA Stations in Western Cape Region", "client": "Passenger Rail Agency of South Africa (Prasa)", "value": "R 9 000 000 – R 12 000 000", "date": "Completed", "desc": "Provision of Architectural, Quantity Surveying and Civil Engineering Services for various stations in WC Province", "category": "building", "categoryLabel": "Building"}, {"title": "Jubilee Taxi Rang", "client": "King Sabata Dalindyebo Municipality", "value": "R4 000 000", "date": "Completed", "desc": "Rehabilitation of Jubilee Taxi Rank", "category": "building", "categoryLabel": "Building"}, {"title": "Alexandra Hospice and Rehabilitation Centre", "client": "Johannesburg Development Agency (JDA)", "value": "R10 000 000", "date": "Completed", "desc": "Provision of Civil & Structural Engineering Services for Alexandra Hospice and Rehabilitation Centre", "category": "building", "categoryLabel": "Building"}, {"title": "Pienaarspoort Extension 20", "client": "City of Tshwane", "value": "R130 000 000", "date": "Completed", "desc": "Design development, Contract Administration and Site Supervision for the construction of sewer and water reticulation infrastructure", "category": "water", "categoryLabel": "Water & Sanitation"}, {"title": "Senqu Rural Water Supply", "client": "COEGA", "value": "R38 000 000", "date": "Completed", "desc": "Turnkey civil engineering services for Senqu Rural Water Supply – Work Package 5", "category": "water", "categoryLabel": "Water & Sanitation"}, {"title": "Tshakhuma Regional Water Scheme", "client": "Vhembe District Municipality", "value": "R 70 000 000", "date": "Completed", "desc": "Provision of Professional Engineering Services for the Tshakhuma Regional Scheme", "category": "water", "categoryLabel": "Water & Sanitation"}, {"title": "Vredeford Bucket Eradication Programme", "client": "Bloemwater", "value": "R50 000 000", "date": "Completed", "desc": "Project Management and Supervision of 8000 New Toilet Structure, sewer and water house connections etc.", "category": "water", "categoryLabel": "Water & Sanitation"}, {"title": "Heilbron Bucket Eradication Programme", "client": "Bloemwater", "value": "R65 000 000", "date": "Completed", "desc": "Project Management and Supervision of 1100 New Toilet Structure, sewer and water house connections etc.", "category": "water", "categoryLabel": "Water & Sanitation"}, {"title": "Coal Haul Road P30/3", "client": "Department of Public Works, Roads and Transport, MP", "value": "R165 000 000", "date": "Completed", "desc": "Rehabilitation of Coal Haul Road P30/3 between Standerton and Tutuka", "category": "roads", "categoryLabel": "Roads & Stormwater"}, {"title": "Road D3969 and Road D4383", "client": "Department of Public Works, Roads and Transport, MP", "value": "R219 000 000", "date": "Completed", "desc": "Upgrade: Road D3969 (Kildare to Lilydale 3.82km) and Road D4383 ( Lilydale to Road P33/5_14.1km) (Total 17.92km) in Bohlabela Region", "category": "roads", "categoryLabel": "Roads & Stormwater"}, {"title": "Road D2952", "client": "Department of Public Works, Roads and Transport, MP", "value": "R 155 400 000", "date": "Completed", "desc": "Upgrade: Road D2952 (Masibekela (D2950) to Thambokhulo (11km) in Ehlanzeni District of Mpumalanga Province", "category": "roads", "categoryLabel": "Roads & Stormwater"}, {"title": "R82 K57 (P1-1) Dualisation from D904 (KM 11.52) To De-Deur Post Office (KM 0.00) and New Carriageway Road K164", "client": "Gauteng Department of Roads and Transport", "value": "R1 600 000 000", "date": "On-Going", "desc": "Provision of Professional Engineering Services for Design Review and site supervision for construction of P1-1 (R82)(K57) Phase 3 from D1073 (Walkerville) to K164 (De Deur) and Road K164 between Road D904 and Road D905.", "category": "roads", "categoryLabel": "Roads & Stormwater"}, {"title": "Road upgrade of main road 198, 199 and 200 in Bohlabela", "client": "Mangaung Metro Municipaity", "value": "R14 500 000", "date": "On-going", "desc": "Road upgrade of main road 198, 199 and 200 in Bohlabela", "category": "roads", "categoryLabel": "Roads & Stormwater"}, {"title": "Upgrading of Mfumo road Hammanskraal West from gravel to asphalt and side walks (1.120 KM)", "client": "City of Tshwane Metro Municipality", "value": "R20 000 000", "date": "Ongoing", "desc": "Upgrading of Mfumo road Hammanskraal West from gravel to asphalt and side walks (1.120 KM)", "category": "roads", "categoryLabel": "Roads & Stormwater"}, {"title": "TNPA Richards Bay Fencing Project", "client": "COEGA", "value": "R107 000 000", "date": "Ongoing", "desc": "Professional Health and Safety and Environmental Agents", "category": "roads", "categoryLabel": "Roads & Stormwater"}];

function slugify(s){
  return (s || '')
    .toLowerCase()
    .replace(/&/g,'and')
    .replace(/[^a-z0-9]+/g,'-')
    .replace(/(^-|-$)/g,'');
}

// Creates 5 placeholder image paths per project.
// Put real images here later:
// assets/img/projects/<project-slug>/1.jpg ... 5.jpg
function getProjectImages(project){
  const slug = slugify(project.title);
  const base = `assets/img/projects/${slug}`;
  return [1,2,3,4,5].map(n => `${base}/${n}.jpg`);
}

function makeTag(icon, text){
  return `<span class="tag"><i class="bi ${icon}"></i> ${text}</span>`;
}

function makeMarquee(images, title){
  // Duplicate images for seamless loop
  const imgs = images.concat(images).map(src => `
    <img class="projImg" src="${src}" alt="${title} photo"
         onerror="this.style.display='none';" loading="lazy">
  `).join('');

  return `
<div class="projMedia" aria-label="Project photos">
    
      <div class="projMarquee">
        <div class="projTrack">${imgs}</div>
      </div>
    </div>
  `;
}

function renderProjects(category='all'){
  const grid = document.getElementById('projectGrid');
  if(!grid) return;
  grid.innerHTML = '';
  const filtered = PROJECTS.filter(p => category==='all' || p.category===category);

  filtered.forEach(p => {
    const el = document.createElement('div');
    el.className = 'projectCard';

    const images = getProjectImages(p);
    const media = makeMarquee(images, p.title);

el.innerHTML = `
  <div class="projectHeader">
    <h3>${p.title}</h3>
    ${p.value ? `<div class="projectValue">${p.value}</div>` : ''}
  </div>
  ${media}
  <div class="meta">

        ${makeTag('bi-building', p.categoryLabel || p.category)}
        ${p.client ? makeTag('bi-person-badge', p.client) : ''}
        ${p.value ? makeTag('bi-cash-coin', p.value) : ''}
        ${p.date ? makeTag('bi-calendar-event', p.date) : ''}
      </div>
      <p style="margin:0;color:#444;">${p.desc || ''}</p>
      <!-- <p style="margin:.55rem 0 0;color:#666;font-size:.92rem;">
        //<em>Add photos:</em> <code>assets/img/projects/${slugify(p.title)}/1.jpg</code> … <code>5.jpg</code>
     // </p> --!>
    `;
    grid.appendChild(el);
  });
}

function setActive(btn){
  document.querySelectorAll('.fbtn').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');
}

document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.fbtn');
  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      const cat = btn.dataset.filter;
      setActive(btn);
      renderProjects(cat);
    });
  });
  // default
  renderProjects('all');
  const first = document.querySelector('.fbtn[data-filter="all"]');
  if(first) first.classList.add('active');
});
