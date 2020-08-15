import React from 'react';

const AuthorizationForm = () => {
  return (
    <div className="place-map__authorization-form">
      <div className="place-map__authorization-form--inner">
        <h1>Требуется авторизация</h1>
        <a href="https://oauth.vk.com/authorize?client_id=7136227&display=page&redirect_uri=https://vk-seeker.herokuapp.com/code&scope=offline&response_type=code&v=5.122">
          Войти через ВК
        </a>
      </div>
    </div>
  );
};

export default AuthorizationForm;
