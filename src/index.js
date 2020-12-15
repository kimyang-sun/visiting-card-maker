import React from 'react';
import ReactDOM from 'react-dom';
import './index.module.css';
import App from './app';
import AuthService from './service/auth_service';
import ImageUploader from './service/image_uploader';
import ImageFileInput from './components/image_file_input/image_file_input';
import CardRepository from './service/card_repository';
import HtmlToImage from './service/html_to_image';
import CardDownload from './components/card_download/card_download';

const authService = new AuthService();
const cardRepository = new CardRepository();
const imageUploader = new ImageUploader();
const htmlToImage = new HtmlToImage();

const FileInput = React.memo(props => (
  <ImageFileInput {...props} imageUploader={imageUploader} />
));
const Download = React.memo(props => (
  <CardDownload {...props} htmlToImage={htmlToImage} />
));

ReactDOM.render(
  <React.StrictMode>
    <App
      authService={authService}
      FileInput={FileInput}
      cardRepository={cardRepository}
      Download={Download}
    />
  </React.StrictMode>,
  document.getElementById('root')
);
