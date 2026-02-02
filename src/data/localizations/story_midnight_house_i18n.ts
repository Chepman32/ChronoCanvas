import { Language } from '../../localization/translations';
import ar from '../translations/story-midnight-house/ar.json';
import de from '../translations/story-midnight-house/de.json';
import en from '../translations/story-midnight-house/en.json';
import es from '../translations/story-midnight-house/es.json';
import fr from '../translations/story-midnight-house/fr.json';
import hi from '../translations/story-midnight-house/hi.json';
import it from '../translations/story-mid˙night-house/it.json';
import ja from '../translations/story-midnight-house/ja.json';
import ko from '../translations/story-midnight-house/ko.json';
import nl from '../translations/story-midnight-house/nl.json';
import pl from '../translations/story-midnight-house/pl.json';
import pt from '../translations/story-midnight-house/pt.json';
import ru from '../translations/story-midnight-house/ru.json';
import tr from '../translations/story-midnight-house/tr.json';
import uk from '../translations/story-midnight-house/uk.json';
import zh from '../translations/story-midnight-house/zh.json';

interface StoryTranslations {
  title: string;
  description: string;
  author: string;
  nodes: {
    [nodeId: string]: {
      title: string;
      narration: string;
      choices: {
        [choiceId: string]: {
          text: string;
          description?: string;
        };
      };
    };
  };
}

export const midnightHouseTranslations: Partial<Record<Language, StoryTranslations>> = {
  ar,
  de,
  en,
  es,
  fr,
  hi,
  it,
  ja,
  ko,
  nl,
  pl,
  pt,
  ru,
  tr,
  uk,
  zh,
};
