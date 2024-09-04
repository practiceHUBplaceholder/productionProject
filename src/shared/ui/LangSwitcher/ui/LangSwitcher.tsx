import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { ClassNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonColor } from 'shared/ui/Button/Button';

interface LangSwitcherProps {
  className?: string;
}

export const LangSwitcher: FC<LangSwitcherProps> = ({ className }) => {
    const { t, i18n } = useTranslation(
        'translation'
    );

    const toggle = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    };

    return (
        <Button
            onClick={toggle}
            className={ClassNames('', {}, [className])}
            color={ButtonColor.PRIMARY_INVERTED}
        >
            {t('Language')}
        </Button>
    );
};
