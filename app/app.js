'use strict';

const socket = io('ws://localhost:3001');

socket.on('message', text => {
  const emptyList = document.createElement('li');
  emptyList.innerHTML = text;
  document.querySelector('ul').appendChild(emptyList);
});

document.querySelector('button').onClick = ()=>{
  const text = document.querySelector('input').value;
  socket.emit('message', text);
};

