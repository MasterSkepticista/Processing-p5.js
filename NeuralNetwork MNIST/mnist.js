//mnist loader library
//This can be assumed as a copy. I found this to work, source unknown for now.
function loadMNIST(callback){
  let mnist = {};
    loadFile('train-labels-idx1-ubyte', 8)
    .then(data => {
      mnist.train_labels = data;
      return loadFile('train-images-idx3-ubyte', 16);
    })
    .then(data => {
      mnist.train_images = data;
      return loadFile('t10k-labels-idx1-ubyte', 8);
    })
    .then(data => {
      mnist.test_labels = data;
      return loadFile('t10k-images-idx3-ubyte', 16);
    })
    .then(data => {
      mnist.test_images = data;
      callback(mnist);
    });
}

async function loadFile(file, header){
  let r = await fetch(file);
  let data = await r.arrayBuffer();
  return new Uint8Array(data).slice(header);
}
