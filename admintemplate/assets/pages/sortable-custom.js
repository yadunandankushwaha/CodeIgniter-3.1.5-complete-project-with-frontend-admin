  'use strict';
  $(document).ready(function() {
      Sortable.create(draggablePanelList, {
          group: 'draggablePanelList',
          animation: 150
      });

      Sortable.create(draggableMultiple, {
          group: 'draggableMultiple',
          animation: 150
      });
      Sortable.create(draggableWithoutImg, {
          group: 'draggableWithoutImg',
          animation: 150
      });
  });
