(function(e){function t(t){for(var a,l,s=t[0],r=t[1],u=t[2],d=0,p=[];d<s.length;d++)l=s[d],o[l]&&p.push(o[l][0]),o[l]=0;for(a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a]);c&&c(t);while(p.length)p.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],a=!0,s=1;s<n.length;s++){var r=n[s];0!==o[r]&&(a=!1)}a&&(i.splice(t--,1),e=l(l.s=n[0]))}return e}var a={},o={docs:0},i=[];function l(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.m=e,l.c=a,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)l.d(n,a,function(t){return e[t]}.bind(null,a));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/vue-form-components/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],r=s.push.bind(s);s.push=t,s=s.slice();for(var u=0;u<s.length;u++)t(s[u]);var c=r;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("e35a")},"07e9":function(e,t,n){"use strict";var a=n("3472"),o=n.n(a);o.a},"0e71":function(e,t,n){},1386:function(e,t,n){"use strict";var a=n("d075"),o=n.n(a);o.a},"1b50":function(e,t,n){"use strict";var a=n("de41"),o=n.n(a);o.a},"1e29":function(e,t,n){"use strict";var a=n("ecb0"),o=n.n(a);o.a},"2af9":function(e,t,n){"use strict";n("7f7f"),n("ac6a");var a,o=n("5176"),i=n.n(o),l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{class:{"vue-input":"textarea"!==e.type,"vue-textarea":"textarea"===e.type,"vue-input--prefix":e.$slots.prefix,"vue-input--suffix":e.$slots.suffix,"vue-input--prepend":e.$slots.prepend,"vue-input--append":e.$slots.append}},[e.$slots.prefix&&"textarea"!==e.type?n("div",{staticClass:"vue-input__prefix"},[e._t("prefix")],2):e._e(),e.$slots.suffix&&"textarea"!==e.type?n("div",{staticClass:"vue-input__suffix"},[e._t("suffix")],2):e._e(),e.$slots.prepend&&"textarea"!==e.type?n("div",{staticClass:"vue-input__prepend"},[e._t("prepend")],2):e._e(),"textarea"!==e.type?n("input",{staticClass:"vue-input__inner",attrs:{name:e.name,type:e.type,placeholder:e.placeholder,disabled:e.disabled,readonly:e.readonly,max:e.max,min:e.min,autocomplete:[e.autocomplete?"off":"on"]},domProps:{value:e.value},on:{input:e.onInput}}):n("textarea",{staticClass:"vue-textarea__inner",attrs:{name:e.name,type:e.type,placeholder:e.placeholder,disabled:e.disabled,readonly:e.readonly,rows:e.rows},domProps:{value:e.value},on:{input:e.onInput}}),this.$slots.append&&"textarea"!==e.type?n("div",{staticClass:"vue-input__append"},[e._t("append")],2):e._e()])},s=[],r=(n("c5f6"),{name:"VueInput",$_veeValidate:{name:function(){return this.name},value:function(){return this.value}},model:{prop:"value",event:"input"},props:{type:{type:String,default:"text"},value:{type:[String,Number],default:""},name:{type:String,default:""},readonly:{type:Boolean,default:!1},autocomplete:{type:Boolean,default:!1},min:{type:Number,default:null},max:{type:Number,default:null},placeholder:{type:String,default:""},disabled:{type:Boolean,default:!1},rows:{type:Number,default:3}},methods:{onInput:function(e){this.$emit("input",e.target.value)}}}),u=r,c=(n("5445"),n("2877")),d=Object(c["a"])(u,l,s,!1,null,null,null),p=d.exports,_=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("button",{staticClass:"vue-button",class:{"vue-button--primary":"primary"===e.type,"vue-button--success":"success"===e.type,"vue-button--warning":"warning"===e.type,"vue-button--danger":"danger"===e.type},attrs:{disabled:e.disabled},on:{click:function(t){return e.$emit("click")}}},[e._t("default")],2)},f=[],v={name:"VueButton",props:{type:{type:String,default:"default"},disabled:{type:Boolean,default:!1}}},h=v,m=(n("999d"),Object(c["a"])(h,_,f,!1,null,null,null)),b=m.exports,g=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"vue-checkbox"},[n("label",{staticClass:"vue-checkbox",class:{"vue-checkbox--checked":e.isChecked,"vue-checkbox--bordered":"border"===e.type,"vue-checkbox--disabled":e.disabled}},[n("input",{attrs:{id:"vue-checkbox-"+e._uid,name:e.name,disabled:e.disabled,type:"checkbox"},domProps:{checked:e.isChecked,value:e.value},on:{change:e.onChange}}),n("div",{staticClass:"vue-checkbox__inner"},[e.isChecked?n("i",{staticClass:"icon-check"}):e._e()]),n("span",{staticClass:"vue-checkbox__label"},[e.label?n("span",[e._v(e._s(e.label))]):e._t("default")],2)])])},y=[],E=(n("7514"),n("7618")),C={name:"VueCheckbox",$_veeValidate:{name:function(){return this.name},value:function(){return this.checked}},model:{prop:"checked",event:"change"},props:{checked:Boolean,value:{type:[String,Number,Boolean],default:""},name:{type:String,default:""},label:{type:String,default:""},type:{type:String,default:""},disabled:{type:Boolean,default:!1}},computed:{isGroup:function(){return"VueCheckboxGroup"===this.$parent.$options.name},isChecked:function(){var e=this;if(!this.isGroup)return this.checked;if(this.$parent.modelValue){if("object"===Object(E["a"])(this.value))return!!this.$parent.modelValue.find(function(t){return t.id===e.value.id});if("string"===typeof this.value||"number"===typeof this.value)return!!this.$parent.modelValue.find(function(t){return t===e.value})}return!1}},methods:{onChange:function(){var e=this;if(!this.disabled)return this.isGroup?void(this.isChecked?this.$parent.value.find(function(t){"object"===Object(E["a"])(e.value)&&e.$nextTick(function(){t.id===e.value.id&&e.$parent.value.splice(e.$parent.value.indexOf(t),1)}),"string"!==typeof e.value&&"number"!==typeof e.value||e.$nextTick(function(){t===e.value&&e.$parent.value.splice(e.$parent.value.indexOf(t),1)})}):this.$parent.value.push(this.value)):this.$emit("change",!this.checked)}}},P=C,k=(n("3b6b"),Object(c["a"])(P,g,y,!1,null,null,null)),x=k.exports,O=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"vue-checkbox-group",attrs:{name:e.name}},[e._t("default")],2)},$=[],w={name:"VueCheckboxGroup",$_veeValidate:{name:function(){return this.name},value:function(){return this.modelValue}},model:{prop:"modelValue",event:"change"},props:{modelValue:{type:Array,default:function(){return[]}},name:{type:String,default:""}},data:function(){return{value:[]}},watch:{modelValue:function(){this.value=this.modelValue},value:function(){this.$emit("change",this.value)}},created:function(){this.value=this.modelValue}},T=w,M=Object(c["a"])(T,O,$,!1,null,null,null),D=M.exports,I=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("label",{staticClass:"vue-radio",class:{"vue-radio--checked":e.isChecked,"vue-radio--disabled":e.disabled,"vue-radio--bordered":"border"===e.type}},[n("span",{staticClass:"vue-radio__input"},[n("span",{staticClass:"vue-radio__inner"}),n("input",{attrs:{id:"vue-radio-"+e._uid,name:e.name,disabled:e.disabled,type:"radio"},domProps:{checked:e.isChecked,value:e.value},on:{change:e.onChange}})]),n("span",{staticClass:"vue-radio__label"},[e.label?n("span",[e._v(e._s(e.label))]):e._t("default")],2)])},j=[],A={name:"VueRadio",$_veeValidate:{name:function(){return this.name},value:function(){return this.modelValue}},model:{prop:"modelValue",event:"change"},props:{modelValue:{type:[String,Number],default:function(){}},value:{type:[String,Number],default:""},label:{type:String,default:""},type:{type:String,default:""},name:{type:String,default:""},disabled:{type:Boolean,default:!1}},computed:{isChecked:function(){return this.modelValue===this.value}},methods:{onChange:function(){if(!this.disabled)return this.$emit("change",this.value)}}},B=A,S=(n("9f05"),Object(c["a"])(B,I,j,!1,null,null,null)),V=S.exports,L=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{directives:[{name:"click-outside",rawName:"v-click-outside",value:e.onClosePopper,expression:"onClosePopper"}],staticClass:"vue-select",class:{"vue-select--opened":e.showPopper,"vue-select--disabled":e.disabled},on:{click:e.togglePopper,keydown:[function(t){return t.type.indexOf("key")||38===t.keyCode?e.scrollByArrow(t):null},function(t){return t.type.indexOf("key")||40===t.keyCode?e.scrollByArrow(t):null},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.onEnter(t)}]}},[e.multiple?n("span",{staticClass:"vue-select__tag"},[n("span",{ref:"tags"},[e._l(e.selected,function(t,a){return[e.collapseTags&&a<1?n("span",{key:t.value,staticClass:"vue-select__tag-item"},[e._v("\n          "+e._s(t.label)+"\n          "),n("i",{staticClass:"icon-close",on:{click:function(n){return n.stopPropagation(),e.onRemoveTag(t)}}})]):e._e(),e.collapseTags&&1===a?n("span",{key:t.value,staticClass:"vue-select__tag-item vue-select__tag-item--collapsed"},[e._v("\n          +"+e._s(e.selected.length-1)+"\n        ")]):e._e(),e.collapseTags?e._e():n("span",{key:t.value,staticClass:"vue-select__tag-item"},[e._v("\n          "+e._s(t.label)+"\n          "),n("i",{staticClass:"icon-close",on:{click:function(n){return n.stopPropagation(),e.onRemoveTag(t)}}})])]})],2)]):e._e(),n("vue-input",{ref:"input",attrs:{readonly:!0,placeholder:e.computedPlaceholder,disabled:e.disabled,name:e.name},model:{value:e.selected.label,callback:function(t){e.$set(e.selected,"label",t)},expression:"selected.label"}},[n("template",{slot:"suffix"},[n("i",{staticClass:"icon-chevron-down"})])],2),e.showPopper?n("vue-popper",{ref:"popper",attrs:{"append-to":e.appendEl,"full-size":!0}},[n("div",{ref:"list",staticClass:"vue-select__option-list"},[e.data.length?e._t("default"):n("div",{staticClass:"vue-select__option-list-empty"},[e._v("\n        "+e._s(e.emptyText)+"\n      ")])],2)]):e._e()],1)},U=[],R=(n("20d6"),n("bd86")),W=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"vue-popper",attrs:{id:"vue-popper-"+e._uid},on:{mouseover:function(t){return e.$emit("mouseover")},mouseout:function(t){return e.$emit("mouseout")}}},[n("div",{staticClass:"vue-popper__inner",style:{"max-height":e.height+"px"}},[e._t("default")],2),n("div",{staticClass:"vue-popper__arrow",attrs:{"x-arrow":""}})])},K=[],H=n("f0bd"),q={name:"VuePopper",props:{appendTo:{type:[String,HTMLDivElement],default:""},fullSize:{type:Boolean,default:!1},placement:{type:String,default:"bottom-start"},popperOptions:{type:Object,default:function(){}},height:{type:[String,Number],default:230}},data:function(){return{popper:void 0}},mounted:function(){var e=this;document.body.appendChild(this.$el),this.$nextTick(function(){e.init()})},beforeDestroy:function(){this.$el.remove()},methods:{init:function(){var e=this.$el,t={placement:this.placement,modifiers:{fullSize:{enabled:this.fullSize,order:840,fn:function(e){return e.styles.minWidth=e.offsets.reference.width+"px",e.offsets.popper.left=e.offsets.reference.left,e}}}},n=i()({},t,this.popperOptions);this.popper=new H["a"](this.appendTo,e,n),this.update()},update:function(){this.popper.scheduleUpdate()}}},N=q,F=(n("eb56"),Object(c["a"])(N,W,K,!1,null,null,null)),G=F.exports,z={bind:function(e,t,n){if("function"!==typeof t.value){var a=n.context.name,o="provided expression '".concat(t.expression,"' is not a function, but has to be");a&&(o+="Found in component '".concat(a,"'")),console.warn("[v-click-outside]",o)}var i=t.modifiers.bubble,l=function(n){(i||!e.contains(n.target)&&e!==n.target)&&t.value(n)};e.$_vfcClickOutside_=l,document.addEventListener("click",l)},unbind:function(e,t){document.removeEventListener("click",e.$_vfcClickOutside_),e.$_vfcClickOutside_=null}},J={name:"VueSelect",$_veeValidate:{name:function(){return this.name},value:function(){return this.value}},components:(a={},Object(R["a"])(a,p.name,p),Object(R["a"])(a,G.name,G),a),directives:{clickOutside:z},provide:function(){return{select:this}},model:{prop:"value",event:"change"},props:{data:{type:Array,default:function(){return[]}},value:{type:[String,Number,Array],default:""},placeholder:{type:String,default:""},multiple:{type:Boolean,default:!1},collapseTags:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},emptyText:{type:String,default:"Empty list"},name:{type:String,default:""}},data:function(){return{appendEl:"",selected:this.multiple?[]:{},showPopper:!1,aheadPointer:0,pointerPosTop:null,viewportHeight:null,tagsHeight:null}},computed:{computedPlaceholder:function(){return this.multiple?0===this.selected.length?this.placeholder:"":this.placeholder},selectedValue:function(){return this.selected.map(function(e){return e.value})}},watch:{showPopper:function(e){var t=this;e&&(this.$nextTick(function(){t.getViewportHeight(),t.getPointerPosTop()}),this.$refs.input.$el.querySelector("input").focus())},value:function(){this.setInitValue(),this.multiple&&this.refreshInputHeight()}},created:function(){var e=this;this.setInitValue(),this.$on("option:select",function(t){e.multiple?(e.addItem(t),e.refreshInputHeight(),e.$emit("change",e.selectedValue),e.$refs.popper.update()):(e.selected=t,e.$emit("change",t.value),e.onClosePopper())})},mounted:function(){this.appendEl=this.$el,this.refreshInputHeight()},methods:{setInitValue:function(){var e=this;this.value&&(this.multiple?this.selected=this.value.map(function(t){return e.data.find(function(e){return e.value===t})}):this.selected=this.data.find(function(t){return t.value===e.value}))},togglePopper:function(){this.disabled||(this.showPopper=!this.showPopper)},onClosePopper:function(){this.showPopper&&(this.showPopper=!1)},onClosePopper2:function(){console.warn("sss")},onEnter:function(){var e=this.data[this.aheadPointer];this.multiple?(this.addItem(e),this.$emit("change",this.selectedValue)):this.$emit("change",e.value),this.showPopper=!1},getViewportHeight:function(){this.viewportHeight=this.$refs.popper.$el.offsetHeight},getPointerPosTop:function(){this.pointerPosTop=this.$refs.list.children[this.aheadPointer].offsetTop},getTagsHeight:function(){this.multiple&&(this.tagsHeight=this.$refs.tags.offsetHeight)},setInputHeight:function(){if(this.multiple){var e=this.$refs.input.$el.querySelector("input");this.tagsHeight>40?e.style.height=this.tagsHeight+14+"px":e.style.height="40px"}},addItem:function(e){if(!e.disabled){var t=this.selected.findIndex(function(t){return t.value===e.value});-1===t?this.selected.push(e):this.selected.splice(t,1)}},scrollByArrow:function(e){if(this.data&&this.showPopper){var t=this.$refs.list.children[0].offsetHeight,n=this.$refs.popper.$el.querySelector(".vue-popper__inner"),a=10,o=6;38===e.keyCode&&(this.aheadPointer>0&&this.aheadPointer--,this.getPointerPosTop()),40===e.keyCode&&(this.aheadPointer<this.data.length-1&&this.aheadPointer++,this.getPointerPosTop()),this.pointerPosTop<n.scrollTop&&(n.scrollTop=this.pointerPosTop-a),this.pointerPosTop>n.scrollTop+this.viewportHeight-t&&(n.scrollTop=this.pointerPosTop-this.viewportHeight+t+o)}},refreshInputHeight:function(){var e=this;this.$nextTick(function(){e.getTagsHeight(),e.setInputHeight()})},onRemoveTag:function(e){var t=this.selected.findIndex(function(t){return t.value===e.value});this.$emit("remove-tag",this.selected[t]),this.selected.splice(t,1),this.$emit("change",this.selectedValue),this.showPopper&&this.$refs.popper.update()}}},Q=J,X=(n("bb3f"),Object(c["a"])(Q,L,U,!1,null,null,null)),Y=X.exports,Z=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"vue-select__option",class:{"vue-select__option--selected":e.isSelected,"vue-select__option--hovered":e.index===e.select.aheadPointer},attrs:{disabled:e.disabled},on:{click:e.onSelect,mouseover:e.onHover}},[e._v("\n  "+e._s(e.label)+"\n")])},ee=[],te=n("a745"),ne=n.n(te),ae={name:"VueOption",inject:["select"],props:{value:{type:[String,Number],default:""},label:{type:[String,Number],default:""},disabled:{type:Boolean,default:!1}},computed:{isSelected:function(){var e=this;return this.select.multiple?!!this.select.selected.find(function(t){return t.value===e.value}):this.select.value===this.value},index:function(){var e=this;if(ne()(this.select.data)&&this.select.data.length)return this.select.data.findIndex(function(t){return t.value===e.value})}},methods:{onSelect:function(){this.select.$emit("option:select",{value:this.value,label:this.label,disabled:this.disabled})},onHover:function(){this.select.aheadPointer=this.index}}},oe=ae,ie=(n("b5b8"),Object(c["a"])(oe,Z,ee,!1,null,null,null)),le=ie.exports,se=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"vue-form",class:{"vue-form--label-left":"left"===e.labelPosition,"vue-form--label-right":"right"===e.labelPosition,"vue-form--label-top":"top"===e.labelPosition}},[e._t("default")],2)},re=[],ue={name:"VueForm",provide:function(){return{form:this}},props:{model:{type:Object,default:function(){}},labelPosition:{type:String,default:"right"},labelWidth:{type:String,default:"100px"}}},ce=ue,de=(n("1e29"),Object(c["a"])(ce,se,re,!1,null,null,null)),pe=de.exports,_e=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"vue-form__item"},[e.label||"top"!==e.form.labelPosition?n("div",{staticClass:"vue-form__item-label",style:{"flex-basis":e.form.labelWidth}},[e._v("\n    "+e._s(e.label)+"\n  ")]):e._e(),n("div",{staticClass:"vue-form__item-content"},[e._t("default"),n("transition",{attrs:{name:"form-slide-fade"}},[e.showErrorMsg?n("div",{staticClass:"vue-form__item-error"},[e._v("\n        "+e._s(e.showErrorMsg)+"\n      ")]):e._e()])],2)])},fe=[],ve={name:"VueFormItem",inject:["form"],props:{label:{type:String,default:""},field:{type:String,default:""}},computed:{showErrorMsg:function(){var e,t=this;if(this.errors.items.length){var n=this.errors.items.find(function(e){return e.field===t.field});n&&(e=n.msg)}return e}}},he=ve,me=(n("57fe"),Object(c["a"])(he,_e,fe,!1,null,null,null)),be=me.exports,ge=n("7bb1"),ye=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"vue-form-builder"},[n("vue-form",{ref:"form",attrs:{model:e.clonedModel,"label-position":e.options.labelPosition,"label-width":e.options.labelWidth,"data-vv-scope":"form-1"}},e._l(e.schema.fields,function(t,a){return n("vue-form-item",{key:t.label+a,attrs:{label:t.label,field:t.model}},["input"===t.type?[n("vue-input",{directives:[{name:"validate",rawName:"v-validate",value:t.validate,expression:"field.validate"}],key:t.name+a,ref:t.name,refInFor:!0,attrs:{type:t.inputType,name:t.name,readonly:t.readonly,placeholder:t.placeholder,disabled:t.disabled},on:{input:e.onUpdate},model:{value:e.clonedModel[t.model],callback:function(n){e.$set(e.clonedModel,t.model,n)},expression:"clonedModel[field.model]"}})]:e._e(),"select"===t.type?[n("vue-select",{directives:[{name:"validate",rawName:"v-validate",value:t.validate,expression:"field.validate"}],attrs:{data:t.options,name:t.name,placeholder:t.placeholder,multiple:Array.isArray(e.clonedModel[t.model])},on:{change:e.onUpdate},model:{value:e.clonedModel[t.model],callback:function(n){e.$set(e.clonedModel,t.model,n)},expression:"clonedModel[field.model]"}},e._l(t.options,function(e){return n("vue-option",{key:e.value,attrs:{value:e.value,label:e.label}})}),1)]:e._e(),"checkbox"===t.type?[Array.isArray(e.clonedModel[t.model])?n("vue-checkbox-group",{directives:[{name:"validate",rawName:"v-validate",value:t.validate,expression:"field.validate"}],attrs:{name:t.name},on:{change:e.onUpdate},model:{value:e.clonedModel[t.model],callback:function(n){e.$set(e.clonedModel,t.model,n)},expression:"clonedModel[field.model]"}},e._l(t.options,function(e){return n("vue-checkbox",{key:e.value,attrs:{type:t.inputType,value:e.value,label:e.label}})}),1):n("vue-checkbox",{directives:[{name:"validate",rawName:"v-validate",value:t.validate,expression:"field.validate"}],attrs:{type:t.inputType,name:t.name,label:t.checkboxLabel},on:{change:e.onUpdate},model:{value:e.clonedModel[t.model],callback:function(n){e.$set(e.clonedModel,t.model,n)},expression:"clonedModel[field.model]"}})]:e._e(),"radio"===t.type?e._l(t.options,function(a){return n("vue-radio",{directives:[{name:"validate",rawName:"v-validate",value:t.validate,expression:"field.validate"}],key:a.value,attrs:{type:t.inputType,name:t.name,value:a.value,label:a.label},on:{change:e.onUpdate},model:{value:e.clonedModel[t.model],callback:function(n){e.$set(e.clonedModel,t.model,n)},expression:"clonedModel[field.model]"}})}):e._e(),"actions"===t.type?e._l(t.buttons,function(t,a){return n("vue-button",{key:a,attrs:{type:t.buttonType},on:{click:function(n){return e.onAction(t.type)}}},[e._v("\n          "+e._s(t.buttonLabel)+"\n        ")])}):e._e()],2)}),1)],1)},Ee=[],Ce=n("a4bb"),Pe=n.n(Ce);function ke(e){return Pe()(e).reduce(function(t,n){return ne()(e[n])?t[n]=e[n].slice(0):t[n]=e[n],t},{})}var xe={name:"VueFormBuilder",components:{VueForm:pe,VueFormItem:be,VueInput:p,VueCheckbox:x,VueCheckboxGroup:D,VueRadio:V,VueSelect:Y,VueOption:le,VueButton:b},model:{prop:"model",event:"update"},props:{model:{type:Object,default:function(){}},schema:{type:Object,default:function(){}},options:{type:Object,default:function(){return{labelPosition:void 0,labelWidth:void 0}}}},data:function(){return{clonedModel:{}}},created:function(){this.clonedModel=ke(this.model)},mounted:function(){this.$forceUpdate()},methods:{isSelectMultiple:function(e){return ne()(e)},onUpdate:function(){this.$emit("update",this.clonedModel)},onAction:function(e){this.$emit("action",{type:e,form:this.$refs.form})}}},Oe=xe,$e=Object(c["a"])(Oe,ye,Ee,!1,null,null,null),we=$e.exports;n.d(t,"a",function(){return b});var Te=[p,b,x,D,V,Y,le,pe,be,we];t["b"]={install:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n={events:"change|input|blur"};t.veeValidate&&(n=i()(n,t.veeValidate)),e.use(ge["a"],n),Te.forEach(function(t){e.component(t.name,t)})}}},3472:function(e,t,n){},"3b6b":function(e,t,n){"use strict";var a=n("0e71"),o=n.n(a);o.a},4932:function(e,t,n){},"4e75":function(e,t,n){},5445:function(e,t,n){"use strict";var a=n("b888"),o=n.n(a);o.a},"57fe":function(e,t,n){"use strict";var a=n("9ad4"),o=n.n(a);o.a},"61c0":function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app-tabs"},[n("div",{staticClass:"app-tabs__labels"},e._l(e.tabsLabels,function(t){return n("div",{key:t,staticClass:"app-tabs__labels-item",class:{active:e.isActive(t)},on:{click:function(n){return e.onChangeTab(t)}}},[e._v("\n      "+e._s(t)+"\n    ")])}),0),n("div",{staticClass:"app-tabs__body"},[e._t("default")],2)])},o=[],i=(n("7f7f"),{name:"AppTabs",props:{active:String},model:{event:"change",prop:"active"},data:function(){return{value:"",tabsLabels:[]}},created:function(){this.value=this.active},mounted:function(){this.getTabsLabels()},watch:{active:function(){this.value=this.active},value:function(){this.$emit("change",this.value)}},methods:{onChangeTab:function(e){this.$emit("change",e)},getTabsLabels:function(){this.tabsLabels=this.$children.map(function(e){return e.name})},isActive:function(e){return e===this.value}}}),l=i,s=(n("1386"),n("2877")),r=Object(s["a"])(l,a,o,!1,null,null,null);t["a"]=r.exports},"7ba3":function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{directives:[{name:"show",rawName:"v-show",value:e.isActive,expression:"isActive"}],staticClass:"app-tabs__item",class:{"app-tabs__item--active":e.isActive}},[n("div",{staticClass:"app-tabs__item-body"},[e._t("default")],2)])},o=[],i=(n("7f7f"),{name:"AppTabsItem",props:{name:String},computed:{isActive:function(){return this.name===this.$parent.value}}}),l=i,s=n("2877"),r=Object(s["a"])(l,a,o,!1,null,null,null);t["a"]=r.exports},"98f2":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",function(){return parse});var core_js_modules_es6_string_link__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("b54a"),core_js_modules_es6_string_link__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(core_js_modules_es6_string_link__WEBPACK_IMPORTED_MODULE_0__),_home_travis_build_antonreshetov_vue_form_components_node_modules_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("5176"),_home_travis_build_antonreshetov_vue_form_components_node_modules_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(_home_travis_build_antonreshetov_vue_form_components_node_modules_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1__),core_js_modules_es6_regexp_match__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("4917"),core_js_modules_es6_regexp_match__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(core_js_modules_es6_regexp_match__WEBPACK_IMPORTED_MODULE_2__),core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("a481"),core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_3__),vue_dist_vue__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("ba4c"),vue_dist_vue__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(vue_dist_vue__WEBPACK_IMPORTED_MODULE_4__),_src_components__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("2af9"),_components_Tabs_Tabs_vue__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("61c0"),_components_Tabs_TabsItem_vue__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("7ba3"),he__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("92d7"),he__WEBPACK_IMPORTED_MODULE_8___default=__webpack_require__.n(he__WEBPACK_IMPORTED_MODULE_8__),marked__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("0e54"),marked__WEBPACK_IMPORTED_MODULE_9___default=__webpack_require__.n(marked__WEBPACK_IMPORTED_MODULE_9__);function sluggify(e){return e.toLowerCase().trim().replace(/:.*:/g,"").replace(/ +$/g,"").replace(/(&amp;| & )/g,"-and-").replace(/&(.+?);/g,"").replace(/[\s\W-]+/g,"-")}function parse(markdown,cb){var renderer=new marked__WEBPACK_IMPORTED_MODULE_9___default.a.Renderer({langPrefix:"lang-"}),base=new marked__WEBPACK_IMPORTED_MODULE_9___default.a.Renderer({langPrefix:"lang-"}),vms=[],vm,example=function example(code){var template=code.match(/<template>(.|\n)*<\/template>/g),params=code.match(/export default\s+((.|\s)+(?=<\/script>))/);params=eval("params = ".concat(params[1]));var exampleOptions=_home_travis_build_antonreshetov_vue_form_components_node_modules_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1___default()({},params,{template:"<div>".concat(template,"</div>")}),exampleVm=new vue_dist_vue__WEBPACK_IMPORTED_MODULE_4___default.a(exampleOptions).$mount();return vm=new vue_dist_vue__WEBPACK_IMPORTED_MODULE_4___default.a({template:'\n      <app-tabs v-model="activeTab">\n        <app-tabs-item name="preview"></app-tabs-item>\n        <app-tabs-item name="code">\n          <pre>\n            <code id="code">'.concat(Object(he__WEBPACK_IMPORTED_MODULE_8__["escape"])(code),"</code>\n          </pre>\n        </app-tabs-item>\n      </app-tabs>\n      "),data:function(){return{activeTab:"preview"}}}).$mount(),vm.$el.querySelector(".app-tabs__item").appendChild(exampleVm.$el),vms.push(vm),'<div id="demo-'.concat(vms.length-1,'"></div>')};return renderer.strong=function(e){return"Note"===e?'<span class="app-label">'.concat(e,"</span>"):"<strong>".concat(e,"</strong>")},renderer.list=function(e){return'<ul class="app-list">'.concat(e,"</ul>")},renderer.link=function(e,t,n){return e.match(/\.md/)?base.link(e.replace(/.md(.*)/,"$1"),t,n):base.link(e,t,n)},renderer.code=function(e,t,n){return"example"===t?example(e):"<div>".concat(base.code(e,t,n),"</div>")},renderer.hr=function(){return'<hr class="app-hr">'},renderer.table=function(e,t){return'<table class="app-table">\n        <thead>'.concat(e,"</thead>\n        <tbody>").concat(t,"</tbody>\n      </table>")},renderer.heading=function(e,t){return"<h".concat(t,' id="').concat(sluggify(e),'"><span class="anchor">').concat(e,"</span></h").concat(t,">")},[marked__WEBPACK_IMPORTED_MODULE_9___default()(markdown,{renderer:renderer}),vms]}vue_dist_vue__WEBPACK_IMPORTED_MODULE_4___default.a.use(_src_components__WEBPACK_IMPORTED_MODULE_5__["b"]),vue_dist_vue__WEBPACK_IMPORTED_MODULE_4___default.a.component("app-tabs",_components_Tabs_Tabs_vue__WEBPACK_IMPORTED_MODULE_6__["a"]),vue_dist_vue__WEBPACK_IMPORTED_MODULE_4___default.a.component("app-tabs-item",_components_Tabs_TabsItem_vue__WEBPACK_IMPORTED_MODULE_7__["a"])},"999d":function(e,t,n){"use strict";var a=n("4932"),o=n.n(a);o.a},"9ad4":function(e,t,n){},"9f05":function(e,t,n){"use strict";var a=n("a47e"),o=n.n(a);o.a},a47e:function(e,t,n){},a61c:function(e,t,n){},af80:function(e,t,n){},b501:function(e,t,n){"use strict";var a=n("a61c"),o=n.n(a);o.a},b5b8:function(e,t,n){"use strict";var a=n("af80"),o=n.n(a);o.a},b888:function(e,t,n){},bb3f:function(e,t,n){"use strict";var a=n("e208"),o=n.n(a);o.a},cdb8:function(e,t,n){},d075:function(e,t,n){},d678:function(e,t,n){"use strict";var a=n("cdb8"),o=n.n(a);o.a},de41:function(e,t,n){},e208:function(e,t,n){},e35a:function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var a,o,i=n("2b0e"),l=n("8c4f"),s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("div",{staticClass:"home__hero"},[e._m(0),n("div",{staticClass:"logo__text"},[e._v("Vue Form Components")]),n("div",{staticClass:"description"},[e._v("Clean & minimal vue form elements with validation")]),n("router-link",{attrs:{to:"/components/install"}},[n("vue-button",[e._v("Get started")])],1)],1)])},r=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"logo"},[a("img",{attrs:{src:n("eb94"),alt:""}})])}],u=n("bd86"),c=(n("7f7f"),n("2af9")),d={name:"Home",components:Object(u["a"])({},c["a"].name,c["a"])},p=d,_=(n("b501"),n("2877")),f=Object(_["a"])(p,s,r,!1,null,null,null),v=f.exports,h=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"page"},[a("div",{staticClass:"header"},[a("div",{staticClass:"header__logo"},[a("router-link",{attrs:{to:"/"}},[a("img",{attrs:{src:n("eb94"),alt:""}}),e._v(" Vue Form Components")])],1),a("div",{staticClass:"header__link"},[a("router-link",{attrs:{to:"/changelog"}},[e._v("Changelog")]),a("a",{attrs:{href:"https://github.com/antonreshetov/vue-form-components",target:"_blank"}},[e._v("Github")])],1)]),a("div",{staticClass:"sidebar"},[a("carbon-ad"),a("nav",{staticClass:"nav"},[a("div",{staticClass:"nav__category"},[e._v("Development")]),e._l(e.nav.development,function(t){return a("div",{key:t.title,staticClass:"nav__item"},[a("router-link",{attrs:{to:t.path}},[e._v(e._s(t.title))])],1)}),a("div",{staticClass:"nav__category"},[e._v("Component")]),e._l(e.nav.components,function(t){return a("div",{key:t.title,staticClass:"nav__item"},[a("router-link",{attrs:{to:t.path}},[e._v(e._s(t.title))])],1)})],2)],1),a("div",{ref:"content",staticClass:"content"},[a("div",{attrs:{id:"html"},domProps:{innerHTML:e._s(e.html)}})])])},m=[],b=(n("4917"),n("a481"),n("ac6a"),n("768b")),g=n("98f2"),y=n("bc3a"),E=n.n(y),C=n("1487"),P=n.n(C),k=(n("581d"),{development:[{title:"Install",path:"/components/install"}],components:[{title:"Input",path:"/components/input"},{title:"Select",path:"/components/select"},{title:"Checkbox",path:"/components/checkbox"},{title:"Radio",path:"/components/radio"},{title:"Button",path:"/components/button"},{title:"Form",path:"/components/form"},{title:"Form Builder",path:"/components/form-builder"}]}),x={watch:{$route:function(e,t){e.path!==t.path&&this.$el.querySelector("#carbonads")&&(this.$el.innerHTML="",this.load())}},mounted:function(){this.load()},methods:{load:function(){var e=document.createElement("script");e.id="_carbonads_js",e.src="//cdn.carbonads.com/carbon.js?serve=CK7DEK7I&placement=antonreshetovgithubio",this.$el.appendChild(e)}},render:function(e){return e("div",{class:"carbon"})}},O=x,$=(n("07e9"),Object(_["a"])(O,a,o,!1,null,null,null)),w=$.exports,T={name:"Page",components:{CarbonAd:w},data:function(){return{html:"",nav:k}},mounted:function(){this.buildPage()},watch:{"$route.path":function(){this.buildPage(),window.ga("set","page",this.$route.path),window.ga("send","pageview")}},methods:{buildPage:function(){var e=this,t="/vue-form-components/docs/";"docs"===this.$route.meta?E.a.get("".concat(t).concat(this.$route.params.component,".md")).then(function(t){var n,a=Object(g["a"])(t.data),o=Object(b["a"])(a,2);e.html=o[0],n=o[1],e.$nextTick(function(){for(var t=0;t<n.length;t++)document.getElementById("demo-".concat(t)).appendChild(n[t].$el);document.querySelectorAll("pre code").forEach(function(e){P.a.highlightBlock(e)}),e.scrollToTop(),e.addScrollToHeading(),e.setScrollByUrlHash()})}):E.a.get("".concat(t,"CHANGELOG.md")).then(function(t){e.html=Object(g["a"])(t.data)[0]})},addScrollToHeading:function(){var e=this,t=document.querySelectorAll("h2");t.forEach(function(t){t.children[0].addEventListener("click",function(){var n=window.location.hash,a=/#[^\/].+/;a.test(n)?window.location.hash=n.replace(a,"#".concat(t.id)):window.location.hash="".concat(window.location.hash,"#").concat(t.id),e.$refs.content.scrollTo(0,t.offsetTop-100)})})},setScrollByUrlHash:function(){var e=window.location.hash,t=/#[^\/].+/;if(t.test(e)){var n=e.match(t),a=document.querySelector(n);this.$refs.content.scrollTo(0,a.offsetTop-100)}},scrollToTop:function(){this.$refs.content.scrollTop=0}}},M=T,D=(n("1b50"),Object(_["a"])(M,h,m,!1,null,null,null)),I=D.exports;i["a"].use(l["a"]);var j=new l["a"]({linkActiveClass:"active",routes:[{path:"/",name:"home",component:v},{path:"/components/:component",component:I,meta:"docs"},{path:"/changelog",component:I}]}),A=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app"},[n("router-view")],1)},B=[],S={name:"App",data:function(){return{nav:k}}},V=S,L=(n("d678"),Object(_["a"])(V,A,B,!1,null,null,null)),U=L.exports;i["a"].config.productionTip=!1,new i["a"]({render:function(e){return e(U)},router:j}).$mount("#app")},eb56:function(e,t,n){"use strict";var a=n("4e75"),o=n.n(a);o.a},eb94:function(e,t,n){e.exports=n.p+"img/logo.91d94fd4.svg"},ecb0:function(e,t,n){}});
//# sourceMappingURL=docs.1c46bb9f.js.map