function show_form() {
  let form_el = document.querySelector("#theForm");
  let source_nama = document.querySelector("#nama");
  let target_nama = document.querySelector("#form_nama");
  let source_role = document.querySelector("#role");
  let target_role = document.querySelector("#form_role");
  let source_availability = document.querySelector("#availability");
  let target_availability = document.querySelector("#form_availability");
  let source_age = document.querySelector("#age");
  let target_age = document.querySelector("#form_age");
  let source_location = document.querySelector("#location");
  let target_location = document.querySelector("#form_location");
  let source_experience = document.querySelector("#experience");
  let target_experience = document.querySelector("#form_experience");
  let source_email = document.querySelector("#email");
  let target_email = document.querySelector("#form_email");

  form_el.style.display = "block";
  target_nama.value = source_nama.innerText;
  target_availability.value = source_availability.innerText;
  target_role.value = source_role.innerText;
  target_age.value = source_age.innerText;
  target_location.value = source_location.innerText;
  target_experience.value = source_experience.innerText;
  target_email.value = source_email.innerText;
}

function submit() {
  let form_el = document.querySelector("#theForm");
  let source_nama = document.querySelector("#form_nama");
  let target_nama = document.querySelector("#nama");
  let source_role = document.querySelector("#form_role");
  let target_role = document.querySelector("#role");
  let source_availability = document.querySelector("#form_availability");
  let target_availability = document.querySelector("#availability");
  let source_age = document.querySelector("#form_age");
  let target_age = document.querySelector("#age");
  let source_location = document.querySelector("#form_location");
  let target_location = document.querySelector("#location");
  let source_experience = document.querySelector("#form_experience");
  let target_experience = document.querySelector("#experience");
  
  form_el.style.display = "none";
  target_nama.innerText = source_nama.value;
  target_role.innerText = source_role.value;
  target_availability.innerText = source_availability.value;
  target_age.innerText = source_age.value;
  target_location.innerText = source_location.value;
  target_experience.innerText = source_experience.value;
  let source_email = document.querySelector("#form_email");
  let target_email = document.querySelector("#email");
  target_email.innerText = source_email.value;
  //console.log(form_el);
}