import React from 'react';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-blue-600 text-white p-4 mt-auto">
      <div className="container mx-auto text-center">
        <p dangerouslySetInnerHTML={{ __html: t('footerText') }} />
      </div>
    </footer>
  );
};

export default Footer;
