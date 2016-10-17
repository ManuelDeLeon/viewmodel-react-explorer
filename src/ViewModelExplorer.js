ViewModel.signal({
  window: {
    windowSize: {
      target: window,
      event: 'resize',
      transform: function(event) {
        return {
          height: window.innerHeight,
          width: window.innerWidth
        }
      }
    }
  }
});

let scrollWidth;

ViewModelExplorer({
  signal: 'window',
  topMargin: 45,
  bottomMargin: 45,
  show: false,
  panelHeight() {
    return this.windowSize().height - this.topMargin() - this.bottomMargin();
  },
  panelWidth: 330,
  collapsedLeft(){
    return this.hoveringIcon() ? 40 : 35;
  },
  panelStyle() {
    return {
      position: 'fixed',
      height: this.show() ? this.panelHeight() : 25,
      width: this.panelWidth(),
      'top': this.topMargin(),
      'z-index': 99999,
      'background-color': '#ccc',
      border: '1px solid #555',
      'left': this.windowSize().width - (this.show() ? this.panelWidth() : this.collapsedLeft()) - this.scrollbarWidth(),
      'overflow-x': 'auto',
      'overflow-y': 'visible',
      'border-radius': '1em 0 0 1em',
      'WebkitTransition': 'all 0.5s ease-in-out',
      'MozTransition': 'all 0.5s ease-in-out',
      '-ms-transition': 'all 0.5s ease-in-out',
      'OTransition': 'all 0.5s ease-in-out',
      opacity: this.show() || this.hoveringIcon() ? 1 : 0.4
    }
  },
  scrollbarWidth() {
    var body = document.body, html = document.documentElement;
    var height = Math.max( body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight );
    if (height <= window.innerHeight) return 0;
    if (scrollWidth) return scrollWidth;

    var outer = document.createElement("div");
    outer.style.visibility = "hidden";
    outer.style.width = "100px";
    outer.style.msOverflowStyle = "scrollbar"; // needed for WinJS apps

    document.body.appendChild(outer);

    var widthNoScroll = outer.offsetWidth;
    // force scrollbars
    outer.style.overflow = "scroll";

    // add innerdiv
    var inner = document.createElement("div");
    inner.style.width = "100%";
    outer.appendChild(inner);

    var widthWithScroll = inner.offsetWidth;

    // remove divs
    outer.parentNode.removeChild(outer);

    scrollWidth = widthNoScroll - widthWithScroll;
    return scrollWidth;
  },
  hoveringIcon: false,
  components(){
    if (!ViewModel.rootComponents) {
      ViewModel.prepareRoot();
    }
    return ViewModel.rootComponents.list();
  },
  render(){
    <div 
      style="
      font-family: Arial, Helvetica, sans-serif;
      font-size: 12px;
      line-height: 16px;
      "
    >
    <div b="style: panelStyle, hover: hoveringIcon">
      <div style="text-align: left">
        <img src="https://viewmodel.org/paper-plane.png"
             style="
             max-height: 15px;
             margin-top: 2px;
             margin-left: 2px;
             cursor: pointer;
             "
             b="toggle: show"
        />
        <span style="font-size: 14px; margin-left: 10px; font-weight: bold;">View Models</span>
      </div>

      {
        this.components().map((c) => <DisplayComponent key={c.vmId} viewmodel={ c }/>)
      }


    </div>
      </div>
      }
});