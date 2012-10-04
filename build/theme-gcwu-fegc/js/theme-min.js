/*!
 * Web Experience Toolkit (WET) / Boîte à outils de l'expérience Web (BOEW)
 * wet-boew.github.com/wet-boew/License-eng.txt / wet-boew.github.com/wet-boew/Licence-fra.txt
 *
 * Version: v3.0.1a1
 */
(function(c){var b,a;b=(typeof window.wet_boew_theme!=="undefined"&&window.wet_boew_theme!==null)?window.wet_boew_theme:{fn:{}};a={theme:"theme-gcwu-fegc",psnb:null,search:null,bcrumb:null,title:null,sft:null,gcft:null,wmms:c("#gcwu-wmms"),init:function(){b.psnb=pe.header.find("#gcwu-psnb");b.menubar=b.psnb.find(".wet-boew-menubar");b.search=pe.header.find("#gcwu-srchbx");b.bcrumb=pe.header.find("#gcwu-bc");b.title=pe.header.find("#gcwu-title");b.sft=pe.footer.find("#gcwu-sft");b.gcft=pe.footer.find("#gcwu-gcft");var e=pe.menu.navcurrent(b.menubar,b.bcrumb),d=e.parents("div.mb-sm");if(d.length>0){d.prev().children("a").addClass("nav-current")}if(pe.secnav.length>0){pe.menu.navcurrent(pe.secnav,b.bcrumb)}if(b.psnb.length>0&&b.search.length===0){b.psnb.css("width","100%")}else{if(b.psnb.length===0&&b.search.length>0){b.search.css("width","100%")}}},mobileview:function(){var p,w,u,q=pe.dic.get("%menu"),o=pe.dic.get("%search"),k,g,j,d,r=c("html").hasClass("bb-pre7"),l='data-role="popup" data-overlay-theme="a"',f='<a href="#" data-rel="back" data-role="button" data-theme="a" data-icon="delete" data-iconpos="notext" class="ui-btn-left">'+pe.dic.get("%close")+"</a>",n="",s,e,m,i,h,t,v;if(b.menubar.length>0||pe.secnav.length>0||b.search.length>0){t=b.menubar.find("ul.mb-menu li");p="<div "+(r?'data-role="page"':l)+' id="jqm-wb-mb"><div data-role="header">';g=(pe.secnav.length>0?pe.secnav.find("h2").eq(0):"");w=(b.menubar.length>0?b.psnb.children(":header"):(pe.secnav.length>0?g:b.bcrumb.children(":header")));u=w[0].innerHTML;p+="<h1>"+q+"</h1>"+(r?"":f)+'</div><div data-role="content" data-inset="true"><nav role="navigation">';if(b.bcrumb.length>0){p+='<section><div id="jqm-mb-location-text">'+b.bcrumb[0].innerHTML+"</div></section>";b.bcrumb.remove()}else{p+='<div id="jqm-mb-location-text"></div>'}if(pe.secnav.length>0){j=pe.menu.buildmobile(pe.secnav.find(".wb-sec-def"),3,"c",false,true);pe.menu.expandcollapsemobile(j,(pe.secnav.find("h3.top-section").length>0?"h4":"h3"),true,false);pe.menu.expandcollapsemobile(j,".nav-current",false,true);p+="<section><div><h2>"+g[0].innerHTML+'</h2><div data-role="controlgroup">'+j[0].innerHTML+"</div></div></section>";pe.secnav.remove()}if(b.menubar.length>0){j=pe.menu.buildmobile(t,3,"a",true,true);p+="<section><div><h2>"+u+'</h2><div data-role="controlgroup">'+j[0].innerHTML+"</div></div></section>"}p+="</nav></div></div></div>";if(r){pe.container().append(p)}else{pe.bodydiv.append(p)}w.wrapInner('<a href="#jqm-wb-mb" data-rel="'+(r?"dialog":"popup")+'"></a>');n+='<li><a data-rel="'+(r?"dialog":"popup")+'" data-theme="a" data-icon="site-menu" href="#jqm-wb-mb">'+q+"</a></li>"}if(b.search.length>0){k=b.search.find(":header");d="<div "+l+' id="jqm-wb-search"><div data-role="header"><h1>'+o+"</h1>"+f+'</div><div data-role="content">'+(c("<div/>").append(b.search.find("form")))[0].innerHTML+"</div></div>";pe.bodydiv.append(d);k.wrapInner('<a href="#jqm-wb-search" data-rel="popup"></a>');n+='<li><a data-rel="popup" data-theme="a" data-icon="search" href="#jqm-wb-search">'+o+"</a></li>"}if(n.length>0){s=c('<div data-role="navbar" data-iconpos="right"><ul class="wb-hide">'+n+"</ul></div>");b.title.after(s)}i=c("#gcwu-lang");if(i.length>0){e=i.find("a");h='<div data-role="navbar"><ul>';e.each(function(){h+='<li><a href="'+this.href+'" data-theme="a">'+this.innerHTML+"</a></li>"});h+="</ul></div>";i.find("#gcwu-ef-lang").replaceWith(h);i.find("#gcwu-other-lang").remove()}if(b.sft.length>0){e=b.sft.find("#gcwu-tctr a, .gcwu-col-head a");v=b.sft.children("#gcwu-sft-in");b.gcft.parent().remove()}else{v=pe.footer.find("#gcwu-tc");if(v.length>0){e=v.find("a")}}if(v.length>0){m='<div data-role="navbar"><ul>';e.each(function(){m+='<li><a href="'+this.href+'" data-theme="b">'+this.innerHTML+"</a></li>"});m+="</ul></div>";v.replaceWith(m)}pe.footer.find("footer").append(b.wmms.detach());c(document).on("pagecreate",function(){if(b.menubar.length>0){b.psnb.parent().remove()}if(b.search.length>0){b.search.parent().remove()}if(n.length>0){s.children().removeClass("wb-hide")}function x(z,y,C,B){var A;c.mobile.showPageLoadingMsg();A=c.mobile.transitionHandlers.simultaneous("pop",y,C,B);A.done(function(){c.mobile.hidePageLoadingMsg()});return A}c.mobile.transitionHandlers.loadingTransition=x;c.mobile.defaultDialogTransition="loadingTransition"});c(document).on("pageinit",function(){pe.menu.correctmobile(c("#jqm-wb-mb"))});c(document).trigger("mobileviewloaded");return}};window.wet_boew_theme=c.extend(true,b,a);return window.wet_boew_theme}(jQuery));