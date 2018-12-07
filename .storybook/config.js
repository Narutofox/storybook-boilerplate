import { configure } from '@storybook/react';

function loadStories() {
  require('../stories/button.js');
  require('../stories/label.js');
  require('../stories/card.js');
  require('../stories/roundIconButton.js');
  require('../stories/main.js');
  require('../stories/header.js');
  require('../stories/footer.js');
  require('../stories/navigation.js');
  require('../stories/hyperlinkButton');
  require('../stories/table');
}

configure(loadStories, module);