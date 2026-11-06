/* Iteração C2: persistência local, validação e filtros da carteira de saúde. */
(() => {
  const KEY = 'pawsly-c2-state';
  const state = JSON.parse(localStorage.getItem(KEY) || '{"pets":[],"events":[]}');
  const save = () => localStorage.setItem(KEY, JSON.stringify(state));
  const events = document.getElementById('events');
  const petList = document.getElementById('petList');
  const dateField = document.getElementById('date');
  const eventDescription = document.getElementById('desc');
  const nextDateField = document.querySelector('#eventForm input[type="date"]:not(#date)');
  const today = new Date().toISOString().slice(0, 10);

  function eventMarkup(event) {
    return `<div class="event" data-category="${event.category}"><div><span class="kind">${event.category.toUpperCase()}</span><h3>${event.description}</h3><p>${event.date} · Registrado para Thor${event.nextDate ? ` · Próximo cuidado: ${event.nextDate}` : ''}</p></div><span class="tag">Concluído</span></div>`;
  }
  function petMarkup(pet) {
    return `<div class="row"><div style="display:flex;gap:13px;align-items:center"><div class="avatar">🐾</div><div><b>${pet.name}</b><br><span>${pet.species}${pet.breed ? ` · ${pet.breed}` : ''} · Cadastro recente</span></div></div><span class="tag">Ativo</span></div>`;
  }
  state.events.forEach(event => events.insertAdjacentHTML('afterbegin', eventMarkup(event)));
  state.pets.forEach(pet => petList.insertAdjacentHTML('beforeend', petMarkup(pet)));

  window.openModal = function(kind) {
    window.type = kind;
    document.getElementById('modal').classList.add('show');
    document.getElementById('eventForm').style.display = kind === 'event' ? 'block' : 'none';
    document.getElementById('petForm').style.display = kind === 'pet' ? 'block' : 'none';
    document.getElementById('modalTitle').textContent = kind === 'event' ? 'Registrar evento de saúde' : 'Adicionar pet';
    document.getElementById('modalText').textContent = kind === 'event' ? 'Adicione uma informação à carteira do Thor.' : 'Inclua um animal sob seus cuidados.';
  };
  window.closeModal = () => document.getElementById('modal').classList.remove('show');
  window.saveModal = function() {
    if (window.type === 'event') {
      const description = eventDescription.value.trim();
      const category = document.getElementById('cat').value;
      const date = dateField.value;
      const nextDate = nextDateField.value;
      if (!description) return alert('Informe a descrição do evento de saúde.');
      if (!date || date > today) return alert('A data do evento não pode estar no futuro.');
      if (nextDate && nextDate <= date) return alert('A próxima data deve ser posterior à data do evento.');
      const event = { description, category, date, nextDate };
      state.events.push(event); save(); events.insertAdjacentHTML('afterbegin', eventMarkup(event));
      document.getElementById('countHealth').textContent = Number(document.getElementById('countHealth').textContent) + 1;
      eventDescription.value = ''; nextDateField.value = ''; window.show('health');
    } else {
      const name = document.getElementById('petName').value.trim();
      const species = document.querySelector('#petForm select').value;
      const breed = document.querySelector('#petForm input:not(#petName)').value.trim();
      if (!name) return alert('Informe o nome do pet.');
      const pet = { name, species, breed };
      state.pets.push(pet); save(); petList.insertAdjacentHTML('beforeend', petMarkup(pet));
      document.getElementById('petName').value = ''; window.show('pets');
    }
    window.closeModal();
  };
  document.querySelectorAll('.filters button').forEach(button => {
    button.onclick = () => {
      document.querySelectorAll('.filters button').forEach(item => item.classList.remove('selected'));
      button.classList.add('selected');
      const category = button.textContent.trim().toUpperCase();
      document.querySelectorAll('#events .event').forEach(item => {
        const itemCategory = item.querySelector('.kind').textContent.trim();
        item.style.display = category === 'TODOS' || itemCategory === category.slice(0, -1) || itemCategory === category ? 'flex' : 'none';
      });
    };
  });
})();
