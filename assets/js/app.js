const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;

// Se corrigió el selector para obtener el elemento por su clase
const $n = document.querySelector('.name');
const $b = document.querySelector('.blog');
const $l = document.querySelector('.location');

// Se agregó async al inicio de la función para permitir el uso de await
async function displayUser(username) {
  $n.textContent = 'Cargando...';
  try {
    const response = await fetch(`${usersEndpoint}/${username}`);
    const data = await response.json();
    // Se corrigieron las interpolaciones para mostrar correctamente los datos
    $n.textContent = data.name || 'Nombre no disponible';
    $b.textContent = data.blog || 'Blog no disponible';
    $l.textContent = data.location || 'Ubicación no disponible';
  } catch (err) {
    handleError(err);
  }
}

function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  // Se corrigió el selector para mostrar el mensaje de error correctamente
  $n.textContent = `Algo salió mal: ${err}`;
}

// Se agregó el llamado a la función displayUser con el nombre de usuario deseado
displayUser('stolinski').catch(handleError);
