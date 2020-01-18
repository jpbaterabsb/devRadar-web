import React, {useState, useEffect} from 'react';

import './styles.css';

function DevForm({ onSubmit }) {

  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [github_username, setGithub_sername] = useState('');
  const [techs, setTechs] = useState('');


  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      position => {
        const { latitude, longitude } = position.coords;
        setLatitude(latitude);
        setLongitude(longitude);
      },
      err => { },
      {
        timeout: 30000,
      }
    );
  }, []);


  async function handleSubmit(e) {
    e.preventDefault();
    await onSubmit({
      github_username,techs,longitude,latitude
    });

    setGithub_sername('');
    setTechs('');
  }


  return (
    <form onSubmit={handleSubmit}>
    <div className="input-block">
      <label htmlFor="github_username">Usuário do GitHub</label>
      <input type="text" id="github_username" name="github_username" value={github_username} onChange={e => setGithub_sername(e.target.value)} />
    </div>
    <div className="input-block">
      <label htmlFor="techs">Tecnologias</label>
      <input type="text" id="techs" name="techs" value={techs} onChange={e => setTechs(e.target.value)} />
    </div>
    <div className="input-group">
      <div className="input-block">
        <label htmlFor="latitude">Latitude</label>
        <input type="number" id="latitude" name="latitude" value={latitude} onChange={e => setLatitude(e.target.value)} />
      </div>
      <div className="input-block">
        <label htmlFor="longitude">Longitude</label>
        <input type="number" id="longitude" name="longitude" value={longitude} onChange={e => setLongitude(e.target.value)} />
      </div>
    </div>
    <button type="submit">Salvar</button>
  </form>
  );
}

export default DevForm;