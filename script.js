const firebaseConfig = {
    apiKey: "AIzaSyAGUiKaBc3Zp8XhGaiH5-Kq9C_EapqRpD0",
    authDomain: "bancod-1176d.firebaseapp.com",
    projectId: "bancod-1176d",
    storageBucket: "bancod-1176d.appspot.com",
    messagingSenderId: "435235484485",
    appId: "1:435235484485:web:03ce12703e617fcc27842c"
  };

  firebase.initializeApp(firebaseConfig);
 
  const db = firebase.firestore();


let mercado = document.querySelector('#mercadoLivre')
let shopee = document.querySelector('#shopee')
let amazom = document.querySelector('#amazom')
let b2w = document.querySelector('#b2w')
let drive = document.querySelector('#drive')
let data = document.querySelector('#inputData')

mercado.addEventListener("submit",(event) => {
  event.preventDefault();
  let impressosM = document.querySelector('#impressosM')
  let horarioImpressaoM = document.querySelector('#horarioImpressaoM')
  let horarioConferenciaM = document.querySelector('#horarioConferenciaM')
  let conferidosM = document.querySelector('#conferidosM')
  let embalouM = document.querySelector('#embalouM')
  let nembalouM = document.querySelector('#nembalouM')
  let observacaoM = document.querySelector('#observacaoM')

  db.collection("mercadoLivre").add({
   data: data.value,
   impressos: impressosM.value,
   horario_da_impressao: horarioImpressaoM.value,
   obsevacao: observacaoM.value
})

impressosM.value = " ";
horarioImpressaoM.value = " ";
horarioConferenciaM.value = " ";
conferidosM.value = " ";
embalouM.value = " ";
nembalouM.value = " ";
observacaoM.value = " ";

  
})

shopee.addEventListener("submit", (event) => {
  event.preventDefault();
  let impressosS = document.querySelector('#impressosS')
  let horarioImpressaoS = document.querySelector('#horarioImpressaoS')
  let horarioConferenciaS = document.querySelector('#horarioConferenciaS')
  let conferidosS = document.querySelector('#conferidosS')
  let embalouS = document.querySelector('#embalouS')
  let nembalouS = document.querySelector('#nembalouS')
  let observacaoS = document.querySelector('#observacaoS')

  db.collection('shopee').add({
    data: data.value,
    impressos: impressosS.value,
    horario_da_impressao: horarioImpressaoS.value,
    obsevacao: observacaoS.value
    
  })

  impressosS.value = " ";
  horarioImpressaoS.value = " ";
  horarioConferenciaS.value = " ";
  conferidosS.value = " ";
  embalouS.value = " ";
  nembalouS.value = " ";
  observacaoS.value = " ";
})

amazom.addEventListener("submit", (event) => {
  event.preventDefault();
  let impressosA = document.querySelector('#impressosA')
  let horarioImpressaoA = document.querySelector('#horarioImpressaoA')
  let horarioConferenciaA = document.querySelector('#horarioConferenciaA')
  let conferidosA = document.querySelector('#conferidosA')
  let embalouA = document.querySelector('#embalouA')
  let nembalouA = document.querySelector('#nembalouA')
  let observacaoA = document.querySelector('#observacaoA')

  db.collection('amazon').add({
    data: data.value,
    impressos: impressosA.value,
    horario_da_impressao: horarioImpressaoA.value,
    obsevacao: observacaoA.value
    
  })

  impressosA.value = " ";
  horarioImpressaoA.value = " ";
  horarioConferenciaA.value = " ";
  conferidosA.value = " ";
  embalouA.value = " ";
  nembalouA.value = " ";
  observacaoA.value = " ";
})

b2w.addEventListener("submit", (event) => {
  event.preventDefault();
  let impressosB = document.querySelector('#impressosB')
  let horarioImpressaoB = document.querySelector('#horarioImpressaoB')
  let horarioConferenciaB = document.querySelector('#horarioConferenciaB')
  let conferidosB = document.querySelector('#conferidosB')
  let embalouB = document.querySelector('#embalouB')
  let nembalouB = document.querySelector('#nembalouB')
  let observacaoB = document.querySelector('#observacaoB')

  db.collection('b2w').add({
    data: data.value,
    impressos: impressosB.value,
    horario_da_impressao: horarioImpressaoB.value,
    obsevacao: observacaoB.value
  })

  impressosB.value = " ";
  horarioImpressaoB.value = " ";
  horarioConferenciaB.value = " ";
  conferidosB.value = " ";
  embalouB.value = " ";
  nembalouB.value = " ";
  observacaoB.value = " ";
  
})

drive.addEventListener("submit", (event) => {
  event.preventDefault();
  let impressosD = document.querySelector('#impressosD')
  let horarioImpressaoD = document.querySelector('#horarioImpressaoD')
  let horarioConferenciaD = document.querySelector('#horarioConferenciaD')
  let conferidosD = document.querySelector('#conferidosD')
  let embalouD = document.querySelector('#embalouD')
  let nembalouD = document.querySelector('#nembalouD')
  let observacaoD = document.querySelector('#observacaoD')

  db.collection('driveimports').add({
    data: data.value,
    impressos: impressosD.value,
    horario_da_impressao: horarioImpressaoD.value,
    obsevacao: observacaoD.value
  })

  impressosD.value = " ";
  horarioImpressaoD.value = " ";
  horarioConferenciaD.value = " ";
  conferidosD.value = " ";
  embalouD.value = " ";
  nembalouD.value = " ";
  observacaoD.value = " ";
  
})