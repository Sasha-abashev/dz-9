let contacts = JSON.parse(localStorage.getItem("contacts")) || [];

function saveContacts() {
  localStorage.setItem("contacts", JSON.stringify(contacts));
  displayContacts();
}

function addContact() {
  const firstName = document.getElementById("firstName").value.trim();
  const lastName = document.getElementById("lastName").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const email = document.getElementById("email").value.trim();

  if (!firstName || !lastName || !phone || !email) {
    alert("Будь ласка, заповніть всі поля");
    return;
  }

  contacts.push({ firstName, lastName, phone, email });
  saveContacts();

  document.getElementById("firstName").value = "";
  document.getElementById("lastName").value = "";
  document.getElementById("phone").value = "";
  document.getElementById("email").value = "";
}

function deleteContact(index) {
  if (confirm("Ви дійсно хочете видалити цей контакт?")) {
    contacts.splice(index, 1);
    saveContacts();
  }
}

function editContact(index) {
  const contact = contacts[index];

  const newFirstName = prompt("Ім'я:", contact.firstName);
  const newLastName = prompt("Прізвище:", contact.lastName);
  const newPhone = prompt("Телефон:", contact.phone);
  const newEmail = prompt("Ел. пошта:", contact.email);

  if (newFirstName && newLastName && newPhone && newEmail) {
    contacts[index] = {
      firstName: newFirstName,
      lastName: newLastName,
      phone: newPhone,
      email: newEmail,
    };
    saveContacts();
  }
}

function displayContacts() {
  const list = document.getElementById("contactList");
  list.innerHTML = "";

  contacts.forEach((contact, index) => {
    list.innerHTML += `
          <div class="contact">
            <strong>${contact.firstName} ${contact.lastName}</strong><br>
            Телефон: ${contact.phone}<br>
            Е-пошта: ${contact.email}<br>
            <button onclick="editContact(${index})">Редагувати</button>
            <button onclick="deleteContact(${index})">Видалити</button>
          </div>
        `;
  });
}

// Показати збережені контакти при завантаженні
displayContacts();
