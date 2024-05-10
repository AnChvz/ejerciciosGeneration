const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
const $n = document.querySelector('.name'); // Cambiado el selector para que sea igual que en el HTML
const $b = document.querySelector('.blog'); // Cambiado el selector para que sea igual que en el HTML
const $l = document.querySelector('.location'); // Agregado selector 

async function displayUser(username) {// Agregada la palabra clave 'async' para marcar la función como asíncrona
  $n.textContent = 'cargando...';
  try{
    const response = await fetch(`${usersEndpoint}/${username}`);
    const data = await response.json(); // Convertir la respuesta a formato JSON
    console.log(data);
    $n.textContent = data.name; // Corregidas las comillas para que el valor de 'data.name' sea evaluado
    $b.textContent = data.blog; // Corregidas las comillas para que el valor de 'data.blog' sea evaluado
    $l.textContent = data.location; // Corregidas las comillas para que el valor de 'data.location' sea evaluado
  }catch(err){
    handleError(err);//Agregar función 
  }
  
}

function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  $n.textContent = `Algo salió mal: ${err}`; // Corregida la asignación de texto al elemento HTML
}

displayUser('stolinski').catch(handleError);