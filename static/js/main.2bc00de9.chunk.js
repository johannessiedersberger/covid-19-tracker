(this["webpackJsonpcovid-19-tracker-react"]=this["webpackJsonpcovid-19-tracker-react"]||[]).push([[0],{153:function(e,t,a){e.exports=a(284)},158:function(e,t,a){},159:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},160:function(e,t,a){},284:function(e,t,a){"use strict";a.r(t);var s=a(0),r=a.n(s),n=a(22),c=a.n(n),o=(a(158),a(159),a(160),a(17)),l=a(18),i=a(20),u=a(19),d=a(291),f=(a(161),function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(e){var s;return Object(o.a)(this,a),(s=t.call(this,e)).countryOptions=function(){var e=[];return s.props.countryData.map((function(t){var a=t.countryInfo.iso2;null!==a&&(a=a.toLowerCase()),e.push({key:t.country,value:t.country,flag:a,text:t.country})})),e},s.selectionChanged=function(e){console.log(e),s.props.countryData.map((function(t){t.country===e&&s.props.selectedCountryChanged({country:t,lat:t.countryInfo.lat,long:t.countryInfo.long})}))},s}return Object(l.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement(d.a,{placeholder:"Select Country",fluid:!0,search:!0,selection:!0,options:this.countryOptions(),onChange:function(t,a){e.selectionChanged(a.value)}})}}]),a}(s.Component)),m=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(e){return Object(o.a)(this,a),t.call(this,e)}return Object(l.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"row header-container"},r.a.createElement("div",{className:"col title-container"},r.a.createElement("h1",null,"Covid-19"),r.a.createElement("h4",null,"Coronavirus")),r.a.createElement("div",{className:"col search-container"},r.a.createElement(f,{countryData:this.props.countryData,selectedCountryChanged:function(t){return e.props.selectedCountryChanged(t)}})))}}]),a}(s.Component),h=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(e){var s;return Object(o.a)(this,a),(s=t.call(this,e)).setCardValues=function(){for(var e=Object.values(s.state.colors),t=Object.values(s.state.tabCasesRefs),a=Object.values(s.state.caseNumbers),r=0;r<e.length;r++){var n='\n                <div style="color:'.concat(e[r],'" >\n                    ').concat(s.setCommas(a[r]),"\n                </div>\n            ");t[r].current.innerHTML=n}},s.state={colors:{allCases:"#1d2c4d",activeCases:"#FF0000",recoveredCases:"#25b840",deathsCases:"#020d1f"},tabCasesRefs:{allCasesRef:r.a.createRef(),activeCasesRef:r.a.createRef(),recoveredCasesRef:r.a.createRef(),deathsCasesRef:r.a.createRef()},tabRefs:{allCasesRef:r.a.createRef(),activeCasesRef:r.a.createRef(),recoveredCasesRef:r.a.createRef(),deathsCasesRef:r.a.createRef()},caseNumbers:{allCases:s.props.worldData.cases,activeCases:s.props.worldData.active,recovered:s.props.worldData.recovered,deaths:s.props.worldData.deaths}},s}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.setCardValues(),this.placeEvents(),this.changeSelectedButton(this.state.tabRefs.allCasesRef)}},{key:"setCommas",value:function(e){return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}},{key:"placeEvents",value:function(){var e=this;this.state.tabRefs.allCasesRef.current.addEventListener("click",(function(){e.changeSelectedButton(e.state.tabRefs.allCasesRef),e.props.caseTypeChanged("cases")}),!1),this.state.tabRefs.activeCasesRef.current.addEventListener("click",(function(){e.changeSelectedButton(e.state.tabRefs.activeCasesRef),e.props.caseTypeChanged("active")}),!1),this.state.tabRefs.recoveredCasesRef.current.addEventListener("click",(function(){e.changeSelectedButton(e.state.tabRefs.recoveredCasesRef),e.props.caseTypeChanged("recovered")}),!1),this.state.tabRefs.deathsCasesRef.current.addEventListener("click",(function(){e.changeSelectedButton(e.state.tabRefs.deathsCasesRef),e.props.caseTypeChanged("deaths")}),!1)}},{key:"changeSelectedButton",value:function(e){Object.values(this.state.tabRefs).forEach((function(e){e.current.style.backgroundColor="#EFF2F6"})),e.current.style.backgroundColor="lightgrey"}},{key:"render",value:function(){return r.a.createElement("div",{className:"row stats-container"},r.a.createElement("div",{className:"col"},r.a.createElement("div",{className:"card",ref:this.state.tabRefs.allCasesRef},r.a.createElement("div",{className:"card-body"},r.a.createElement("h5",{className:"card-title"},"Total Cases"),r.a.createElement("h6",{className:"card-subtitle mb-2 text-muted",ref:this.state.tabCasesRefs.allCasesRef})))),r.a.createElement("div",{className:"col"},r.a.createElement("div",{className:"card",ref:this.state.tabRefs.activeCasesRef},r.a.createElement("div",{className:"card-body"},r.a.createElement("h5",{className:"card-title"},"Active Cases"),r.a.createElement("h6",{className:"card-subtitle mb-2 text-muted",ref:this.state.tabCasesRefs.activeCasesRef})))),r.a.createElement("div",{className:"col"},r.a.createElement("div",{className:"card",ref:this.state.tabRefs.recoveredCasesRef},r.a.createElement("div",{className:"card-body"},r.a.createElement("h5",{className:"card-title"},"Recovered"),r.a.createElement("h6",{className:"card-subtitle mb-2 text-muted ",ref:this.state.tabCasesRefs.recoveredCasesRef})))),r.a.createElement("div",{className:"col"},r.a.createElement("div",{className:"card",ref:this.state.tabRefs.deathsCasesRef},r.a.createElement("div",{className:"card-body"},r.a.createElement("h5",{className:"card-title"},"Deaths"),r.a.createElement("h6",{className:"card-subtitle mb-2 text-muted ",ref:this.state.tabCasesRefs.deathsCasesRef})))))}}]),a}(s.Component),p=(a(84),a(85),a(126),a(62)),y=a.n(p),v=(a(127),a(65)),b=a.n(v),C=(a(283),[{elementType:"geometry",stylers:[{color:"#f5f5f5"}]},{elementType:"labels.icon",stylers:[{visibility:"off"}]},{elementType:"labels.text.fill",stylers:[{color:"#616161"}]},{elementType:"labels.text.stroke",stylers:[{color:"#f5f5f5"}]},{featureType:"administrative.land_parcel",elementType:"labels.text.fill",stylers:[{color:"#bdbdbd"}]},{featureType:"poi",elementType:"geometry",stylers:[{color:"#eeeeee"}]},{featureType:"poi",elementType:"labels.text.fill",stylers:[{color:"#757575"}]},{featureType:"poi.park",elementType:"geometry",stylers:[{color:"#e5e5e5"}]},{featureType:"poi.park",elementType:"labels.text.fill",stylers:[{color:"#9e9e9e"}]},{featureType:"road",stylers:[{visibility:"off"}]},{featureType:"road",elementType:"geometry",stylers:[{color:"#ffffff"}]},{featureType:"road.arterial",elementType:"labels.text.fill",stylers:[{color:"#757575"}]},{featureType:"road.highway",elementType:"geometry",stylers:[{color:"#dadada"}]},{featureType:"road.highway",elementType:"labels.text.fill",stylers:[{color:"#616161"}]},{featureType:"road.local",elementType:"labels.text.fill",stylers:[{color:"#9e9e9e"}]},{featureType:"transit.line",elementType:"geometry",stylers:[{color:"#e5e5e5"}]},{featureType:"transit.station",elementType:"geometry",stylers:[{color:"#eeeeee"}]},{featureType:"water",elementType:"geometry",stylers:[{color:"#c9c9c9"}]},{featureType:"water",elementType:"labels.text.fill",stylers:[{color:"#9e9e9e"}]}]),g=a(41),E=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(e){var s;return Object(o.a)(this,a),(s=t.call(this,e)).handleToggleOpen=function(){s.setState({isOpen:!0})},s.handleToggleClose=function(){s.setState({isOpen:!1})},s.state={isOpen:!1},s}return Object(l.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(g.a,{options:{fillColor:this.props.values.color,strokeColor:this.props.values.color,fillOpacity:.35,strokeWeight:2,strokeOpacity:.8},center:this.props.countryCenter,radius:this.props.values.cases,label:"blala",onMouseOver:function(){return e.handleToggleOpen()},onMouseOut:function(){return e.handleToggleClose()}}),this.state.isOpen&&r.a.createElement(g.c,{position:this.props.countryCenter,onCloseClick:function(){return e.setState({isOpen:!1})}},r.a.createElement("div",{className:"info-container"},r.a.createElement("div",{className:"info-flag",style:{backgroundImage:"url("+this.props.country.countryInfo.flag+")"}}),r.a.createElement("div",{className:"info-name"},this.props.country.country),r.a.createElement("div",{className:"info-confirmed"},"Total: ",this.props.country.cases),r.a.createElement("div",{className:"info-recovered"},"Recovered: ",this.props.country.recovered),r.a.createElement("div",{className:"info-deaths"},"Deaths: ",this.props.country.deaths))))}}]),a}(s.Component),R=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(e){var s;return Object(o.a)(this,a),(s=t.call(this,e)).state={colors:{cases:"#1d2c4d",active:"#FF0000",recovered:"#25b840",deaths:"#020d1f"},mapstate:{data:s.props.countryData,caseType:"cases",map:null,center:{lat:39.8283,lng:-98.5795}}},s.circles=[],s.googleMap=r.a.createRef(),s}return Object(l.a)(a,[{key:"changeSelectedCaseType",value:function(e){this.setState({mapstate:{data:this.props.countryData,caseType:e}})}},{key:"setMapCenter",value:function(e,t){console.log(e,t),this.setState({mapstate:{center:{lat:e,lng:t},caseType:this.state.mapstate.caseType}})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{class:"row map-container mt-3"},r.a.createElement("div",{class:"col"},r.a.createElement("div",{class:"col"},r.a.createElement(g.d,{googleMapsApiKey:"AIzaSyB83A6z6v1LdZgGVLUk47Kpu8j4DrzgqYU"},r.a.createElement(g.b,{ref:this.googleMap,mapContainerStyle:{width:"100%",height:"70vh",boxShadow:"0 0 15px -4px rgba(0,0,0, 0.5)",borderRadius:"12px"},center:this.state.mapstate.center,zoom:3,onLoad:function(t){t.setOptions({styles:C}),e.props.countryData.map((function(t){var a={lat:t.countryInfo.lat,lng:t.countryInfo.long},s={color:e.state.colors[e.state.mapstate.caseType],cases:t[e.state.mapstate.caseType]};return r.a.createElement(E,{countryCenter:a,values:s,country:t})}))}},this.props.countryData.map((function(t){var a={lat:t.countryInfo.lat,lng:t.countryInfo.long},s={color:e.state.colors[e.state.mapstate.caseType],cases:t[e.state.mapstate.caseType]};return r.a.createElement(E,{key:t.country,countryCenter:a,values:s,country:t})})),r.a.createElement(r.a.Fragment,null))))))}}]),a}(s.Component),T=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(e){var s;return Object(o.a)(this,a),(s=t.call(this,e)).myRef=r.a.createRef(),s.pieChartRef=r.a.createRef(),s}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=N(this.props.historicalData);w(e,this.myRef.current,"cases")}},{key:"changeSelectedCaseType",value:function(e){var t=N(this.props.historicalData);w(t,this.myRef.current,e)}},{key:"render",value:function(){return r.a.createElement("div",{className:"row chart-container mt-3"},r.a.createElement("div",{className:"col  linear-chart mr-3"},r.a.createElement("canvas",{id:"myChart",ref:this.myRef})))}}]),a}(s.Component),k="#1d2c4d",D="#FF0000",O="#25b840",j="#020d1f",N=function(e){var t={allCases:[],deaths:[],recovered:[],active:[]};for(var a in e.cases){var s={x:a,y:e.cases[a]};t.allCases.push(s)}for(var r in e.deaths){var n={x:r,y:e.deaths[r]};t.deaths.push(n)}for(var c in e.recovered){var o={x:c,y:e.recovered[c]};t.recovered.push(o)}for(var l in e.cases){var i={x:l,y:e.cases[l]-e.recovered[l]-e.deaths[l]};t.active.push(i)}return console.log(t),t},w=function(e,t,a){console.log("All if good");console.log(t);var s=t.getContext("2d"),r={cases:{label:"Total Cases",backgroundColor:k,borderColor:k,data:e.allCases},recovered:{label:"Recovered Cases",backgroundColor:O,borderColor:O,data:e.recovered},deaths:{label:"Death Cases",backgroundColor:j,borderColor:j,data:e.deaths},active:{label:"Active Cases",backgroundColor:D,borderColor:D,data:e.active}};new b.a(s,{type:"line",data:{datasets:[r[a]]},options:{maintainAspectRatio:!1,tooltips:{mode:"index",intersect:!1},scales:{xAxes:[{type:"time",time:{format:"MM/DD/YY",tooltipFormat:"ll"}}],yAxes:[{ticks:{callback:function(e,t,a){return y()(e).format("0,0")}}}]}}})},x=T,S=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(e){var s;return Object(o.a)(this,a),(s=t.call(this,e)).showDataInTable=function(e,t){var a="";e.forEach((function(e){a+="\n            <tr>\n                <td>".concat(e.country,"</td>\n                <td>").concat(e.cases,"</td>\n                <td>").concat(e.recovered,"</td>\n                <td>").concat(e.deaths,"</td>\n            </tr>\n            ")})),t.innerHTML=a},s.countryTableRef=r.a.createRef(),s}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.showDataInTable(this.props.countryData,this.countryTableRef.current)}},{key:"render",value:function(){return r.a.createElement("div",{className:" countries-container mt-3 my-custom-scrollbar table-wrapper-scroll-y"},r.a.createElement("table",{className:"table"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{scope:"col"},"Country"),r.a.createElement("th",{scope:"col"},"Cases"),r.a.createElement("th",{scope:"col"},"Recovered"),r.a.createElement("th",{scope:"col"},"Death"))),r.a.createElement("tbody",{id:"countries-table-body",ref:this.countryTableRef},r.a.createElement("tr",null,r.a.createElement("th",null,"Germany"),r.a.createElement("td",null,"19200"),r.a.createElement("td",null,"8000"),r.a.createElement("td",null,"180000"),r.a.createElement("td",null,"8000")))))}}]),a}(s.Component),L=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(e){var s;return Object(o.a)(this,a),(s=t.call(this,e)).state={isLoading:!0,worldData:null,countryData:null,historicalData:null},s.mapComponent=r.a.createRef(),s.statsComponent=r.a.createRef(),s}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.loadWorldData(),this.loadCountryData(),this.loadHistoricalData()}},{key:"loadWorldData",value:function(){var e=this;fetch("https://disease.sh/v3/covid-19/all").then((function(e){return e.json()})).then((function(t){e.setState({worldData:t,isLoading:!0})}))}},{key:"loadCountryData",value:function(){var e=this;fetch("https://disease.sh/v3/covid-19/countries").then((function(e){return e.json()})).then((function(t){e.setState({countryData:t,isLoading:!0})}))}},{key:"loadHistoricalData",value:function(){var e=this;fetch("https://disease.sh/v3/covid-19/historical/all?lastdays=120").then((function(e){return e.json()})).then((function(t){e.setState({historicalData:t,isLoading:!1})}))}},{key:"caseTypeChanged",value:function(e){console.log(e),this.mapComponent.current.changeSelectedCaseType(e),this.statsComponent.current.changeSelectedCaseType(e)}},{key:"selectedCountryChanged",value:function(e){this.mapComponent.current.setMapCenter(e.lat,e.long)}},{key:"render",value:function(){var e=this;return this.state.isLoading?r.a.createElement("p",null,"Loading ..."):r.a.createElement("div",{className:"container-fluid main"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-8"},r.a.createElement(m,{countryData:this.state.countryData,selectedCountryChanged:function(t){return e.selectedCountryChanged(t)}}),r.a.createElement(h,{worldData:this.state.worldData,caseTypeChanged:function(t){return e.caseTypeChanged(t)}}),r.a.createElement(R,{countryData:this.state.countryData,ref:this.mapComponent})),r.a.createElement("div",{className:"col-4"},r.a.createElement(S,{countryData:this.state.countryData}),r.a.createElement(x,{historicalData:this.state.historicalData,worldData:this.state.worldData,ref:this.statsComponent}))))}}]),a}(s.Component);var M=function(){return r.a.createElement(L,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(M,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},84:function(e,t,a){},85:function(e,t,a){}},[[153,1,2]]]);
//# sourceMappingURL=main.2bc00de9.chunk.js.map