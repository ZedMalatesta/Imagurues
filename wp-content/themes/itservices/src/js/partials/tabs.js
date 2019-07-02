if (document.querySelectorAll('.tabs').length !== 0) {
  var firstIcon = document.querySelector('.tabcontent svg');
  let tabButtons = document.querySelectorAll('.tab-button');


  var firstActiveTabButton = document.querySelector('.tab-button');
  firstActiveTabButton.classList.add('active');

  firstActiveTabButton.dispatchEvent(new Event('click'));
  document.querySelector('.tabcontent').style.display = 'flex';


  new Vivus(firstIcon, {
      duration: 200,
      type: 'oneByOne',
      animTimingFunction: Vivus.LINEAR
    },
    function (obj) {
      obj.el.classList.add('finished');
    }
  );

  for (let i = 0, len = tabButtons.length; i < len; i++) {

    tabButtons[i].addEventListener('click', function (e) {
      let id = this.dataset.id;
      let tab = document.querySelector(`.tabcontent[data-id="${id}"]`);
      let allTabs = document.querySelectorAll('.tabcontent');
      let icon = tab.querySelector('svg');

      for (let i = 0, len = allTabs.length; i < len; i++) {
        allTabs[i].style.display = 'none';
        allTabs[i].querySelector('svg').classList.remove('finished');
      }

      tab.style.display = 'flex';
      new Vivus(icon, {
          duration: 200,
          type: 'oneByOne',
          animTimingFunction: Vivus.LINEAR
        },
        function (obj) {
          obj.el.classList.add('finished');
        }
      );

      for (let i = 0, len = tabButtons.length; i < len; i++) {
        tabButtons[i].classList.remove('active');
      }

      this.classList.add('active');
    });
  }
}
