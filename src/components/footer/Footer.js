import React, { Fragment } from 'react';

const Footer = () => {
  return (
    <Fragment>
      <div className="footer">
        <h2>О приложении</h2>
        <p>
          VK seeker — сайт, позволяющий искать фотографии пользователей ВКонтекте по геолокации.
        </p>
        <p>
          При клике на карту просходит выбор нужных географических координат, затем можно задать
          определенные фильтры поиска, нажать кнопку "поиск" и получить результат.
        </p>
        <p>Приложение ищет только фотографии с геометками.</p>
      </div>{' '}
      <div className="footer__author">
        <a target="_blank" href="https://vk.com/id141953584">
          Создатель: Алексей Соболев
        </a>
      </div>
    </Fragment>
  );
};

export default Footer;
