import {useDispatch} from 'react-redux';
import {useEffect} from 'react';
import media from 'media/store';

export interface Hotkeys {
  toggleMenu: () => void;
  togglePreview: () => void;
}

export function useHotkeys(hotkeys: Hotkeys) {
  const put = useDispatch();
  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      const {key} = e;
      switch (key) {
        // Toggle main menu
        case '[':
          hotkeys.toggleMenu();
          break;
        // Toggle preview
        case ']':
          hotkeys.togglePreview();
          break;
        // Select all
        case 'a':
          if (!(e.metaKey || e.ctrlKey)) return;
          e.preventDefault();
          put(media.actions.selectBulk('all'));
          break;
        // Clear selection
        case 'Escape':
          put(media.actions.selectBulk([]));
          break;
      }
    };
    window.addEventListener('keydown', down);
    return () => {
      window.removeEventListener('keydown', down);
    };
  }, [hotkeys, put]);
}
