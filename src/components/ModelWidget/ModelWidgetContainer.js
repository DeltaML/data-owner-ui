import { compose, withState } from 'recompose';

import ModelWidgetView from './ModelWidgetView';

export default compose(
  withState('moreButtonRef', 'setMoreButtonRef', null),
  withState('isMoreMenuOpen', 'setMoreMenuOpen', false),
)(ModelWidgetView);