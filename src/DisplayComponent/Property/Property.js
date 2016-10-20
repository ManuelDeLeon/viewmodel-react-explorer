Property({
  name: '',
  nameStyle() {
    return {
      color: this.isFunc() || this.value.valid() ? undefined : 'darkred'
    }
  },
  value: undefined,
  isFunc: false,
  showFuncResult: false,
  objectValue: ViewModel.property.string
    .convertIn( function(value) { this.value( JSON.parse(value) ); } )
    .convertOut( function(value) { return JSON.stringify(this.value(), null, 2); } ),
  type() {
    return this.value.property && this.value.property.valueType;
  },
  isBoolean() {
    return !this.isFunc() && this.type() === 4;
  },
  isObject() {
    return !this.isFunc() && this.type() === 5 ;
  },
  isArray() {
    return !this.isFunc() && this.type() === 7;
  },
  isOther() {
    return !this.isFunc() && !(this.isBoolean() || this.isObject() || this.isArray());
  },
  arrayValue(){
    return this.value().toString();
  },
  isVmProp() {
    return ViewModel.properties[this.name()];
  },
  render() {
    <tr>
      <td b="text: name, style: nameStyle" />
      <td style="padding-left: 5px">
        <textarea rows="1" b="if: isOther, value: value" disabled={this.isVmProp()} style="font-family: Arial, Helvetica, sans-serif; border-radius: 4px;" />
        <input type="checkbox" b="if: isBoolean, check: value" />
        <textarea rows="4" b="if: isObject, value: objectValue" disabled={this.isVmProp()} style="font-family: Arial, Helvetica, sans-serif; border-radius: 4px;"/>
        <textarea disabled="disabled" b="if: isArray, value: arrayValue" style="font-family: Arial, Helvetica, sans-serif; border-radius: 4px;"/>
        <a b="if: isFunc && !isVmProp && !showFuncResult, click: showFuncResult(true)"
           style="cursor: pointer"
        >evaluate</a>
        <textarea disabled="disabled" rows="1" b="if: showFuncResult, value: value" style="font-family: Arial, Helvetica, sans-serif; border-radius: 4px;"/>
      </td>
    </tr>
  }
})