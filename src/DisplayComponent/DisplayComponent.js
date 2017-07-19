
DisplayComponent({
  viewmodel: null,
  showChildren: false,
  name() {
    const vm = this.viewmodel();
    return vm ? vm.vmComponentName : '';
  },
  properties(){
    const arr = [];
    const vm = this.viewmodel();
    for(let prop in vm) {
      if (vm[prop] && (vm[prop].vmPropId || vm[prop].vmIsFunc)  && prop !== 'data-vm-parent' && prop !== 'data-bind') {
        arr.push({
          name: prop,
          value: vm[prop],
          isFunc: vm[prop].vmIsFunc
        })
      }
    }
    return arr;
  },
  children() {
    const vm = this.viewmodel();
    if (vm) {
      const ret = [];
      for(let v of vm.children()) {
        if (v.vmComponentName !== 'ViewModelExplorer') {
          ret.push({ viewmodel: v, vmId: v.vmId });
        }
      }
      return ret;
    } else {
      return [];
    }
  },
  headStyle() {
    const hasChildren = this.children().length > 0 || this.properties().length > 0;
    return {
      color: this.viewmodel() && this.viewmodel().valid() ? 'darkblue' : 'darkred',
      'font-weight': hasChildren ? 'bold' : 'normal',
      cursor: hasChildren ? 'pointer' : 'default',
      'font-size': '12px'
    };
  },
  render(){
    <ul style="list-style-type: none; padding-left: 10px; text-align: left;">
      <li><span b="text: name, toggle: showChildren, style: headStyle" />
        <div b="if: showChildren">
          <table>
            <tbody>
            <Property b="repeat: properties, key: name" />
            </tbody>
          </table>
          <DisplayComponent b="repeat: children, key: vmId"  />
        </div>

      </li>
    </ul>
  }
});