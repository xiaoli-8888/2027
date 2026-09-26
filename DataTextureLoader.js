
THREE.DataTextureLoader = class DataTextureLoader extends THREE.Loader {
  constructor(manager) {
    super(manager);
  }
  load(url, onLoad, onProgress, onError) {
    const texture = new THREE.DataTexture();
    const loader = new THREE.FileLoader(this.manager);
    loader.setResponseType('arraybuffer');
    loader.setRequestHeader(this.requestHeader);
    loader.setPath(this.path);
    loader.load(url, (buffer) => {
      const data = this.parse(buffer);
      if (data) {
        texture.image = { data: data.data, width: data.width, height: data.height };
        texture.format = data.format;
        texture.type = data.type;
        texture.minFilter = THREE.LinearFilter;
        texture.magFilter = THREE.LinearFilter;
        texture.unpackAlignment = 1;
        texture.needsUpdate = true;
        if (onLoad) onLoad(texture, data);
      }
    }, onProgress, onError);
    return texture;
  }
  parse(buffer) {
    return null;
  }
};
